import React, { useState, useEffect, useRef } from 'react';
import { Zap, Send, Search, X, ArrowRight, Menu, Command } from 'lucide-react';

export const Header = ({ setView, currentView, telegram }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSearchIndex, setActiveSearchIndex] = useState(0);
  const searchInputRef = useRef(null);
  const searchTriggerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const searchItems = [
    { id: "post_retina_chip_2026", view: "post_retina_chip_2026", title: "Chip de Retina Restaura Visão", cat: "Tecnologia Médica", type: "noticia" },
    { title: 'Oxford Inicia Ensaio Clínico de Vacina Contra o Vírus Ebola', view: 'post_ebola_oxford_2026', cat: 'Saúde & Ciência' },
    { title: 'Como estudar para Medicina com método e constância', view: 'article', cat: 'Técnicas de Estudo' },
    { title: 'Flashcards Doutor: Estudo Ativo e Repetição Espaçada', view: 'flashcards', cat: 'Materiais' },
    { title: 'Mentoria Aprovado: Organização e Rotina para Medicina', view: 'mentorship', cat: 'Mentoria' },
    { title: 'Cronograma Sisu e Notas de Corte', view: 'news', cat: 'Vestibular' },
  ];

  const filteredItems = searchItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.cat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    searchTriggerRef.current?.focus();
  };

  const selectSearchItem = (item) => {
    if (!item.view) return;
    setView(item.view);
    closeSearch();
  };

  useEffect(() => {
    if (!isSearchOpen) return undefined;
    searchInputRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeSearch();
      } else if (event.key === 'ArrowDown' && filteredItems.length) {
        event.preventDefault();
        setActiveSearchIndex((index) => (index + 1) % filteredItems.length);
      } else if (event.key === 'ArrowUp' && filteredItems.length) {
        setActiveSearchIndex((index) => (index - 1 + filteredItems.length) % filteredItems.length);
      } else if (event.key === 'Enter' && filteredItems[activeSearchIndex]) {
        event.preventDefault();
        selectSearchItem(filteredItems[activeSearchIndex]);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isSearchOpen, filteredItems, activeSearchIndex]);

  return (
    <>
      <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'pt-0' : 'pt-0'}`}>
        {/* Editorial Ticker */}
        <div className="bg-[#4F8CFF] text-[#080A0F] py-1.5 px-4 flex justify-center items-center text-[9px] font-black uppercase tracking-[0.3em] gap-2 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 animate-[shimmer_3s_infinite]" />
          <Zap size={10} className="text-[#080A0F] relative z-10" aria-hidden="true" />
          <span className="relative z-10">Portal Editorial de Medicina, Ciência e Educação</span>
        </div>
        
        {/* Main Navigation Bar */}
        <div className={`transition-all duration-300 ${isScrolled ? 'bg-[#080A0F]/95 backdrop-blur-2xl py-1.5 border-b border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : 'bg-[#080A0F]/80 backdrop-blur-xl border-b border-white/[0.05] py-3'} px-4 md:px-8`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center gap-6">
            <div className="flex items-center gap-10">
              <button
                type="button"
                onClick={() => setView('home')}
                className="flex items-center group shrink-0 focus:outline-none transition-transform hover:scale-[1.02]"
                aria-label="Ir para a página inicial"
              >
                <span className="relative flex h-9 w-[114px] items-center overflow-hidden md:h-11 md:w-[140px]" aria-hidden="true"><img src="/logocomp.png" alt="EuvouserDoutor" width="1672" height="941" fetchpriority="high" decoding="async" className="absolute left-0 top-1/2 w-full max-w-none -translate-y-1/2 object-contain transition-opacity group-hover:opacity-90" /></span>
              </button>
            
              <nav className="hidden lg:flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.15em] text-[#98A2B3]" aria-label="Navegação principal">
                {[
                  ['home', 'Início'],
                  ['news', 'Notícias'],
                  ['materials', 'Materiais'],
                  ['mentorship', 'Mentoria'],
                  ['author', 'Sobre'],
                  ['contact', 'Contato'],
                ].map(([view, label]) => (
                  <button
                    key={view}
                    type="button"
                    onClick={() => setView(view)}
                    className={`px-4 py-3 rounded-xl transition-all relative group focus:outline-none ${
                      currentView === view
                        ? 'text-white'
                        : 'hover:text-white'
                    }`}
                    aria-current={currentView === view ? 'page' : undefined}
                  >
                    {label}
                    {currentView === view && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#4F8CFF] rounded-full" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              {/* Premium Search Trigger */}
              <button
                type="button"
                ref={searchTriggerRef}
                onClick={() => {
                  setActiveSearchIndex(0);
                  setIsSearchOpen(true);
                }}
                className="bg-white/[0.03] text-[#98A2B3] hover:text-white px-4 py-3 rounded-2xl border border-white/[0.08] hover:bg-white/[0.06] transition-all flex items-center gap-3 text-[11px] font-bold group"
                aria-label="Pesquisar no site"
              >
                <Search size={14} className="text-[#4F8CFF] group-hover:scale-110 transition-transform" />
                <span className="hidden xl:inline tracking-tight">Pesquisar no portal...</span>
                <div className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.1] text-[9px]">
                  <Command size={8} />
                  <span>K</span>
                </div>
              </button>

              <div className="h-6 w-px bg-white/10 hidden sm:block" />

              <button
                type="button"
                onClick={() => setView('materials')}
                className="hidden sm:block bg-white/[0.05] text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-2xl border border-white/[0.08] hover:bg-white/[0.1] hover-lift transition-all focus:outline-none"
              >
                Biblioteca
              </button>
              
              <a
                href={telegram}
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="bg-[#4F8CFF] text-[#080A0F] p-2.5 rounded-2xl hover:bg-[#7EA6FF] hover-lift transition-all focus:outline-none shadow-[0_10px_20px_rgba(79,140,255,0.2)]"
              >
                <Send size={16} className="fill-current" aria-hidden="true" />
              </a>

              <button
                type="button"
                className="lg:hidden p-2 text-[#98A2B3] hover:text-white transition-colors"
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
              >
                {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <nav id="mobile-navigation" className="lg:hidden max-w-7xl mx-auto px-4 pb-4 pt-2 grid grid-cols-2 gap-2" aria-label="Navegação móvel">
              {[
                ['home', 'Início'], ['news', 'Notícias'], ['materials', 'Materiais'],
                ['mentorship', 'Mentoria'], ['author', 'Sobre'], ['contact', 'Contato'],
              ].map(([view, label]) => (
                <button
                  key={view}
                  type="button"
                  onClick={() => { setView(view); setIsMobileMenuOpen(false); }}
                  className={`text-left px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest ${currentView === view ? 'bg-[#4F8CFF] text-[#080A0F]' : 'bg-white/[0.04] text-[#98A2B3]'}`}
                  aria-current={currentView === view ? 'page' : undefined}
                >{label}</button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Mega Premium Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-[#080A0F]/90 backdrop-blur-xl flex items-start justify-center pt-24 px-4 animate-in">
          <div role="dialog" aria-modal="true" aria-labelledby="search-dialog-title" className="glass-premium rounded-[32px] max-w-2xl w-full p-1 shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-blur-reveal">
            <div className="bg-[#11141A] rounded-[31px] p-8 space-y-8">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
                <div className="flex items-center gap-4 w-full mr-4">
                  <h2 id="search-dialog-title" className="sr-only">Pesquisar no portal</h2>
                  <div className="w-10 h-10 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF]">
                    <Search size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="O que você está buscando hoje?"
                    ref={searchInputRef}
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setActiveSearchIndex(0); }}
                    autoFocus
                    aria-label="Pesquisar no portal"
                    className="w-full bg-transparent text-[#F8FAFC] placeholder-[#98A2B3] text-lg font-bold focus:outline-none tracking-tight"
                  />
                </div>
                <button 
                  type="button"
                  onClick={closeSearch}
                  aria-label="Fechar pesquisa"
                  className="text-[#98A2B3] hover:text-white p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2 scrollbar-none">
                {filteredItems.length > 0 ? (
                  <>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4F8CFF]/60 px-2">Sugestões Editoriais</p>
                    {filteredItems.map((item, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => selectSearchItem(item)}
                        onMouseEnter={() => setActiveSearchIndex(idx)}
                        className={`w-full text-left p-5 rounded-2xl ${activeSearchIndex === idx ? 'border-[#4F8CFF]/40 bg-[#4F8CFF]/5' : 'border-white/[0.05] bg-white/[0.02]'} border hover:border-[#4F8CFF]/40 hover:bg-[#4F8CFF]/5 transition-all cursor-pointer flex items-center justify-between group`}
                        aria-selected={activeSearchIndex === idx}
                      >
                        <div className="space-y-1">
                          <span className="text-[9px] font-black uppercase tracking-widest text-[#4F8CFF] bg-[#4F8CFF]/10 px-2.5 py-1 rounded-md mb-1 inline-block">
                            {item.cat}
                          </span>
                          <h4 className="text-base font-black text-[#F8FAFC] group-hover:text-white transition-colors tracking-tight">
                            {item.title}
                          </h4>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-[#98A2B3] group-hover:bg-[#4F8CFF] group-hover:text-[#080A0F] group-hover:translate-x-1 transition-all">
                          <ArrowRight size={18} />
                        </div>
                      </button>
                    ))}
                  </>
                ) : (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 bg-white/[0.02] rounded-full flex items-center justify-center mx-auto">
                      <Search size={32} className="text-[#98A2B3]/20" />
                    </div>
                    <p className="text-[#98A2B3] text-sm font-bold tracking-tight">
                      Nenhum resultado para "{searchQuery}"
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-bold text-[#98A2B3]/40">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.1]">↑↓</kbd> Navegar</span>
                  <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.1]">Enter</kbd> Selecionar</span>
                </div>
                <span>Pressione <kbd className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.1]">Esc</kbd> para fechar</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
