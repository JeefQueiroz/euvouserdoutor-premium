import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, Clock, HelpCircle, Layers, MessageCircle, PenTool, ShieldCheck, Target, Users, Sparkles, Zap, BookOpen, User } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { institutional } from '../institutional';

export const Mentorship = ({ setView }) => {
  const sections = [
    {
      icon: Users,
      title: 'Público-alvo',
      items: [
        'Vestibulandos que precisam organizar rotina.',
        'Estudantes que buscam revisão constante.',
        'Pessoas que buscam método sem improviso.',
      ],
    },
    {
      icon: Target,
      title: 'Dores que resolve',
      items: [
        'Excesso de materiais sem ordem clara.',
        'Dificuldade para manter revisão semanal.',
        'Falta de critério para transformar erros.',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'O que está incluso',
      items: [
        'Organização de rotina e revisão.',
        'Direcionamento para estudo ativo.',
        'Acompanhamento estratégico.',
      ],
    },
  ];

  const faq = [
    {
      question: 'A mentoria garante aprovação?',
      answer:
        'Não. A mentoria oferece organização e estratégia, mas o resultado depende de múltiplos fatores individuais.',
    },
    {
      question: 'É orientação médica?',
      answer:
        'Não. O conteúdo é educacional. Não substitui consulta médica ou orientação profissional.',
    },
  ];

  return (
    <div className="animate-in text-left bg-[#080A0F] text-[#F8FAFC] min-h-screen pb-24">
      {/* Editorial Header - Pattern from News.jsx */}
      <div className="bg-[#0A192F] border-b border-white/[0.05] pt-12 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(79,140,255,0.15),transparent_40%)]" />
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-[0.25em] mb-4">
                <Zap size={10} className="animate-pulse" /> Acompanhamento Estratégico
              </span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-[#F8FAFC]">
                Mentoria EuVouSerDoutor
              </h1>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.08] px-4 py-3 rounded-2xl flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#F8FAFC]">Vagas por Agenda</p>
                <p className="text-[11px] text-[#98A2B3]">Ciclo Estratégico 2026</p>
              </div>
            </div>
          </div>
          
          <p className="text-base md:text-lg text-[#98A2B3] leading-relaxed max-w-2xl font-medium border-t border-white/[0.05] pt-6">
            Acompanhamento educacional exclusivo para organizar rotina, revisão e evolução constante nos estudos para Medicina com o método do Jeff Queiroz.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => setView('contact')}
              className="inline-flex items-center justify-center gap-3 bg-[#4F8CFF] hover:bg-[#7EA6FF] text-[#080A0F] px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg"
            >
              Falar sobre mentoria <MessageCircle size={16} />
            </button>
            <button
              type="button"
              onClick={() => setView('materials')}
              className="inline-flex items-center justify-center gap-3 bg-white/5 text-white border border-white/10 px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all hover:bg-white/10"
            >
              Ver Materiais <Layers size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10 relative z-20">
        <div className="lg:col-span-8 xl:col-span-9 space-y-10">
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[32px] p-8 shadow-2xl premium-border">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-16 h-16 bg-[#4F8CFF]/10 text-[#4F8CFF] rounded-2xl flex items-center justify-center shrink-0">
                <Clock size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-xl font-black text-[#F8FAFC] mb-2 tracking-tight">Compromisso com a Qualidade.</h2>
                <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">
                  Para manter o alto padrão de acompanhamento individualizado, as turmas possuem limite rigoroso de participantes.
                </p>
              </div>
            </div>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section) => (
              <article key={section.title} className="bg-[#11141A] rounded-[32px] p-8 border border-white/[0.05] shadow-2xl premium-border">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-[#4F8CFF] mb-6">
                  <section.icon size={20} />
                </div>
                <h2 className="text-sm font-black text-[#F8FAFC] mb-6 uppercase tracking-widest">{section.title}</h2>
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-xs text-[#98A2B3] leading-relaxed font-medium">
                      <CheckCircle2 size={14} className="text-[#4F8CFF] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="bg-[#11141A] rounded-[32px] p-10 shadow-2xl border border-white/[0.05] premium-border relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] tracking-tighter flex items-center gap-3 mb-8">
              <ShieldCheck className="text-[#4F8CFF]" size={28} /> O Método EVD
            </h2>
            <p className="text-[#98A2B3] leading-relaxed mb-12 text-base md:text-lg font-medium max-w-3xl">
              A preparação para Medicina não deve ser baseada em maratonas exaustivas, mas em <strong>processos inteligentes</strong>. Teoria, revisão, exercícios e descanso são organizados para reduzir o improviso e maximizar a retenção.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/[0.02] p-8 rounded-[24px] border border-white/[0.05] space-y-4">
                <Calendar className="text-[#4F8CFF] mb-2" size={24} />
                <h3 className="font-black text-[#F8FAFC] text-lg tracking-tight">Ciclos de Rotina</h3>
                <p className="text-xs text-[#98A2B3] leading-relaxed font-medium">Organização semanal de blocos de estudo e autoavaliação baseada em dados reais.</p>
              </div>
              <div className="bg-white/[0.02] p-8 rounded-[24px] border border-white/[0.05] space-y-4">
                <PenTool className="text-[#4F8CFF] mb-2" size={24} />
                <h3 className="font-black text-[#F8FAFC] text-lg tracking-tight">Revisão Crítica</h3>
                <p className="text-xs text-[#98A2B3] leading-relaxed font-medium">Mapeamento constante de lacunas para garantir que nenhum erro seja repetido.</p>
              </div>
            </div>
          </section>

          <section className="bg-[#0A192F] rounded-[32px] p-10 text-white border border-white/[0.05] shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-10">Estudo com Direção</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-[24px] p-8">
                <p className="text-[#98A2B3] text-[9px] font-black uppercase tracking-widest mb-4">Sem método</p>
                <p className="text-white/90 text-sm leading-relaxed font-bold">Materiais desorganizados, pouca revisão e sensação constante de estar "andando em círculos".</p>
              </div>
              <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[24px] p-8">
                <p className="text-[#4F8CFF] text-[9px] font-black uppercase tracking-widest mb-4">Com o método EVD</p>
                <p className="text-white/90 text-sm leading-relaxed font-bold">Prioridades claras, revisão recorrente e ajustes semanais baseados em desempenho real.</p>
              </div>
            </div>
          </section>

          <section className="bg-[#11141A] rounded-[32px] p-10 border border-white/[0.05] shadow-2xl premium-border">
            <h2 className="text-2xl font-black text-[#F8FAFC] tracking-tighter flex items-center gap-3 mb-10">
              <HelpCircle className="text-[#4F8CFF]" size={24} /> Perguntas Frequentes
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {faq.map((item) => (
                <article key={item.question} className="bg-white/[0.02] rounded-[24px] p-6 border border-white/[0.05]">
                  <h3 className="font-black text-[#F8FAFC] text-base mb-2 tracking-tight">{item.question}</h3>
                  <p className="text-[#98A2B3] text-xs leading-relaxed font-medium">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 xl:col-span-3">
          <Sidebar setView={setView} />
        </div>
      </div>
    </div>
  );
};
