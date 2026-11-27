import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GoogleAnalytics } from './components/analytics/GoogleAnalytics';
import { CookieConsent } from './components/CookieConsent';
import { institutional, normalizeRoutePath, pathToView, routeMeta } from './institutional';
import { BlogPost } from './pages/BlogPost';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { Materials } from './pages/Materials';
import { Mentorship } from './pages/Mentorship';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { Article } from './pages/Article';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { MedicalDisclaimer } from './pages/MedicalDisclaimer';
import { IntellectualProperty } from './pages/IntellectualProperty';
import { CookiePolicy } from './pages/CookiePolicy';
import { Author } from './pages/Author';
import { NotFound } from './pages/NotFound';

export default function App({ initialPath }) {
  const resolveView = (pathname) => pathToView[normalizeRoutePath(pathname)] ?? 'notfound';
  const currentPath = initialPath || (typeof window !== 'undefined' ? window.location.pathname : '/');
  const initialView = resolveView(currentPath);
  const [view, setView] = useState(initialView);
  const telegram = institutional.telegram;
  const profileImg = "/jeff-queiroz-perfil.webp";

  const navigate = (nextView) => {
    if (typeof nextView !== 'string' || !routeMeta[nextView]) {
      console.error('Invalid view:', nextView);
      setView('notfound');
      if (window.location.pathname !== routeMeta.notfound.path) {
        window.history.pushState({}, '', routeMeta.notfound.path);
      }
      return;
    }

    setView(nextView);
    const path = routeMeta[nextView].path;
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  };

  useEffect(() => {
    const onPopState = () => setView(resolveView(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const meta = routeMeta[view] || routeMeta.home;
    const canonicalUrl = `${institutional.site}${meta.path === '/' ? '' : meta.path}`;
    document.title = meta.title;

    const setMeta = (selector, attr, value) => {
      const tag = document.head.querySelector(selector);
      if (tag) tag.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);
    setMeta('link[rel="canonical"]', 'href', canonicalUrl);

    const imageUrl = `${institutional.site}${meta.image || '/logo-euvouserdoutor.webp'}`;
    const isArticle = typeof view === 'string' && view.startsWith('post_');
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${institutional.site}/#organization`,
          name: 'EuvouserDoutor',
          url: institutional.site,
          logo: `${institutional.site}/logo-euvouserdoutor.webp`,
          founder: { '@id': `${institutional.site}/autor/jeff-queiroz#person` },
        },
        {
          '@type': 'Person',
          '@id': `${institutional.site}/autor/jeff-queiroz#person`,
          name: 'Jeff Queiroz',
          url: `${institutional.site}/autor/jeff-queiroz`,
          image: `${institutional.site}/jeff-queiroz-perfil.webp`,
          worksFor: { '@id': `${institutional.site}/#organization` },
        },
        {
          '@type': isArticle ? 'NewsArticle' : 'WebPage',
          '@id': `${canonicalUrl}#${isArticle ? 'article' : 'webpage'}`,
          url: canonicalUrl,
          headline: meta.title,
          name: meta.title,
          description: meta.description,
          image: imageUrl,
          inLanguage: 'pt-BR',
          author: { '@id': `${institutional.site}/autor/jeff-queiroz#person` },
          creator: { '@id': `${institutional.site}/autor/jeff-queiroz#person` },
          publisher: { '@id': `${institutional.site}/#organization` },
          ...(isArticle ? {
            ...(meta.datePublished ? { datePublished: meta.datePublished } : {}),
            ...(meta.dateModified ? { dateModified: meta.dateModified } : {}),
            mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
          } : {}),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: `${institutional.site}/` },
            ...(isArticle || view === 'news' ? [{ '@type': 'ListItem', position: 2, name: 'Notícias', item: `${institutional.site}/noticias` }] : []),
            ...(isArticle ? [{ '@type': 'ListItem', position: 3, name: meta.title, item: canonicalUrl }] : []),
          ],
        },
      ],
    };
    let jsonLdScript = document.head.querySelector('#evd-jsonld');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'evd-jsonld';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(jsonLd);
  }, [view]);

  // Não há autenticação server-side disponível neste frontend estático.
  // A rota administrativa não pode expor uma área que pareça protegida apenas por React.
  const meta = routeMeta[view] || routeMeta.notfound;

  return (
    <div className="min-h-screen bg-[#080A0F] font-sans selection:bg-[#4F8CFF] selection:text-white text-left">
      {/* Analytics desativado no Premium ate revisao LGPD e consentimento. */}
      <Header setView={navigate} currentView={view} telegram={telegram} />
      <main>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh] bg-[#080A0F]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4F8CFF]"></div>
          </div>
        }>
          {view === 'home' && <Home setView={navigate} profileImg={profileImg} />}
          {view === 'news' && <News setView={navigate} profileImg={profileImg} telegram={telegram} />}
          {view === 'article' && <Article setView={navigate} profileImg={profileImg} />}
          {view === 'materials' && <Materials setView={navigate} telegram={telegram} />}
          {view === 'mentorship' && <Mentorship setView={navigate} telegram={telegram} />}
          {view === 'flashcards' && <FlashcardsPage setView={navigate} />}
          {view === 'about' && <About />}
          {view === 'author' && <Author setView={navigate} />}
          {view === 'contact' && <Contact />}
          {view === 'privacy' && <PrivacyPolicy />}
          {view === 'terms' && <TermsOfUse />}
          {view === 'medicalDisclaimer' && <MedicalDisclaimer />}
          {view === 'intellectualProperty' && <IntellectualProperty />}
          {view === 'cookies' && <CookiePolicy />}
          {view === 'admin' && <NotFound setView={navigate} />}
          {typeof view === 'string' && view.startsWith('post_') && <BlogPost setView={navigate} postId={view} profileImg={profileImg} telegram={telegram} />}
          {view === 'notfound' && <NotFound setView={navigate} />}
        </Suspense>
      </main>
      <Footer setView={navigate} telegram={telegram} />
      <CookieConsent setView={navigate} />
    </div>
  );
}
