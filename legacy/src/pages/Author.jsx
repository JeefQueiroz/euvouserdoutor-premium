import React from 'react';
import { ArrowLeft, Award, BookOpen, GraduationCap, Instagram, Linkedin, Mail, ShieldCheck, Sparkles, Youtube, Globe, MapPin, Briefcase, History, Heart, Brain, Rocket, Code, Lightbulb, Target, Compass, BookOpenCheck, Globe2, User, Zap } from 'lucide-react';
import { institutional } from '../institutional';

const PinterestIcon = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.165-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.621 0 11.988-5.367 11.988-11.987C24.012 5.367 18.645 0 12.017 0z"/>
  </svg>
);

export const Author = ({ setView }) => {
  const profileImg = '/jeff-queiroz-perfil.webp';

  const publications = [
    {
      title: 'Saúde Mental e Ansiedade Acadêmica em Estudantes de Medicina',
      category: 'Pesquisa UFMG',
      date: 'Ciclo 2026',
    },
    {
      title: 'Como estudar para Medicina com método, rotina e constância',
      category: 'Estratégia de Estudo',
      date: 'Agosto de 2026',
    },
    {
      title: 'Ética e Publicidade Médica no Ambiente Digital',
      category: 'Produção Científica',
      date: 'Julho de 2026',
    },
  ];

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
    <div className="animate-in text-left bg-[#080A0F] text-[#F8FAFC] min-h-screen pb-24">
      {/* Header - Restored to Clean Layout with Card */}
      <div className="bg-[#0A192F] border-b border-white/[0.05] pt-6 pb-10 px-6 relative overflow-visible mb-12">
        {/* Simple Radial Gradient - Removed Grid Dots for Cleanliness */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(79,140,255,0.15),transparent_40%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <button
            type="button"
            onClick={() => setView('home')}
            className="inline-flex items-center gap-2 text-[9px] font-black text-[#4F8CFF] uppercase bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-lg hover:bg-white/[0.06] transition-all mb-6"
          >
            <ArrowLeft size={12} strokeWidth={3} /> Voltar ao Início
          </button>

          <div className="relative max-w-6xl min-h-[230px] flex flex-col md:flex-row items-center md:items-center gap-6">
            {/* Profile Card - COLORFUL & KEPT */}
            <div className="w-[190px] md:w-[215px] relative group md:absolute md:right-4 md:bottom-[-70px] z-20 shrink-0">
              <div className="glass-premium rounded-[24px] p-1 border border-white/[0.08] shadow-[0_28px_70px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="bg-[#11141A] rounded-[23px] overflow-hidden">
                  <div className="aspect-[4/5] w-full overflow-hidden relative">
                    {/* COLOR IMAGE - NO GRAYSCALE */}
                    <img src={profileImg} alt="Jeff Queiroz" width="320" height="400" decoding="async" className="w-full h-full object-cover transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11141A] via-transparent to-transparent opacity-40" />
                    <div className="absolute bottom-5 left-5 right-5 z-10">
                      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#4F8CFF] mb-0.5">Fundador & Editor</p>
                      <h3 className="text-lg font-black text-white tracking-tight">Jeff Queiroz</h3>
                    </div>
                  </div>
                  <div className="p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-[8px] font-black uppercase tracking-widest text-[#98A2B3]">
                      <span>Autoridade Acadêmica</span>
                      <span className="text-[#4F8CFF]">Verificado</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-[#4F8CFF] to-[#2E70CE] animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-left space-y-4 md:pr-[270px] max-w-[620px]">
              <div className="flex flex-wrap justify-start gap-2">
                <span className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-[0.25em]">
                  Fundador & Criador
                </span>
                <span className="bg-white/5 border border-white/10 text-[#98A2B3] px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-[0.25em]">
                  Medicina UFMG
                </span>
              </div>
              
              <h1 className="text-3xl md:text-[2.75rem] font-black tracking-tighter leading-[1.02] text-[#F8FAFC]">
                Sobre o Projeto & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8CFF] via-white to-white/40">Jeff Queiroz</span>
              </h1>
              
              <div className="flex flex-wrap justify-start gap-3 text-[11px] text-[#98A2B3] font-bold">
                <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#4F8CFF]" /> Belo Horizonte, MG</span>
                <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-[#4F8CFF]" /> Empreendedor Digital</span>
                <span className="flex items-center gap-1.5"><Code size={14} className="text-[#4F8CFF]" /> Tech & Inovação</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8">
        <div className="lg:col-span-8 space-y-12">
          
          {/* Biografia Section */}
          <section className="bg-[#11141A] border border-white/[0.05] rounded-[28px] p-7 md:p-10 shadow-2xl space-y-7 premium-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4F8CFF]/5 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="space-y-6 relative z-10">
              <h2 className="text-2xl md:text-4xl font-black text-[#F8FAFC] tracking-tighter flex items-center gap-4">
                <History className="text-[#4F8CFF]" size={28} /> Trajetória de Superação
              </h2>
              
              <div className="space-y-6 text-[#98A2B3] leading-relaxed text-base md:text-lg font-medium">
                <p>
                  Mineiro com raízes na cidade de <strong>Pavão</strong>, Jeff Queiroz construiu sua história acadêmica a partir de uma longa e resiliente preparação. Durante anos, acumulou não apenas conhecimento, mas métodos e estratégias que hoje formam a base do ecossistema <strong>Eu Vou Ser Doutor</strong>.
                </p>
                <p>
                  Sua jornada até a Medicina foi marcada por conquistas expressivas, incluindo a aprovação em <strong>1º lugar geral</strong> na UFVJM (Teófilo Otoni), antes de ingressar na <strong>Universidade Federal de Minas Gerais (UFMG)</strong>, uma das instituições mais prestigiadas do país.
                </p>
                <p>
                  Na UFMG, Jeff expandiu sua atuação para além da clínica, desenvolvendo pesquisas científicas sobre <strong>saúde mental de estudantes</strong>, ansiedade acadêmica e ética médica. Essa vivência real permitiu que ele mantivesse uma comunicação autêntica e próxima dos desafios enfrentados por quem sonha com a carreira médica.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/[0.05]">
                <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/[0.05]">
                  <Award className="text-[#4F8CFF] mb-3" size={24} />
                  <h3 className="font-black text-[#F8FAFC] text-[11px] uppercase tracking-widest mb-1">Destaque</h3>
                  <p className="text-[10px] font-bold text-[#98A2B3]">1º Lugar Geral UFVJM</p>
                </div>
                <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/[0.05]">
                  <Brain className="text-[#4F8CFF] mb-3" size={24} />
                  <h3 className="font-black text-[#F8FAFC] text-[11px] uppercase tracking-widest mb-1">Pesquisa</h3>
                  <p className="text-[10px] font-bold text-[#98A2B3]">Saúde Mental Acadêmica</p>
                </div>
                <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/[0.05]">
                  <Rocket className="text-[#4F8CFF] mb-3" size={24} />
                  <h3 className="font-black text-[#F8FAFC] text-[11px] uppercase tracking-widest mb-1">Missão</h3>
                  <p className="text-[10px] font-bold text-[#98A2B3]">Democratizar a Aprovação</p>
                </div>
              </div>
            </div>
          </section>

          {/* O Ecossistema Section */}
          <section className="bg-[#11141A] border border-white/[0.05] rounded-[32px] p-8 md:p-12 shadow-2xl space-y-8 premium-border relative overflow-hidden">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-black text-[#F8FAFC] tracking-tighter flex items-center gap-4">
                <Globe2 className="text-[#4F8CFF]" size={28} /> O Ecossistema EVD
              </h2>
              <p className="text-[#98A2B3] leading-relaxed text-base md:text-lg font-medium">
                O <strong>EuVouSerDoutor</strong> nasceu do desejo de transformar experiência, conhecimento e tecnologia em ferramentas que ajudem outras pessoas a avançarem em sua própria jornada acadêmica. O projeto evoluiu de uma página de conteúdo para um ecossistema digital completo que acompanha o estudante desde o vestibular até a formação médica.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-white/[0.02] p-8 rounded-[28px] border border-white/[0.05] space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF]">
                    <Rocket size={24} />
                  </div>
                  <h3 className="text-xl font-black text-[#F8FAFC] tracking-tight">Inovação Tecnológica</h3>
                  <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">
                    Aplicamos algoritmos de repetição espaçada e inteligência artificial para otimizar a retenção de conteúdo médico denso.
                  </p>
                </div>
                <div className="bg-white/[0.02] p-8 rounded-[28px] border border-white/[0.05] space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF]">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-xl font-black text-[#F8FAFC] tracking-tight">Rigor Editorial</h3>
                  <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">
                    Cada notícia e material passa por uma curadoria rigorosa baseada em fontes primárias e evidências científicas.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Quick Facts Card */}
          <div className="grid grid-cols-1 gap-4">
            {facts.map((item) => (
              <div key={item.label} className="bg-[#11141A] rounded-2xl border border-white/[0.05] p-6 premium-border group hover:bg-white/[0.02] transition-all">
                <item.icon size={20} className="text-[#4F8CFF] mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <p className="text-[10px] font-black uppercase tracking-widest text-[#98A2B3] mb-1">{item.label}</p>
                <p className="text-sm font-black text-[#F8FAFC] leading-snug">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Social Links Card */}
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[32px] p-8 space-y-8 premium-border">
            <h3 className="text-xs font-black text-[#F8FAFC] uppercase tracking-[0.2em]">Conecte-se</h3>
            <div className="space-y-3">
              <a href={institutional.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-[#F8FAFC] hover:border-[#4F8CFF]/40 hover:bg-[#4F8CFF]/5 transition-all text-sm font-bold group">
                <Instagram size={18} className="text-[#4F8CFF] group-hover:scale-110 transition-transform" /> @euvouserdoutor
              </a>
              <a href={institutional.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-[#F8FAFC] hover:border-[#4F8CFF]/40 hover:bg-[#4F8CFF]/5 transition-all text-sm font-bold group">
                <Linkedin size={18} className="text-[#4F8CFF] group-hover:scale-110 transition-transform" /> LinkedIn Pessoal
              </a>
              <a href={institutional.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-[#F8FAFC] hover:border-[#4F8CFF]/40 hover:bg-[#4F8CFF]/5 transition-all text-sm font-bold group">
                <Youtube size={18} className="text-[#4F8CFF] group-hover:scale-110 transition-transform" /> YouTube Oficial
              </a>
              <a href={institutional.pinterest} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-[#F8FAFC] hover:border-[#4F8CFF]/40 hover:bg-[#4F8CFF]/5 transition-all text-sm font-bold group">
                <PinterestIcon size={18} className="text-[#4F8CFF] group-hover:scale-110 transition-transform" /> Pinterest
              </a>
            </div>
          </div>
          
          {/* Call to Action Card */}
          <div className="bg-gradient-to-br from-[#4F8CFF] to-[#2E70CE] rounded-[32px] p-10 space-y-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24 transition-transform duration-1000 group-hover:scale-150" />
            <Sparkles size={32} className="text-[#080A0F] opacity-80" />
            <h3 className="text-2xl font-black text-[#080A0F] tracking-tighter leading-tight relative z-10">
              Acelere sua <br /> Aprovação.
            </h3>
            <button 
              onClick={() => setView('mentorship')}
              className="w-full bg-[#080A0F] text-white py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-[#1A1F26] transition-all relative z-10 shadow-xl"
            >
              Conhecer Mentoria
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="bg-[#11141A] border border-[#4F8CFF]/20 rounded-[24px] p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#4F8CFF]/5" />
          <p className="text-[#98A2B3] text-xs md:text-sm leading-relaxed font-medium italic relative z-10 text-center">
            {institutional.medicalNotice}
          </p>
        </div>
      </div>
    </div>
  );
};
