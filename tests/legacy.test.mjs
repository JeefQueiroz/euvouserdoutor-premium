import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const out = path.resolve('dist');
const restored = path.join(out, 'legacy-parity.json');
const skipped = process.env.SKIP_LEGACY === 'true';
test('preserva o arquivo original de codigo editorial e o acervo de noticias', () => {
  assert.ok(fs.existsSync('legacy/src/pages/BlogPost.jsx'));
  assert.ok(fs.existsSync('legacy/src/pages/News.jsx'));
  assert.ok(fs.existsSync('legacy/src/pages/Materials.jsx'));
  assert.ok(fs.existsSync('legacy/src/pages/FlashcardsPage.jsx'));
  assert.ok(fs.existsSync('legacy/src/pages/Mentorship.jsx'));
});
test('restaura as rotas e protege a indexacao de homologacao', {skip:skipped}, () => {
  assert.ok(fs.existsSync(restored), 'Arquivo de paridade nao foi gerado.');
  const m = JSON.parse(fs.readFileSync(restored, 'utf8'));
  assert.ok(m.imported.length >= 55, 'Acervo antigo incompleto.');
  for (const route of ['/noticias','/materiais','/flashcards','/mentoria']) {
    assert.ok(m.imported.includes(route), 'Ausente: ' + route);
    const html = fs.readFileSync(path.join(out,route.slice(1),'index.html'),'utf8');
    assert.match(html, /<h1|<h2/);
    assert.match(html, /<script[^>]*src=/);
    if(process.env.PUBLIC_INDEXING !== 'true') assert.match(html, /content="noindex,nofollow"/);
  }
  assert.ok(m.imported.filter(x=>x.startsWith('/noticias/')).length >= 50, 'Noticias antigas nao foram restauradas.');
  assert.ok(fs.existsSync(path.join(out, 'assets','site.css')), 'Premium principal foi perdido.');
  assert.ok(fs.readFileSync(path.join(out,'index.html'),'utf8').includes('Conhecimento que'), 'Home Premium alterada.');
});
