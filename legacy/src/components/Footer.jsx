import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Send, Youtube } from 'lucide-react';
import { institutional } from '../institutional';
import { COOKIE_CONSENT_OPEN_EVENT } from './CookieConsent';

const PinterestIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.165-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.621 0 11.988-5.367 11.988-11.987C24.012 5.367 18.645 0 12.017 0z"/>
  </svg>
);

const openCookiePreferences = () => {
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_OPEN_EVENT));
};

export const Footer = ({ setView, telegram }) => (
  <footer className="bg-[#080A0F] text-[#F8FAFC] pt-16 pb-8 border-t border-white/[0.05]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        
        {/* Brand & Authority Section */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-6">
            <button
              type="button"
              onClick={() => setView && setView('home')}
              className="flex items-center focus:outline-none group"
              aria-label="Início"
            >
              <span className="relative flex h-12 w-[148px] items-center overflow-hidden" aria-hidden="true"><img src="/logocomp.png" alt="EuvouserDoutor" width="1672" height="941" loading="lazy" decoding="async" className="absolute left-0 top-1/2 w-full max-w-none -translate-y-1/2 object-contain transition-opacity group-hover:opacity-80" /></span>
            </button>
            <p className="text-[#98A2B3] text-sm leading-relaxed max-w-md font-medium">
              {institutional.description}
            </p>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] premium-border max-w-sm">
            <img src="/jeff-queiroz-perfil.webp" alt="Jeff Queiroz" width="48" height="48" loading="lazy" decoding="async" className="w-12 h-12 rounded-full object-cover border border-[#4F8CFF]/30" />
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#4F8CFF] mb-0.5">Fundador & Editor</p>
              <p className="text-white text-sm font-black tracking-tight">Jeff Queiroz</p>
              <p className="text-[#98A2B3] text-[10px] font-bold">Medicina UFMG</p>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Editorial Column */}
          <div className="space-y-6">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Conteúdo</h3>
            <ul className="space-y-3">
              {[
                ['home', 'Início'],
                ['news', 'Notícias'],
              ].map(([view, label]) => (
                <li key={view}>
                  <button type="button" onClick={() => setView && setView(view)} className="text-[#98A2B3] hover:text-[#4F8CFF] transition-all text-xs font-bold tracking-tight">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Estudo</h3>
            <ul className="space-y-3">
              {[
                ['materials', 'Materiais'],
                ['mentorship', 'Mentoria'],
                ['flashcards', 'Flashcards'],
              ].map(([view, label]) => (
                <li key={view}>
                  <button type="button" onClick={() => setView && setView(view)} className="text-[#98A2B3] hover:text-[#4F8CFF] transition-all text-xs font-bold tracking-tight">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Column */}
          <div className="space-y-6">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Institucional</h3>
            <ul className="space-y-3">
              {[
                ['author', 'Sobre'],
                ['contact', 'Contato'],
              ].map(([view, label]) => (
                <li key={view}>
                  <button type="button" onClick={() => setView && setView(view)} className="text-[#98A2B3] hover:text-[#4F8CFF] transition-all text-xs font-bold tracking-tight">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-6">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Jurídico</h3>
            <ul className="space-y-3">
              {[
                ['terms', 'Termos de Uso'],
                ['privacy', 'Privacidade'],
                ['medicalDisclaimer', 'Aviso Médico'],
                ['intellectualProperty', 'Propriedade'],
              ].map(([view, label]) => (
                <li key={view}>
                  <button type="button" onClick={() => setView && setView(view)} className="text-[#98A2B3] hover:text-[#4F8CFF] transition-all text-xs font-bold tracking-tight">
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <button type="button" onClick={openCookiePreferences} className="text-[#98A2B3] hover:text-[#4F8CFF] transition-all text-xs font-bold tracking-tight">
                  Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social & Contact Bar */}
      <div className="py-8 border-t border-white/[0.03] flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: Instagram, href: institutional.instagram, label: 'Instagram' },
            { icon: Youtube, href: institutional.youtube, label: 'YouTube' },
            { icon: Linkedin, href: institutional.linkedin, label: 'LinkedIn' },
            { icon: PinterestIcon, href: institutional.pinterest, label: 'Pinterest' },
            { icon: Facebook, href: institutional.facebook, label: 'Facebook' },
            { icon: Send, href: telegram, label: 'Telegram' },
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              target="_blank" 
              rel="noreferrer" 
              aria-label={social.label}
              className="w-10 h-10 flex items-center justify-center bg-white/[0.03] border border-white/[0.05] rounded-xl text-[#98A2B3] hover:text-[#4F8CFF] hover:border-[#4F8CFF]/30 hover:bg-white/[0.06] transition-all"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>

        <a href={`mailto:${institutional.legalEmail}`} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-[#98A2B3] hover:text-white hover:border-white/20 transition-all text-xs font-black tracking-tight">
          <Mail size={16} className="text-[#4F8CFF]" /> {institutional.legalEmail}
        </a>
      </div>

      {/* Bottom Legal Bar */}
      <div className="pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-black uppercase tracking-widest text-[#98A2B3]/50">
          <button type="button" onClick={() => setView && setView('terms')} className="hover:text-[#F8FAFC] transition-colors">Termos de Uso</button>
          <button type="button" onClick={() => setView && setView('privacy')} className="hover:text-[#F8FAFC] transition-colors">Política de Privacidade</button>
          <button type="button" onClick={() => setView && setView('medicalDisclaimer')} className="hover:text-[#F8FAFC] transition-colors">Aviso Médico</button>
          <button type="button" onClick={() => setView && setView('intellectualProperty')} className="hover:text-[#F8FAFC] transition-colors">Propriedade Intelectual</button>
        </nav>
        <p className="text-[10px] text-[#98A2B3]/30 font-bold uppercase tracking-tighter text-center md:text-right">
          &copy; 2026 {institutional.name}. Todos os direitos reservados.<br />
          Conteúdo protegido por direitos autorais e leis de propriedade intelectual.
        </p>
      </div>
    </div>
  </footer>
);
