import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {articles} from '../src/content.mjs';

test('each Premium article has a unique lightweight editorial SVG',()=>{
  const home=fs.readFileSync('dist/index.html','utf8');
  const library=fs.readFileSync('dist/artigos.html','utf8');
  const seen=new Set();
  for(const a of articles){
    const href='/assets/editorial/'+a.slug+'.svg';
    const svg=fs.readFileSync('dist'+href,'utf8');
    assert.ok(Buffer.byteLength(svg)<12000);
    assert.doesNotMatch(svg,/<script|<foreignObject|\b(?:href|src)="https?:/i);
    assert.ok(!seen.has(svg));seen.add(svg);
    assert.ok(library.includes(href));
    assert.ok(fs.readFileSync('dist/artigos/'+a.slug+'.html','utf8').includes(href));
  }
  assert.match(home,/class="article-art editorial-art"/);
});

test('newsroom links each historical news route once', {skip:process.env.SKIP_LEGACY==='true'},()=>{
  const {imported}=JSON.parse(fs.readFileSync('dist/legacy-parity.json','utf8'));
  const expected=imported.filter(r=>r.startsWith('/noticias/'));
  const html=fs.readFileSync('dist/noticias/index.html','utf8');
  const urls=[...html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*data-news-entry="[^"]+"[^>]*>/g)].map(m=>m[1]);
  assert.equal(urls.length,new Set(urls).size);
  assert.deepEqual([...urls].sort(),[...expected].sort());
});
