import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'evsd_cookie_consent';
export const COOKIE_CONSENT_OPEN_EVENT = 'evsd-cookie-consent-open';

export const getCookieConsent = () => {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(STORAGE_KEY);
};

export function CookieConsent({ setView }) {
  const [choice, setChoice] = useState(() => getCookieConsent());
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const openPreferences = () => {
      window.localStorage.removeItem(STORAGE_KEY);
      setChoice(null);
      setShowOptions(true);
    };

    window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, openPreferences);
    return () => window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, openPreferences);
  }, []);

  if (choice) return null;

  const saveChoice = (value) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new CustomEvent('evsd-cookie-consent-changed', { detail: value }));
    setChoice(value);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] bg-[#0A192F] text-white border-t border-white/10 shadow-2xl">
      <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-bold mb-1">Uso de cookies</p>
          <p className="text-xs md:text-sm text-blue-100 leading-relaxed">
            Usamos cookies necessários para o funcionamento do site. Cookies de análise só são ativados com seu
            consentimento para melhorar conteúdo e navegação.
          </p>
          {showOptions && (
            <div className="mt-3 rounded-xl bg-white/5 border border-white/10 p-3 text-xs text-blue-100 space-y-2">
              <p><strong className="text-white">Necessários:</strong> sempre ativos para segurança e funcionamento básico.</p>
              <p><strong className="text-white">Análise:</strong> ajudam a entender acessos e melhorar páginas. Ativados apenas se você aceitar.</p>
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <button onClick={() => saveChoice('accepted')} className="bg-[#2E70CE] hover:bg-blue-600 text-white px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-colors">
            Aceitar todos
          </button>
          <button onClick={() => saveChoice('rejected')} className="bg-white/10 hover:bg-white/15 text-white px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-colors">
            Recusar não essenciais
          </button>
          <button onClick={() => setShowOptions((value) => !value)} className="border border-white/20 hover:bg-white/10 text-white px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-colors">
            Gerenciar preferências
          </button>
          <button onClick={() => setView && setView('cookies')} className="text-blue-100 hover:text-white px-2 py-3 text-xs font-bold underline underline-offset-4">
            Política
          </button>
        </div>
      </div>
    </div>
  );
}
