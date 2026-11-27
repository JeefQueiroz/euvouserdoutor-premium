import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { normalizeRoutePath, pathToView } from './institutional.js';
import './styles.css';

const rootElement = document.getElementById('root');
const view = pathToView[normalizeRoutePath(window.location.pathname)];
function mount(BlogPostComponent) {
  const app = <App BlogPostComponent={BlogPostComponent} />;
  // Keep the server-rendered first paint on the two measured learning/news routes.
  if ((view === 'news' || view === 'flashcards') && rootElement.hasChildNodes()) {
    ReactDOM.hydrateRoot(rootElement, app, {
      onRecoverableError: error => console.error('EVD hydration:', error.message)
    });
  } else {
    ReactDOM.createRoot(rootElement).render(app);
  }
}
// Keep the prerendered article readable while its interactive code downloads.
// Study and newsroom routes never request the large article body module.
if (view?.startsWith('post_')) {
  import('./pages/BlogPost.jsx').then(({BlogPost})=>mount(BlogPost)).catch(()=>{
    const notice=document.createElement('p');
    notice.setAttribute('role','alert');
    notice.className='evd-article-load-notice';
    notice.textContent='O conteúdo está disponível, mas os controles interativos não carregaram. ';
    const reload=document.createElement('a');
    reload.href=window.location.href;
    reload.textContent='Recarregar a página';
    notice.append(reload);
    rootElement.prepend(notice);
  });
} else {
  mount(undefined);
}
