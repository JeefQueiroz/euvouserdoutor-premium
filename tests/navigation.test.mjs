import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { navLinks, currentSection } from '../src/navigation.mjs';

test('canonical navigation and search match on Premium and restored routes', {skip:process.env.SKIP_LEGACY==='true'}, ()=>{
  assert.deepEqual(navLinks.slice(0,2),[['/','Home'],['/noticias','Notícias']]);
  assert.equal(currentSection('/noticias','/'),false);
  assert.equal(currentSection('/','/'),true);
  assert.equal(currentSection('/noticias/exemplo','/noticias'),true);
  assert.equal(currentSection('/noticias-falsas','/noticias'),false);
  const home=fs.readFileSync('dist/index.html','utf8');
  const legacy=fs.readFileSync('dist/noticias/index.html','utf8');
  const header=html=>html.match(/<header\b[\s\S]*?<\/header>/)?.[0]||'';
  for(const [href] of [...navLinks,['/busca']]){
    for(const page of [home,legacy]) assert.ok(header(page).includes('href="'+href+'"'),href);
  }
  for(const page of [home,legacy]){
    const menu=header(page).match(/<nav\b[\s\S]*?<\/nav>/)?.[0]||'';
    const hrefs=[...menu.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m=>m[1]);
    assert.deepEqual(hrefs.slice(0,2),['/','/noticias']);
    assert.doesNotMatch(page,/class="evd-premium-bridge"|Voltar ao Premium/);
  }
  assert.match(header(home),/<a href="\/"[^>]*aria-current="page"[^>]*>Home<\/a>/);
  assert.match(legacy,/evd-shared-footer/);
  assert.match(legacy,/href="\/assets\/legacy-shell.css"/);
  assert.ok(fs.statSync('dist/assets/legacy-shell.css').size<7000);
  assert.doesNotMatch(header(legacy),/Mega Premium Search Modal|Pesquisar no portal\.\.\./);
});
