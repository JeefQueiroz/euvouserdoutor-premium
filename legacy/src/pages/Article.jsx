import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { institutional } from '../institutional';

export const Article = ({ setView, profileImg }) => (
  <div className="animate-in pb-20 text-left bg-[#080A0F] text-[#F8FAFC] min-h-screen">
    <div className="bg-[#0A192F] border-b border-white/[0.05] pt-12 pb-20 px-6 relative overflow-hidden text-left">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(79,140,255,0.12),transparent_40%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <button
          type="button"
          onClick={() => setView('news')}
          className="inline-flex items-center gap-2 text-[9px] font-black text-[#4F8CFF] uppercase bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-lg hover:bg-white/[0.06] transition-all mb-10"
        >
          <ArrowLeft size={12} strokeWidth={3} /> Voltar
        </button>

        <div className="max-w-4xl space-y-6">
          <span className="inline-flex items-center gap-2 bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-[0.25em]">
            Técnicas de Estudo
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-[#F8FAFC]">
            Como estudar para Medicina com método e constância
          </h1>
          <p className="text-base md:text-lg text-[#98A2B3] font-medium leading-relaxed max-w-2xl">
            Um guia editorial sobre rotina, revisão e organização para transformar esforço em processo de estudo.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[#98A2B3] text-[10px] font-black uppercase tracking-widest pt-4 border-t border-white/[0.03]">
            <span>Por Jeff Queiroz</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>EuVouSerDoutor</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>Agosto 2026</span>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 -mt-10 relative z-20">
      <article className="lg:col-span-8 xl:col-span-9">
        <div className="bg-[#11141A] rounded-[28px] p-6 md:p-10 shadow-2xl border border-white/[0.05] premium-border">
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-4">
              <img src={profileImg.replace('.jpg', '.webp')} alt="Jeff Queiroz" width="320" height="400" decoding="async" className="w-full h-auto rounded-2xl shadow-sm object-cover aspect-[4/5] border border-white/[0.05]" />
            </div>
            <div className="md:col-span-8 space-y-5 text-[#98A2B3] leading-relaxed text-sm md:text-base font-medium">
              <p className="text-lg md:text-xl text-[#F8FAFC] font-bold leading-relaxed border-l-4 border-[#4F8CFF] pl-6">
                Estudar para Medicina exige método, constância e capacidade de revisar o próprio processo sem depender de fórmulas prontas.
              </p>
              <p>
                O EuVouSerDoutor reúne conteúdos educacionais, materiais de apoio e ideias de organização para estudantes e vestibulandos que querem mais clareza na rotina.
              </p>
            </div>
          </section>

          <div className="space-y-10 text-[#98A2B3] leading-relaxed text-sm md:text-base font-medium">
            <section>
              <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-4 tracking-tighter">Organização antes de volume</h2>
              <p>
                Uma rotina eficiente não depende apenas de horas acumuladas. O ponto central é saber o que estudar, quando revisar e como transformar erros em decisões para a próxima semana.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-4 tracking-tighter">Pilares de uma rotina clara</h2>
              <ul className="space-y-3 mt-4">
                {[
                  'Planejamento semanal com prioridades visíveis.',
                  'Revisão ativa para diminuir releitura passiva.',
                  'Registro de erros depois de exercícios e simulados.',
                  'Ajustes periódicos conforme desempenho real.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#F8FAFC]">
                    <CheckCircle2 className="text-[#4F8CFF] shrink-0 mt-0.5" size={16} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>

      <div className="lg:col-span-4 xl:col-span-3">
        <Sidebar setView={setView} />
      </div>
    </div>
  </div>
);
