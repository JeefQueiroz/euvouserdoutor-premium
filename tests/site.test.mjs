import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { articles, categories } from '../src/content.mjs';
const out = path.resolve('dist');
const read = p => fs.readFileSync(path.join(out,p),'utf8');
const allPages = ['index.html','artigos.html',...categories.map(x=>x.slug+'.html'),...articles.map(x=>'artigos/'+x.slug+'.html'),'sobre.html','politica-editorial.html','aviso-medico.html','privacidade.html','contato.html'];
test('every route produces an independent HTML document',()=>{
  for(const name of allPages){assert.ok(fs.existsSync(path.join(out,name)),`${name} missing`);const s=read(name);assert.match(s,/<html lang="pt-BR">/);assert.match(s,/<main id="conteudo">/);assert.match(s,/<h1[\s>]/);assert.match(s,/<meta name="description"/);assert.match(s,/<link rel="canonical"/);assert.match(s,/<meta property="og:image"/);assert.match(s,/<meta name="robots"/);assert.match(s,/<script type="application\/ld\+json">/);assert.match(s,/<footer/);assert.ok(s.includes('aria-label="Navegação principal"'));
  }
});
test('unique title, description and canonical for all 15 pages',()=>{
  for (const name of ['title','description','canonical']){
    const values=allPages.map(p=> { const s=read(p); if(name==='title')return s.match(/<title>(.*?)<\/title>/)?.[1];if(name==='description')return s.match(/<meta name="description" content="([^"]+)"/)?.[1];return s.match(/<link rel="canonical" href="([^"]+)"/)?.[1];});
    assert.equal(new Set(values).size,allPages.length,`duplicate ${name}`);
  }
});
test('JSON-LD is valid and consistent with canonical',()=>{
 for(const name of allPages){const s=read(name);const meta=s.match(/<link rel="canonical" href="([^"]+)"/)[1];const schema=JSON.parse(s.match(/<script type="application\/ld\+json">(.*?)<\/script>/)[1]);assert.equal(schema['@context'],'https://schema.org');assert.ok(schema['@graph'].some(o=>JSON.stringify(o).includes(meta)||name==='index.html'));}
});
test('all internal navigation targets resolve to generated pages or assets',()=>{
 const targets=new Set(['/noticias','/materiais','/mentoria','/flashcards','/','/feed.xml','/sitemap.xml','/robots.txt',...allPages.map(x=>x==='index.html'?'/':'/'+x.replace(/\.html$/,''))]);
 for(const page of allPages){for(const match of read(page).matchAll(/href="(\/[^"]*)"/g)){const raw=match[1];const href=raw.split('#')[0].split('?')[0];assert.ok(targets.has(href)||fs.existsSync(path.join(out,href.slice(1))),`broken link ${raw} in ${page}`)}}
});
test('public indexing is off by default, preview cannot compete with the main site',()=>{
 assert.match(read('index.html'),/content="noindex,nofollow"/);assert.match(read('robots.txt'),/Disallow: \//);
});
test('sitemap and rss list real URLs and known articles',()=>{
 const map=read('sitemap.xml'),rss=read('feed.xml');assert.equal((map.match(/<url>/g)||[]).length,allPages.length);assert.equal((rss.match(/<item>/g)||[]).length,articles.length);for(const item of articles)assert.ok(map.includes(item.slug));
});
test('no external runtime dependencies, bundles remain lightweight',()=>{
 const css=fs.statSync(path.join(out,'assets/site.css')).size;const js=fs.statSync(path.join(out,'assets/site.js')).size;assert.ok(css<35000,`css ${css}`);assert.ok(js<5000,`js ${js}`);for(const file of allPages)assert.ok(!read(file).includes('https://fonts.googleapis.com'));
});
