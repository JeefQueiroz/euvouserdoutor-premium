import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const out=path.resolve('dist');
const html=route=>fs.readFileSync(path.join(out,route),'utf8');
test('Premium has accessible global search, brand and resource navigation',()=>{
  const home=html('index.html'),search=html('busca.html');
  assert.match(home,/src="\/logo-euvouserdoutor\.webp"/);
  for(const url of ['/noticias','/materiais','/flashcards','/mentoria','/busca'])assert.ok(home.includes('href="'+url+'"'),url);
  assert.match(search,/role="search"/);
  assert.match(search,/data-portal-query/);
  assert.match(search,/data-portal-results/);
  assert.match(search,/data-search-category="noticias"/);
  assert.match(search,/content="noindex,nofollow"/);
  assert.ok(!html('sitemap.xml').includes('/busca</loc>'),'A busca não deve aparecer no sitemap');
  assert.ok(fs.statSync(path.join(out,'assets/portal-search.js')).size<8000,'Busca muito pesada');
  assert.ok(!home.includes('portal-search.js'),'JS da busca não pode afetar a home');
});
test('Search index covers restored news and resources',()=>{
  const list=JSON.parse(fs.readFileSync(path.join(out,'search-index.json'),'utf8'));
  assert.ok(list.length>=55,'Índice incompleto');
  const hrefs=list.map(item=>item.href);
  assert.equal(new Set(hrefs).size,hrefs.length,'URLs duplicadas');
  assert.ok(list.filter(item=>item.kind==='noticias').length>=50,'Faltam notícias');
  assert.ok(list.filter(item=>item.kind==='artigos').length>=4,'Faltam artigos');
  assert.ok(list.filter(item=>item.kind==='recursos').length>=3,'Faltam recursos');
  for(const item of list){
    assert.ok(item.title&&item.description&&item.href.startsWith('/'),'Registro inválido');
    const route=item.href.slice(1);
    assert.ok(fs.existsSync(path.join(out,route+'.html'))||fs.existsSync(path.join(out,route,'index.html')),'URL sem HTML: '+item.href);
  }
});
test('Restored pages provide return navigation to Premium',()=>{
  for(const route of ['noticias','materiais','mentoria','flashcards']){
    const page=html(route+'/index.html');
    assert.match(page,/evd-premium-bridge/);
    assert.match(page,/href="\/busca"/);
    assert.match(page,/portal-bridge\.css/);
  }
});
