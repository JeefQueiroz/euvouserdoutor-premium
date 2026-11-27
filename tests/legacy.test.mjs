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

test('protege todas as rotas restauradas contra indexacao prematura e exclui area administrativa', {skip:skipped}, () => {
  const { imported } = JSON.parse(fs.readFileSync(restored, 'utf8'));
  const indexed = process.env.PUBLIC_INDEXING === 'true' && process.env.SITE_URL?.startsWith('https://');
  assert.ok(!imported.some(route => route === '/admin' || route.startsWith('/admin/')), 'Rota administrativa nao pode integrar o portal publico');
  for (const route of imported) {
    const html = fs.readFileSync(path.join(out, route.slice(1), 'index.html'), 'utf8');
    if (!indexed) {
      const robots = [...html.matchAll(/<meta\b[^>]*\bname="robots"[^>]*\bcontent="([^"]+)"[^>]*>/gi)];
      assert.equal(robots.length, 1, 'Meta robots ausente ou duplicada: ' + route);
      const directives = robots[0][1].toLowerCase().split(',').map(value => value.trim());
      assert.ok(directives.includes('noindex') && directives.includes('nofollow'), 'Indexacao prematura: ' + route);
      assert.ok(!directives.includes('index') && !directives.includes('follow'), 'Diretivas conflitantes: ' + route);
    }
  }
});
