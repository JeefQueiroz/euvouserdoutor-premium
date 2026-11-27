import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
test('legacy pages declare UTF-8 once, inside the first 1024 bytes',{skip:process.env.SKIP_LEGACY==='true'},()=>{
 const routes=JSON.parse(fs.readFileSync('dist/legacy-parity.json','utf8')).imported;
 for(const route of routes){
  const html=fs.readFileSync('dist'+route+'/index.html','utf8');
  const found=[...html.matchAll(/<meta\s+charset="utf-8"\s*\/?\s*>/gi)];
  assert.equal(found.length,1,route);
  assert.ok(Buffer.byteLength(html.slice(0,found[0].index+found[0][0].length))<=1024,route);
 }
});
test('flashcards heading sequence is valid',{skip:process.env.SKIP_LEGACY==='true'},()=>{
 const html=fs.readFileSync('dist/flashcards/index.html','utf8');
 let last=0;
 for(const match of html.matchAll(/<h([1-6])\b/g)){
  const level=Number(match[1]);
  assert.ok(level<=last+1,'Heading skips level: '+last+' → '+level);
  last=level;
 }
});
test('shared logo accessible name includes visible caption',{skip:process.env.SKIP_LEGACY==='true'},()=>{
 for(const route of ['dist/index.html','dist/noticias/index.html']){
  const html=fs.readFileSync(route,'utf8');
  assert.match(html,/aria-label="EuvouserDoutor — SAÚDE · CIÊNCIA · EDUCAÇÃO — Página inicial"/);
 }
});
