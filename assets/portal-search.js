(() => {
  const form=document.querySelector('[data-portal-search-form]'); if(!form)return;
  const input=form.querySelector('[data-portal-query]');
  const results=document.querySelector('[data-portal-results]');
  const status=document.querySelector('[data-portal-search-status]');
  const empty=document.querySelector('[data-portal-empty]');
  const more=document.querySelector('[data-portal-more]');
  const chips=[...form.querySelectorAll('[data-search-category]')];
  const norm=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  const limit=20; let catalog=[],shown=limit,kind='todos',matches=[];
  input.value=new URL(location.href).searchParams.get('q')||'';
  const make=item=>{
    const link=document.createElement('a');link.className='portal-result-card';link.href=item.href;
    const tag=document.createElement('span');tag.className='result-tag';tag.textContent=item.kind==='noticias'?'NOTÍCIA':item.kind==='recursos'?'RECURSO':'ARTIGO';
    const title=document.createElement('strong');title.textContent=item.title;
    const desc=document.createElement('span');desc.className='result-description';desc.textContent=item.description||'';
    const go=document.createElement('span');go.className='result-go';go.textContent='Abrir conteúdo ↗';
    link.append(tag,title,desc,go);return link;
  };
  const render=()=>{
    const term=norm(input.value);
    matches=catalog.filter(item=>(kind==='todos'||item.kind===kind)&&(!term||norm([item.title,item.description,item.tag].join(' ')).includes(term)));
    results.replaceChildren(...matches.slice(0,shown).map(make));
    status.textContent=matches.length===1?'1 resultado encontrado':String(matches.length)+' resultados encontrados';
    empty.hidden=matches.length!==0;more.hidden=matches.length<=shown;
  };
  const update=()=>{shown=limit;render();};
  chips.forEach(button=>button.addEventListener('click',()=>{
    kind=button.dataset.searchCategory;
    chips.forEach(chip=>{const on=chip===button;chip.classList.toggle('is-selected',on);chip.setAttribute('aria-pressed',String(on));});
    update();
  }));
  form.addEventListener('submit',event=>{
    event.preventDefault();const next=new URL(location.href),term=input.value.trim();
    if(term)next.searchParams.set('q',term);else next.searchParams.delete('q');
    history.replaceState(null,'',next);update();
  });
  input.addEventListener('input',update);more.addEventListener('click',()=>{shown+=limit;render();});
  status.textContent='Carregando acervo...';
  fetch('/search-index.json').then(response=>{if(!response.ok)throw Error('Índice indisponível');return response.json();}).then(items=>{
    if(!Array.isArray(items))throw Error('Formato inesperado');
    catalog=items.filter(item=>item&&/^\/[a-z0-9çãõáéíóú\-\/]+$/i.test(item.href));
    render();
  }).catch(()=>{status.textContent='Não foi possível carregar o acervo. Use a navegação acima e tente novamente.';empty.hidden=true;});
})();
