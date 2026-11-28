import React, { useState, useEffect, Suspense } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { institutional, normalizeRoutePath, pathToView, routeMeta } from './institutional';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { Materials } from './pages/Materials';
import { Mentorship } from './pages/Mentorship';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { QuestionsPage } from './pages/QuestionsPage';
import { LaboratoryPage } from './pages/LaboratoryPage';
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

export default function App({ initialPath, BlogPostComponent }) {
  const resolveView = (pathname) => pathToView[normalizeRoutePath(pathname)] ?? 'notfound';
  const currentPath = initialPath || (typeof window !== 'undefined' ? window.location.pathname : '/');
  const initialView = resolveView(currentPath);
  const [view, setView] = useState(initialView);
  const telegram = institutional.telegram;
  const profileImg = "/jeff-queiroz-perfil.webp";

  // Every public destination has its own prerendered document and metadata.
  // Do not overwrite canonical tags or JSON-LD after mounting React.
  const navigate = (nextView) => {
    const meta = typeof nextView === 'string' ? routeMeta[nextView] : null;
    if (!meta || meta.requiresAuth || nextView === 'notfound') {
      setView('notfound');
      document.title = routeMeta.notfound.title;
      document.querySelector('meta[name="robots"]')?.setAttribute('content','noindex,nofollow');
      return;
    }
    window.location.assign(meta.path);
  };

  useEffect(() => {
    const onPopState = () => {
      if (resolveView(window.location.pathname) !== view) window.location.reload();
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [view]);

  // Não há autenticação server-side disponível neste frontend estático.
  // A rota administrativa não pode expor uma área que pareça protegida apenas por React.
  const meta = routeMeta[view] || routeMeta.notfound;

  return (
    <div className="min-h-screen bg-[#080A0F] font-sans selection:bg-[#4F8CFF] selection:text-white text-left">
      {/* Analytics desativado no Premium ate revisao LGPD e consentimento. */}
      <a className="evd-skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header setView={navigate} currentView={view} telegram={telegram} />
      <main id="conteudo" tabIndex={-1}>
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
          {view === 'questions' && <QuestionsPage />}
          {view === 'laboratory' && <LaboratoryPage />}
          {view === 'about' && <About />}
          {view === 'author' && <Author setView={navigate} />}
          {view === 'contact' && <Contact />}
          {view === 'privacy' && <PrivacyPolicy />}
          {view === 'terms' && <TermsOfUse />}
          {view === 'medicalDisclaimer' && <MedicalDisclaimer />}
          {view === 'intellectualProperty' && <IntellectualProperty />}
          {view === 'cookies' && <CookiePolicy />}
          {view === 'admin' && <NotFound setView={navigate} />}
          {typeof view === 'string' && view.startsWith('post_') && (BlogPostComponent ? <BlogPostComponent setView={navigate} postId={view} profileImg={profileImg} telegram={telegram} /> : <NotFound setView={navigate} />)}
          {view === 'notfound' && <NotFound setView={navigate} />}
        </Suspense>
      </main>
      <Footer setView={navigate} telegram={telegram} />
      <CookieConsent setView={navigate} />
    </div>
  );
}
