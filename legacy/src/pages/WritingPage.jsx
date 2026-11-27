import React from 'react';
import {
  ArrowLeft,
  PenTool,
  List,
  BookOpen,
  Quote,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  Scale,
  ChevronRight,
  BarChart
} from 'lucide-react';

// Componente Sidebar incluído localmente para garantir a compilação e o funcionamento do Preview
const Sidebar = ({ setView, profileImg, telegram }) => (
  <div className="sticky top-24 space-y-6 text-left">
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-left">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#2E70CE] to-[#0A192F] p-1">
             <img src={profileImg || "/jeff-queiroz-perfil.webp"} alt="Jeff Queiroz" width="64" height="64" loading="lazy" decoding="async" className="w-full h-full rounded-full border-2 border-white object-cover object-top" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
        </div>
        <div className="text-left">
          <h3 className="font-black text-sm text-gray-900 flex items-center gap-1 leading-tight">
            Jefferson Queiroz <CheckCircle size={14} className="text-blue-600" fill="currentColor" />
          </h3>
          <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Medicina | UFMG</p>
        </div>
      </div>
      <p className="text-xs text-gray-600 italic leading-relaxed text-left">Conteúdo educacional sobre rotina, redação e organização de estudos.</p>
    </div>
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-left">
      <h3 className="font-black text-[10px] text-gray-400 mb-4 uppercase tracking-[0.2em] flex items-center gap-2"><BarChart size={12} /> Mais Lidas</h3>
      <div className="space-y-4 text-xs font-bold text-gray-800 text-left">
        <p onClick={() => setView(1)} className="cursor-pointer hover:text-blue-600 line-clamp-2 italic uppercase">1. Rotina de estudo com método</p>
        <p onClick={() => setView('flashcards_info')} className="cursor-pointer hover:text-blue-600">2. Neurociência dos Flashcards</p>
      </div>
    </div>
  </div>
);

