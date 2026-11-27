import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, CheckSquare, ClipboardCheck, FileText, Layers, PenTool, Sparkles, Stethoscope, TimerReset, BookOpen, Target, Zap, ShieldCheck, Download, Clock } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';

export const Materials = ({ setView }) => {
  const materials = [
    {
      title: 'Manual de Flashcards Doutor',
      description: 'O guia definitivo para dominar a Recuperação Ativa e a Repetição Espaçada na preparação para Medicina.',
      methodology: 'Active Recall & Spaced Repetition',
      category: 'Flashcards',
      badge: 'Gratuito',
      icon: Layers,
      target: 'flashcards',
      stats: '15 min de leitura'
    },
    {
      title: 'Cronograma Estratégico UFMG',
      description: 'A estrutura visual de rotina que utilizei para organizar meus estudos e revisões na Federal.',
      methodology: 'Time Blocking & Priorização',
      category: 'Cronogramas',
      badge: 'Em breve',
      icon: Calendar,
      disabled: true,
      stats: 'PDF Interativo'
    },
    {
      title: 'Checklist de Redação Nota 1000',
      description: 'Pontos de conferência técnica para garantir estrutura, repertório e clareza argumentativa máxima.',
      methodology: 'Análise de Competências',
      category: 'Redação',
      badge: 'Atualizado',
      icon: PenTool,
      target: 'mentorship',
      stats: 'Guia Prático'
    },
    {
      title: 'Guia de Ciências da Natureza',
      description: 'Como priorizar os temas de maior incidência e organizar revisões de Biologia, Química e Física.',
      methodology: 'Estudo por Incidência',
      category: 'Natureza',
      badge: 'Em breve',
      icon: Stethoscope,
      disabled: true,
      stats: 'Mapa de Calor'
    },
    {
      title: 'Checklist de Revisão Semanal',
      description: 'O roteiro de domingo para fechar a semana, mapear lacunas e planejar o próximo ciclo de foco.',
      methodology: 'Autoavaliação Crítica',
      category: 'Checklists',
      badge: 'Novo',
      icon: ClipboardCheck,
      disabled: true,
      stats: '5 min de uso'
    },
    {
      title: 'Planner de Estudos Ciclo Básico',
      description: 'Organização específica para acadêmicos de Medicina distribuírem teoria e prática hospitalar.',
      methodology: 'Gestão de Ciclo Acadêmico',
      category: 'Acadêmico',
      badge: 'Em breve',
      icon: TimerReset,
      disabled: true,
      stats: 'Template Notion'
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
                <Sparkles size={10} className="animate-pulse" /> Biblioteca de Recursos
              </span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-[#F8FAFC]">
                Materiais de Apoio & Métodos
              </h1>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.08] px-4 py-3 rounded-2xl flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#F8FAFC]">Plantão Acadêmico</p>
                <p className="text-[11px] text-[#98A2B3]">Novos guias em breve</p>
              </div>
            </div>
          </div>
          
          <p className="text-base md:text-lg text-[#98A2B3] leading-relaxed max-w-2xl font-medium border-t border-white/[0.05] pt-6">
            Recursos educacionais de alta performance, flashcards e cronogramas estruturados com o rigor acadêmico da <strong>Medicina UFMG</strong> para transformar seu aprendizado.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10 relative z-20">
        <div className="lg:col-span-8 xl:col-span-9 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materials.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => !item.disabled && setView(item.target)}
                  className={`group bg-[#11141A] border border-white/[0.05] rounded-[32px] p-8 shadow-2xl flex flex-col justify-between transition-all duration-500 premium-border relative overflow-hidden ${
                    item.disabled ? 'opacity-70 cursor-default' : 'cursor-pointer hover:border-[#4F8CFF]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]'
                  }`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 bg-white/[0.03] text-[#4F8CFF] rounded-2xl flex items-center justify-center border border-white/[0.05] group-hover:scale-110 group-hover:bg-[#4F8CFF]/10 transition-all duration-500">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md border ${
                          item.badge === 'Novo' || item.badge === 'Atualizado' 
                            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' 
                            : 'bg-[#4F8CFF]/10 border-[#4F8CFF]/20 text-[#4F8CFF]'
                        }`}>
                          {item.badge}
                        </span>
                        <span className="text-[9px] font-bold text-[#98A2B3]/60 uppercase tracking-widest">{item.stats}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] font-black text-[#4F8CFF] uppercase tracking-[0.2em] mb-1 block">{item.category}</span>
                        <h2 className="text-2xl font-black text-[#F8FAFC] tracking-tighter group-hover:text-white transition-colors">
                          {item.title}
                        </h2>
                      </div>
                      
                      <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-2 pt-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]" />
                        <span className="text-[10px] font-bold text-[#F8FAFC]/80 uppercase tracking-widest">{item.methodology}</span>
                      </div>
                    </div>
                  </div>

                  {!item.disabled ? (
                    <div className="mt-10 pt-6 border-t border-white/[0.05] flex items-center justify-between group/btn relative z-10">
                      <span className="text-[10px] font-black text-[#4F8CFF] uppercase tracking-widest">Acessar Material</span>
                      <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center group-hover:bg-[#4F8CFF] group-hover:text-[#080A0F] transition-all duration-500">
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  ) : (
                    <div className="mt-10 pt-6 border-t border-white/[0.05] flex items-center justify-between relative z-10">
                      <span className="text-[10px] font-black text-[#98A2B3]/40 uppercase tracking-widest italic">Disponível em breve</span>
                      <Download size={16} className="text-[#98A2B3]/20" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Info Section */}
          <div className="bg-[#11141A] rounded-[32px] p-10 border border-white/[0.05] premium-border space-y-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-black text-[#F8FAFC] tracking-tighter mb-4">Por que nossos materiais são diferentes?</h3>
              <p className="text-[#98A2B3] text-base leading-relaxed font-medium">
                Não entregamos apenas PDFs. Cada recurso da nossa biblioteca é construído sobre pilares de <strong>Neurociência da Aprendizagem</strong>. O objetivo é reduzir o tempo de estudo passivo e maximizar a retenção de longo prazo, essencial para a densa carga horária da Medicina.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/[0.05]">
              <div className="space-y-3">
                <div className="text-[#4F8CFF] font-black text-3xl tracking-tighter">01.</div>
                <h4 className="text-white font-black text-sm uppercase tracking-widest">Recuperação Ativa</h4>
                <p className="text-[#98A2B3] text-xs leading-relaxed font-medium">Forçamos o cérebro a buscar a informação, fortalecendo as sinapses e a memória.</p>
              </div>
              <div className="space-y-3">
                <div className="text-[#4F8CFF] font-black text-3xl tracking-tighter">02.</div>
                <h4 className="text-white font-black text-sm uppercase tracking-widest">Revisão Espaçada</h4>
                <p className="text-[#98A2B3] text-xs leading-relaxed font-medium">Intervalos matematicamente planejados para combater a Curva do Esquecimento.</p>
              </div>
              <div className="space-y-3">
                <div className="text-[#4F8CFF] font-black text-3xl tracking-tighter">03.</div>
                <h4 className="text-white font-black text-sm uppercase tracking-widest">Foco Seletivo</h4>
                <p className="text-[#98A2B3] text-xs leading-relaxed font-medium">Priorização baseada em dados de incidência das maiores provas do país.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 xl:col-span-3">
          <Sidebar setView={setView} />
        </div>
      </div>
    </div>
  );
};
