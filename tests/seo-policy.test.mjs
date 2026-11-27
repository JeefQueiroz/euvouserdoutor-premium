import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSitePolicy,canonicalUrl,PREVIEW_ORIGIN,PUBLIC_ORIGIN} from '../src/site-policy.mjs';
test('only production with explicitly approved canonical domain can enable indexing',()=>{
 const release={VERCEL_ENV:'production',PUBLIC_INDEXING:'true',SITE_URL:PUBLIC_ORIGIN};
 assert.deepEqual(resolveSitePolicy(release),{indexed:true,siteUrl:PUBLIC_ORIGIN});
 for(const env of [{},{...release,VERCEL_ENV:'preview'},{...release,VERCEL_ENV:'development'},{...release,VERCEL_ENV:undefined},{...release,PUBLIC_INDEXING:'false'},{...release,SITE_URL:PREVIEW_ORIGIN},{...release,SITE_URL:'https://example.com'}]){
  assert.deepEqual(resolveSitePolicy(env),{indexed:false,siteUrl:PREVIEW_ORIGIN});
 }
 assert.equal(canonicalUrl(PREVIEW_ORIGIN,'/noticias/pescoço'),PREVIEW_ORIGIN+'/noticias/pesco%C3%A7o');
 assert.throws(()=>canonicalUrl(PREVIEW_ORIGIN,'//example.com'));
});
test('generated pages agree on canonical origin, OG URL, robots and structured data',{skip:process.env.SKIP_LEGACY==='true'},()=>{
 const {siteUrl,indexed}=resolveSitePolicy();
 const routes=JSON.parse(fs.readFileSync('dist/legacy-parity.json','utf8')).imported;
 const canonicals=new Set();
 for(const route of ['/','/busca','/videos',...routes]){
  const file=route==='/'?'dist/index.html':routes.includes(route)?'dist'+route+'/index.html':'dist'+route+'.html';
  const html=fs.readFileSync(file,'utf8');
  const expected=canonicalUrl(siteUrl,route);
  assert.ok(!canonicals.has(expected));canonicals.add(expected);
  assert.equal(html.match(/<link rel="canonical" href="([^"]+)"/)?.[1],expected,route);
  assert.equal(html.match(/<meta property="og:url" content="([^"]+)"/)?.[1],expected,route);
  const robots=html.match(/<meta name="robots" content="([^"]+)"/)?.[1];
  if(!indexed||route==='/busca'||route==='/videos'&&!JSON.parse(fs.readFileSync('src/videos.json','utf8')).length)assert.equal(robots,'noindex,nofollow',route);
  const json=html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)?.[1];
  if(route!=='/busca'||json){const graph=JSON.parse(json);assert.equal(graph['@context'],'https://schema.org');assert.ok(JSON.stringify(graph).includes(siteUrl),route);}
 }
 const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');
 const urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]);
 assert.equal(urls.length,new Set(urls).size);
 assert.ok(urls.every(x=>new URL(x).origin===siteUrl));
 if(indexed)for(const route of routes)assert.ok(urls.includes(canonicalUrl(siteUrl,route)),route);
});
