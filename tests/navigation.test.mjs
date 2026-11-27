import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { navLinks, currentSection } from '../src/navigation.mjs';

test('canonical navigation and search match on Premium and restored routes', {skip:process.env.SKIP_LEGACY==='true'}, ()=>{
  assert.equal(currentSection('/noticias/exemplo','/noticias'),true);
  assert.equal(currentSection('/noticias-falsas','/noticias'),false);
  const home=fs.readFileSync('dist/index.html','utf8');
  const legacy=fs.readFileSync('dist/noticias/index.html','utf8');
  const header=html=>html.match(/<header\b[\s\S]*?<\/header>/)?.[0]||'';
  for(const [href] of [...navLinks,['/busca']]){
    for(const page of [home,legacy]) assert.ok(header(page).includes('href="'+href+'"'),href);
  }
  assert.match(legacy,/evd-shared-footer/);
  assert.match(legacy,/href="\/assets\/legacy-shell.css"/);
  assert.ok(fs.statSync('dist/assets/legacy-shell.css').size<7000);
  assert.doesNotMatch(header(legacy),/Mega Premium Search Modal|Pesquisar no portal\.\.\./);
});
