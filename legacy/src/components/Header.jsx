import React, { useEffect, useRef, useState } from 'react';
import { navLinks, currentSection } from '../../../src/navigation.mjs';
import { routeMeta } from '../institutional';

export const Header = ({ currentView }) => {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const route = routeMeta[currentView]?.path || '/';
  useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    };
    const onResize = () => { if (window.innerWidth > 760) setOpen(false); };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);
  useEffect(() => { setOpen(false); }, [route]);
  return (
    <header className="site-header evd-shared-header">
      <div className="evd-header-inner">
        <a href="/" className="evd-brand" aria-label="Página inicial do EuvouserDoutor">
          <span className="evd-brand-frame"><img src="/logo-euvouserdoutor.webp" alt="EuvouserDoutor" width="160" height="48" decoding="async" fetchPriority="high" /></span>
          <span className="evd-brand-caption">SAÚDE · CIÊNCIA · EDUCAÇÃO</span>
        </a>
        <button ref={toggle} className="menu-toggle evd-menu-toggle" type="button" aria-label={open?'Fechar menu de navegação':'Abrir menu de navegação'} aria-controls="primary-navigation" aria-expanded={open} onClick={()=>setOpen(value=>!value)}><span/><span/><span/></button>
        <nav className={'primary-nav evd-primary-nav'+(open?' is-open':'')} id="primary-navigation" aria-label="Navegação principal">
          {navLinks.map(([href,label])=><a key={href} href={href} aria-current={currentSection(route,href)?(route===href?'page':'location'):undefined}>{label}</a>)}
          <a href="/busca" className="evd-nav-search"><span aria-hidden="true">⌕</span> Buscar</a>
        </nav>
      </div>
    </header>
  );
};
