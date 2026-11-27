import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('motion is a small shared stylesheet, not a runtime dependency', () => {
  const css = fs.readFileSync('dist/assets/motion.css','utf8');
  assert.ok(Buffer.byteLength(css) < 5000);
  assert.match(css, /--evd-ease-land:/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  for (const file of ['index.html','busca.html','artigos.html','saude.html']) {
    const html = fs.readFileSync(path.join('dist',file),'utf8');
    assert.ok(html.includes('href="/assets/motion.css"'), file);
    assert.doesNotMatch(html, /<script[^>]+src="[^"]*(?:gsap|three\.module|motion\.js)/i);
  }
});

test('every restored route loads the same motion tokens', {skip:process.env.SKIP_LEGACY==='true'}, () => {
  const {imported} = JSON.parse(fs.readFileSync('dist/legacy-parity.json','utf8'));
  assert.ok(imported.length >= 55);
  for (const route of imported) {
    const html = fs.readFileSync(path.join('dist',route.slice(1),'index.html'),'utf8');
    assert.equal(html.split('href="/assets/motion.css"').length,2,route);
  }
});
