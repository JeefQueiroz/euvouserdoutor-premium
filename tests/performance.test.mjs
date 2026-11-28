import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const skipped=process.env.SKIP_LEGACY==='true';
test('legacy article body is a dynamic-only chunk and other routes respect the entry budget',{skip:skipped},()=>{
 const manifest=JSON.parse(fs.readFileSync('legacy/dist/.vite/manifest.json','utf8'));
 const entryKey=Object.keys(manifest).find(k=>manifest[k].isEntry);
 const articleKey=Object.keys(manifest).find(k=>k.endsWith('/BlogPost.jsx'));
 assert.ok(entryKey&&articleKey,'Manifesto deve identificar entrada e módulo editorial');
 const staticKeys=new Set();
 function visit(key){if(staticKeys.has(key))return;staticKeys.add(key);for(const dep of manifest[key].imports||[])visit(dep);}
 visit(entryKey);
 assert.ok(!staticKeys.has(articleKey),'Conteúdo editorial não deve ser uma dependência inicial');
 assert.ok(manifest[entryKey].dynamicImports.includes(articleKey),'Artigo deve ser carregado sob demanda');
 const bytes=fs.statSync(path.join('legacy/dist',manifest[entryKey].file)).size;
 console.log('Bundle inicial legado (sem dependências compartilhadas): '+bytes+' bytes');
 assert.ok(bytes<350000,'Orçamento do bundle inicial excedido: '+bytes);
 assert.ok(!fs.readFileSync('dist/noticias/index.html','utf8').includes('href="/'+manifest[articleKey].file+'"'),'Preload indevido do módulo editorial');
});
test('legacy documents have keyboard skip navigation',{skip:skipped},()=>{
 for(const route of ['noticias','materiais','flashcards','questoes','laboratorio']){
  const html=fs.readFileSync('dist/'+route+'/index.html','utf8');
  assert.match(html,/href="#conteudo">Pular para o conteúdo/);
  assert.match(html,/<main id="conteudo" tabindex="-1">/i);
 }
});
