(() => {
  const button = document.querySelector('[data-menu-button]');
  const nav = document.getElementById('primary-navigation');
  if (button && nav) {
    const close = () => {
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir menu de navegação');
    };
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', () => { if(window.innerWidth > 760) close(); });
  }
  const input = document.querySelector('[data-search]');
  if (input) {
    const cards = [...document.querySelectorAll('[data-search-item]')];
    const status = document.querySelector('[data-search-status]');
    const empty = document.querySelector('[data-no-results]');
    const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    const query = () => {
      const needle = normalize(input.value);
      let visible = 0;
      for (const el of cards) {
        const found = normalize(el.dataset.searchText || '').includes(needle);
        el.hidden = !found;
        if (found) visible++;
      }
      if(status) status.textContent = `${visible} ${visible === 1 ? 'conteúdo encontrado' : 'conteúdos encontrados'}`;
      if(empty) empty.hidden = visible !== 0;
    };
    input.addEventListener('input', query);
  }
})();
