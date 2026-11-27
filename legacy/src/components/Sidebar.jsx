import React from 'react';
import { BookOpen, CheckCircle, Layers, MessageCircle, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';

export const Sidebar = ({ setView }) => {
  const brandImg = "/jeff-queiroz-perfil.webp";
  return (
    <aside className="lg:sticky lg:top-24 space-y-6 text-left">
      {/* Premium Author Card */}
      <div className="glass-premium rounded-[32px] p-1">
        <div className="bg-[#11141A] rounded-[31px] p-6 space-y-5">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="w-14 h-14 rounded-2xl bg-[#4F8CFF]/10 p-0.5 border border-[#4F8CFF]/20 overflow-hidden">
                 <img src={brandImg} alt="Jeff Queiroz" width="56" height="56" loading="lazy" decoding="async" className="w-full h-full rounded-[14px] object-cover transition-transform group-hover:scale-110" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-4 h-4 rounded-full border-4 border-[#11141A] shadow-lg"></div>
            </div>
            <div>
              <h3 className="font-black text-sm text-[#F8FAFC] leading-tight tracking-tight flex items-center gap-1.5">
                Jeff Queiroz 
                <CheckCircle size={14} className="text-[#4F8CFF]" fill="currentColor" />
              </h3>
              <p className="text-[10px] text-[#4F8CFF] font-black uppercase tracking-widest mt-1">Medicina | UFMG</p>
            </div>
          </div>
          <p className="text-[11px] text-[#98A2B3] leading-relaxed font-medium">
            Pesquisador acadêmico focado em inovação, rotina de alto desempenho e estratégias para a carreira médica.
          </p>
        </div>
      </div>

      {/* High-Conversion CTA Card */}
      <div className="relative group cursor-pointer" onClick={() => setView && setView('materials')}>
        <div className="absolute inset-0 bg-[#4F8CFF] blur-xl opacity-10 group-hover:opacity-20 transition-opacity" />
        <div className="bg-[#11141A] border border-[#4F8CFF]/30 rounded-[32px] p-7 relative overflow-hidden space-y-4">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#4F8CFF]/5 rounded-full blur-2xl" />
          <div className="w-10 h-10 rounded-xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF]">
            <Layers size={20} />
          </div>
          <div className="space-y-2">
            <p className="text-[#4F8CFF] text-[10px] font-black uppercase tracking-[0.3em]">Recursos de Elite</p>
            <h3 className="text-lg font-black tracking-tighter text-white leading-none">Biblioteca Doutor</h3>
            <p className="text-[#98A2B3] text-xs leading-relaxed font-medium">
              Guias e checklists exclusivos para organizar sua jornada acadêmica.
            </p>
          </div>
          <button
            type="button"
            className="w-full bg-[#4F8CFF] text-[#080A0F] rounded-2xl px-5 py-3.5 text-[11px] font-black uppercase tracking-widest hover:bg-[#7EA6FF] hover-lift transition-all flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(79,140,255,0.2)]"
          >
            Acessar Agora <ArrowRight size={14} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Quick Navigation - Premium List */}
      <div className="bg-[#11141A] border border-white/[0.05] rounded-[32px] p-7 space-y-6 premium-border">
        <div className="flex items-center gap-2">
          <TrendingUp size={14} className="text-[#4F8CFF]" />
          <h3 className="text-[#F8FAFC] font-black uppercase tracking-[0.2em] text-[10px]">Navegação Rápida</h3>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {[
            ['news', 'Estratégias de Estudo', BookOpen],
            ['materials', 'Materiais Gratuitos', Layers],
            ['contact', 'Fale com a Redação', MessageCircle],
          ].map(([view, label, Icon]) => (
            <button
              key={view}
              type="button"
              onClick={() => setView && setView(view)}
              className="flex items-center justify-between group rounded-2xl bg-white/[0.02] border border-white/[0.05] px-5 py-3.5 hover:border-[#4F8CFF]/40 hover:bg-[#4F8CFF]/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <Icon size={16} className="text-[#98A2B3] group-hover:text-[#4F8CFF] transition-colors" />
                <span className="text-xs font-bold text-[#98A2B3] group-hover:text-white transition-colors">{label}</span>
              </div>
              <ArrowRight size={12} className="text-[#98A2B3]/30 group-hover:text-[#4F8CFF] group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      </div>

      {/* Mini Newsletter / Sparkle Card */}
      <div className="p-6 rounded-[32px] bg-gradient-to-br from-[#11141A] to-[#0A192F] border border-white/[0.05] space-y-3 relative overflow-hidden">
        <Sparkles size={40} className="absolute -right-4 -bottom-4 text-[#4F8CFF]/5" />
        <h4 className="text-xs font-black text-white uppercase tracking-widest">Plantão EVD</h4>
        <p className="text-[10px] text-[#98A2B3] font-medium leading-relaxed">
          Receba atualizações científicas e pautas exclusivas diretamente no seu ecossistema.
        </p>
      </div>
    </aside>
  );
};
