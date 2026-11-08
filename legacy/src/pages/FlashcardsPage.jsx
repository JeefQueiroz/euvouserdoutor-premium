import { Microscope, Zap, Send, ArrowLeft, Brain, LineChart, BookOpen, CheckCircle } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';

export const FlashcardsPage = ({ setView, profileImg, telegram }) => (
  <div className="animate-in pb-20 text-left bg-[#080A0F] text-[#F8FAFC] min-h-screen">
    <div className="bg-[#0A192F] border-b border-white/[0.05] pt-12 pb-20 px-6 text-left relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(79,140,255,0.12),transparent_40%)]" />
      
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center gap-4">
        <button onClick={() => setView('materials')} className="flex items-center gap-2 text-[9px] font-black text-[#4F8CFF] uppercase bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-lg hover:bg-white/[0.06] transition-all mb-4">
          <ArrowLeft size={12} strokeWidth={3} /> Voltar
        </button>
        <span className="inline-flex items-center gap-2 bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-[0.25em]">
          Estudo Ativo & Revisão
        </span>
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-[#F8FAFC]">
          Flashcards Doutor
        </h1>
        <p className="text-base md:text-lg text-[#98A2B3] max-w-2xl font-medium leading-relaxed">
          A união perfeita entre <strong className="text-white font-bold">Active Recall</strong> e <strong className="text-white font-bold">Repetição Espaçada</strong> para Medicina.
        </p>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 -mt-10 relative z-20">
      <div className="lg:col-span-8 space-y-6">
        
        <div className="bg-[#11141A] rounded-[28px] p-6 md:p-10 shadow-2xl border border-white/[0.05] text-left space-y-6 premium-border">
          <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] tracking-tighter flex items-center gap-3">
            <Brain className="text-[#4F8CFF]" size={24} /> Estudo Ativo e Revisão
          </h2>
          
          <div className="space-y-4 text-[#98A2B3] leading-relaxed text-sm md:text-base font-medium">
            <p>
              Estudos sobre memória mostram que conteúdos novos tendem a ser esquecidos quando não são revisitados. Revisões ativas programadas ajudam a transformar leitura em recuperação de informação.
            </p>
            <p>
              Ao invés de reler apostilas grifadas, os flashcards estimulam o cérebro a <em>buscar</em> a resposta antes de virar a carta. Isso favorece revisões mais profundas e duradouras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/[0.05]">
              <h4 className="font-black text-[#F8FAFC] mb-2 text-base">Estudo Tradicional</h4>
              <p className="text-xs text-[#98A2B3] leading-relaxed font-medium">Gasto elevado de tempo criando resumos estáticos, com risco de sensação de domínio sem teste real de lembrança.</p>
            </div>
            <div className="bg-[#4F8CFF]/5 p-5 rounded-2xl border border-[#4F8CFF]/20">
              <h4 className="font-black text-[#F8FAFC] mb-2 text-base">Flashcards Ativos</h4>
              <p className="text-xs text-[#98A2B3] leading-relaxed font-medium">A repetição espaçada ajuda a distribuir novos contatos com o tema e favorece a retenção ao longo da preparação.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="lg:col-span-4">
        <Sidebar setView={setView} />
      </div>
    </div>
  </div>
);
