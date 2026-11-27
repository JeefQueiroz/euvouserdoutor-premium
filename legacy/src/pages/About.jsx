import React from 'react';
import { Award, BookOpenCheck, Compass, Globe2, GraduationCap, ShieldCheck, Target, User, History, Rocket, Heart, Lightbulb } from 'lucide-react';
import { institutional } from '../institutional';

export const About = () => {
  const blocks = [
    {
      icon: Target,
      title: 'Missão',
      text: 'Apoiar estudantes e vestibulandos de Medicina com conteúdo educacional, organização acadêmica e curadoria informativa de alto rigor.',
    },
    {
      icon: GraduationCap,
      title: 'Para quem é',
      text: 'Para quem busca o topo da carreira médica, quer estudar com mais direção, revisar com critério e acompanhar o futuro da saúde.',
    },
    {
      icon: Compass,
      title: 'Como ajuda',
      text: 'Reunindo materiais, notícias e métodos validados (como revisão espaçada e estudo ativo) para reduzir o improviso na preparação.',
    },
    {
      icon: BookOpenCheck,
      title: 'Compromisso',
      text: 'Publicar conteúdo cientificamente verificado, informativo e responsável, fortalecendo a associação entre ciência e educação.',
    },
  ];

  const facts = [
    { icon: User, label: 'Responsável', value: institutional.owner },
    { icon: Award, label: 'Marca registrada', value: `INPI - nº ${institutional.trademarkProcess}` },
    { icon: Globe2, label: 'Site oficial', value: institutional.siteLabel },
    { icon: ShieldCheck, label: 'Finalidade', value: 'Educação & Ciência' },
  ];

  return (
    <section className="animate-in bg-[#080A0F] text-[#F8FAFC] min-h-screen pb-24 text-left">
      <div className="bg-[#0A192F] border-b border-white/[0.05] py-12 md:py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(79,140,255,0.12),transparent_40%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-[0.25em] mb-6">
            Institucional & Visão
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-6 text-[#F8FAFC]">
            O Futuro da <br className="hidden md:block" /> <span className="text-[#4F8CFF]">Educação Médica</span>.
          </h1>
          <p className="text-base md:text-xl text-[#98A2B3] leading-relaxed max-w-3xl font-medium">
            O <strong>EuVouSerDoutor</strong> é um ecossistema digital pioneiro, criado para unir o rigor da ciência à inovação tecnológica na preparação de futuros médicos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <article className="lg:col-span-8 space-y-12">
          <div className="bg-[#11141A] rounded-[32px] border border-white/[0.05] shadow-2xl p-8 md:p-12 premium-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4F8CFF]/5 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <p className="text-[#4F8CFF] text-[10px] font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <History size={14} /> Nossa História
            </p>
            <h2 className="text-2xl md:text-4xl font-black text-[#F8FAFC] tracking-tighter mb-8 leading-tight">
              De um sonho em Pavão ao <br /> ecossistema na UFMG.
            </h2>
            <div className="space-y-6 text-[#98A2B3] leading-relaxed text-base md:text-lg font-medium">
              <p>
                O <strong className="text-[#F8FAFC]">EuVouSerDoutor</strong> nasceu da visão de <strong className="text-[#F8FAFC]">Jefferson Viana Queiroz</strong>, que percebeu a lacuna entre o vasto conhecimento científico e a organização prática necessária para o sucesso acadêmico. 
              </p>
              <p>
                Com raízes no interior de Minas Gerais e uma trajetória marcada pelo 1º lugar geral na UFVJM aos 18 anos, Jeff trouxe sua experiência prévia no mercado de tecnologia para estruturar um portal que não apenas informa, mas orienta.
              </p>
              <p>
                Hoje, sediado no polo de excelência da <strong>UFMG</strong>, o projeto evoluiu para um portal editorial completo, servindo como bússola para milhares de estudantes que buscam sair do improviso e evoluir com método.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#11141A] p-8 rounded-[28px] border border-white/[0.05] premium-border space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] flex items-center justify-center text-[#4F8CFF]">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-black text-[#F8FAFC] tracking-tight">Inovação Tecnológica</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">
                Aplicamos algoritmos de repetição espaçada e técnicas de UX para otimizar a retenção de conteúdo médico denso.
              </p>
            </div>
            <div className="bg-[#11141A] p-8 rounded-[28px] border border-white/[0.05] premium-border space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] flex items-center justify-center text-[#4F8CFF]">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-black text-[#F8FAFC] tracking-tight">Rigor Editorial</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">
                Cada notícia e material passa por uma curadoria baseada em fontes primárias e instituições oficiais de saúde.
              </p>
            </div>
          </div>
        </article>

        <aside className="lg:col-span-4 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {facts.map((item) => (
              <div key={item.label} className="bg-[#11141A] rounded-2xl border border-white/[0.05] p-6 premium-border group hover:bg-white/[0.02] transition-all">
                <item.icon size={20} className="text-[#4F8CFF] mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <p className="text-[10px] font-black uppercase tracking-widest text-[#98A2B3] mb-1">{item.label}</p>
                <p className="text-sm font-black text-[#F8FAFC] leading-snug">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#4F8CFF] to-[#2E70CE] rounded-[32px] p-8 space-y-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24 transition-transform duration-700 group-hover:scale-150" />
            <Lightbulb size={32} className="text-[#080A0F] opacity-80" />
            <h3 className="text-2xl font-black text-[#080A0F] tracking-tighter leading-none relative z-10">
              Quer fazer parte da nossa jornada?
            </h3>
            <p className="text-[#080A0F]/80 text-sm font-bold leading-relaxed relative z-10">
              Acompanhe nossas atualizações diárias e descubra como o método pode transformar seus resultados.
            </p>
          </div>
        </aside>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {blocks.map((item) => (
          <article key={item.title} className="bg-[#11141A] rounded-2xl border border-white/[0.05] p-8 shadow-2xl premium-border hover:border-[#4F8CFF]/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#4F8CFF]/10 text-[#4F8CFF] flex items-center justify-center mb-6">
              <item.icon size={24} aria-hidden="true" />
            </div>
            <h2 className="text-xl font-black text-[#F8FAFC] mb-3 tracking-tight">{item.title}</h2>
            <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#11141A] border border-[#4F8CFF]/20 rounded-[24px] p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#4F8CFF]/5" />
          <p className="text-[#98A2B3] text-xs md:text-sm leading-relaxed font-medium italic relative z-10">
            {institutional.medicalNotice}
          </p>
        </div>
      </div>
    </section>
  );
};
