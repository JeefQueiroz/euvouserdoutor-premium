import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const out = path.resolve('dist');
const parityFile = path.join(out,'legacy-parity.json');
const ignored = process.env.SKIP_LEGACY === 'true';

test('HTML legado referencia apenas arquivos locais existentes', {skip:ignored}, () => {
  const {imported} = JSON.parse(fs.readFileSync(parityFile,'utf8'));
  const missing = new Set();
  let checked = 0;
  for(const route of imported) {
    const file=path.join(out,route.slice(1),'index.html');
    const html=fs.readFileSync(file,'utf8');
    for(const m of html.matchAll(/<(?:img|source|script|link)\b[^>]*?\b(?:src|href)="([^"]+)"/g)) {
      const raw=m[1].split('?')[0].split('#')[0];
      if(!raw.startsWith('/')) continue;
      if(!fs.existsSync(path.join(out,raw.slice(1)))) missing.add(route+' -> '+raw);
      checked++;
    }
  }
  assert.ok(checked>25,'Nenhum recurso de página legado foi verificado');
  assert.deepEqual([...missing].sort(),[], 'Imagens, ícones, CSS ou scripts quebrados');
});
test('navegacao das páginas legadas encontra rotas publicadas', {skip:ignored}, () => {
  const {imported} = JSON.parse(fs.readFileSync(parityFile,'utf8'));
  const misses = new Set();
  for(const route of ['/noticias','/materiais','/flashcards','/mentoria']) {
    const html=fs.readFileSync(path.join(out,route.slice(1),'index.html'),'utf8');
    for (const m of html.matchAll(/<a\b[^>]*?href="(\/[^"]+)"/g)) {
      const target=m[1].split('#')[0].split('?')[0];
      if(!target || target==='/') continue;
      const file=path.join(out,target.slice(1));
      if(!fs.existsSync(file+'.html')&&!fs.existsSync(path.join(file,'index.html'))&&!fs.existsSync(file)) misses.add(route+' -> '+target);
    }
  }
  assert.deepEqual([...misses].sort(),[],'Navegação com links inexistentes');
});