const WritingPage = ({ setView, profileImg, telegram }) => {
  const handleSetView = setView || (() => {});
  const tgLink = telegram || "https://t.me/Euvouserdoutor";
  const profile = profileImg || "https://i.imgur.com/9QVE0X7.jpeg";

  const competencies = [
    { id: 'C1', label: 'Língua Culta', desc: 'Gramática, ortografia, pontuação.', peso: 'Alta — Erros básicos derrubam todas.' },
    { id: 'C2', label: 'Tema + Repertório', desc: 'Compreensão e conhecimento externo.', peso: 'Alta — Fuga ao tema = Nota Zero.' },
    { id: 'C3', label: 'Coerência', desc: 'Progressão de ideias e autoria.', peso: 'Alta — Deve avançar do início ao fim.' },
    { id: 'C4', label: 'Conectivos', desc: 'Mecanismos linguísticos de argumentação.', peso: 'Média — Garante fluência.' },
    { id: 'C5', label: 'Intervenção', desc: 'Proposta detalhada e cidadã.', peso: 'Alta — Onde maioria perde pontos.' }
  ];

  const connectives = [
    { func: 'Adição', ex: 'além disso, assim como' },
    { func: 'Adversidade', ex: 'entretanto, todavia, porém' },
    { func: 'Causa', ex: 'visto que, uma vez que' },
    { func: 'Consequência', ex: 'logo, portanto' },
    { func: 'Conclusão', ex: 'enfim, dessa forma' },
    { func: 'Exemplificação', ex: 'a exemplo de, tal como' }
  ];

  return (
    <div className="animate-in pb-20 text-left bg-[#F4F7FB] min-h-screen">
      <div className="bg-[#0A192F] text-white pt-12 pb-20 px-6 relative overflow-hidden">
        {/* Glow orbs — padrão Deep Blue */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E70CE]/20 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5CE1E6]/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 z-0"></div>

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center gap-6">
          <button onClick={() => handleSetView('materials')} className="inline-flex items-center gap-2 text-[10px] font-black text-blue-200 uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 hover:border-white/20 transition-all mb-2">
            <ArrowLeft size={14} /> Voltar para Materiais
          </button>
          <div className="inline-flex items-center justify-center gap-2 bg-[#A02070]/20 border border-[#A02070]/50 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(160,32,112,0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A02070] animate-pulse"></span>
            Método Nota 1000
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
            <span className="text-white">Redação </span>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#96A1DF] to-white">Premium</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-2xl font-medium">
            A redação do ENEM exige repertório, estrutura e treino constante. Organize as 5 competências com mais clareza.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 -mt-16 relative z-20">
        <div className="lg:w-2/3 bg-white rounded-[40px] p-8 md:p-16 shadow-2xl border border-gray-100">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-sans space-y-12">

            <section>
              <h2 className="text-3xl font-black text-[#0A192F] uppercase tracking-tight flex items-center gap-3">
                <Scale className="text-blue-600" size={28} /> As 5 Competências
              </h2>
              <p className="mt-4">Toda redação é corrigida por dois avaliadores, totalizando 1000 pontos. O 920+ exige domínio técnico de cada pilar:</p>
              <div className="mt-8 overflow-x-auto rounded-3xl border border-gray-200">
                <table className="w-full text-left">
                  <thead className="bg-[#0A192F] text-white">
                    <tr className="text-[10px] uppercase font-black tracking-widest">
                      <th className="p-5">Competência</th>
                      <th className="p-5">O que avalia</th>
                      <th className="p-5">Peso</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {competencies.map((c, idx) => (
                      <tr key={c.id} className={idx % 2 !== 0 ? 'bg-slate-50/50' : 'bg-white'}>
                        <td className="p-5 font-black text-blue-600 border-b border-gray-100">{c.id}</td>
                        <td className="p-5 border-b border-gray-100">
                          <span className="font-bold block text-gray-900">{c.label}</span>
                          <span className="text-[10px] text-gray-400 uppercase font-bold">{c.desc}</span>
                        </td>
                        <td className="p-5 border-b border-gray-100 font-medium text-gray-500 text-sm">{c.peso}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-slate-50 p-10 rounded-[40px] border border-gray-100">
              <h2 className="text-3xl font-black text-[#0A192F] uppercase tracking-tight mb-8">Estrutura dos 4 Parágrafos</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500">
                  <h4 className="font-black text-blue-600 uppercase text-xs mb-2 tracking-widest">Introdução (5 linhas)</h4>
                  <p className="text-sm">Repertório → Problematização → Tese com 2 argumentos.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-gray-200">
                  <h4 className="font-black text-gray-900 uppercase text-xs mb-2 tracking-widest">Desenvolvimentos (7 linhas cada)</h4>
                  <p className="text-sm">Tópico Frasal → Repertório → Causa → Fechamento crítico.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500">
                  <h4 className="font-black text-green-600 uppercase text-xs mb-2 tracking-widest">Conclusão (5 linhas)</h4>
                  <p className="text-sm font-bold text-green-800">5 elementos: Agente, Ação, Meio, Efeito, Detalhamento.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-[#0A192F] uppercase tracking-tight mb-8">Proposta Nota 1000</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-red-50 p-6 rounded-3xl border border-red-100 hover:shadow-md transition-shadow">
                  <p className="text-red-800 font-bold text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">❌ Proposta Fraca</p>
                  <p className="text-sm text-red-700 font-medium leading-relaxed">"O governo deve investir em educação."</p>
                </div>
                <div className="bg-[#F4F7FB] p-6 rounded-3xl border border-[#2E70CE]/20 hover:border-[#2E70CE]/50 hover:shadow-md transition-all">
                  <p className="text-[#2E70CE] font-bold text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">✅ Proposta Elite</p>
                  <p className="text-sm text-[#0A192F] font-medium leading-relaxed">"O Ministério deve implementar, por meio de políticas de formação continuada, programas de letramento digital..."</p>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-black text-[#0A192F] uppercase tracking-tight mb-6">Citações Coringa</h2>
                <div className="space-y-4">
                  {[
                    { n: "Aristóteles", c: "O homem é um animal político." },
                    { n: "Paulo Freire", c: "A educação transforma." },
                    { n: "Cidade de Deus", c: "Violência e desigualdade social." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 flex items-start gap-3">
                      <Quote size={16} className="text-blue-400 shrink-0" />
                      <div>
                        <p className="text-[10px] font-black text-blue-900 uppercase">{item.n}</p>
                        <p className="text-xs text-gray-700">{item.c}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#0A192F] uppercase tracking-tight mb-6">Conectivos Principais</h2>
                <div className="overflow-hidden rounded-2xl border border-gray-100">
                   <table className="w-full text-left text-xs">
                     <thead className="bg-slate-50">
                       <tr><th className="p-3 font-black text-[#0A192F]">Função</th><th className="p-3 font-black text-[#0A192F]">Exemplo</th></tr>
                     </thead>
                     <tbody>
                       {connectives.slice(0, 4).map((c, i) => (
                         <tr key={i} className="border-t border-gray-50">
                           <td className="p-3 font-bold text-blue-600">{c.func}</td>
                           <td className="p-3 text-gray-500 italic">{c.ex}</td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                </div>
              </div>
            </section>

            <section className="bg-red-50/30 p-10 rounded-[40px] border border-red-100">
              <h2 className="text-2xl font-black text-red-900 uppercase tracking-tight flex items-center gap-3 mb-6">
                <AlertTriangle size={24} /> O que derruba sua nota
              </h2>
              <ul className="space-y-3 text-sm font-bold text-red-800 uppercase tracking-tight">
                <li className="flex gap-3"><span>•</span> <span>Fuga ao tema (Nota Zero)</span></li>
                <li className="flex gap-3"><span>•</span> <span>Proposta genérica</span></li>
                <li className="flex gap-3"><span>•</span> <span>Escrever em primeira pessoa</span></li>
                <li className="flex gap-3"><span>•</span> <span>Menos de 7 ou mais de 30 linhas</span></li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-[#0A192F] to-[#11294D] p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-500 p-3 rounded-2xl"><MessageSquare size={24} /></div>
                  <h2 className="text-2xl font-black uppercase tracking-tight italic">Mentoria EuVouSerDoutor</h2>
                </div>
                <p className="opacity-90 leading-relaxed text-lg mb-8">
                  Flashcards de vocabulário + simulados semanais elevaram a média dos alunos para <strong>920 pontos</strong>.
                </p>
                <a href={tgLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#5CE1E6] hover:bg-[#4bcad0] text-[#0A192F] px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(92,225,230,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(92,225,230,0.5)] transition-all duration-300">
                  Garantir vaga na Mentoria <PenTool size={20} />
                </a>
              </div>
            </section>

          </div>
        </div>
        <div className="lg:w-1/3"><Sidebar setView={handleSetView} profileImg={profile} telegram={tgLink} /></div>
      </div>
    </div>
  );
};

export default WritingPage;
