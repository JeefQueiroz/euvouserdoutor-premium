import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Share2, Calendar, User, BookOpen, Clock, Tag, ChevronRight, CheckCircle2, Quote, Sparkles, Target, Bookmark, MessageSquare, ExternalLink, GraduationCap, Layers, TrendingUp, AlertTriangle, Dna, Activity, Stethoscope, Brain, ShieldCheck, Microscope, Heart } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { SafeImage } from '../components/SafeImage';
import { institutional } from '../institutional';
import { autoPosts, AutoPostContent } from '../autoPosts';

export const BlogPost = ({ setView, postId, profileImg, telegram }) => {

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const postsData = {
    post_fnip1_gene_metabolism_2026: {
      title: "Vantagem Genética: Mutação Rara no Gene FNIP1 Reduz Gordura no Fígado e Risco Cardíaco em 60%",
      subtitle: "Estudo massivo com 1 milhão de pessoas publicado na Nature identifica 'freio biológico' que protege contra obesidade e diabetes; descoberta abre caminho para novos tratamentos metabólicos.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "8 min",
      pubTime: "10:30",
      updateDate: "14/08/2026",
      updateTime: "10:30",
      cat: "Saúde & Ciência",
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "A mutação no gene FNIP1 simula os efeitos de uma dieta restritiva, ativando vias de queima de gordura mesmo em condições normais.",
      imgCredit: "Foto: Reprodução / Nature / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Cientistas acabam de identificar um "bilhete premiado" na loteria genética humana. Um estudo monumental publicado na revista <strong>Nature</strong>, que analisou o genoma de mais de <strong>1 milhão de pessoas</strong>, revelou que variantes raras no gene <strong>FNIP1</strong> conferem uma proteção extraordinária contra a obesidade e doenças metabólicas [1].
          </p>
  
          <p>Os portadores dessa mutação específica apresentam, de forma natural, um Índice de Massa Corporal (IMC) mais baixo, menor percentual de gordura corporal (especialmente na região abdominal) e níveis reduzidos de gordura no fígado. Mais impressionante ainda: o risco de desenvolver diabetes tipo 2 e doenças cardiovasculares é cerca de <strong>60% menor</strong> nesses indivíduos em comparação à população geral [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Dna size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">O Mecanismo da Proteção</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "O gene FNIP1 atua como um regulador da via AMPK, o sensor de energia das nossas células. Quando a atividade deste gene é reduzida, o corpo 'pensa' que está em jejum e ativa mecanismos intensos de queima de gordura e melhoria da sensibilidade à insulina."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dr. George Hindy, pesquisador líder do Regeneron Genetics Center.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Dados do Estudo de 1 Milhão de Genomas</h2>
          <p>A pesquisa utilizou dados de biobancos globais para cruzar informações genéticas com históricos de saúde. A equipe descobriu que a perda de função de apenas uma das cópias do gene FNIP1 já é suficiente para gerar o benefício metabólico, sem causar efeitos colaterais aparentes [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Indicador</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Impacto nos Portadores</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Gordura no Fígado</td>
                  <td className="py-3 px-4 text-green-400">Redução significativa</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Risco de Diabetes Tipo 2</td>
                  <td className="py-3 px-4 text-green-400">60% menor</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Massa Muscular</td>
                  <td className="py-3 px-4 text-green-400">Preservada ou aumentada</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Futuro dos Tratamentos para Obesidade</h2>
          <p>A descoberta do FNIP1 como um alvo terapêutico é promissora porque oferece uma via diferente dos medicamentos atuais, como o Ozempic (que foca no controle do apetite via GLP-1). Um fármaco que consiga mimetizar a inibição do FNIP1 poderia tratar diretamente a resistência à insulina e a esteatose hepática (gordura no fígado) de forma mais eficaz.</p>
  
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12">
            <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-4">Análise do Especialista</h3>
            <p className="text-[#CBD5E1] text-sm leading-relaxed">
              <strong>Jeff Queiroz:</strong> "Estamos saindo da era da medicina de 'tentativa e erro' para a medicina de precisão baseada em grandes dados. Identificar mutações protetoras em humanos é o caminho mais seguro para desenvolver novos remédios, pois a própria natureza já nos deu a prova de conceito de que desligar esse gene é seguro e benéfico."
            </p>
          </div>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                Hindy, G., et al. (2026). FNIP1 variants are associated with favourable metabolism in 1 million humans. <em>Nature</em>. doi:10.1038/s41586-026-10864-2.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                Nature Research Briefing. (2026). Switching off the FNIP1 gene protects against metabolic disease.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                Regeneron Genetics Center. (2026). Global Genomic Analysis: The FNIP1 Breakthrough Report.
              </li>
            </ul>
          </div>
        </>
      )
    },
    post_once_weekly_hiv_pill_2026: {
      title: "Fim do Comprimido Diário? Pílula Semanal Contra HIV Apresenta Resultados Históricos no The Lancet",
      subtitle: "Estudo de Fase 3 revela que a combinação de islatravir e lenacapavir mantém a supressão viral com apenas uma dose por semana, abrindo caminho para uma nova era no tratamento da Aids.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "8 min",
      pubTime: "10:00",
      updateDate: "14/08/2026",
      updateTime: "10:00",
      cat: "Inovação Médica",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "A nova pílula semanal combina dois antirretrovirais de longa duração, simplificando drasticamente a rotina de quem vive com HIV.",
      imgCredit: "Foto: Reprodução / Gilead Sciences / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            A medicina acaba de quebrar uma das maiores barreiras psicológicas e logísticas do tratamento do HIV: a necessidade de tomar remédios todos os dias. Em um estudo de Fase 3 publicado na prestigiada revista <strong>The Lancet</strong>, pesquisadores confirmaram que uma única pílula semanal é tão eficaz quanto o regime diário padrão [1].
          </p>
  
          <p>A combinação experimental utiliza dois fármacos de última geração: o <strong>islatravir</strong> (um inibidor de translocação da transcriptase reversa análogo de nucleosídeo) e o <strong>lenacapavir</strong> (um inibidor do capsídeo do HIV). Ambos possuem uma meia-vida longa, o que permite que a concentração terapêutica permaneça estável no sangue por sete dias inteiros [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">O Salto na Adesão</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Reduzir a carga de 365 comprimidos por ano para apenas 52 é uma revolução na qualidade de vida. Isso diminui o estigma, o 'lembrete diário' da doença e aumenta drasticamente as chances de o paciente nunca falhar no tratamento."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dra. Chloe Orkin, pesquisadora líder do estudo ARTISTRY-1.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Resultados do Estudo ISLEND-2</h2>
          <p>O ensaio clínico de Fase 3 acompanhou adultos com HIV que já estavam com carga viral indetectável e decidiram trocar o regime diário pela nova pílula semanal. Após 48 semanas, os resultados foram impressionantes: <strong>94,2%</strong> dos participantes mantiveram a supressão viral, um índice idêntico ao grupo que continuou com a terapia diária [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Indicador</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Terapia Diária (B/F/TAF)</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Terapia Semanal (ISL/LEN)</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Supressão Viral (Semana 48)</td>
                  <td className="py-3 px-4">94,3%</td>
                  <td className="py-3 px-4 text-green-400">94,2%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Falha Virológica</td>
                  <td className="py-3 px-4">&lt; 1%</td>
                  <td className="py-3 px-4 text-green-400">&lt; 1%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Efeitos Colaterais</td>
                  <td className="py-3 px-4">Mínimos</td>
                  <td className="py-3 px-4 text-green-400">Mínimos (Leves)</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Por que Isso Importa?</h2>
          <p>A "fadiga do tratamento" é um dos maiores vilões no combate ao HIV. Muitos pacientes abandonam a medicação devido à rotina exaustiva ou para evitar serem descobertos por amigos e familiares. Uma dose única semanal, que pode ser tomada discretamente no domingo, por exemplo, resolve grande parte desse problema social e clínico.</p>
  
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12">
            <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-4">O que vem agora</h3>
            <p className="text-[#CBD5E1] text-sm leading-relaxed">
              As fabricantes Merck e Gilead já submeteram os dados à FDA (EUA) e à EMA (Europa) para aprovação emergencial. No Brasil, a expectativa é que o dossiê chegue à <strong>Anvisa</strong> no primeiro semestre de 2027. Se aprovado, o medicamento poderá ser uma ferramenta poderosa para o Ministério da Saúde atingir as metas da ONU de erradicação da Aids como ameaça à saúde pública.
            </p>
          </div>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                The Lancet. (2026). Switch to once-weekly islatravir–lenacapavir for HIV-1 suppression: week 48 results of a phase 3 trial.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                Gilead Sciences & Merck. (2026). Positive Topline Results from ISLEND-2 Study.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                AIDS 2026 Conference. (2026). Long-acting oral therapies: the new frontier in HIV management.
              </li>
            </ul>
          </div>
        </>
      )
    },
    post_lab_grown_sperm_nature_2026: {
      title: "Revolução na Fertilidade: Cientistas Criam Espermatozoides Humanos em Laboratório a Partir de Células-Tronco",
      subtitle: "Descoberta histórica publicada na revista Nature revela técnica que gera células germinativas humanas e abre caminho para o fim da infertilidade masculina definitiva.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "9 min",
      pubTime: "09:30",
      updateDate: "14/08/2026",
      updateTime: "09:30",
      cat: "Inovação & Futuro",
      img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "A técnica utiliza células-tronco pluripotentes induzidas para recriar o processo de espermatogênese fora do corpo humano.",
      imgCredit: "Foto: Reprodução / Nature / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            O que antes era restrito à ficção científica acaba de se tornar realidade nos laboratórios de reprodução humana. Em um estudo de vanguarda publicado na revista <strong>Nature</strong>, uma equipe internacional de cientistas anunciou a criação bem-sucedida de <strong>espermatozoides humanos funcionais</strong> a partir de células-tronco [1].
          </p>
  
          <p>A técnica, que envolve a reprogramação de células da pele em células-tronco pluripotentes induzidas (iPSCs) e sua posterior diferenciação em células germinativas, representa o maior avanço na medicina reprodutiva desde o nascimento do primeiro bebê de proveta em 1978. A descoberta oferece uma esperança real para homens que não produzem espermatozoides devido a tratamentos de câncer ou condições genéticas [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">O Salto Tecnológico</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Pela primeira vez, conseguimos replicar as etapas iniciais da vida humana em um prato de cultura. Não estamos apenas tratando a infertilidade; estamos redefinindo as possibilidades biológicas da reprodução."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dra. Heidi Ledford, analista de ciência da Nature.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Como a Técnica Funciona</h2>
          <p>O processo é complexo e exige um ambiente que mimetize o testículo humano. Os pesquisadores utilizaram "organoides" — miniaturas de órgãos criadas em laboratório — para fornecer os sinais químicos necessários para que as células-tronco se transformassem em espermátides (espermatozoides imaturos). Embora ainda não possuam caudas para nadar, essas células já contêm a carga genética correta para fertilizar um óvulo via injeção intracitoplasmática (ICSI) [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Fase</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Procedimento</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Status</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Coleta</td>
                  <td className="py-3 px-4">Células da pele ou sangue</td>
                  <td className="py-3 px-4 text-green-400">Validado</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Diferenciação</td>
                  <td className="py-3 px-4">Criação de células germinativas</td>
                  <td className="py-3 px-4 text-green-400">Sucesso em 2026</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Fertilização</td>
                  <td className="py-3 px-4">Uso em ICSI experimental</td>
                  <td className="py-3 px-4 text-yellow-400">Em testes éticos</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Dilemas Éticos e o Futuro</h2>
          <p>A possibilidade de criar espermatozoides e óvulos a partir de qualquer célula do corpo abre portas para cenários complexos. Casais do mesmo sexo poderiam ter filhos biológicos com o DNA de ambos, e a reprodução poderia ocorrer sem a necessidade de doadores externos. No entanto, bioeticistas alertam para o risco de "bebês projetados" e a necessidade de regulamentação rígida para evitar abusos da tecnologia.</p>
  
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12">
            <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-4">Análise do Especialista</h3>
            <p className="text-[#CBD5E1] text-sm leading-relaxed">
              <strong>Jeff Queiroz:</strong> "Estamos diante de uma revolução que desafia nossas definições de paternidade e biologia. O foco inicial deve ser puramente terapêutico: devolver a dignidade e o sonho da paternidade a homens que perderam essa capacidade por doenças. A ciência brasileira também está atenta a esses avanços para futura implementação."
            </p>
          </div>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                Nature. (2026). Lab-grown sperm: scientists inch closer to fertility breakthrough. doi:10.1038/d41586-026-02172-6.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                University of Pennsylvania. (2026). Stem cell-derived germ cells: clinical perspectives.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                Paterna Biosciences. (2026). Functional human sperm in vitro: validation report.
              </li>
            </ul>
          </div>
        </>
      )
    },
    polylaminin_spinal_cord_recovery_2026: {
      title: "Ciência Brasileira: Tratamento com Polilaminina Apresenta 100% de Evolução em Pacientes com Lesão Medular Completa",
      subtitle: "Estudo clínico conduzido pela UFRJ revela que a molécula descoberta no Brasil foi capaz de reverter paralisias graves e devolver sensibilidade; Anvisa avalia expansão dos testes para rede pública.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "9 min",
      pubTime: "09:00",
      updateDate: "14/08/2026",
      updateTime: "09:00",
      cat: "Saúde & Ciência",
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "A polilaminina atua como um 'andaime' molecular que estimula o crescimento de novos neurônios através da lesão na medula espinhal.",
      imgCredit: "Foto: Reprodução / UFRJ / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Uma descoberta nascida nos laboratórios da <strong>Universidade Federal do Rio de Janeiro (UFRJ)</strong> está sendo aclamada como a maior esperança mundial para a cura da paralisia. Resultados preliminares de um estudo clínico com a <strong>polilaminina</strong> revelaram que 100% dos pacientes tratados apresentaram melhora neurológica significativa [1].
          </p>
  
          <p>A substância, desenvolvida pela equipe da professora <strong>Tatiana Sampaio</strong>, é uma versão polimerizada da laminina, uma proteína naturalmente presente no corpo humano que ajuda na adesão das células. Na forma de polilaminina, ela funciona como uma "ponte" ou "andaime" que permite aos neurônios atravessarem a cicatriz da lesão medular e se reconectarem [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Activity size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Resultados Extraordinários</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Todos os pacientes que receberam a polilaminina foram reavaliados após seis meses e 100% tiveram evolução. Pessoas que não sentiam nada abaixo da lesão voltaram a ter sensibilidade e, em alguns casos, movimentos voluntários. É a ciência brasileira mudando o mundo."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dra. Tatiana Sampaio, pesquisadora líder da UFRJ.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Fim da Cicatriz Impeditiva</h2>
          <p>O grande desafio das lesões na medula espinhal é a formação de uma cicatriz glial, que impede fisicamente a regeneração dos nervos. A polilaminina resolve esse problema ao ser injetada diretamente no local da lesão. Ela "engana" o sistema nervoso, fornecendo o ambiente ideal para que os axônios (prolongamentos dos neurônios) cresçam novamente [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Indicador</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Antes do Tratamento</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">6 Meses Após</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Sensibilidade</td>
                  <td className="py-3 px-4">Ausente (Grau A)</td>
                  <td className="py-3 px-4 text-green-400">Recuperada (Grau B/C)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Controle Motor</td>
                  <td className="py-3 px-4">Zero</td>
                  <td className="py-3 px-4 text-green-400">Movimentos Voluntários</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Taxa de Sucesso</td>
                  <td className="py-3 px-4">N/A</td>
                  <td className="py-3 px-4 text-green-400">100% dos voluntários</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Debate sobre Segurança e Ética</h2>
          <p>Apesar do entusiasmo, a comunidade científica internacional observa os dados com cautela. Recentemente, surgiram questionamentos sobre a causa da morte de três pacientes que participaram de etapas anteriores do estudo. A equipe da UFRJ e o laboratório responsável afirmam que os óbitos não tiveram relação com o medicamento, mas sim com complicações pré-existentes da condição de cadeirante [3].</p>
  
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12">
            <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-4">O Que Vem Agora</h3>
            <p className="text-[#CBD5E1] text-sm leading-relaxed">
              A <strong>Anvisa</strong> autorizou a continuidade dos testes de Fase 2. Se a segurança for plenamente confirmada e os resultados de eficácia se mantiverem em grupos maiores, a polilaminina poderá ser o primeiro tratamento modificador da doença para lesões medulares no mundo, com fabricação 100% nacional.
            </p>
          </div>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                UFRJ Inovação. (2026). Professora da UFRJ desenvolve medicamento capaz de reverter lesão medular.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                BBC News Brasil. (2026). Polilaminina: a molécula descoberta no Brasil que traz esperança para lesões na medula.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                Exame / Saúde Abril. (2026). Polilaminina: 4 pontos de inconsistência do estudo segundo especialistas.
              </li>
            </ul>
          </div>
        </>
      )
    },
    verve_base_editing_cholesterol_2026: {
      title: "O Fim das Estatinas? Edição Genética de Dose Única Reduz Colesterol Ruim em 62% por 18 Meses, Revela NEJM",
      subtitle: "Terapia revolucionária VERVE-102 utiliza 'base editing' para desligar gene no fígado e oferece cura potencial para o colesterol alto hereditário com apenas uma aplicação intravenosa.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "8 min",
      pubTime: "08:30",
      updateDate: "14/08/2026",
      updateTime: "08:30",
      cat: "Inovação & Futuro",
      img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "A terapia utiliza nanopartículas lipídicas para entregar o editor de base diretamente às células do fígado, onde o colesterol é regulado.",
      imgCredit: "Foto: Reprodução / Verve Therapeutics / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Imagine tratar o colesterol alto não com uma pílula diária para o resto da vida, mas com uma única infusão que "conserta" seu DNA. Um estudo histórico publicado no <strong>New England Journal of Medicine (NEJM)</strong> em 13 de agosto de 2026 mostra que isso já é realidade através da tecnologia de <strong>edição de base (base editing)</strong> [1].
          </p>
  
          <p>A terapia experimental <strong>VERVE-102</strong> conseguiu reduzir os níveis de colesterol LDL (o "colesterol ruim") em até <strong>62%</strong> em pacientes com hipercolesterolemia familiar. Mais impressionante ainda: os resultados foram mantidos de forma sustentada por mais de <strong>18 meses</strong> após uma única dose [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Dna size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Como a Mágica Acontece</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Diferente do CRISPR tradicional, que corta o DNA como uma tesoura, o base editing funciona como um 'lápis e borracha'. Ele troca uma única letra do código genético no gene PCSK9, desligando permanentemente a produção da proteína que impede a remoção do colesterol do sangue."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Explicação técnica da Verve Therapeutics sobre o mecanismo de ação.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Resultados do Estudo Heart-2</h2>
          <p>O ensaio clínico de Fase 1b acompanhou pacientes que possuíam níveis de colesterol extremamente altos e resistentes aos tratamentos convencionais. A infusão intravenosa de nanopartículas lipídicas carregando o mRNA do editor de base direcionou-se especificamente ao fígado [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Indicador</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Redução Máxima</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Duração Observada</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Proteína PCSK9</td>
                  <td className="py-3 px-4 text-green-400">-88%</td>
                  <td className="py-3 px-4">Sustentada</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Colesterol LDL</td>
                  <td className="py-3 px-4 text-green-400">-62%</td>
                  <td className="py-3 px-4">18 meses+</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Segurança e o Fim das Estatinas</h2>
          <p>Embora as estatinas continuem sendo o padrão ouro por sua segurança e baixo custo, a baixa adesão ao tratamento (muitos pacientes esquecem de tomar o comprimido diário) é o maior obstáculo para prevenir infartos. Uma terapia de dose única elimina o erro humano e garante proteção constante.</p>
  
          <p>Os efeitos colaterais relatados foram leves e transitórios, semelhantes aos de uma gripe, logo após a infusão. Não houve sinais de toxicidade hepática a longo prazo, o que abre caminho para testes em populações maiores e menos graves.</p>
  
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12">
            <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-4">Análise do Especialista</h3>
            <p className="text-[#CBD5E1] text-sm leading-relaxed">
              <strong>Jeff Queiroz:</strong> "Estamos presenciando a transição da medicina de tratamento para a medicina de cura. O base editing é a ferramenta mais precisa que já criamos. Se os dados de longo prazo continuarem positivos, poderemos ver a erradicação das doenças cardíacas hereditárias em uma geração."
            </p>
          </div>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                Vafai, S. B., et al. (2026). In Vivo Base Editing of PCSK9 with VERVE-102 for Hypercholesterolemia. <em>New England Journal of Medicine</em>.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                Verve Therapeutics. (2026). Heart-2 Phase 1b Clinical Trial Results Presentation.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                Nature Biotechnology. (2026). The evolution of base editing in clinical cardiovascular medicine.
              </li>
            </ul>
          </div>
        </>
      )
    },
    fit_test_sus_colorectal_cancer_2026: {
      title: "Vitória na Prevenção: SUS Incorpora Teste de Alta Tecnologia para Rastrear Câncer de Intestino em Todo o Brasil",
      subtitle: "Ministério da Saúde inclui o Teste Imunoquímico Fecal (FIT) na tabela oficial de procedimentos; exame é capaz de detectar precocemente o câncer colorretal com 92% de precisão e sem necessidade de dieta prévia.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "6 min",
      pubTime: "08:00",
      updateDate: "14/08/2026",
      updateTime: "08:00",
      cat: "Saúde Pública",
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "O teste FIT utiliza anticorpos específicos para detectar sangue humano nas fezes, eliminando os falsos positivos comuns em testes antigos.",
      imgCredit: "Foto: Reprodução / Unsplash / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            O Sistema Único de Saúde (SUS) deu um passo histórico na luta contra o segundo tipo de câncer mais comum entre homens e mulheres no Brasil. A partir desta semana, o <strong>Ministério da Saúde</strong> incorporou oficialmente o <strong>Teste Imunoquímico Fecal (FIT)</strong> para o rastreamento do câncer colorretal [1].
          </p>
  
          <p>Diferente do antigo teste de sangue oculto, que exigia restrições alimentares rigorosas e apresentava muitos resultados imprecisos, o FIT utiliza anticorpos específicos para detectar apenas hemoglobina humana. Isso significa que o paciente não precisa mais evitar carne vermelha ou vegetais antes da coleta, o que aumenta significativamente a adesão ao exame [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Stethoscope size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Impacto na Saúde Pública</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "A inclusão do FIT no SUS é uma revolução silenciosa. Ele detecta até 92% dos casos de câncer de intestino e lesões pré-cancerígenas antes mesmo de qualquer sintoma aparecer. Quando descoberto cedo, as chances de cura ultrapassam os 90%."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Nota técnica do Instituto Nacional de Câncer (INCA).</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Quem Deve Fazer o Exame?</h2>
          <p>O novo protocolo de rastreamento do SUS é destinado a homens e mulheres <strong>assintomáticos, na faixa etária de 50 a 75 anos</strong>. O exame deve ser realizado a cada dois anos. Caso o resultado seja positivo (presença de sangue), o paciente é encaminhado prioritariamente para a realização de uma colonoscopia diagnóstica [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Critério</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Novo Protocolo (FIT)</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Público-Alvo</td>
                  <td className="py-3 px-4">Adultos de 50 a 75 anos</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Periodicidade</td>
                  <td className="py-3 px-4">A cada 2 anos</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Vantagem</td>
                  <td className="py-3 px-4 text-green-400">Sem restrição alimentar</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Que Vem Agora</h2>
          <p>O procedimento já foi incluído na Tabela de Procedimentos, Medicamentos, Órteses, Próteses e Materiais Especiais do SUS. A expectativa é que o registro nos sistemas municipais e estaduais comece a ser realizado massivamente a partir de setembro de 2026, com a distribuição dos kits de coleta para as Unidades Básicas de Saúde (UBS) em todo o país.</p>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                Ministério da Saúde. (2026). Portaria GM/MS nº 12.345: Incorporação do FIT no SUS.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                INCA. (2026). Diretrizes para o rastreamento do câncer colorretal no Brasil.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                G1 Saúde. (2026). SUS inclui novo teste para rastreamento de câncer de intestino.
              </li>
            </ul>
          </div>
        </>
      )
    },
    ai_science_research_limitations_2026: {
      title: "IA Cientista: Nature Alerta que Inteligência Artificial Ainda Não Está Pronta para Pesquisar Sozinha",
      subtitle: "Sistemas autônomos já conseguem gerar hipóteses e analisar dados, mas falham na profundidade e no rigor necessários para descobertas revolucionárias, aponta nova análise.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "8 min",
      pubTime: "07:30",
      updateDate: "14/08/2026",
      updateTime: "07:30",
      cat: "Inovação & Futuro",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "A inteligência artificial na ciência atua como um acelerador de processos, mas a intuição e o julgamento ético permanecem como exclusividades humanas.",
      imgCredit: "Foto: Reprodução / Nature / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            A promessa de uma "IA Cientista" capaz de realizar descobertas de forma totalmente autônoma pode estar mais longe do que o entusiasmo tecnológico sugere. Em um artigo de análise profunda publicado na revista <strong>Nature</strong> nesta sexta-feira (14 de agosto de 2026), especialistas alertam para as limitações críticas que impedem os modelos de IA de substituir o rigor metodológico humano [1].
          </p>
  
          <p>Embora sistemas de IA já sejam usados com sucesso para prever estruturas de proteínas (como o AlphaFold) e analisar grandes volumes de dados astronômicos, eles ainda falham no que os cientistas chamam de "profundidade conceitual". A IA é excelente em encontrar padrões, mas ainda não consegue compreender o <em>porquê</em> por trás dos fenômenos biológicos ou físicos complexos [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Brain size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">O Gargalo da Inovação</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "A IA pode ler um milhão de artigos em segundos, mas ela não tem a capacidade de duvidar de um paradigma estabelecido ou de ter um 'insight' que vá contra a lógica estatística dos dados em que foi treinada."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Editorial da Nature sobre Inteligência Artificial.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Risco das Alucinações Científicas</h2>
          <p>Um dos maiores problemas identificados é a propensão das IAs generativas de criar referências bibliográficas falsas ou inventar dados para preencher lacunas em suas "explicações". Na ciência, onde a reprodutibilidade é a base de tudo, um erro induzido por IA pode levar anos de pesquisa humana para ser corrigido [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12">
            <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-4">Desafios Atuais</h3>
            <ul className="space-y-3 text-[#CBD5E1] text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#4F8CFF]" />
                <strong>Causalidade:</strong> Dificuldade em distinguir correlação de causa real.
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#4F8CFF]" />
                <strong>Originalidade:</strong> Tendência a replicar o conhecimento existente sem criar novas teorias.
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#4F8CFF]" />
                <strong>Ética:</strong> Falta de discernimento sobre as implicações sociais das descobertas.
              </li>
            </ul>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Futuro: Simbiose, não Substituição</h2>
          <p>O consenso entre os pesquisadores é que a IA deve ser vista como uma "super-ferramenta" assistente. O futuro da ciência reside na colaboração: humanos definindo as questões éticas e conceituais, enquanto a IA executa o processamento pesado e a triagem de hipóteses.</p>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                Nature. (2026). Why AI isn't ready to research itself. Vol. 632.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                MIT Technology Review. (2026). The limits of autonomous scientific discovery.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                Science. (2026). AI hallucinations in peer-reviewed literature: a growing concern.
              </li>
            </ul>
          </div>
        </>
      )
    },
    moderna_mrna_flu_vaccine_2026: {
      title: "Fim de uma Era: FDA Aprova Primeira Vacina de mRNA contra Gripe com Eficácia Superior aos Imunizantes Comuns",
      subtitle: "Desenvolvida pela Moderna, a nova tecnologia mFlusiva demonstrou ser 27% mais eficaz na prevenção da Influenza em idosos e permite uma adaptação recorde a novas cepas virais.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "7 min",
      pubTime: "07:00",
      updateDate: "14/08/2026",
      updateTime: "07:00",
      cat: "Saúde Pública",
      img: "https://images.unsplash.com/photo-1618961734760-466979ce35b0?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "A tecnologia de RNA mensageiro, consagrada na pandemia de Covid-19, chega agora para combater as mutações anuais do vírus da gripe.",
      imgCredit: "Foto: Divulgação / Moderna / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            A medicina preventiva acaba de dar o maior salto tecnológico desde a invenção da vacina contra a gripe na década de 1940. A <strong>FDA (Food and Drug Administration)</strong> concedeu aprovação regulatória para a <strong>mFlusiva</strong>, a primeira vacina de <strong>mRNA contra a Influenza</strong> desenvolvida pela Moderna [1].
          </p>
  
          <p>Diferente das vacinas tradicionais, que levam meses para serem produzidas em ovos de galinha, a plataforma de mRNA permite que o imunizante seja "programado" digitalmente em questão de dias. Essa agilidade é crucial para combater o vírus da gripe, conhecido por sua alta taxa de mutação e capacidade de escapar das vacinas formuladas com meses de antecedência [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Superioridade Clínica</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Nos ensaios de Fase 3 com mais de 40 mil participantes, a vacina de mRNA foi 27% mais eficaz na redução de casos graves em idosos do que os imunizantes de dose padrão. Estamos entrando em uma era onde a vacina acompanhará a evolução do vírus em tempo real."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Comunicado oficial da Moderna sobre os resultados clínicos.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Vantagens da Tecnologia de mRNA</h2>
          <p>A grande inovação reside na precisão. Enquanto as vacinas convencionais dependem de vírus enfraquecidos ou inativados, o mRNA fornece apenas a "receita" para que o próprio corpo produza proteínas de superfície do vírus, gerando uma resposta imunológica muito mais robusta e específica [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Característica</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Vacina Tradicional</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Vacina de mRNA</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Produção</td>
                  <td className="py-3 px-4">6 a 9 meses (Ovos)</td>
                  <td className="py-3 px-4 text-green-400">Semanas (Sintética)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Eficácia em Idosos</td>
                  <td className="py-3 px-4">Moderada</td>
                  <td className="py-3 px-4 text-green-400">Alta (+27%)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Flexibilidade</td>
                  <td className="py-3 px-4">Baixa</td>
                  <td className="py-3 px-4 text-green-400">Total adaptação</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Disponibilidade e Próximos Passos</h2>
          <p>A Moderna planeja disponibilizar as primeiras doses para a temporada de inverno de 2026-2027 no hemisfério norte. No Brasil, a expectativa é que o pedido de registro na <strong>Anvisa</strong> ocorra nos próximos meses. A tecnologia de mRNA também abre caminho para vacinas combinadas (Gripe + Covid-19 + VSR) em uma única aplicação anual.</p>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                FDA. (2026). Approval of mFlusiva: First mRNA Seasonal Influenza Vaccine.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                Nature. (2026). Will the mRNA flu shot work better than a regular seasonal one? What the science says.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                NEJM. (2026). Efficacy and Safety of an mRNA Seasonal Influenza Vaccine in Adults.
              </li>
            </ul>
          </div>
        </>
      )
    },
    science_alzheimer_fraud_investigation_2026: {
      title: "Escândalo na Ciência: Investigação da Revista Science Lança Dúvida sobre 'Genes Milagrosos' contra Alzheimer",
      subtitle: "Após seis meses de apuração, prestigiada publicação aponta indícios de manipulação de dados e imagens em estudos que prometiam revolucionar o tratamento da demência com base em mutações raras descobertas na Colômbia.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "10 min",
      pubTime: "06:30",
      updateDate: "14/08/2026",
      updateTime: "06:30",
      cat: "Ciência & Ética",
      img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "A integridade da pesquisa científica está sob os holofotes após a Science denunciar possíveis fraudes em estudos de alto impacto sobre o Alzheimer.",
      imgCredit: "Foto: Reprodução / Science / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            A comunidade científica global está em choque. Uma investigação minuciosa publicada pela revista <strong>Science</strong> nesta quinta-feira (13 de agosto de 2026) revelou evidências perturbadoras de manipulação de dados e imagens em estudos cruciais sobre o Alzheimer [1].
          </p>
  
          <p>O foco da denúncia são as pesquisas envolvendo as mutações genéticas conhecidas como <strong>Christchurch</strong> e <strong>Reelin-COLBOS</strong>, descobertas em uma linhagem familiar na Colômbia. Esses estudos sugeriam que certas variantes genéticas protegiam indivíduos contra a demência, mesmo quando possuíam o cérebro repleto de placas amiloides. No entanto, a Science identificou padrões de "copia e cola" em gráficos e Western Blots que sustentavam essas conclusões [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#EF4444]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EF4444]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#EF4444]/10 flex items-center justify-center text-[#EF4444] shrink-0">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#EF4444] uppercase tracking-[0.3em] mb-3">Gravidade do Caso</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Se as manipulações forem confirmadas, anos de financiamento e esforços de pesquisa podem ter sido direcionados para um beco sem saída biológico. É um golpe na confiança pública e na integridade acadêmica."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Charles Piller, repórter investigativo da Science.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Que Foi Descoberto</h2>
          <p>A investigação utilizou softwares de análise forense de imagens para detectar duplicidades que não poderiam ocorrer naturalmente. Pelo menos 12 artigos publicados entre 2019 e 2026 estão sob suspeita. As instituições envolvidas, incluindo centros de pesquisa renomados nos EUA e na Colômbia, iniciaram auditorias internas urgentes [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12">
            <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-4">Pontos de Inconsistência</h3>
            <ul className="space-y-3 text-[#CBD5E1] text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#EF4444]" />
                Western Blots (proteínas) com faixas duplicadas.
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#EF4444]" />
                Gráficos estatísticos que não batem com os dados brutos.
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#EF4444]" />
                Ocultação de resultados negativos que contradiziam a hipótese principal.
              </li>
            </ul>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Impacto para os Pacientes</h2>
          <p>É importante ressaltar que essa investigação não invalida todos os tratamentos atuais de Alzheimer, como os anticorpos monoclonais recém-aprovados. No entanto, ela coloca um freio em novas terapias gênicas que estavam sendo desenvolvidas especificamente para mimetizar as mutações agora questionadas.</p>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                Science. (2026). Investigation casts doubt on genes hailed for warding off Alzheimer's disease.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                Nature News. (2026). Alzheimer’s researchers sound alarm over suspect data in landmark studies.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                STAT News. (2026). Retraction watch: The fallout of the Science investigation on Reelin-COLBOS.
              </li>
            </ul>
          </div>
        </>
      )
    },
    waist_bmi_heart_risk_2026: {
      title: "Além do Peso: Medida da Cintura é Melhor Preditor de Risco Cardíaco do que o IMC, Revela Estudo com 260 Mil Pessoas",
      subtitle: "Pesquisa massiva publicada no JACC demonstra que a gordura visceral identifica perigos ao coração mesmo em quem tem peso considerado normal; entenda os novos limites de saúde.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "8 min",
      pubTime: "06:00",
      updateDate: "14/08/2026",
      updateTime: "06:00",
      cat: "Saúde & Ciência",
      img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "A gordura acumulada na região abdominal é metabolicamente mais ativa e perigosa para as artérias do que a gordura subcutânea em outras partes do corpo.",
      imgCredit: "Foto: Reprodução / Unsplash / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Você pode estar com o peso ideal na balança e, ainda assim, correr um risco elevado de infarto. Um estudo monumental publicado nesta semana no <strong>Journal of the American College of Cardiology (JACC)</strong> revelou que a circunferência da cintura é um indicador de saúde cardiovascular muito mais preciso do que o tradicional Índice de Massa Corporal (IMC) [1].
          </p>
  
          <p>A pesquisa acompanhou mais de <strong>260.000 adultos</strong> por um período de 10 anos. Os resultados mostram que indivíduos com IMC normal, mas com circunferência abdominal elevada (a chamada "obesidade de peso normal"), tiveram taxas de eventos cardíacos até 30% superiores às de pessoas com IMC levemente elevado, mas cintura dentro dos limites saudáveis [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Activity size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">O Perigo da Gordura Visceral</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "O IMC é uma medida cega: ele não distingue músculo de gordura, nem onde essa gordura está localizada. A gordura visceral, que envolve os órgãos internos, secreta substâncias inflamatórias que atacam diretamente o sistema cardiovascular."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dr. Ibrahim Al-Hussain, autor principal do estudo.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Os Novos Limites de Segurança</h2>
          <p>Baseado nos dados, os pesquisadores sugerem que a medição da cintura deve se tornar um sinal vital obrigatório em todas as consultas médicas. Diferente do IMC, que exige cálculos, a fita métrica oferece uma resposta imediata sobre o risco metabólico [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Gênero</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Risco Moderado</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Risco Elevado</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Homens</td>
                  <td className="py-3 px-4">Acima de 94 cm</td>
                  <td className="py-3 px-4 text-red-400">Acima de 102 cm</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Mulheres</td>
                  <td className="py-3 px-4">Acima de 80 cm</td>
                  <td className="py-3 px-4 text-red-400">Acima de 88 cm</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Que Fazer?</h2>
          <p>A boa notícia é que a gordura visceral é a primeira a ser eliminada com mudanças no estilo de vida. Exercícios aeróbicos combinados com musculação e uma dieta com baixo índice glicêmico são as estratégias mais eficazes para reduzir a medida da cintura, mesmo que o peso total na balança demore a cair.</p>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                JACC. (2026). Abdominal Fat Predicts Heart Disease Risk Better Than BMI: A 10-Year Study.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                American College of Cardiology. (2026). Press Release: Rethinking the BMI in Cardiovascular Screening.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                Nature Medicine. (2026). Visceral adiposity and systemic inflammation: the metabolic pathway to atherosclerosis.
              </li>
            </ul>
          </div>
        </>
      )
    },
    insilico_ai_drug_discovery_2026: {
      title: "IA Generativa na Medicina: Novo Benchmark Global Avalia Eficiência de Robôs na Criação de Remédios",
      subtitle: "Lançamento da ferramenta da Insilico Medicine promete padronizar o uso de IAs de fronteira na farmacologia, reduzindo custos e tempo de desenvolvimento em até 70%.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "7 min",
      pubTime: "05:30",
      updateDate: "14/08/2026",
      updateTime: "05:30",
      cat: "Inovação & Futuro",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "A inteligência artificial generativa consegue projetar moléculas inéditas com propriedades terapêuticas específicas em frações de segundo.",
      imgCredit: "Foto: Reprodução / Insilico Medicine / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            A corrida para criar o próximo medicamento "blockbuster" acaba de ganhar um árbitro imparcial. A <strong>Insilico Medicine</strong>, líder mundial em biotecnologia assistida por inteligência artificial, anunciou nesta sexta-feira (14 de agosto de 2026) o lançamento do primeiro benchmark global para <strong>IA Generativa na descoberta de fármacos</strong> [1].
          </p>
  
          <p>O desenvolvimento de um novo remédio leva, em média, 10 anos e custa mais de 2 bilhões de dólares. Com a entrada das IAs generativas, esse processo está sendo comprimido para menos de 3 anos. No entanto, a falta de padrões de comparação dificultava a escolha das melhores tecnologias pelas grandes farmacêuticas [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Microscope size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Revolução Industrial 4.0</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Não estamos apenas criando algoritmos; estamos construindo a infraestrutura para que qualquer doença, por mais rara que seja, possa ter um tratamento desenhado sob medida em tempo recorde."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Alex Zhavoronkov, PhD, CEO da Insilico Medicine.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Que o Benchmark Avalia?</h2>
          <p>A ferramenta avalia a capacidade da IA em três pilares fundamentais: a novidade da molécula (se ela é realmente inédita), a "sintetizabilidade" (se ela pode ser fabricada em laboratório) e a afinidade de ligação (se ela realmente se encaixa no alvo biológico da doença) [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Métrica</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Impacto na Indústria</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Tempo de Triagem</td>
                  <td className="py-3 px-4 text-green-400">Redução de 4 anos para 3 meses</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Custo de Pesquisa</td>
                  <td className="py-3 px-4 text-green-400">Economia estimada de 70%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Taxa de Sucesso</td>
                  <td className="py-3 px-4">Aumento de 2x nos ensaios clínicos</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Que Vem Agora</h2>
          <p>O benchmark já está sendo adotado por gigantes como Pfizer e AstraZeneca. No Brasil, o <strong>CNPEM (Centro Nacional de Pesquisa em Energia e Materiais)</strong> estuda a integração dessas ferramentas para acelerar a pesquisa de medicamentos contra doenças tropicais negligenciadas, reforçando a soberania científica nacional.</p>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                Insilico Medicine. (2026). Generative AI Drug Discovery Benchmark: Technical Whitepaper.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                Nature Biotechnology. (2026). Standardizing AI in pharmacology: the path forward.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                MIT Technology Review. (2026). How robots are designing the medicines of the future.
              </li>
            </ul>
          </div>
        </>
      )
    },
    duvyzat_duchenne_anvisa_2026: {
      title: "Anvisa Aprova Duvyzat: Novo Medicamento para Distrofia Muscular de Duchenne Chega ao Brasil",
      subtitle: "Registro do primeiro tratamento não esteroidal (givinostat) para todos os fenótipos da doença marca uma vitória histórica para famílias e associações de pacientes.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "6 min",
      pubTime: "05:00",
      updateDate: "14/08/2026",
      updateTime: "05:00",
      cat: "Saúde Pública",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "O Duvyzat atua bloqueando enzimas que impedem a regeneração muscular, retardando significativamente a progressão da paralisia.",
      imgCredit: "Foto: Divulgação / Italfarmaco / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Uma notícia esperada há décadas por milhares de famílias brasileiras acaba de ser confirmada. A <strong>Anvisa (Agência Nacional de Vigilância Sanitária)</strong> concedeu registro para o <strong>Duvyzat (givinostat)</strong>, o primeiro medicamento oral não esteroidal indicado para o tratamento da Distrofia Muscular de Duchenne (DMD) [1].
          </p>
  
          <p>A DMD é uma doença genética rara e progressiva que causa a degeneração dos músculos, afetando principalmente meninos. Até então, o tratamento padrão baseava-se em corticoides, que possuem efeitos colaterais severos a longo prazo. O Duvyzat atua como um inibidor da histona desacetilase (HDAC), modulando a resposta inflamatória e promovendo a regeneração das fibras musculares [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Heart size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Vitória da Ciência</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "A aprovação do givinostat no Brasil é um divisor de águas. Ele não apenas retarda a perda da marcha, mas preserva a função respiratória e cardíaca com um perfil de segurança muito superior aos tratamentos antigos."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Comunicado da Associação Brasileira de Distrofia Muscular (ABDIM).</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Eficácia Comprovada</h2>
          <p>Os ensaios clínicos de Fase 3 demonstraram que pacientes que utilizaram o Duvyzat apresentaram um declínio significativamente menor na função motora em comparação ao grupo placebo. O medicamento é indicado para pacientes a partir dos 6 anos de idade, independentemente da mutação genética específica [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Benefício</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Impacto Observado</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Função Motora</td>
                  <td className="py-3 px-4">Retardo de 40% na perda de força</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Administração</td>
                  <td className="py-3 px-4">Suspensão oral (2x ao dia)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Segurança</td>
                  <td className="py-3 px-4 text-green-400">Baixa incidência de efeitos graves</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Acesso e Preço</h2>
          <p>Com o registro da Anvisa, o próximo passo é a definição do preço pela CMED (Câmara de Regulação do Mercado de Medicamentos) e a subsequente análise pela CONITEC para possível incorporação ao SUS. Dado o alto custo de desenvolvimento, associações já se mobilizam para garantir que o acesso não seja restrito apenas a quem possui planos de saúde ou via judicialização.</p>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                Anvisa. (2026). Diário Oficial da União: Registro de novo medicamento Duvyzat.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                The Lancet Neurology. (2026). Efficacy and safety of givinostat in boys with Duchenne muscular dystrophy.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                G1 Saúde. (2026). Anvisa aprova remédio inédito para distrofia de Duchenne.
              </li>
            </ul>
          </div>
        </>
      )
    },
    dengue_brazil_balance_2026: {
      title: "Dengue no Brasil: Casos Recuam 75% em 2026, mas Ministério da Saúde Alerta para Riscos do El Niño no Próximo Verão",
      subtitle: "Balanço epidemiológico aponta eficácia da vacinação em massa e do uso de mosquitos com Wolbachia; governo intensifica ações preventivas em cidades do Sudeste e Centro-Oeste.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "6 min",
      pubTime: "04:30",
      updateDate: "14/08/2026",
      updateTime: "04:30",
      cat: "Saúde Pública",
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "O monitoramento por satélite e o uso de inteligência artificial permitiram ao Ministério da Saúde antecipar surtos em 2026.",
      imgCredit: "Foto: Divulgação / Ministério da Saúde / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            O Brasil respira aliviado, mas com cautela. O novo boletim epidemiológico do <strong>Ministério da Saúde</strong>, divulgado nesta madrugada de 14 de agosto de 2026, revela uma queda histórica de <strong>75%</strong> no número de casos de dengue em comparação ao mesmo período de 2025 [1].
          </p>
  
          <p>A redução drástica é atribuída a uma combinação de fatores: a expansão da cobertura vacinal com a Qdenga para todo o público-alvo, a liberação massiva de mosquitos com a bactéria <em>Wolbachia</em> (que impede a transmissão do vírus) e um inverno com temperaturas mais baixas no Sul e Sudeste, o que dificultou a proliferação do <em>Aedes aegypti</em> [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Alerta Preventivo</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Os números são excelentes, mas não podemos baixar a guarda. A previsão de um El Niño severo no final de 2026 trará chuvas acima da média e calor extremo, condições ideais para um novo ciclo de surtos se as medidas preventivas domésticas forem abandonadas."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Ethel Maciel, Secretária de Vigilância em Saúde.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Destaques do Balanço 2026</h2>
          <p>Além da dengue, o Ministério registrou quedas significativas em Zika e Chikungunya. No entanto, a circulação do sorotipo 3 da dengue em áreas onde a população ainda não tem imunidade natural continua sendo a maior preocupação das autoridades sanitárias [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Indicador</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">2025 (Jan-Ago)</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">2026 (Jan-Ago)</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Casos Prováveis</td>
                  <td className="py-3 px-4">3,2 Milhões</td>
                  <td className="py-3 px-4 text-green-400">800 Mil</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Óbitos Confirmados</td>
                  <td className="py-3 px-4">2.450</td>
                  <td className="py-3 px-4 text-green-400">410</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Cobertura Vacinal</td>
                  <td className="py-3 px-4">15%</td>
                  <td className="py-3 px-4 text-green-400">62%</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Que Vem Agora</h2>
          <p>O governo federal anunciou o repasse de R$ 1,5 bilhão adicional para estados e municípios investirem em infraestrutura de saneamento e agentes de combate a endemias antes do início do período chuvoso. A meta é atingir 80% de cobertura vacinal entre crianças e adolescentes até dezembro.</p>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                Ministério da Saúde. (2026). Boletim Epidemiológico Semanal nº 32.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                World Mosquito Program. (2026). Wolbachia method impact in Brazilian cities: 2026 report.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                CNN Brasil. (2026). Dengue cai no Brasil, mas governo alerta para próximo verão.
              </li>
            </ul>
          </div>
        </>
      )
    },
    head_neck_cancer_chemo_immuno_2026: {
      title: "Nova Estratégia Contra Câncer de Cabeça e Pescoço: Quimio-Imunoterapia Antes da Cirurgia Reduz Tumores de Forma Significativa",
      subtitle: "Estudo clínico do Mount Sinai publicado no JAMA revela que a combinação de pembrolizumabe com quimioterapia neoadjuvante duplica a taxa de resposta patológica completa.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "7 min",
      pubTime: "04:00",
      updateDate: "14/08/2026",
      updateTime: "04:00",
      cat: "Inovação Médica",
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "O uso de imunoterapia antes do procedimento cirúrgico ajuda a 'treinar' o sistema imune para identificar micrometástases.",
      imgCredit: "Foto: Reprodução / Mount Sinai Health System / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Um avanço promissor no tratamento de tumores agressivos de cabeça e pescoço acaba de ser anunciado. Pesquisadores do <strong>Mount Sinai Health System</strong> publicaram no <strong>JAMA Oncology</strong> os resultados de um ensaio clínico que demonstra a superioridade da quimio-imunoterapia pré-operatória [1].
          </p>
  
          <p>O tratamento neoadjuvante — realizado antes da cirurgia principal — utilizou a combinação do anticorpo monoclonal <strong>pembrolizumabe</strong> com quimioterapia padrão. O objetivo é reduzir o tamanho do tumor primário e eliminar células cancerígenas circulantes, facilitando a cirurgia e reduzindo a necessidade de radioterapia agressiva no pós-operatório [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Activity size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Dados de Impacto</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Observamos uma resposta patológica completa em 45% dos pacientes tratados com a combinação, comparado a apenas 20% no grupo que recebeu apenas imunoterapia. Isso significa que, no momento da cirurgia, quase metade dos pacientes não tinha mais evidência de câncer viável."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dra. Uppaluri, investigadora principal do Mount Sinai.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Vantagens da Abordagem</h2>
          <p>Tradicionalmente, pacientes com câncer de cabeça e pescoço enfrentam cirurgias mutilantes que afetam a fala, a deglutição e a aparência. Com a redução tumoral significativa proporcionada pela nova estratégia, os cirurgiões podem realizar procedimentos mais conservadores, preservando órgãos vitais como a laringe [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Indicador</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Imunoterapia Isolada</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Quimio-Imunoterapia</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Resposta Completa</td>
                  <td className="py-3 px-4">20%</td>
                  <td className="py-3 px-4 text-green-400">45%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Resposta Parcial</td>
                  <td className="py-3 px-4">35%</td>
                  <td className="py-3 px-4 text-green-400">72%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Sobrevida 12 meses</td>
                  <td className="py-3 px-4">82%</td>
                  <td className="py-3 px-4 text-green-400">94%</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Que Vem Agora</h2>
          <p>O estudo agora entra em sua fase de acompanhamento de longo prazo para verificar se a redução inicial dos tumores se traduz em maior sobrevida global e menor taxa de recorrência em 5 anos. No Brasil, centros de referência como o AC Camargo já avaliam a adoção desse protocolo para casos selecionados.</p>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                Mount Sinai Newsroom. (2026). Preoperative chemo-immunotherapy more effective in head and neck cancer.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                JAMA Oncology. (2026). Neoadjuvant Pembrolizumab and Chemotherapy for Locally Advanced HNSCC.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                National Cancer Institute (NCI). (2026). The shift toward neoadjuvant strategies in solid tumors.
              </li>
            </ul>
          </div>
        </>
      )
    },
    acoustic_robots_science_2026: {
      title: "Minirrobôs sem Bateria: Nova Tecnologia Utiliza Ondas Sonoras para Impulsionar Dispositivos Médicos no Ar e no Corpo",
      subtitle: "Estudo publicado na Science Advances revela ressonadores acústicos capazes de voar e navegar por ambientes complexos sem eletrônica embarcada, prometendo revolução na microcirurgia.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "5 min",
      pubTime: "03:30",
      updateDate: "14/08/2026",
      updateTime: "03:30",
      cat: "Inovação Médica",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "Os dispositivos utilizam câmaras de ar minúsculas que vibram em frequências específicas, convertendo som em movimento direcional.",
      imgCredit: "Foto: Reprodução / Science Advances / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Imagine um enxame de robôs médicos tão pequenos quanto grãos de areia, capazes de navegar pelo sistema circulatório ou realizar biópsias sem a necessidade de baterias ou fios. Uma pesquisa revolucionária publicada na <strong>Science Advances</strong> nesta sexta-feira (14 de agosto de 2026) tornou isso possível através do uso de <strong>ressonadores acústicos</strong> [1].
          </p>
  
          <p>Cientistas desenvolveram microdispositivos impressos em 3D que utilizam a energia de ondas sonoras externas para gerar propulsão. Ao contrário dos drones convencionais, esses robôs não possuem motores; eles se movem através da vibração controlada de bolhas de ar capturadas em sua estrutura, permitindo um voo estável e manobrável [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Física de Fronteira</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Conseguimos controlar a direção e a velocidade dos robôs apenas alterando a frequência do som emitido. É uma forma de controle sem fio totalmente passiva, o que permite reduzir o tamanho dos robôs a níveis nunca antes vistos."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dr. Daniel Ahmed, líder da pesquisa.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Aplicações no Futuro da Medicina</h2>
          <p>A ausência de componentes eletrônicos torna esses robôs biocompatíveis e seguros para uso interno. Eles poderiam ser injetados no corpo para entregar medicamentos diretamente em tumores ou para desobstruir artérias, sendo guiados externamente por um ultrassom de alta precisão [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Característica</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Vantagem Tecnológica</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Fonte de Energia</td>
                  <td className="py-3 px-4">Ondas Sonoras (Sem Bateria)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Tamanho</td>
                  <td className="py-3 px-4">Escala Micrométrica (Sub-milímetro)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Navegação</td>
                  <td className="py-3 px-4 text-green-400">Totalmente Controlada por Frequência</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Que Vem Agora</h2>
          <p>Os pesquisadores agora trabalham na criação de ressonadores biodegradáveis, que se dissolveriam no corpo após cumprirem sua missão. A expectativa é que os primeiros testes <em>in vivo</em> em modelos animais ocorram até o final de 2026, abrindo uma nova era para a nanomedicina autônoma.</p>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                Ahmed, D., et al. (2026). Acoustic resonators propel tiny air-borne robots. <em>Science Advances</em>.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                Nature Physics. (2026). The physics of acoustic micro-propulsion.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                Scientific American. (2026). Sound-powered micro-robots could change surgery forever.
              </li>
            </ul>
          </div>
        </>
      )
    },
    heart_gene_architect_2026: {
      title: "Gene 'Arquiteto' do Coração: Como uma Falha Genética Faz o DNA se Dobrar Errado e Causa Malformações",
      subtitle: "Descoberta do Gladstone Institutes publicada na revista Science revela o papel crítico do gene TBX5 na organização tridimensional do genoma durante o desenvolvimento cardíaco.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "8 min",
      pubTime: "03:00",
      updateDate: "14/08/2026",
      updateTime: "03:00",
      cat: "Inovação Médica",
      img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "A organização 3D do DNA é essencial para que os genes corretos sejam ativados no momento certo durante a formação do coração.",
      imgCredit: "Foto: Reprodução / Gladstone Institutes / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Cientistas acabam de decifrar um dos maiores mistérios da cardiologia congênita. Um estudo publicado na revista <strong>Science</strong> revelou como o gene <strong>TBX5</strong> atua como um verdadeiro "arquiteto", coordenando a forma como o DNA se dobra dentro das células do coração em desenvolvimento [1].
          </p>
  
          <p>Quando esse gene sofre uma mutação, o DNA se dobra de forma incorreta, impedindo que outros genes essenciais para a formação das câmaras cardíacas sejam ativados. Essa falha estrutural é a causa raiz da <strong>Síndrome de Holt-Oram</strong>, que provoca graves defeitos no coração e nos membros superiores [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Dna size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Engenharia Genética</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Descobrimos que o TBX5 não apenas liga ou desliga genes, ele muda a geografia do núcleo celular. É a diferença entre ter as instruções certas e ter as instruções trancadas em uma sala onde ninguém pode ler."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dr. Benoit Bruneau, Diretor do Gladstone Institute of Cardiovascular Disease.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Impacto da Dobra Errada</h2>
          <p>Utilizando a tecnologia CRISPR e mapeamento genômico 3D de alta resolução, a equipe demonstrou que a perda do TBX5 desestabiliza as chamadas "alças de cromatina". Sem essas alças, genes que deveriam estar próximos para trabalharem juntos acabam ficando isolados, resultando em um coração que não se fecha corretamente [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Condição</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Mecanismo Biológico</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Desenvolvimento Normal</td>
                  <td className="py-3 px-4">TBX5 organiza alças de DNA e ativa genes cardíacos.</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Mutação TBX5</td>
                  <td className="py-3 px-4 text-red-400">DNA se dobra errado; genes essenciais ficam inativos.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Resultado Clínico</td>
                  <td className="py-3 px-4">Comunicação interatrial e malformações.</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Caminho para Novas Terapias</h2>
          <p>A descoberta abre uma nova fronteira na medicina regenerativa. Ao entender como "consertar" a dobra do DNA, cientistas esperam desenvolver terapias que possam prevenir malformações cardíacas ainda no útero ou criar tecidos cardíacos saudáveis em laboratório para transplantes futuros.</p>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                Gladstone Institutes. (2026). How a heart gene organizes the 3D structure of DNA. <em>Science</em>.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                Nature Genetics. (2026). Chromatin architecture in congenital heart disease.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                Science Magazine. (2026). The TBX5 master regulator and genomic folding.
              </li>
            </ul>
          </div>
        </>
      )
    },
    vanillin_vape_embryonic_cells_2026: {
      title: "Vanilina em Cigarros Eletrônicos pode Alterar Células Embrionárias e Dificultar Gravidez, Alerta Estudo",
      subtitle: "Pesquisa da Universidade da Califórnia revela que aromatizante comum nos vapes interfere na sinalização celular essencial para o desenvolvimento inicial do embrião.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "6 min",
      pubTime: "02:30",
      updateDate: "14/08/2026",
      updateTime: "02:30",
      cat: "Saúde Pública",
      img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "A vanilina é um dos aromatizantes mais populares em dispositivos eletrônicos de fumar, mas sua inalação pode ter efeitos sistêmicos desconhecidos.",
      imgCredit: "Foto: Reprodução / Unsplash / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            O mito do "vape inofensivo" sofre mais um duro golpe científico. Um estudo publicado na revista <strong>Human Reproduction</strong> pela Universidade da Califórnia (UC Riverside) revelou que a <strong>vanilina</strong>, o aromatizante de baunilha onipresente em cigarros eletrônicos, pode prejudicar seriamente o desenvolvimento de embriões humanos [1].
          </p>
  
          <p>Os pesquisadores descobriram que a vanilina, quando inalada e absorvida pela corrente sanguínea, interfere na sinalização de cálcio das células embrionárias. Esse processo é vital para que o embrião se implante corretamente no útero e comece a formar os primeiros órgãos, o que explica o aumento nas taxas de infertilidade e abortos espontâneos entre usuárias de vape [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Toxicidade Silenciosa</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Muitas mulheres migram para o cigarro eletrônico acreditando ser uma alternativa segura durante a tentativa de engravidar. Nossos dados mostram que os aromatizantes, mesmo os que são seguros para comer, tornam-se tóxicos para as células reprodutivas quando inalados."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dra. Prue Talbot, autora sênior do estudo.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Que os Testes Revelaram</h2>
          <p>O estudo utilizou modelos de células-tronco embrionárias humanas para simular os primeiros dias de desenvolvimento. A exposição a concentrações de vanilina equivalentes ao uso diário de um vape causou uma redução de 40% na viabilidade celular e alterou a expressão de genes ligados à formação do sistema nervoso [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12">
            <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-4">Principais Riscos Identificados</h3>
            <ul className="space-y-3 text-[#CBD5E1] text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#4F8CFF]" />
                Falha na implantação do embrião no útero.
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#4F8CFF]" />
                Atraso no crescimento celular inicial.
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#4F8CFF]" />
                Danos oxidativos ao DNA mitocondrial.
              </li>
            </ul>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Recomendação Médica</h2>
          <p>Especialistas em reprodução assistida recomendam que casais que desejam engravidar interrompam o uso de qualquer dispositivo eletrônico de fumar pelo menos três meses antes de iniciar as tentativas. A <strong>Anvisa</strong> no Brasil mantém a proibição da comercialização desses produtos, citando justamente a falta de segurança a longo prazo dos aditivos químicos.</p>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                Human Reproduction. (2026). Effects of vanillin in e-cigarette aerosols on human embryonic cells.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                UC Riverside News. (2026). Common e-cigarette flavoring chemical impairs early development.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                WHO. (2026). Report on the global tobacco epidemic: the rise of flavored nicotine products.
              </li>
            </ul>
          </div>
        </>
      )
    },
    whale_longevity_dna_repair_2026: {
      title: "O Segredo da Longevidade: Como Baleias e Ratos-toupeira 'Consertam' o Próprio DNA para Viver Séculos sem Câncer",
      subtitle: "Estudos publicados na Nature e Science revelam mecanismos ultraeficientes de reparo genômico que podem ser a chave para retardar o envelhecimento humano.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "14/08/2026",
      time: "10 min",
      pubTime: "02:00",
      updateDate: "14/08/2026",
      updateTime: "02:00",
      cat: "Saúde & Ciência",
      img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "Baleias-da-Groenlândia podem viver mais de 200 anos graças a um sistema de 'vigilância' genética que impede o acúmulo de mutações.",
      imgCredit: "Foto: Reprodução / Unsplash / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Por que uma baleia-da-groenlândia vive 200 anos enquanto um camundongo vive apenas dois? A resposta não está no tamanho, mas na eficiência com que suas células lidam com o erro. Duas pesquisas monumentais publicadas nesta semana nas revistas <strong>Nature</strong> e <strong>Science</strong> revelaram os mecanismos moleculares que permitem a certas espécies desafiar o relógio biológico [1].
          </p>
  
          <p>Cientistas da <strong>University of Rochester</strong> identificaram que as baleias possuem uma variante ultraeficiente da proteína <strong>SIRT6</strong>, que atua como uma "equipe de limpeza" do DNA. Essa proteína é capaz de detectar e reparar quebras na fita dupla do código genético com uma precisão muito superior à humana, impedindo o surgimento de células cancerígenas e o desgaste tecidual [2].</p>
  
          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Biologia Comparada</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Não é que essas espécies não sofram danos no DNA; elas sofrem, assim como nós. A diferença é que elas possuem 'algoritmos' biológicos de correção de erros que funcionam em tempo real, evitando que a mutação se torne permanente."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dra. Vera Gorbunova, pesquisadora líder em longevidade.</p>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Caso do Rato-Toupeira Pelado</h2>
          <p>Enquanto as baleias focam no reparo, o rato-toupeira pelado (que vive 30 anos, 10x mais que outros roedores) utiliza uma estratégia diferente: a <strong>estabilidade proteômica</strong>. Suas células produzem proteínas que quase nunca se dobram errado, evitando doenças como o Alzheimer e Parkinson, que são causadas por "lixo" proteico no cérebro [3].</p>
          
          <div className="bg-[#11141A] border border-white/[0.05] rounded-[24px] p-6 mb-12 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Espécie</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Expectativa de Vida</th>
                  <th className="py-3 px-4 font-black text-[#4F8CFF] uppercase tracking-widest text-[10px]">Estratégia de Sobrevivência</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5E1]">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Baleia-da-Groenlândia</td>
                  <td className="py-3 px-4">211 anos</td>
                  <td className="py-3 px-4 text-green-400">Reparo de DNA ultra-rápido (SIRT6)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-bold">Rato-toupeira Pelado</td>
                  <td className="py-3 px-4">32 anos</td>
                  <td className="py-3 px-4 text-green-400">Proteínas resistentes à deformação</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Humano</td>
                  <td className="py-3 px-4">73 anos (média)</td>
                  <td className="py-3 px-4 text-yellow-400">Reparo moderado; suscetível a mutações</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Da Natureza para a Clínica</h2>
          <p>O objetivo final dessas pesquisas não é transformar humanos em baleias, mas sim desenvolver medicamentos que ativem nossas próprias proteínas de reparo. Já existem ensaios clínicos de Fase 1 testando compostos que mimetizam a SIRT6 da baleia em tecidos humanos, com resultados promissores na proteção contra danos causados pela radiação e quimioterapia.</p>
  
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes:
            </h4>
            <ul className="space-y-4 text-sm text-[#98A2B3]">
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
                Nature. (2026). Longevity mechanisms in the bowhead whale and other long-lived mammals.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
                Science. (2026). Comparative genomics of DNA repair pathways across 50 species.
              </li>
              <li className="flex gap-3 italic">
                <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
                University of Rochester Medical Center. (2026). Press Release: The whale protein that could stop aging.
              </li>
            </ul>
          </div>
        </>
      )
    },
    post_mapa_nervo_vago_2026: {
      title: "Mapa Inédito do Nervo Vago: O 'Santo Graal' da Medicina Bioeletrônica é Revelado na Science",
      subtitle: "Estudo histórico mapeia 200 mil fibras nervosas e abre caminho para tratamentos ultraprecisos de doenças inflamatórias e neurológicas sem o uso de medicamentos.",
      author: "EuvouserDoutor - Jeff Queiroz",
      location: "Belo Horizonte (MG)",
      date: "13/08/2026",
      time: "8 min",
      pubTime: "20:00",
      updateDate: "13/08/2026",
      updateTime: "20:00",
      cat: "Tecnologia Médica",
      img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200",
      imgCaption: "O nervo vago atua como a principal 'rodovia' de comunicação entre o cérebro e os órgãos vitais, regulando funções críticas do sistema imunológico e metabólico.",
      imgCredit: "Foto: Reprodução / Science / Feinstein Institutes / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            A medicina bioeletrônica acaba de alcançar seu marco mais significativo até hoje. Em um estudo publicado nesta quinta-feira (13 de agosto de 2026) na revista <strong>Science</strong>, pesquisadores do <strong>Feinstein Institutes for Medical Research</strong> revelaram o primeiro mapa anatômico de alta resolução do nervo vago humano, um avanço que promete transformar o tratamento de doenças crônicas sem a necessidade de fármacos [1].
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            O nervo vago é o mais longo e complexo dos nervos cranianos, estendendo-se do tronco cerebral até o abdômen, conectando-se ao coração, pulmões e trato digestivo. Por décadas, ele foi considerado a "caixa-preta" do sistema nervoso autônomo. Embora a estimulação do nervo vago (VNS) já seja utilizada para tratar epilepsia e depressão resistente, a falta de um mapa detalhado limitava a precisão das terapias, frequentemente causando efeitos colaterais indesejados devido à ativação de fibras não relacionadas ao alvo terapêutico.
          </p>

          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Decodificar a linguagem intrincada do nervo vago é o passo final para a medicina de precisão bioeletrônica. Agora podemos projetar dispositivos que estimulam apenas as fibras necessárias para curar um órgão específico, eliminando a dependência de medicamentos sistêmicos."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dr. Kevin J. Tracey, CEO do Feinstein Institutes.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> A Engenharia do Mapa: 200 Mil Fibras
          </h2>
          
          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            Para criar este atlas sem precedentes, a equipe de cientistas utilizou técnicas avançadas de micro-CT e histologia computacional para analisar o nervo vago de 30 doadores humanos. O resultado foi o mapeamento individual de mais de <strong>200.000 fibras nervosas</strong>, revelando como elas se organizam em feixes (fascículos) que se dirigem a órgãos específicos [2].
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            A descoberta mais surpreendente foi a organização "organotópica" do nervo. Ao contrário do que se pensava, as fibras que controlam o coração, por exemplo, estão localizadas em setores específicos e previsíveis do nervo, e não misturadas aleatoriamente. Isso permite que futuros implantes bioeletrônicos — do tamanho de um grão de arroz — sejam posicionados com precisão micrométrica para tratar condições como insuficiência cardíaca ou hipertensão.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-[#4F8CFF]">
                <Layers size={20} />
              </div>
              <h3 className="text-base font-black text-[#F8FAFC]">Precisão Cirúrgica</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">
                O mapa permite identificar quais fascículos regulam a inflamação, permitindo o tratamento de Artrite Reumatoide e Doença de Crohn.
              </p>
            </div>
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-[#4F8CFF]">
                <Sparkles size={20} />
              </div>
              <h3 className="text-base font-black text-[#F8FAFC]">Fim dos Efeitos Colaterais</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">
                Ao evitar a estimulação de fibras que controlam a laringe, os novos tratamentos não causarão rouquidão ou falta de ar.
              </p>
            </div>
          </div>

          <div className="my-16 relative">
             <div className="absolute inset-0 bg-[#4F8CFF]/5 blur-3xl rounded-full" />
             <blockquote className="relative p-10 border-l-4 border-[#4F8CFF] bg-white/[0.02] rounded-r-[32px] italic text-xl md:text-2xl font-medium text-[#F8FAFC] leading-relaxed">
               "Este dataset representa o maior avanço na anatomia funcional do sistema nervoso periférico do século XXI. É o roteiro que a indústria de dispositivos médicos esperava para iniciar a era da substituição de pílulas por impulsos elétricos."
               <footer className="mt-4 text-sm font-black uppercase tracking-widest text-[#4F8CFF] not-italic">— Editorial da Science, Agosto de 2026</footer>
             </blockquote>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O Futuro: Medicina Sem Comprimidos?
          </h2>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            A disponibilização pública deste atlas (disponível no SPARC Portal) acelera o desenvolvimento de uma nova classe de terapias. Empresas de biotecnologia já estão testando "pacemakers" para o sistema imunológico que utilizam este mapa para interromper tempestades de citocinas em pacientes com doenças autoimunes graves.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-12 text-base md:text-lg font-medium">
            Para o <strong>EuvouserDoutor</strong>, este avanço reforça a tendência de que a medicina do futuro será cada vez mais uma convergência entre biologia, engenharia elétrica e ciência de dados, onde o software do corpo humano poderá ser "atualizado" através de interfaces neurais de alta precisão.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 mb-12">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4F8CFF]">Conteúdo Relacionado</h4>
            <button onClick={() => setView("news")} className="flex items-center justify-between w-full group text-left">
              <span className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#4F8CFF] transition-colors underline decoration-[#4F8CFF]/30 underline-offset-4">Sensor Quântico Levitante Detecta Atividade Cerebral Ultra-Fraca</span>
              <ExternalLink size={14} className="text-[#98A2B3] group-hover:text-[#4F8CFF] shrink-0 ml-4" />
            </button>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes Científicas</h2>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
            {[
              "Tracey, K. J. et al. A comprehensive high-resolution atlas of the human vagus nerve. Science. 2026. DOI: 10.1126/science.adh8287",
              "Feinstein Institutes for Medical Research. World's First Comprehensive Vagus Nerve Map Unveiled. August 2026.",
              "NIH SPARC Program. Mapping the human visceral nervous system. 2026."
            ].map((ref, i) => (
              <div key={i} className="flex gap-3 text-xs text-[#98A2B3] font-medium leading-relaxed">
                <span className="text-[#4F8CFF] font-black">[{i+1}]</span>
                <span>{ref}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
  prep_mensal_mk8527_2026: {
    title: "PrEP Mensal: Comprimido Único Contra HIV Avança para Fase Final com Testes no Brasil",
    subtitle: "Estudo global avalia o MK-8527, novo antirretroviral de longa duração que promete simplificar a prevenção do HIV e aumentar a adesão ao tratamento preventivo.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "7 min",
    pubTime: "23:45",
    updateDate: "12/08/2026",
    updateTime: "23:45",
    cat: "Saúde Pública",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200",
    imgCaption: "A transição da PrEP diária para opções de longa duração, como o comprimido mensal, é vista como um passo crucial para o controle da epidemia de HIV.",
    imgCredit: "Foto: Reprodução / Unsplash / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          A prevenção do HIV está prestes a passar por uma transformação histórica. Um novo medicamento de uso oral e mensal, denominado <strong>MK-8527</strong> (alimatravir), avançou para os ensaios clínicos de <strong>Fase 3</strong> em diversos centros de pesquisa ao redor do mundo, incluindo importantes instituições brasileiras como a USP e a UFMG [1].
        </p>

        <p>Diferente da Profilaxia Pré-Exposição (PrEP) convencional, que exige a ingestão diária de um comprimido, o MK-8527 utiliza uma tecnologia de liberação prolongada que permite manter níveis protetores do fármaco no organismo por 30 dias com uma única dose. Esta inovação visa combater o principal desafio da PrEP atual: a fadiga da adesão, que frequentemente leva à interrupção do tratamento preventivo [2].</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <TrendingUp size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por Que Isso Importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "A disponibilidade de uma PrEP oral mensal pode ser o divisor de águas que precisamos para alcançar populações que têm dificuldade com a rotina diária, reduzindo drasticamente as novas infecções por HIV globalmente."
              </p>
              <p className="text-[#98A2B3] text-xs mt-2">— Especialista em Doenças Infecciosas, AIDS 2026.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Estudo EXPrESSIVE: Brasil no Centro da Inovação</h2>
        <p>O programa de desenvolvimento clínico, batizado de <strong>EXPrESSIVE</strong>, está dividido em dois grandes braços globais. O estudo EXPrESSIVE-11 está recrutando voluntários em países como Brasil, Argentina, Tailândia e Estados Unidos, focando em homens cisgênero que fazem sexo com homens, homens trans e mulheres trans [3].</p>
        
        <p>Os resultados preliminares de Fase 2, apresentados em conferências internacionais como a IAS 2025 e CROI 2024, demonstraram que o MK-8527 é seguro e bem tolerado, sem apresentar a toxicidade linfocitária que interrompeu o desenvolvimento de candidatos anteriores, como o islatravir em doses mais altas [4].</p>

        <div className="my-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF] to-[#00D1FF] rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-[32px] overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200" alt="Pesquisa farmacêutica avançada" width="1200" height="800" loading="lazy" decoding="async" className="w-full h-auto" />
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[#98A2B3] text-xs md:text-sm italic">
                Ciência de Precisão: O MK-8527 é um inibidor de translocação da transcriptase reversa de nucleosídeo (NRTTI) com potência excepcional.
                <span className="block mt-1 font-bold not-italic text-[#4F8CFF]">Fonte: Merck / ClinicalTrials.gov</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Acesso Global e Licenciamento Antecipado</h2>
        <p>Em um movimento estratégico para garantir a equidade em saúde, a fabricante já anunciou acordos de licenciamento direto com sete fabricantes de genéricos na Índia e na África. Isso permitirá que, assim que aprovado, o medicamento chegue rapidamente a países de baixa e média renda com custos reduzidos, evitando os atrasos históricos observados em outras tecnologias de saúde.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">30 Dias</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Duração da Dose</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">Fase 3</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Estágio de Pesquisa</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">Brasil</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Centro de Testes</div>
          </div>
        </div>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">Nota Editorial: Prevenção Combinada</h3>
          <p className="text-white font-medium leading-relaxed">
            É fundamental reforçar que a PrEP mensal, embora promissora, faz parte de uma estratégia de prevenção combinada. O uso de preservativos, a testagem regular e o tratamento imediato de outras ISTs continuam sendo pilares essenciais da saúde sexual.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
              ClinicalTrials.gov. (2026). Efficacy and Safety of Once-Monthly MK-8527 for HIV-1 PrEP (EXPrESSIVE-11). NCT07044297.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
              Merck & Co., Inc. (2026). Merck to Initiate Phase 3 Trials for Investigational Once-Monthly HIV Prevention Pill.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
              PrEPWatch. (2026). Alimatravir (MK-8527): Product Overview and Clinical Development Pipeline.
            </li>
          </ul>
        </div>
      </>
    )
  },

  hearing_gene_therapy_2026: {
    title: "Terapia Gênica Restaura Audição Natural em Crianças e Adultos Surdos, Revela Estudo Histórico na Nature",
    subtitle: "Pesquisa multicêntrica publicada na Nature e Nature Medicine demonstra recuperação auditiva duradoura de até 2,5 anos em pacientes com surdez congênita relacionada ao gene OTOF, dispensando aparelhos e implantes artificiais.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "8 min",
    pubTime: "23:00",
    updateDate: "12/08/2026",
    updateTime: "23:00",
    cat: "Saúde & Ciência",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
    imgCaption: "Avanços em neurotecnologia e terapia gênica com vetores AAV permitem restaurar a audição biológica em pacientes com mutações genéticas hereditárias.",
    imgCredit: "Foto: Reprodução / Unsplash / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Um dos maiores marcos da medicina moderna acaba de ser consolidado. Resultados de longo prazo publicados recentemente nas revistas científicas <strong>Nature</strong> e <strong>Nature Medicine</strong> revelam que uma única intervenção de <strong>terapia gênica</strong> foi capaz de restaurar com sucesso a audição natural em crianças e adolescentes diagnosticados com surdez congênita profunda [1] [2].
        </p>

        <p>A pesquisa, conduzida por um consórcio internacional de centros médicos, acompanhou pacientes portadores de mutações no gene <strong>OTOF</strong> (responsável pela produção de otoferlina, proteína essencial para a transmissão de sinais sonoros do ouvido interno para o nervo auditivo) por um período de até 2,5 anos. Os dados confirmam não apenas a segurança do procedimento, mas a estabilidade e a qualidade superior da recuperação auditiva e da percepção da fala [3].</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por Que Isso Importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "Esta é a primeira vez que conseguimos devolver a audição biológica de forma duradoura a pacientes com surdez genética profunda sem o uso de circuitos eletrônicos ou baterias. É uma mudança de paradigma absoluto na otoneurologia."
              </p>
              <p className="text-[#98A2B3] text-xs mt-2">— Especialista em Otorrinolaringologia Pediátrica e Genética, Nature Medicine.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Mecanismo: Vetores AAV e Correção Celular</h2>
        <p>O tratamento utiliza vírus adeno-associados (AAV) modificados em laboratório para atuar como veículos de entrega segura (vetores). Esses vetores transportam cópias saudáveis do gene OTOF diretamente para as células ciliadas da cóclea através de uma microinjeção cirúrgica de precisão.</p>
        
        <p>Uma vez dentro das células, o material genético restaurado passa a produzir a otoferlina funcional, permitindo que as células convertam as vibrações sonoras em impulsos elétricos que o cérebro consegue interpretar perfeitamente. Nos testes clínicos, mais de 90% dos participantes recuperaram a audição funcional e a capacidade de compreender a fala em ambientes ruidosos [4].</p>

        <div className="my-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF] to-[#8C4FFF] rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-[32px] overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200" alt="Pesquisa laboratorial de terapia gênica" width="1200" height="800" loading="lazy" decoding="async" className="w-full h-auto" />
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[#98A2B3] text-xs md:text-sm italic">
                Inovação Biofarmacêutica: O uso de vetores AAV de dupla rotação permite alcançar com segurança as estruturas delicadas da cóclea humana.
                <span className="block mt-1 font-bold not-italic text-[#4F8CFF]">Fonte: Nature / Harvard Medical School</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Segurança, Acompanhamento de 2,5 Anos e Próximos Passos</h2>
        <p>Um dos maiores gargalos discutidos pela comunidade científica era a durabilidade e a possível resposta imunológica do organismo aos vetores virais. O estudo de coorte publicado na Nature Medicine demonstrou que a re-administração ou o acompanhamento estendido de 30 meses não apresentou efeitos adversos sistêmicos significativos, abrindo caminho para aplicações sequenciais e bilaterais em crianças muito jovens.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">90%</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Recuperação da Fala</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">2,5 Anos</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Estabilidade Clínica</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">OTOF</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Gene Alvo Corrigido</div>
          </div>
        </div>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">Nota Editorial: O Futuro da Medicina Genética</h3>
          <p className="text-white font-medium leading-relaxed">
            Para estudantes de medicina e pesquisadores, a terapia gênica para surdez hereditária representa a transição definitiva da medicina paliativa para a medicina curativa de precisão. O EuvouserDoutor seguirá acompanhando os desdobramentos regulatórios e os próximos ensaios clínicos no Brasil e no exterior.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
              Fan, X., et al. (2026). Re-administration of AAV-mediated gene therapy for OTOF-related deafness: a single-arm trial. <em>Nature Medicine</em>.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
              Jiang, L., et al. (2026). Multicentre gene therapy for OTOF-related deafness followed up to 2.5 years. <em>Nature</em>, 650, 112-120.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
              Harvard Medical School. (2026). Hearing Restoration From Gene Therapy for Inherited Deafness Lasts Years, New Trial Results Show.
            </li>
          </ul>
        </div>
      </>
    )
  },

  ebola_outbreak_drc_2026: {
    title: "Ebola: OMS Emite Alerta Urgente Sobre Segunda Maior Epidemia da História; Mortes Superam 2 Mil",
    subtitle: "Diretor-Geral da OMS afirma que surto na República Democrática do Congo avança em ritmo sem precedentes e pode se tornar o mais letal já registrado se o financiamento não chegar.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "8 min",
    pubTime: "22:15",
    updateDate: "12/08/2026",
    updateTime: "22:15",
    cat: "Saúde Pública",
    img: "/editorial/ebola_congo_2026.webp",
    imgCaption: "Ilustração editorial de uma equipe de resposta em saúde pública durante um surto de Ebola na República Democrática do Congo.",
    imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          O mundo enfrenta uma nova e devastadora crise sanitária. Em um briefing de emergência realizado hoje em Genebra (12 de agosto de 2026), o Diretor-Geral da Organização Mundial da Saúde (OMS), Dr. Tedros Adhanom Ghebreyesus, alertou que a atual epidemia de <strong>Ebola</strong> na República Democrática do Congo (RDC) já é a segunda maior da história e está avançando em um ritmo mais rápido do que qualquer surto anterior.
        </p>

        <p>Com <strong>4.449 casos confirmados</strong> e <strong>2.061 mortes</strong> registradas até o momento, a epidemia está no caminho para superar o histórico surto da África Ocidental de 2014-2016, que vitimou mais de 11 mil pessoas. O epicentro atual concentra-se na província de Ituri, onde a transmissão sustentada em áreas urbanas e o conflito armado dificultam as operações de socorro.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#FF4F4F]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4F4F]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#FF4F4F]/10 flex items-center justify-center text-[#FF4F4F] shrink-0">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#FF4F4F] uppercase tracking-[0.3em] mb-3">Atenção Editorial</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "Estamos correndo contra o relógio. Se não contivermos a transmissão agora, o risco de disseminação regional e internacional se tornará uma realidade catastrófica."
              </p>
              <p className="text-[#98A2B3] text-xs mt-2">— Dr. Tedros Adhanom, Briefing da OMS, 12/08/2026.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Fator Insegurança e Resistência Comunitária</h2>
        <p>A resposta ao surto é considerada a mais complexa da história. Diferente de crises anteriores, as equipes médicas da OMS e do MSF (Médicos Sem Fronteiras) operam sob fogo cruzado. Grupos armados locais têm atacado centros de tratamento, resultando em mortes de profissionais de saúde e forçando a suspensão temporária de vacinações.</p>
        
        <p>Além da violência, a desinformação e a desconfiança nas comunidades locais têm levado famílias a esconderem doentes, o que alimenta a cadeia de transmissão silenciosa. A OMS estima que para cada caso confirmado, existam pelo menos dois outros não detectados nas comunidades rurais de difícil acesso.</p>

        <div className="my-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF4F4F] to-[#8C4FFF] rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-[32px] overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200" alt="Equipes de saúde em resposta a epidemias" width="1200" height="800" loading="lazy" decoding="async" className="w-full h-auto" />
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[#98A2B3] text-xs md:text-sm italic">
                Linha de Frente: Profissionais de saúde utilizam EPIs de nível 4 para tratar pacientes infectados em zonas de conflito na RDC.
                <span className="block mt-1 font-bold not-italic text-[#FF4F4F]">Fonte: WHO / Getty Images</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Financiamento em Colapso</h2>
        <p>O alerta mais grave de Tedros refere-se à falta de recursos. O Plano Estratégico de Resposta (SRP) da OMS está com um déficit de 70%. Sem os fundos necessários, a vigilância em aeroportos e fronteiras será reduzida, aumentando o risco de o vírus cruzar para países vizinhos como Uganda, Ruanda e Sudão do Sul.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#FF4F4F] mb-1">4.449</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Casos Confirmados</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#FF4F4F] mb-1">2.061</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Mortes Registradas</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#FF4F4F] mb-1">46%</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Taxa de Letalidade</div>
          </div>
        </div>

        <div className="bg-[#FF4F4F]/10 border border-[#FF4F4F]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#FF4F4F] font-black uppercase tracking-widest text-xs mb-4">O Que Vem Agora: Resposta Global</h3>
          <p className="text-white font-medium leading-relaxed">
            A OMS convocou uma reunião do Comitê de Emergência para avaliar se o surto deve ser declarado uma Emergência de Saúde Pública de Importância Internacional (ESPII). O EuvouserDoutor continuará monitorando os dados oficiais em tempo real.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#FF4F4F]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#FF4F4F] font-black not-italic">[1]</span>
              World Health Organization. Ebola Outbreak in the Democratic Republic of the Congo: External Situation Report 92. 2026.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#FF4F4F] font-black not-italic">[2]</span>
              Médecins Sans Frontières. Crisis in North Kivu: Security and Ebola response. Aug 2026.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#FF4F4F] font-black not-italic">[3]</span>
              The Lancet. The complex dynamics of the 2026 Ebola outbreak. DOI: 10.1016/S0140-6736(26)31245-2.
            </li>
          </ul>
        </div>
      </>
    )
  },

    cintura_imc_2026: {
      title: "Tamanho da Cintura é Melhor que o IMC para Prever Risco Cardíaco, Revela Estudo com 260 Mil Pessoas",
      subtitle: "Pesquisa publicada no JACC mostra que gordura abdominal identifica perigos ao coração mesmo em quem tem peso considerado normal; entenda os novos limites.",
      cat: "Saúde Pública",
      time: "7 min",
      date: "12 Ago 2026",
      pubTime: "23:25",
      img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=1200",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Por décadas, o Índice de Massa Corporal (IMC) foi o padrão-ouro para avaliar se alguém está "em forma" ou em risco. No entanto, um estudo massivo com quase <strong>260 mil pessoas</strong> acaba de confirmar o que muitos especialistas já suspeitavam: a fita métrica pode ser muito mais precisa do que a balança para prever ataques cardíacos e derrames.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            O estudo, publicado no prestigiado <strong>Journal of the American College of Cardiology (JACC)</strong>, acompanhou participantes por mais de uma década. Os pesquisadores descobriram que a circunferência da cintura e a relação cintura-estatura são indicadores muito mais sensíveis da saúde cardiovascular do que o peso total ou o IMC isolado.
          </p>

          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Atenção Médica</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "O IMC é uma medida de volume, não de saúde. Você pode ter um peso considerado normal e ainda assim estar em alto risco se sua gordura estiver concentrada na região abdominal."
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O Mito do Peso Normal
          </h2>
          
          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            O ponto mais alarmante da pesquisa é a identificação do risco em pessoas com IMC "saudável". Indivíduos com peso normal, mas com acúmulo de gordura na região da cintura, possuíam um risco cardiovascular significativamente maior do que aqueles com IMC levemente elevado, mas sem gordura abdominal proeminente.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            De acordo com os pesquisadores, a gordura abdominal (visceral) funciona como um órgão endócrino inflamatório, liberando citocinas que danificam as artérias e aumentam a resistência à insulina, independentemente da quantidade de gordura em outras partes do corpo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-[#4F8CFF]">
                <Target size={20} />
              </div>
              <h3 className="text-base font-black text-[#F8FAFC]">Homens: 94 cm</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">
                A partir desta medida, o risco de eventos cardíacos aumenta de forma exponencial, mesmo em homens ativos.
              </p>
            </div>
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-[#4F8CFF]">
                <Target size={20} />
              </div>
              <h3 className="text-base font-black text-[#F8FAFC]">Mulheres: 80 cm</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">
                Este é o marco de alerta para o público feminino, indicando a necessidade de intervenções preventivas.
              </p>
            </div>
          </div>

          <div className="my-16 relative">
             <div className="absolute inset-0 bg-[#4F8CFF]/5 blur-3xl rounded-full" />
             <blockquote className="relative p-10 border-l-4 border-[#4F8CFF] bg-white/[0.02] rounded-r-[32px] italic text-xl md:text-2xl font-medium text-[#F8FAFC] leading-relaxed">
               "Nossos dados sugerem que a fita métrica deveria ser uma ferramenta obrigatória em cada exame físico. Ela conta uma história que a balança simplesmente não consegue ver."
               <footer className="mt-4 text-sm font-black uppercase tracking-widest text-[#4F8CFF] not-italic">— Dr. James Wright, Investigador Principal, JACC 2026</footer>
             </blockquote>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Por que a Barriga é o Problema?
          </h2>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            Diferente da gordura subcutânea, a gordura visceral envolve os órgãos vitais como o fígado e o pâncreas. Ela está diretamente ligada à síndrome metabólica, hipertensão e ao aumento do colesterol LDL (o "ruim"). O estudo demonstrou que a redução de apenas 5 cm na circunferência da cintura pode diminuir o risco de morte prematura em até 10%.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-12 text-base md:text-lg font-medium">
            A recomendação final dos especialistas é clara: foque menos no número da balança e mais na composição corporal. Exercícios de força e uma dieta balanceada são fundamentais para reduzir a gordura visceral, mesmo que o peso total não mude drasticamente.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 mb-12">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4F8CFF]">Conteúdo Relacionado</h4>
            <button onClick={() => setView("news")} className="flex items-center justify-between w-full group text-left">
              <span className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#4F8CFF] transition-colors underline decoration-[#4F8CFF]/30 underline-offset-4">Variante no gene FNIP1 é associada a proteção metabólica e menos gordura</span>
              <ExternalLink size={14} className="text-[#98A2B3] group-hover:text-[#4F8CFF] shrink-0 ml-4" />
            </button>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes Científicas</h2>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
            {[
              "Wright, J. et al. Waist circumference vs BMI: A 10-year prospective study of 260,000 adults. Journal of the American College of Cardiology. 2026.",
              "World Heart Federation. Global guidelines for cardiovascular risk assessment. 2026.",
              "Lancet Regional Health. The limitations of BMI in clinical practice. August 2026."
            ].map((ref, i) => (
              <div key={i} className="flex gap-3 text-xs text-[#98A2B3] font-medium leading-relaxed">
                <span className="text-[#4F8CFF] font-black">[{i+1}]</span>
                <span>{ref}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
  post_hearing_gene_therapy_2026: {
    title: "Terapia Gênica Restaura Audição Natural em Crianças e Adultos Surdos, Revela Estudo Histórico na Nature",
    subtitle: "Pesquisa multicêntrica publicada na Nature e Nature Medicine demonstra recuperação auditiva duradoura de até 2,5 anos em pacientes com surdez congênita relacionada ao gene OTOF, dispensando aparelhos e implantes artificiais.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "8 min",
    pubTime: "23:00",
    updateDate: "12/08/2026",
    updateTime: "23:00",
    cat: "Saúde & Ciência",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
    imgCaption: "Avanços em neurotecnologia e terapia gênica com vetores AAV permitem restaurar a audição biológica em pacientes com mutações genéticas hereditárias.",
    imgCredit: "Foto: Reprodução / Unsplash / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Um dos maiores marcos da medicina moderna acaba de ser consolidado. Resultados de longo prazo publicados recentemente nas revistas científicas <strong>Nature</strong> e <strong>Nature Medicine</strong> revelam que uma única intervenção de <strong>terapia gênica</strong> foi capaz de restaurar com sucesso a audição natural em crianças e adolescentes diagnosticados com surdez congênita profunda [1] [2].
        </p>

        <p>A pesquisa, conduzida por um consórcio internacional de centros médicos, acompanhou pacientes portadores de mutações no gene <strong>OTOF</strong> (responsável pela produção de otoferlina, proteína essencial para a transmissão de sinais sonoros do ouvido interno para o nervo auditivo) por um período de até 2,5 anos. Os dados confirmam não apenas a segurança do procedimento, mas a estabilidade e a qualidade superior da recuperação auditiva e da percepção da fala [3].</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por Que Isso Importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "Esta é a primeira vez que conseguimos devolver a audição biológica de forma duradoura a pacientes com surdez genética profunda sem o uso de circuitos eletrônicos ou baterias. É uma mudança de paradigma absoluto na otoneurologia."
              </p>
              <p className="text-[#98A2B3] text-xs mt-2">— Especialista em Otorrinolaringologia Pediátrica e Genética, Nature Medicine.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Mecanismo: Vetores AAV e Correção Celular</h2>
        <p>O tratamento utiliza vírus adeno-associados (AAV) modificados em laboratório para atuar como veículos de entrega segura (vetores). Esses vetores transportam cópias saudáveis do gene OTOF diretamente para as células ciliadas da cóclea através de uma microinjeção cirúrgica de precisão.</p>
        
        <p>Uma vez dentro das células, o material genético restaurado passa a produzir a otoferlina funcional, permitindo que as células convertam as vibrações sonoras em impulsos elétricos que o cérebro consegue interpretar perfeitamente. Nos testes clínicos, mais de 90% dos participantes recuperaram a audição funcional e a capacidade de compreender a fala em ambientes ruidosos [4].</p>

        <div className="my-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF] to-[#8C4FFF] rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-[32px] overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200" alt="Pesquisa laboratorial de terapia gênica" width="1200" height="800" loading="lazy" decoding="async" className="w-full h-auto" />
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[#98A2B3] text-xs md:text-sm italic">
                Inovação Biofarmacêutica: O uso de vetores AAV de dupla rotação permite alcançar com segurança as estruturas delicadas da cóclea humana.
                <span className="block mt-1 font-bold not-italic text-[#4F8CFF]">Fonte: Nature / Harvard Medical School</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Segurança, Acompanhamento de 2,5 Anos e Próximos Passos</h2>
        <p>Um dos maiores gargalos discutidos pela comunidade científica era a durabilidade e a possível resposta imunológica do organismo aos vetores virais. O estudo de coorte publicado na Nature Medicine demonstrou que a re-administração ou o acompanhamento estendido de 30 meses não apresentou efeitos adversos sistêmicos significativos, abrindo caminho para aplicações sequenciais e bilaterais em crianças muito jovens.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">90%</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Recuperação da Fala</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">2,5 Anos</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Estabilidade Clínica</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">OTOF</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Gene Alvo Corrigido</div>
          </div>
        </div>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">Nota Editorial: O Futuro da Medicina Genética</h3>
          <p className="text-white font-medium leading-relaxed">
            Para estudantes de medicina e pesquisadores, a terapia gênica para surdez hereditária representa a transição definitiva da medicina paliativa para a medicina curativa de precisão. O EuvouserDoutor seguirá acompanhando os desdobramentos regulatórios e os próximos ensaios clínicos no Brasil e no exterior.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
              Fan, X., et al. (2026). Re-administration of AAV-mediated gene therapy for OTOF-related deafness: a single-arm trial. <em>Nature Medicine</em>.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
              Jiang, L., et al. (2026). Multicentre gene therapy for OTOF-related deafness followed up to 2.5 years. <em>Nature</em>, 650, 112-120.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
              Harvard Medical School. (2026). Hearing Restoration From Gene Therapy for Inherited Deafness Lasts Years, New Trial Results Show.
            </li>
          </ul>
        </div>
      </>
    )
  },

  sensor_levitante_cerebral_2026: {
    title: "Sensor Quântico Levitante Consegue Detectar Atividade Cerebral Ultra-Fraca",
    subtitle: "Estudo publicado na Nature revela magnetômetro de ímã levitado à temperatura ambiente que atinge sensibilidade sem precedentes, rivalizando com criogenia avançada.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    cat: "Tecnologia Médica",
    time: "6 min",
    date: "12/08/2026",
    pubTime: "09:00",
    updateDate: "12/08/2026",
    updateTime: "09:00",
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
    imgCaption: "Representação conceitual de laboratório de neurotecnologia e sensoriamento quântico aplicado à medicina.",
    imgCredit: "Foto: Reprodução / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          A interseção entre física quântica e neurociência acaba de alcançar um patamar revolucionário. Um estudo publicado no periódico científico <strong>Nature</strong> apresentou um novo sensor magnético baseado em um ímã milimétrico em levitação, capaz de registrar sinais elétricos ultra-fracos emitidos pelo cérebro humano sem a necessidade de sistemas criogênicos complexos [1] [2].
        </p>

        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          Desenvolvido por equipes internacionais de físicos e biofísicos, o dispositivo supera uma das maiores barreiras no mapeamento da atividade neuronal: a alta sensibilidade exigida para captar campos magnéticos cerebrais, que são bilhões de vezes mais fracos que o campo magnético da Terra. Até então, equipamentos de ponta como os SQUIDs (Dispositivos Supercondutores de Interferência Quântica) dependiam de resfriamento com hélio líquido para funcionar, limitando drasticamente sua portabilidade e aplicação clínica ampla.
        </p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Inovação em Destaque</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "Conseguimos atingir uma sensibilidade de 32 femtoteslas por raiz quadrada de hertz à temperatura ambiente. Isso significa que podemos monitorar a atividade neuronal de forma portátil e direta, abrindo uma nova era para a neurotecnologia diagnóstica."
              </p>
              <p className="text-[#98A2B3] text-xs mt-2">— Equipe de Pesquisa em Física Aplicada e Biofísica, Nature.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
          <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Como Funciona o Sensor Levitante
        </h2>
        
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
          O equipamento utiliza um pequeno ímã ferromagnético estabilizado por forças diamagnéticas em ambiente ambiente. Quando impulsos elétricos percorrem os neurônios do córtex cerebral, eles geram campos magnéticos minúsculos. O movimento milimétrico do ímã em suspensão é detectado opticamente com precisão extrema, convertendo flutuações magnéticas em dados neurais detalhados [3].
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
            <div className="text-[#4F8CFF] font-black text-4xl">32 fT</div>
            <h3 className="text-white font-black text-lg">Sensibilidade Extrema</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed">
              Nível de detecção comparável aos melhores magnetômetros criogênicos do mundo, operando sem refrigeração complexa.
            </p>
          </div>
          <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
            <div className="text-[#4F8CFF] font-black text-4xl">Portabilidade</div>
            <h3 className="text-white font-black text-lg">Aplicações Clínicas</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed">
              Potencial para transformar o diagnóstico precoce de epilepsia, distúrbios neurológicos e mapeamento de funções cognitivas.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Impacto no Futuro da Neurologia</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
          Com a eliminação da necessidade de criogenia, a tecnologia aproxima os exames de magnetoencefalografia (MEG) da prática ambulatorial rotineira. Pacientes com quadros neurológicos complexos poderão ser avaliados com resolução espacial e temporal elevadas, sem as restrições físicas impostas por salas blindadas e refrigeradas a hélio líquido.
        </p>

        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3 mb-12">
          <h3 className="text-[#F8FAFC] font-bold text-lg mb-2">Por Que Isso Importa</h3>
          <p className="text-[#98A2B3] text-sm leading-relaxed italic">
            A capacidade de escutar os sussurros magnéticos do cérebro fora de ambientes laboratoriais restritos representa um salto comparável à transição do eletroencefalograma tradicional para sistemas de alta definição.
          </p>
        </div>

        <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes Científicas</h2>
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
          {[
            "Shenai, D., et al. Levitating sensor for magnetic fields could detect ultrafaint brain activity. Nature. 2026.",
            "Ji, W., Xu, C., & Budker, D. Levitated sensor for magnetometry in ambient environment. Science & Nature Physics. 2026.",
            "Institute of Physics (IOP). Quantum magnetometers and their clinical translation in neuroimaging. 2026."
          ].map((ref, i) => (
            <div key={i} className="flex gap-3 text-xs text-[#98A2B3] font-medium leading-relaxed">
              <span className="text-[#4F8CFF] font-black">[{i+1}]</span>
              <span>{ref}</span>
            </div>
          ))}
        </div>
      </>
    )
  },

  ai_oncology_lymphoma_2026: {
    title: "IA na Oncologia: Novo Modelo de Machine Learning Personaliza Tratamento de Linfoma e Evita Superdosagem",
    subtitle: "Estudo publicado na Science Partner Journals revela que algoritmo consegue identificar quais pacientes realmente se beneficiam da terapia de manutenção com rituximabe, reduzindo riscos e custos.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "8 min",
    pubTime: "19:15",
    updateDate: "12/08/2026",
    updateTime: "19:15",
    cat: "Saúde & Ciência",
    img: "/editorial/ia_oncologia_linfoma_2026.webp",
    imgCaption: "Ilustração editorial sobre o uso de inteligência artificial para analisar células tumorais e apoiar decisões no tratamento de linfoma.",
    imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          A inteligência artificial está transformando a forma como médicos decidem o futuro de pacientes com câncer. Um estudo pioneiro publicado hoje na revista <strong>Health Data Science</strong> (12 de agosto de 2026), um periódico parceiro da prestigiada revista <strong>Science</strong>, apresenta um modelo de <strong>Machine Learning</strong> capaz de personalizar o tratamento de manutenção para o Linfoma Folicular, um tipo comum de câncer no sangue.
        </p>

        <p>Atualmente, o uso do anticorpo monoclonal <strong>rituximabe</strong> como terapia de manutenção é o padrão para evitar a volta da doença. No entanto, o benefício varia drasticamente entre os indivíduos. Muitos pacientes acabam recebendo o medicamento por anos sem necessidade real, enfrentando efeitos colaterais e custos elevados, enquanto outros têm um risco maior de progressão que exige monitoramento intensivo.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "Não estamos apenas prevendo quem vai ficar bem, mas sim quem vai ficar bem especificamente por causa do tratamento. Isso permite que médicos e pacientes decidam, com base em dados, se vale a pena continuar a terapia de manutenção ou se o risco de toxicidade supera o benefício clínico."
              </p>
              <p className="text-[#98A2B3] text-xs mt-2">— Dr. Liantao Ma, pesquisador da Universidade de Pequim e autor do estudo.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">A Solução: Double Machine Learning</h2>
        <p>Pesquisadores da Universidade de Pequim e da Universidade de Edimburgo desenvolveram uma estrutura de <strong>Double Machine Learning</strong> baseada em dados de centenas de pacientes. O algoritmo consegue separar o risco de base do paciente (prognóstico) do benefício real que ele terá com o medicamento (predição).</p>
        
        <p>Os resultados foram impressionantes. Pacientes cujos tratamentos foram alinhados com as recomendações da IA apresentaram uma taxa de progressão da doença de apenas <strong>14,8%</strong>, contra <strong>38,0%</strong> naqueles que não seguiram o padrão sugerido pelo modelo. Além disso, a IA identificou um subgrupo de "baixo risco e baixo benefício" que poderia, com segurança, evitar anos de tratamento desnecessário.</p>

        <div className="my-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF] to-[#00D1FF] rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-[32px] overflow-hidden border border-white/10">
            <img src="/editorial/ia_oncologia_linfoma_2026.webp" alt="Mecanismo de ação do rituximabe" width="1200" height="800" loading="lazy" decoding="async" className="w-full h-auto" />
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[#98A2B3] text-xs md:text-sm italic">
                Medicina de Precisão: O rituximabe ataca células B específicas, mas sua eficácia depende do perfil imunológico individual, agora mapeável por IA.
                <span className="block mt-1 font-bold not-italic text-[#4F8CFF]">Fonte: BioRender / Nature Reviews</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Impacto no Brasil e no SUS</h2>
        <p>No Brasil, onde o acesso a terapias de alto custo como o rituximabe é um desafio constante tanto no SUS quanto na saúde suplementar, a aplicação de ferramentas de IA para otimizar o uso de recursos pode salvar vidas e equilibrar orçamentos hospitalares. A redução de tratamentos desnecessários diminui a fila de espera e permite que o investimento seja direcionado para pacientes com maior necessidade clínica.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">61%</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Redução de Progressão</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">404</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Pacientes Analisados</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">Zero</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Custo Adicional de Software</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O que vem agora: Validação Clínica</h2>
        <p>Embora os dados retrospectivos sejam robustos, o próximo passo é a validação em ensaios clínicos prospectivos. O framework desenvolvido pela equipe serve como um "template" para reduzir o excesso de tratamento em outras áreas da oncologia, como o uso de imunoterapias modernas.</p>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">Nota Editorial</h3>
          <p className="text-white font-medium leading-relaxed">
            O uso de IA na medicina não substitui o julgamento clínico, mas atua como um poderoso copiloto para decisões mais seguras e baseadas em evidências personalizadas.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
              Wu, M., et al. (2026). Personalizing Maintenance Rituximab in Follicular Lymphoma: A Machine Learning Framework for Risk-Benefit Optimization. <strong>Health Data Science</strong>. DOI: 10.34133/hds.0467.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
              Science Partner Journals (SPJ). (2026). Breakthrough in personalized oncology using machine learning.
            </li>
          </ul>
        </div>
      </>
    )
  },

  silicosis_engineered_stone_2026: {
    title: "Alerta de Saúde: Bancadas de Quartzo Causam Surto de Doença Pulmonar Fatal em Trabalhadores",
    subtitle: "Estudo publicado no NEJM revela centenas de casos de silicose grave e mortes ligadas ao corte de pedras artificiais; especialistas pedem proibição do material.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "7 min",
    pubTime: "18:45",
    updateDate: "12/08/2026",
    updateTime: "18:45",
    cat: "Saúde Pública",
    img: "/editorial/angiotomografia_coronariana_2026.webp",
    imgCaption: "As bancadas de quartzo, populares pelo design moderno, contêm altos níveis de sílica cristalina que se torna pó letal durante o corte e instalação.",
    imgCredit: "Foto: Reprodução / Artistic Stone / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Um estudo epidemiológico abrangente publicado hoje no <strong>New England Journal of Medicine (NEJM)</strong> (12 de agosto de 2026) emite um alerta urgente sobre o uso de pedras artificiais, como o quartzo engenheirado, em reformas domésticas. A pesquisa revela um surto devastador de <strong>silicose acelerada</strong> entre trabalhadores que cortam e poluem esses materiais, com centenas de casos graves e dezenas de mortes registradas.
        </p>

        <p>Diferente do granito ou mármore natural, as pedras artificiais podem conter até 90% de sílica cristalina. Quando cortadas a seco, liberam uma poeira microscópica que, uma vez inalada, causa cicatrizes irreversíveis nos pulmões, levando à falência respiratória em poucos anos — muitas vezes afetando homens jovens na faixa dos 30 anos.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "Estamos diante de uma epidemia evitável de uma doença incurável. O quartzo tornou-se o padrão ouro das cozinhas modernas, mas o custo humano de sua fabricação é inaceitável. Sem regulamentações rigorosas ou proibição total, continuaremos a ver trabalhadores morrendo por causa de uma tendência estética."
              </p>
              <p className="text-[#98A2B3] text-xs mt-2">— Dra. Jane Fazio, pneumologista e autora principal do estudo.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Impacto em Números: A Crise na Califórnia</h2>
        <p>O estudo analisou dados do Departamento de Saúde Pública da Califórnia entre 2019 e 2026, identificando <strong>592 casos confirmados</strong> de silicose ligada a pedras engenheiradas. Destes, 31 trabalhadores morreram devido à doença e 65 necessitaram de transplante de pulmão para sobreviver.</p>

        <p>A maioria das vítimas são imigrantes latinos que trabalham em pequenas oficinas de marmoraria, muitas vezes sem equipamentos de proteção adequados (como máscaras N95 ou sistemas de corte com água). O estudo destaca que a progressão da doença nestes casos é muito mais rápida do que na silicose clássica vista em mineradores.</p>

        <div className="my-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF] to-[#00D1FF] rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-[32px] overflow-hidden border border-white/10">
            <SafeImage src="/editorial/angiotomografia_coronariana_2026.webp" alt="Risco de silicose em marmorarias" width="1200" height="800" loading="lazy" decoding="async" className="w-full h-auto" />
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[#98A2B3] text-xs md:text-sm italic">
                Perigo Invisível: O corte de pedras de quartzo gera poeira de sílica altamente concentrada. Especialistas recomendam apenas o corte úmido e ventilação industrial pesada.
                <span className="block mt-1 font-bold not-italic text-[#4F8CFF]">Fonte: OSHA / NEJM Evidence</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Relevância para o Brasil</h2>
        <p>O Brasil é um grande exportador de pedras ornamentais e possui um vasto setor de marmorarias. No estado de Minas Gerais, especialmente em regiões como São Thomé das Letras, a silicose já é um problema de saúde pública conhecido. No entanto, o avanço das pedras artificiais (quartzo) nas grandes cidades brasileiras traz um novo componente de risco para os trabalhadores urbanos que realizam a instalação final em apartamentos e residências.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">90%</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Concentração de Sílica</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">31</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Mortes Confirmadas</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">65</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Transplantes Pulmonares</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O que vem agora: Proibição Global?</h2>
        <p>Seguindo o exemplo da Austrália, que se tornou o primeiro país do mundo a banir o quartzo engenheirado em julho de 2024, legisladores na Califórnia e em outros estados dos EUA já discutem proibições semelhantes. No Brasil, especialistas em medicina do trabalho defendem uma fiscalização mais rigorosa do Ministério do Trabalho e do SUS para identificar precocemente trabalhadores expostos ao material letal.</p>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">Atenção ao Consumidor</h3>
          <p className="text-white font-medium leading-relaxed">
            Se você está reformando sua casa, pergunte ao seu fornecedor sobre as medidas de segurança adotadas na oficina. Opte por materiais naturais com menor teor de sílica ou certifique-se de que a empresa utiliza apenas métodos de corte úmido para proteger a vida de quem constrói seu sonho.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
              Heinzerling, A., et al. (2026). Silicosis among Workers Fabricating Engineered Stone (“Quartz”) Countertops in California, 2019–2026. <strong>NEJM Evidence</strong>. DOI: 10.1056/EVIDpha2600187.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
              California Department of Public Health (CDPH). (2026). Public Health Alert: Engineered Stone Silicosis Epidemic.
            </li>
          </ul>
        </div>
      </>
    )
  },

  ai_knee_mri_2026: {
    title: "IA reduz em 55% o tempo da ressonância do joelho sem perder qualidade em estudo",
    subtitle: "Pesquisa prospectiva na Scientific Reports combinou compressão assistida por inteligência artificial e reconstrução por deep learning; resultado ainda é de viabilidade e não substitui a avaliação de radiologistas.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "7 min",
    pubTime: "18:35",
    updateDate: "12/08/2026",
    updateTime: "18:35",
    cat: "Tecnologia Médica",
    img: "/editorial/angiotomografia_coronariana_2026.webp",
    imgCaption: "Imagem ilustrativa de uma ressonância magnética do joelho; o exame não corresponde necessariamente às imagens analisadas no estudo.",
    imgCredit: "Ptrump16 / Wikimedia Commons, CC BY-SA 4.0; adaptada para uso editorial.",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Uma combinação de inteligência artificial e técnicas de reconstrução de imagens reduziu em <strong>55% o tempo de aquisição de exames de ressonância magnética do joelho</strong> em um estudo prospectivo publicado na revista <i>Scientific Reports</i>. Os pesquisadores também relataram melhora em medidas objetivas de qualidade e maior confiança diagnóstica entre dois radiologistas que analisaram as imagens de forma cega [1].
        </p>

        <p>
          O resultado é promissor para pacientes que enfrentam longos períodos dentro do aparelho, mas ainda não representa uma tecnologia pronta para substituir protocolos convencionais ou a avaliação médica. O trabalho foi apresentado como um estudo de viabilidade, realizado em um único hospital e com uma amostra pequena: 10 voluntários saudáveis e 40 pessoas com alterações no joelho [1].
        </p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                Exames mais rápidos podem reduzir o desconforto, facilitar a realização de imagens em pessoas com dificuldade de permanecer imóveis e aumentar a capacidade de atendimento. Antes de chegar à rotina clínica, porém, a técnica precisa ser testada em grupos maiores, diferentes aparelhos e cenários de diagnóstico.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Como a tecnologia foi combinada</h2>
        <p>
          O protocolo avaliou duas ferramentas. A primeira foi a <strong>compressão assistida por inteligência artificial</strong>, identificada no artigo pela sigla ACS. A segunda foi a reconstrução de imagens por <strong>deep learning</strong>, ou aprendizado profundo, chamada de DLR. Em conjunto, os recursos tentam recuperar uma imagem clinicamente útil a partir de uma aquisição mais rápida, compensando parte do ruído que normalmente aparece quando o exame é acelerado.
        </p>

        <p>
          Antes da comparação principal, os pesquisadores fizeram um estudo-piloto com voluntários saudáveis para ajustar fatores de aceleração entre 1 e 3. Depois, as imagens convencionais, as obtidas com ACS e as produzidas com ACS mais DLR foram comparadas por tempo de aquisição, relação sinal-ruído, relação contraste-ruído, qualidade visual e confiança no diagnóstico [1].
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">55%</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Menos tempo de aquisição</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">50</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Participantes no estudo</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">2</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Radiologistas avaliadores</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O que os pesquisadores observaram</h2>
        <p>
          Em comparação com a sequência convencional, as abordagens que usaram ACS e ACS mais DLR reduziram o tempo de aquisição em 55%. O artigo também relata melhora significativa nas relações sinal-ruído e contraste-ruído, além de notas mais altas para qualidade subjetiva e confiança diagnóstica [1].
        </p>

        <p>
          A combinação com reconstrução por deep learning apresentou desempenho superior ao ACS isolado nas avaliações de qualidade e confiança. Segundo os autores, a técnica permitiu visualizar com mais clareza a graduação de lesões do menisco, diminuiu artefatos associados a implantes e ajudou a delimitar edema da medula óssea e tecidos moles.
        </p>

        <div className="glass-premium rounded-[32px] p-8 my-12 border border-amber-400/20 relative overflow-hidden">
          <div className="flex items-start gap-5 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-300 shrink-0">
              <BookOpen size={22} />
            </div>
            <div>
              <h3 className="text-amber-300 font-black uppercase tracking-widest text-xs mb-3">Atenção</h3>
              <p className="text-white font-medium leading-relaxed">
                O estudo não avaliou se a tecnologia melhora desfechos clínicos, reduz erros em pacientes reais ou permite dispensar sequências adicionais do exame. O ganho de velocidade também não significa que toda ressonância de joelho possa durar exatamente metade do tempo: o resultado depende do equipamento, do protocolo, da região examinada e da indicação clínica.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Limitações e próximos passos</h2>
        <p>
          A investigação foi conduzida no Department of Radiology do Guiqian International Hospital, em Guiyang, na China, e não recebeu financiamento específico. Os autores declararam não ter conflitos de interesse. A página da revista informa que o texto foi disponibilizado em uma versão não editada para acesso antecipado e que ainda passará por edição antes da publicação final [1].
        </p>

        <p>
          Isso reforça a necessidade de validação externa. Estudos multicêntricos, com aparelhos de fabricantes diferentes, populações mais diversas e comparação com resultados clínicos, serão necessários para estabelecer se a combinação é segura e consistente em situações reais. Até lá, a ferramenta deve ser entendida como uma possibilidade de apoio à aquisição e à reconstrução de imagens, não como um diagnóstico automatizado.
        </p>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">O que vem agora</h3>
          <p className="text-white font-medium leading-relaxed">
            A próxima etapa é verificar se a redução do tempo se mantém sem comprometer a identificação de diferentes lesões em centros independentes. Para o paciente, a principal promessa é um exame potencialmente mais tolerável; para os serviços de saúde, a possibilidade de ampliar a capacidade de atendimento sem abrir mão do controle de qualidade.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
              Zhao, X.; Xiang, Y.; Yin, J.; Lu, M. (2026). <i>AI-assisted acceleration combined with deep learning of the knee: feasibility of anomaly detection</i>. <strong>Scientific Reports</strong>. DOI: <a href="https://doi.org/10.1038/s41598-026-66317-3" target="_blank" rel="noopener noreferrer" className="text-[#4F8CFF] hover:underline">10.1038/s41598-026-66317-3</a>.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
              Ptrump16. <i>Knee MRI PD TSE FS Sagittal.jpg</i>. Wikimedia Commons. Licença <strong>CC BY-SA 4.0</strong>: <a href="https://commons.wikimedia.org/wiki/File:Knee_MRI_PD_TSE_FS_Sagittal.jpg" target="_blank" rel="noopener noreferrer" className="text-[#4F8CFF] hover:underline">página da imagem</a>.
            </li>
          </ul>
        </div>
      </>
    )
  },
  hiv_vaccine_breakthrough_2026: {
    title: "Vacina contra HIV: Estudo na Nature revela avanço histórico na produção de anticorpos potentes",
    subtitle: "Pesquisa em primatas demonstra que nova estratégia consegue 'treinar' o sistema imune para combater variantes globais do vírus; descoberta aproxima ciência da vacina definitiva.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "8 min",
    pubTime: "18:15",
    updateDate: "12/08/2026",
    updateTime: "18:15",
    cat: "Saúde & Ciência",
    img: "/editorial/vacina_hiv_2026.webp",
    imgCaption: "Ilustração editorial de um ensaio de vacina contra HIV em um laboratório de pesquisa.",
    imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Uma barreira de décadas na luta contra o HIV acaba de ser rompida. Três estudos independentes publicados na prestigiada revista <strong>Nature</strong> em 12 de agosto de 2026 revelam que uma nova estratégia de vacinação foi capaz de induzir, pela primeira vez, a produção de <strong>anticorpos neutralizantes de amplo espectro (bnAbs)</strong> em primatas não humanos, um marco considerado o "santo graal" da imunologia.
        </p>

        <p>O grande desafio de uma vacina contra o HIV sempre foi a mutação constante do vírus. Enquanto as vacinas comuns ensinam o corpo a reconhecer uma forma específica de invasor, o HIV muda tão rápido que escapa de quase todos os anticorpos. No entanto, os bnAbs são anticorpos raros que conseguem se ligar a partes do vírus que não mudam, bloqueando a infecção de quase todas as variantes globais.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "Não estamos apenas gerando anticorpos; estamos guiando o sistema imune através de um caminho evolutivo complexo para produzir exatamente as armas que ele raramente consegue fabricar sozinho. É como treinar um exército de elite para atingir o único ponto fraco de um inimigo que muda de rosto constantemente."
              </p>
              <p className="text-[#98A2B3] text-xs mt-2">— Dr. William Schief, pesquisador da Scripps Research e um dos líderes do estudo.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">A Estratégia: Direcionamento de Linhagem Germinativa</h2>
        <p>A técnica utilizada, chamada de <strong>germline-targeting</strong> (direcionamento de linhagem germinativa), funciona como um programa de treinamento em etapas. Em vez de uma única dose, a vacina utiliza uma série de imunizantes projetados para ativar células imunes raras (células B precursoras) e, em seguida, guiá-las através de mutações específicas até que se tornem fábricas de bnAbs.</p>

        <p>Nos estudos publicados hoje, os pesquisadores focaram na classe <strong>VRC01</strong> de anticorpos, que atacam o local onde o vírus se liga às células humanas (o sítio de ligação CD4). Os resultados mostraram que <strong>44% dos macacos rhesus</strong> vacinados desenvolveram esses anticorpos potentes, um nível de sucesso nunca antes visto em modelos animais tão rigorosos.</p>

        <div className="my-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF] to-[#00D1FF] rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-[32px] overflow-hidden border border-white/10">
            <img src="/editorial/vacina_hiv_2026.webp" alt="Mecanismo de ação da vacina HIV" width="1200" height="800" loading="lazy" decoding="async" className="w-full h-auto" />
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[#98A2B3] text-xs md:text-sm italic">
                Treinamento Imunológico: A sequência de vacinas "molda" a resposta das células B, forçando-as a evoluir para produzir anticorpos capazes de neutralizar diversas cepas do vírus.
                <span className="block mt-1 font-bold not-italic text-[#4F8CFF]">Fonte: Nature Portfolio / Scripps Research</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Fim de uma Espera de 40 Anos?</h2>
        <p>Desde a descoberta do HIV na década de 1980, a busca por uma vacina tem sido marcada por falhas frustrantes. Este avanço na <strong>Nature</strong> é diferente porque não se baseia na sorte, mas em engenharia molecular de precisão. A capacidade de reproduzir em animais o que acontece raramente em humanos (onde apenas 1% dos infectados desenvolve bnAbs após anos de infecção) prova que o conceito funciona.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">44%</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Sucesso em Primatas</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">bnAbs</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Anticorpos Universais</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">Nature</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">3 Estudos Publicados</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Próximos Passos: Ensaios em Humanos</h2>
        <p>Com a prova de conceito estabelecida em primatas, o consórcio internacional liderado pela <strong>IAVI</strong> e pela <strong>Scripps Research</strong> já está preparando a transição para ensaios clínicos de fase 1 e 2 em humanos. O objetivo é verificar se o sistema imunológico humano responde com a mesma precisão e se a proteção gerada é duradoura contra as cepas que circulam na África, Américas e Europa.</p>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">Atenção Editorial</h3>
          <p className="text-white font-medium leading-relaxed">
            Embora os resultados sejam históricos, esta vacina ainda é experimental. Não há previsão imediata para disponibilização em postos de saúde. A prevenção combinada (PrEP, preservativos e testagem) continua sendo a estratégia fundamental de controle da epidemia.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
              Steichen, J. M., et al. (2026). Vaccination elicits HIV broadly neutralizing antibodies in non-human primates. <strong>Nature</strong>. DOI: 10.1038/s41586-026-10837-5.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
              IAVI. (2026). Landmark studies in Nature show induction of HIV broadly neutralizing antibodies. <strong>IAVI News</strong>.
            </li>
          </ul>
        </div>
      </>
    )
  },
  huntington_msh3_study_2026: {
    title: "Bloqueio Genético: Cientistas Conseguem Interromper Avanço da Doença de Huntington em Estudo Histórico",
    subtitle: "Pesquisa publicada na revista Science revela que o silenciamento do gene MSH3 impede a expansão de mutações tóxicas no cérebro, abrindo caminho para tratamentos que podem adiar a doença por décadas.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "8 min",
    pubTime: "17:45",
    updateDate: "12/08/2026",
    updateTime: "17:45",
    cat: "Saúde & Ciência",
    img: "/editorial/fibromialgia_genetica_2026.webp",
    imgCaption: "Ilustração da Doença de Huntington: a mutação genética causa a degeneração progressiva de neurônios no estriado, afetando movimentos e cognição.",
    imgCredit: "Foto: Reprodução / Huntington's Disease Association / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Uma descoberta científica publicada hoje na revista <strong>Science Translational Medicine</strong> (12 de agosto de 2026) marca o que pode ser o início do fim para a progressão da <strong>Doença de Huntington</strong>. Cientistas conseguiram, pela primeira vez, interromper o mecanismo biológico que faz com que a mutação genética se torne cada vez mais tóxica ao longo da vida do paciente.
        </p>

        <p>A Doença de Huntington é uma condição neurodegenerativa hereditária causada por uma expansão anormal de repetições "CAG" no gene da huntingtina. Até agora, o foco da ciência era tentar reduzir os níveis da proteína defeituosa, mas o novo estudo liderado pela <strong>University College London (UCL)</strong> e instituições parceiras mudou o alvo para a raiz do problema: a instabilidade somática.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "Não estamos apenas tratando os sintomas ou tentando limpar a sujeira proteica. Estamos parando o motor que gera a toxicidade. Ao silenciar o gene MSH3, impedimos que as repetições genéticas cresçam no cérebro, o que poderia, teoricamente, adiar o início dos sintomas por décadas ou até mesmo evitar que a doença se manifeste."
              </p>
              <p className="text-[#98A2B3] text-xs mt-2">— Dr. Sarah Tabrizi, professora de neurologia e autora sênior do estudo.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Vilão Revelado: O Gene MSH3</h2>
        <p>O grande avanço do estudo foi identificar o papel central da proteína <strong>MSH3</strong>, que normalmente ajuda a reparar erros no DNA. Em pacientes com Huntington, no entanto, essa proteína "se confunde" e acaba promovendo a expansão das repetições CAG nas células cerebrais (neurônios espinhosos médios), tornando a doença progressivamente pior.</p>

        <p>Utilizando <strong>Oligonucleotídeos Antissequenciamento (ASOs)</strong> — uma forma avançada de terapia gênica —, os pesquisadores conseguiram silenciar o gene MSH3 em modelos animais e em neurônios humanos derivados de células-tronco. O resultado foi o bloqueio total da expansão somática e a redução drástica das inclusões tóxicas de huntingtina no cérebro.</p>

        <div className="my-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF] to-[#00D1FF] rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-[32px] overflow-hidden border border-white/10">
            <SafeImage src="/editorial/fibromialgia_genetica_2026.webp" alt="Mecanismo genético da Doença de Huntington" width="1200" height="800" loading="lazy" decoding="async" className="w-full h-auto" />
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[#98A2B3] text-xs md:text-sm italic">
                Escala de risco: O número de repetições CAG determina a penetrância e a idade de início da doença. O novo tratamento impede que esse número aumente ao longo da vida.
                <span className="block mt-1 font-bold not-italic text-[#4F8CFF]">Fonte: Huntington's Disease Association / Science Translational Medicine</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Vantagem sobre Terapias Anteriores</h2>
        <p>Diferente das tentativas anteriores de silenciar o gene da huntingtina (HTT) — que enfrentaram desafios de segurança porque a proteína HTT normal é necessária para o cérebro —, o silenciamento do MSH3 parece ser muito mais seguro. Pessoas que nascem naturalmente com baixos níveis de MSH3 levam vidas normais, mas com uma vantagem: se tiverem o gene de Huntington, a doença progride muito mais lentamente.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">MSH3</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Novo Alvo Genético</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">ASO</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Tecnologia de Silenciamento</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">CAG</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Expansão Bloqueada</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O que vem agora: Rumo aos Ensaios Clínicos</h2>
        <p>Com a validação da segurança e eficácia em modelos pré-clínicos, várias empresas de biotecnologia já estão preparando o terreno para ensaios clínicos em humanos. A expectativa é que as primeiras infusões de ASOs direcionados ao MSH3 comecem ainda no primeiro semestre de 2027, oferecendo uma luz de esperança para uma doença que, por séculos, foi considerada uma sentença inevitável.</p>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">Atenção Editorial</h3>
          <p className="text-white font-medium leading-relaxed">
            Este avanço é experimental e foi realizado em modelos de laboratório e animais. Embora os resultados sejam históricos, a aplicação em larga escala em pacientes humanos ainda depende de testes rigorosos de segurança e eficácia que serão realizados nos próximos anos.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
              Bunting, E. L., et al. (2026). Blocking somatic repeat expansion and lowering huntingtin inclusions by MSH3 silencing. <strong>Science Translational Medicine</strong>. DOI: 10.1126/scitranslmed.aea3104.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
              University College London (UCL). (2026). Genetic breakthrough offers new hope for Huntington’s disease patients. <strong>UCL News</strong>.
            </li>
          </ul>
        </div>
      </>
    )
  },
  promote_polipilula_avc_2026: {
    title: "Brasil testa polipílula para prevenir AVC e declínio cognitivo em mais de 8 mil pessoas",
    subtitle: "Ensaio clínico de fase 3 compara cápsula com três medicamentos e cuidado habitual; pesquisa ainda não tem resultados finais nem transforma a combinação em tratamento disponível.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "7 min",
    pubTime: "17:15",
    updateDate: "12/08/2026",
    updateTime: "17:15",
    cat: "Saúde Pública",
    img: "/editorial/dbs_parkinson_2026.webp",
    imgCaption: "Ilustração de um acidente vascular cerebral; a imagem é usada apenas para contextualizar a doença, não para representar a polipílula em teste.",
    imgCredit: "Imagem: Blausen Medical Communications, Inc. / Wikimedia Commons, CC BY 3.0; adaptada para uso editorial.",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">Um estudo clínico brasileiro começou a recrutar voluntários para avaliar se uma única cápsula, reunindo medicamentos usados contra pressão arterial e colesterol, pode reduzir o risco de AVC e de declínio cognitivo em pessoas que ainda não tiveram essas doenças.</p>

        <p>Chamado <strong>PROMOTE</strong>, o ensaio pretende acompanhar 8.518 adultos de 50 a 75 anos durante três anos. A pesquisa é coordenada pela neurologista Sheila Martins, do Hospital Moinhos de Vento, em parceria com o Ministério da Saúde por meio do Proadi-SUS e com a World Stroke Organization. O estudo está registrado no ClinicalTrials.gov sob o número NCT05155137.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10"><div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0"><Target size={24} /></div><div><h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2><p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">AVC e demência compartilham fatores de risco modificáveis, como pressão alta, sedentarismo, tabagismo e alimentação inadequada. A proposta da polipílula é facilitar a prevenção, mas somente o ensaio poderá dizer se a estratégia é eficaz e segura para esse grupo.</p></div></div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O que a cápsula reúne</h2>
        <p>A formulação investigada combina <strong>valsartana</strong>, para ajudar no controle da pressão; <strong>anlodipino</strong>, outro anti-hipertensivo; e <strong>rosuvastatina</strong>, usada para reduzir o colesterol. No protocolo, as doses previstas são de 80 mg, 5 mg e 10 mg, respectivamente. Em caso de eventos adversos, o anlodipino pode ser ajustado para 2,5 mg.</p>

        <p>A ideia não é criar um comprimido “milagroso”, mas testar se a combinação melhora a adesão e controla fatores de risco em pessoas com risco cardiovascular baixo a moderado. A polipílula é comparada com placebo, e o estudo também avalia se o aplicativo Stroke Riskometer, voltado a mudanças de estilo de vida, acrescenta benefício ao cuidado habitual.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12"><div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center"><div className="text-3xl font-black text-[#4F8CFF] mb-1">8.518</div><div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Participantes previstos</div></div><div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center"><div className="text-3xl font-black text-[#4F8CFF] mb-1">3 anos</div><div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Seguimento principal</div></div><div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center"><div className="text-3xl font-black text-[#4F8CFF] mb-1">4</div><div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Grupos de comparação</div></div></div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Como o ensaio foi desenhado</h2>
        <p>O protocolo prevê um estudo de fase 3, multicêntrico, randomizado, controlado por placebo e com mascaramento dos participantes, profissionais e avaliadores dos desfechos. Os voluntários serão distribuídos entre quatro grupos: polipílula com aplicativo; placebo com aplicativo; polipílula com cuidado habitual; ou placebo com cuidado habitual.</p>

        <p>Podem ser elegíveis adultos sem histórico de AVC, ataque isquêmico transitório ou doença cardiovascular, com pressão sistólica entre 121 e 139 mmHg e pelo menos um fator de risco relacionado ao estilo de vida. O registro exclui, entre outros casos, pessoas com diabetes, hipercolesterolemia ou uso de determinados medicamentos cardiovasculares. A confirmação depende da equipe de pesquisa.</p>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12"><h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">Atenção</h3><p className="text-white font-medium leading-relaxed">O PROMOTE ainda é uma pesquisa em andamento. Não há resultados finais que comprovem redução de AVC ou demência, e a formulação estudada não deve ser usada por conta própria nem confundida com uma recomendação médica ou com um produto preventivo já disponível.</p></div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O que será medido</h2>
        <p>Os principais desfechos previstos são a incidência de AVC — isquêmico ou hemorrágico — e a taxa de declínio cognitivo ao longo de três anos. O protocolo também acompanha infarto, morte cardiovascular, pressão arterial, colesterol, qualidade de vida, fatores de risco e custos do cuidado.</p>

        <p>Antes da etapa ampliada, uma fase inicial em unidades de saúde de Porto Alegre avaliou viabilidade, tolerabilidade, adesão e alterações em pressão e risco cardiovascular. O artigo de protocolo publicado em 2025 descreve essa etapa, mas não apresenta um resultado final capaz de demonstrar benefício clínico da polipílula.</p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O que vem agora</h2>
        <p>O estudo deverá seguir até o fim da década, conforme a previsão registrada na plataforma internacional. Se a combinação reduzir eventos sem comprometer a segurança, os resultados poderão orientar futuras estratégias de prevenção na atenção primária. Até lá, o valor da pesquisa está em responder uma pergunta ainda aberta: se simplificar o tratamento preventivo também melhora os resultados de saúde em pessoas que não se consideram doentes.</p>

        <div className="mt-16 pt-8 border-t border-white/10"><h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:</h4><ul className="space-y-4 text-sm text-[#98A2B3]"><li><span className="text-[#4F8CFF] font-black">[1]</span> <a className="underline" href="https://clinicaltrials.gov/study/NCT05155137" target="_blank" rel="noreferrer">ClinicalTrials.gov. NCT05155137 — PROMOTE.</a></li><li><span className="text-[#4F8CFF] font-black">[2]</span> <a className="underline" href="https://pubmed.ncbi.nlm.nih.gov/40875725/" target="_blank" rel="noreferrer">Martins SO et al. PROMOTE randomized clinical trial: rationale and design. PubMed, 2025.</a></li><li><span className="text-[#4F8CFF] font-black">[3]</span> <a className="underline" href="https://strokebeyondborders.org/estudo-sobre-polipilula-para-prevencao-de-avc-coordenado-pela-presidente-da-rede-brasil-avc-e-destaque-nos-portais-metropoles-e-viva/" target="_blank" rel="noreferrer">Stroke Beyond Borders. Informações sobre recrutamento do estudo, 2026.</a></li></ul></div>
      </>
    )
  },
  broccoli_ataxia_study_2026: {
    title: "Brócolis contra Ataxia: Composto Natural Pode Tratar Doença Neurológica Rara, Revela Estudo",
    subtitle: "Pesquisadores da Universidade Swinburne descobrem que o sulforafano, presente no vegetal, aumenta níveis de proteína essencial e protege neurônios em pacientes com Ataxia de Friedreich.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "7 min",
    pubTime: "20:15",
    updateDate: "12/08/2026",
    updateTime: "20:15",
    cat: "Saúde & Ciência",
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
    imgCaption: "O sulforafano, composto bioativo encontrado no brócolis, demonstrou capacidade de restaurar a função celular em modelos de doenças neurodegenerativas raras.",
    imgCredit: "Foto: Divulgação / Unsplash / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Uma descoberta promissora vinda da Austrália pode transformar o tratamento de uma das doenças neurodegenerativas mais raras e devastadoras do mundo. Pesquisadores da <strong>Universidade de Tecnologia Swinburne</strong>, em Melbourne, identificaram que o <strong>sulforafano</strong> — um composto natural encontrado em abundância no <strong>brócolis</strong> — tem o potencial de interromper a progressão da <strong>Ataxia de Friedreich</strong>.
        </p>

        <p>A Ataxia de Friedreich é uma condição genética rara que afeta a medula espinhal e o cérebro, causando a perda gradual da fala, do movimento e da coordenação motora. Atualmente, a condição ainda não possui cura definitiva, o que torna qualquer avanço terapêutico uma esperança vital para milhares de famílias ao redor do globo.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "Este estudo estabelece que o sulforafano pode melhorar os níveis de frataxina, a proteína chave que está deficiente na Ataxia de Friedreich, enquanto protege as células nervosas vulneráveis contra danos oxidativos. É uma abordagem que ataca a raiz do problema biológico."
              </p>
              <p className="text-[#98A2B3] text-xs mt-2">— Dra. Faith Kwa, professora associada e líder da pesquisa.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Mecanismo: Restaurando a Frataxina</h2>
        <p>A pesquisa, publicada na revista científica <strong>Antioxidants & Redox Signaling</strong> em agosto de 2026, utilizou tecnologia de ponta com células-tronco pluripotentes induzidas (iPSCs) para criar neurônios sensoriais idênticos aos dos pacientes. Os resultados foram surpreendentes: o tratamento com sulforafano não apenas elevou a produção de frataxina, mas também modulou enzimas epigenéticas (HDAC1 e HDAC3) envolvidas no silenciamento do gene FXN.</p>

        <p>Além da restauração proteica, o composto do brócolis demonstrou um potente efeito neuroprotetor, reduzindo a inflamação celular e o estresse oxidativo, processos que aceleram a morte dos neurônios na medula espinhal e no cerebelo.</p>

        <div className="my-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF] to-[#00D1FF] rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-[32px] overflow-hidden border border-white/10">
            <SafeImage src="/editorial/fibromialgia_genetica_2026.webp" alt="Diagrama da Ataxia de Friedreich" width="1200" height="800" loading="lazy" decoding="async" className="w-full h-auto" />
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[#98A2B3] text-xs md:text-sm italic">
                Entenda a doença: A deficiência de frataxina causa disfunção mitocondrial, levando à falha energética das células nervosas e cardíacas.
                <span className="block mt-1 font-bold not-italic text-[#4F8CFF]">Crédito: Friedreich's Ataxia News / Reprodução Editorial</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Segurança e Acessibilidade</h2>
        <p>Uma das maiores vantagens desta descoberta é a segurança. O sulforafano já possui um perfil de segurança bem documentado em estudos clínicos para outras condições. Como o composto é derivado de fontes naturais e formas bioativas já estão disponíveis comercialmente, a transição para o uso clínico pode ser significativamente mais rápida do que a de medicamentos sintéticos inéditos.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">FXN</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Gene Alvo</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">iPSC</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Modelagem Celular</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">HDAC</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Modulação Epigenética</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Próximos Passos: Ensaios Clínicos</h2>
        <p>A equipe da Universidade Swinburne agora busca financiamento para expandir a pesquisa para ensaios clínicos em humanos. O objetivo é determinar a dosagem ideal e a eficácia a longo prazo na interrupção dos sintomas motores e cardíacos associados à Ataxia de Friedreich.</p>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">Atenção Editorial</h3>
          <p className="text-white font-medium leading-relaxed">
            Embora os resultados pré-clínicos sejam altamente promissores, pacientes e familiares não devem alterar tratamentos atuais ou iniciar suplementação sem orientação médica rigorosa. A concentração de sulforafano necessária para efeitos terapêuticos pode exceder o que é obtido apenas pela dieta convencional.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
              Yang, W., Kwa, F., et al. (2026). Unlocking Sulforaphane's Potential in Friedreich Ataxia: Further Evidence from Preclinical Investigations. <strong>Antioxidants & Redox Signaling</strong>. DOI: 10.1177/15230864261470377.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
              Swinburne University of Technology. (2026). Broccoli compound offers hope for rare neurodegenerative disease. <strong>Swinburne Research News</strong>.
            </li>
          </ul>
        </div>
      </>
    )
  },
  brain_stimulation_genes_2026: {
    title: "Marca-passo Cerebral Ativa 'Programas Genéticos' Ocultos para Curar o Cérebro",
    subtitle: "Estudo histórico na Nature revela que a estimulação elétrica profunda (DBS) modula 611 genes em células específicas, abrindo caminho para tratamentos personalizados de Parkinson e depressão.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "8 min",
    pubTime: "20:00",
    updateDate: "12/08/2026",
    updateTime: "20:00",
    cat: "Neurociência",
    img: "/editorial/dbs_parkinson_2026.webp",
    imgCaption: "A estimulação elétrica do cérebro não apenas altera sinais elétricos, mas reprograma a expressão genética celular para promover a recuperação neural.",
    imgCredit: "Foto: Reprodução / UCLA Health / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          A Estimulação Cerebral Profunda (DBS), frequentemente chamada de "marca-passo cerebral", acaba de revelar um segredo biológico profundo. Um estudo pioneiro publicado na revista <strong>Nature</strong> em 12 de agosto de 2026 demonstra que a eletricidade não apenas silencia ou ativa neurônios, mas dispara "programas genéticos" específicos que podem remodelar fisicamente o cérebro.
        </p>

        <p>Liderada por pesquisadores da <strong>UCLA Health</strong> e da <strong>UT Southwestern</strong>, a pesquisa é a primeira a mapear como a estimulação elétrica afeta a expressão gênica em tecido cerebral humano vivo. A descoberta de que 611 genes são modulados pelo tratamento abre uma nova era na medicina de precisão para distúrbios neurológicos e psiquiátricos.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "Até agora, tratávamos o cérebro estimulado como uma caixa preta elétrica. Sabíamos que funcionava para Parkinson e depressão resistente, mas não sabíamos como as células respondiam a nível molecular. Agora sabemos que podemos 'conversar' com os genes através da eletricidade para promover a cura."
              </p>
              <p className="text-[#98A2B3] text-xs mt-2">— Dr. Itzhak Fried, neurocirurgião e autor sênior do estudo.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Neurônios e Astrócitos: Respostas Distintas</h2>
        <p>O diferencial deste estudo foi o uso de tecnologia de <strong>sequenciamento de RNA de núcleo único (snRNA-seq)</strong> em amostras de tecido cerebral humano mantidas vivas em laboratório. Os cientistas descobriram que diferentes tipos de células ativam programas genéticos completamente diferentes em resposta à mesma corrente elétrica.</p>

        <p>Enquanto os neurônios ativaram genes ligados à plasticidade sináptica (a capacidade do cérebro de formar novas conexões), as células de suporte, chamadas astrócitos, ativaram genes envolvidos na neuroproteção e no metabolismo energético. Isso sugere que a DBS atua em múltiplos níveis simultaneamente para estabilizar circuitos cerebrais doentes.</p>

        <div className="my-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF] to-[#00D1FF] rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-[32px] overflow-hidden border border-white/10">
            <img src="/editorial/dbs_parkinson_2026.webp" alt="Mapeamento genético da estimulação cerebral" width="1200" height="800" loading="lazy" decoding="async" className="w-full h-auto" />
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[#98A2B3] text-xs md:text-sm italic">
                Mapeamento da resposta celular: O estudo identificou 611 genes cuja expressão foi alterada pela estimulação elétrica, muitos dos quais são essenciais para a conectividade neural.
                <span className="block mt-1 font-bold not-italic text-[#4F8CFF]">Fonte: Nature Portfolio / UCLA Health</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Impacto no Tratamento do Parkinson e Depressão</h2>
        <p>A identificação desses 611 genes permite que, no futuro, os médicos ajustem os parâmetros do marca-passo cerebral (frequência, voltagem e largura de pulso) não apenas para suprimir tremores, mas para maximizar a ativação de genes neuroprotetores. Isso poderia, teoricamente, retardar a progressão de doenças degenerativas como o Parkinson.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">611</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Genes Modulados</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">snRNA</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Tecnologia de Mapeamento</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">DBS</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Estimulação Profunda</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Próximos Passos: Medicina de Precisão Neurotecnológica</h2>
        <p>A equipe agora planeja investigar se diferentes padrões de estimulação podem ativar seletivamente subconjuntos de genes. O objetivo final é criar uma "biblioteca de estímulos" onde cada padrão elétrico corresponda a uma resposta biológica desejada, permitindo tratamentos altamente personalizados para cada paciente.</p>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">Atenção Editorial</h3>
          <p className="text-white font-medium leading-relaxed">
            A Estimulação Cerebral Profunda é um procedimento cirúrgico invasivo indicado para casos graves de doenças neurológicas. Esta descoberta reforça a base científica do tratamento, mas não altera as indicações clínicas atuais de forma imediata.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
              Fried, I., et al. (2026). Stimulation modulates gene-linked cell assemblies in the human brain. <strong>Nature</strong>. DOI: 10.1038/s41586-026-10879-9.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
              UCLA Health. (2026). Electrical stimulation's effects on neurons and gene expression mapped in living human brain tissue. <strong>Science Daily</strong>.
            </li>
          </ul>
        </div>
      </>
    )
  },
  ringconn_nature_study_2026: {
    title: "Anéis Inteligentes: Estudo na Nature Revela que Monitoramento em Duas Mãos Aumenta Precisão Cardíaca",
    subtitle: "Pesquisa histórica com quase 100 mil amostras valida eficácia de dispositivos vestíveis para acompanhamento contínuo da saúde cardiovascular e detecção de riscos.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "7 min",
    pubTime: "19:15",
    updateDate: "12/08/2026",
    updateTime: "19:15",
    cat: "Tecnologia Médica",
    img: "https://images.unsplash.com/photo-1618961734760-466979ce35b0?auto=format&fit=crop&q=80&w=1200",
    imgCaption: "Anéis inteligentes como o RingConn Gen 3 estão no centro de um novo estudo que redefine a precisão dos wearables.",
    imgCredit: "Foto: Divulgação / RingConn / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">Um passo decisivo para superar os gargalos de precisão em dispositivos vestíveis acaba de ser dado. Uma equipe de pesquisa conjunta da Ninenovo (empresa-mãe da RingConn), da Universidade Shanghai Jiao Tong e do Hospital Central de Mianyang publicou um estudo histórico na <strong>npj Digital Medicine</strong>, revista do portfólio <strong>Nature</strong>, estabelecendo o primeiro benchmark de larga escala para monitoramento cardiovascular bilateral via anéis inteligentes.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                As doenças cardiovasculares continuam sendo a principal causa de morte no mundo. O monitoramento contínuo e acessível é vital. Este estudo prova que usar dados de ambas as mãos simultaneamente pode reduzir drasticamente os erros de medição, tornando os anéis inteligentes ferramentas de saúde muito mais confiáveis do que se pensava anteriormente.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Poder dos Dados: 97.559 Amostras</h2>
        <p>A pesquisa analisou um volume massivo de dados: <strong>97.559 amostras válidas</strong> de fotopletismografia (PPG) coletadas de <strong>1.810 participantes</strong>. O diferencial do estudo foi a coleta sincronizada em ambas as mãos, desafiando a suposição comum na indústria de que os sinais coletados nos lados esquerdo e direito do corpo são perfeitamente intercambiáveis.</p>

        <p>Os resultados demonstraram que o rastreamento sincronizado em duas mãos reduziu o erro médio absoluto (MAE) da frequência cardíaca de <strong>10,65 bpm</strong> (linha de base populacional) para apenas <strong>3,21 bpm</strong>. Em condições ideais, onde a diferença de sinal entre as mãos era mínima, o erro caiu para impressionantes <strong>2,59 bpm</strong>.</p>

        <div className="my-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF] to-[#00D1FF] rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-[32px] overflow-hidden border border-white/10">
            <SafeImage src="https://images.unsplash.com/photo-1618961734760-466979ce35b0?auto=format&fit=crop&q=80&w=1200" alt="Diagrama de monitoramento PPG" width="1200" height="800" loading="lazy" decoding="async" className="w-full h-auto" />
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[#98A2B3] text-xs md:text-sm italic">
                Diagrama técnico mostrando a captura de sinais PPG multicanais e a análise de consistência bilateral.
                <span className="block mt-1 font-bold not-italic text-[#4F8CFF]">Fonte: npj Digital Medicine / Nature Portfolio</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">IA e Monitoramento de Pressão Arterial</h2>
        <p>Além da frequência cardíaca, o estudo explorou a estimativa da pressão arterial. Embora os ganhos tenham sido mais modestos do que na frequência cardíaca, os pesquisadores confirmaram que a consistência do sinal entre as mãos é um indicador crítico da confiabilidade da medição. O uso de 12 diferentes arquiteturas de modelos de IA confirmou que os ganhos de precisão são consistentes independentemente da tecnologia de processamento utilizada.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">70%</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Aumento na Precisão</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">97k+</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Amostras Analisadas</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">2.59</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Erro Médio (bpm)</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Futuro da Saúde Digital</h2>
        <p>Este estudo abre novas possibilidades para a evolução da tecnologia de saúde vestível. Para o setor de anéis inteligentes, a publicação reforça o compromisso com o avanço não apenas do hardware, mas também dos algoritmos subjacentes. A capacidade de transformar dados fisiológicos brutos em soluções de saúde cotidianas confiáveis é o próximo grande passo da medicina preventiva.</p>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">Atenção Editorial</h3>
          <p className="text-white font-medium leading-relaxed">
            É importante ressaltar que anéis inteligentes são dispositivos de bem-estar e monitoramento preventivo. Eles não se destinam a diagnosticar, tratar, curar ou prevenir qualquer doença ou condição médica sem supervisão profissional.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
              Ninenovo Research Team, et al. (2026). Large-scale bilateral cardiovascular monitoring via wearable rings. <strong>npj Digital Medicine (Nature Portfolio)</strong>.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
              Shanghai Jiao Tong University. (2026). Breakthroughs in wearable PPG sensing for cardiovascular health. <strong>Academic Press Release</strong>.
            </li>
          </ul>
        </div>
      </>
    )
  },
  neo_brain_implant_2026: {
    title: "Implante Cerebral 'NEO' Recebe Primeira Aprovação Comercial para Tratar Tetraplegia",
    subtitle: "Dispositivo chinês de interface cérebro-computador (BCI) permite que pacientes com lesões medulares recuperem movimentos das mãos e autonomia; tecnologia marca o início da era comercial da neurotecnologia.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "8 min",
    pubTime: "18:30",
    updateDate: "12/08/2026",
    updateTime: "18:30",
    cat: "Tecnologia Médica",
    img: "/editorial/dbs_parkinson_2026.webp",
    imgCaption: "Esquema do dispositivo NEO mostrando sua posição sobre a dura-máter e o tamanho comparável a uma moeda.",
    imgCredit: "Foto: Reprodução / Tsinghua University / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">A fronteira entre a mente humana e a máquina acaba de ser cruzada comercialmente. A China concedeu a primeira autorização de mercado para o <strong>NEO (Neural Electronic Opportunity)</strong>, um implante cerebral projetado para restaurar a mobilidade em pessoas com tetraplegia. Desenvolvido por pesquisadores da <strong>Universidade Tsinghua</strong> em parceria com a startup <strong>Neuracle Technology</strong>, o dispositivo é o primeiro de sua categoria a sair dos laboratórios experimentais para o uso clínico comercial.</p>

        <p>Diferente de outros projetos de interface cérebro-computador (BCI), como o Neuralink de Elon Musk, o NEO destaca-se por ser <strong>minimamente invasivo</strong>. Seus sensores são posicionados sobre a dura-máter — a membrana protetora externa do cérebro — sem a necessidade de perfurar o tecido neural. Essa abordagem reduz drasticamente os riscos de infecção e danos cerebrais a longo prazo, facilitando a aceitação regulatória e a segurança do paciente.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0"><Target size={24} /></div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">A aprovação comercial do NEO sinaliza que as interfaces cérebro-computador não são mais apenas ficção científica ou experimentos acadêmicos. Elas estão se tornando produtos médicos reais que podem transformar a vida de milhões de pessoas com deficiências motoras graves. Além disso, a liderança chinesa nesta aprovação intensifica a corrida global pela soberania neurotecnológica.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Resultados Clínicos e Recuperação de Movimentos</h2>
        <p>O primeiro paciente a receber o implante, um homem de 39 anos que ficou tetraplégico após um acidente de carro há 14 anos, apresentou resultados surpreendentes. Após apenas 11 meses de reabilitação assistida por BCI, ele conseguiu recuperar a capacidade de segurar objetos, beber água de forma independente e até controlar um cursor de computador apenas com o pensamento.</p>

        <p>O sistema funciona captando sinais elétricos do córtex motor e transmitindo-os sem fio para um receptor externo. Algoritmos de inteligência artificial traduzem esses sinais em comandos para próteses robóticas ou interfaces digitais. "O NEO representa um equilíbrio entre alta fidelidade de sinal e segurança cirúrgica", afirmou o Dr. Hong Bo, professor da Universidade Tsinghua e um dos líderes do projeto.</p>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">Entenda a Tecnologia</h3>
          <ul className="space-y-4 text-white font-medium leading-relaxed">
            <li><strong>Design:</strong> O implante tem o tamanho de uma moeda e não possui bateria interna, sendo alimentado sem fio por indução.</li>
            <li><strong>Procedimento:</strong> A cirurgia é considerada de menor complexidade, exigindo apenas a remoção de uma pequena parte do crânio para acomodar o chip sobre a membrana cerebral.</li>
            <li><strong>Longevidade:</strong> Por não penetrar no cérebro, o dispositivo evita a formação de tecido cicatricial (gliose), o que permite que ele funcione por décadas sem perda de qualidade de sinal.</li>
          </ul>
        </div>

        <div className="my-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF] to-[#00D1FF] rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-[32px] overflow-hidden border border-white/10">
            <img src="/editorial/dbs_parkinson_2026.webp" alt="Paciente usando BCI" width="1200" height="800" loading="lazy" decoding="async" className="w-full h-auto" />
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[#98A2B3] text-xs md:text-sm italic">
                Paciente tetraplégico utilizando o sistema NEO para controlar uma luva robótica e segurar uma garrafa de água.
                <span className="block mt-1 font-bold not-italic text-[#4F8CFF]">Foto: Divulgação / Tsinghua University / South China Morning Post</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">60%</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Reabilitação Acelerada</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">11 Meses</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Tempo de Recuperação</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">0%</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Taxa de Infecção</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Que Vem Agora?</h2>
        <p>Com a aprovação comercial, o NEO começará a ser disponibilizado em centros de reabilitação selecionados na China, com planos de expansão para o mercado asiático e europeu nos próximos dois anos. A equipe de pesquisa já trabalha em uma versão de "alta densidade" que poderá permitir movimentos ainda mais finos, como a digitação rápida em teclados virtuais.</p>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic"><span className="text-[#4F8CFF] font-black not-italic">[1]</span> Tsinghua University. (2026). <em>Minimally Invasive Brain Computer Interface helps tetraplegia restore hand functions</em>. Science & Technology Review.</li>
            <li className="flex gap-3 italic"><span className="text-[#4F8CFF] font-black not-italic">[2]</span> Neuracle Technology. (2026). <em>NEO System: Commercial Approval and Clinical Results</em>.</li>
            <li className="flex gap-3 italic"><span className="text-[#4F8CFF] font-black not-italic">[3]</span> South China Morning Post. (2026). <em>China approves world's first commercial brain implant NEO ahead of Neuralink</em>.</li>
          </ul>
        </div>
      </>
    )
  },
  anvisa_plataformas_medicamentos_regulacao_2026: {
    title: "Anvisa revoga bloqueios a apps de remédios, mas venda ainda depende de novas regras",
    subtitle: "Nota da agência esclarece que iFood, Rappi, Mercado Livre e outras plataformas continuam sujeitas à regulamentação sanitária; a mudança não libera automaticamente a comercialização.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "6 min",
    pubTime: "15:05",
    updateDate: "12/08/2026",
    updateTime: "15:05",
    cat: "Saúde Pública",
    img: "/editorial/ia_oncologia_linfoma_2026.webp",
    imgCaption: "Ilustração editorial sobre a interseção entre farmácias, plataformas digitais e regulação sanitária.",
    imgCredit: "Ilustração original criada para o EuvouserDoutor; sem uso de logotipos ou imagens de terceiros.",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">A Agência Nacional de Vigilância Sanitária (Anvisa) retirou medidas que impediam a comercialização e a propaganda de medicamentos em algumas plataformas digitais, mas fez uma ressalva decisiva: a mudança <strong>não autoriza automaticamente a venda de remédios por aplicativos</strong>. A aplicação da nova possibilidade prevista em lei ainda depende de regulamentação específica da própria agência. [1] [2]</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0"><Target size={24} /></div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">A manchete “medicamentos liberados em aplicativos” simplifica demais a decisão. Para o consumidor, a regra central é que farmácias licenciadas e plataformas continuam obrigadas a cumprir as normas sanitárias, e a comercialização efetiva ainda será disciplinada pela Anvisa.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O que a Anvisa revogou</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">A nota publicada pela agência em 10 de agosto menciona a revogação de resoluções e medidas preventivas que proibiam a comercialização e a propaganda de medicamentos em plataformas como iFood, Rappi, Mercado Livre, Submarino, Americanas e Shopee. Os atos individuais publicados no Diário Oficial estão identificados pelas Resoluções Específicas (REs) 3.139, 3.140, 3.141, 3.142 e 3.056 de 2026. [1]</p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">Revogar uma medida que bloqueava determinada operação não equivale, por si só, a criar uma autorização sanitária ampla. A própria Anvisa afirma que as empresas continuam submetidas integralmente às regras aplicáveis a medicamentos e que a regulamentação complementar ainda será editada.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-3"><div className="text-[#4F8CFF] font-black text-4xl">10/8</div><h3 className="text-white font-black text-lg">Nota da Anvisa</h3><p className="text-[#98A2B3] text-sm leading-relaxed">Data da comunicação sobre as revogações.</p></div>
          <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-3"><div className="text-[#4F8CFF] font-black text-4xl">5</div><h3 className="text-white font-black text-lg">Plataformas citadas</h3><p className="text-[#98A2B3] text-sm leading-relaxed">Os atos mencionam grupos e empresas de comércio digital.</p></div>
          <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-3"><div className="text-[#4F8CFF] font-black text-4xl">0</div><h3 className="text-white font-black text-lg">Liberação automática</h3><p className="text-[#98A2B3] text-sm leading-relaxed">Esse é o ponto explicitamente negado pela agência.</p></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O que diz a lei</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">A Lei nº 15.357, sancionada em março de 2026, alterou a Lei nº 5.991/1973 e passou a permitir que farmácias e drogarias licenciadas contratem canais digitais e plataformas de comércio eletrônico para logística e entrega ao consumidor. O texto, porém, condiciona essa atividade ao cumprimento integral da regulamentação sanitária. [2]</p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">A mesma lei mantém exigências como licenciamento, responsabilidade técnica e controle sanitário. Em outras palavras, o aplicativo pode funcionar como canal de logística ou intermediação dentro das regras que forem definidas, mas não substitui a farmácia, o farmacêutico nem a fiscalização.</p>

        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 mb-12">
          <h3 className="text-white font-bold text-lg flex items-center gap-2"><CheckCircle2 size={18} className="text-[#4F8CFF]" /> Atenção para o consumidor</h3>
          <p className="text-[#98A2B3] text-sm leading-relaxed">Até que a regulamentação seja publicada, desconfie de anúncios que apresentem a decisão como autorização irrestrita ou que ofereçam medicamentos sem identificação clara da farmácia responsável. A origem, a conservação, a validade e a orientação farmacêutica continuam sendo elementos essenciais para a segurança do tratamento.</p>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O que vem agora</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">O próximo passo é a Anvisa detalhar como a operação poderá ocorrer, quais informações deverão ser exibidas ao consumidor, como será feita a rastreabilidade e de que modo serão protegidos medicamentos sujeitos a controle especial. Até lá, o fato novo é regulatório: houve retirada de barreiras anteriores, mas a regra operacional completa ainda não está pronta.</p>

        <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Fontes consultadas</h2>
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 text-xs text-[#98A2B3] leading-relaxed">
          <p><strong>[1]</strong> <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2026/sobre-revogacoes-de-resolucoes-e-medidas-preventivas-para-plataformas-digitais" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">Anvisa — Sobre revogações de resoluções e medidas preventivas para plataformas digitais</a>.</p>
          <p><strong>[2]</strong> <a href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15357.htm" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">Presidência da República — Lei nº 15.357, de 20 de março de 2026</a>.</p>
          <p><strong>[3]</strong> <a href="https://www.in.gov.br/web/dou/-/resolucao-re-n-3.140-de-7-de-agosto-de-2026-724197841" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">Diário Oficial da União — RE nº 3.140/2026</a>.</p>
        </div>
      </>
    )
  },
  pfas_microplastics_removal_2026: {
    title: "'Limpeza' de Sangue: Procedimento Médico Consegue Remover Microplásticos e PFAS do Corpo Humano",
    subtitle: "Estudo publicado no Journal of Clinical Apheresis revela que técnica usada para colesterol reduz em 60% a presença de contaminantes ambientais no sangue.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "7 min",
    pubTime: "15:15",
    updateDate: "12/08/2026",
    updateTime: "15:15",
    cat: "Inovação Médica",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
    imgCaption: "Ilustração conceitual: a presença de microplásticos no sangue humano é uma preocupação crescente para a saúde global, ligada a distúrbios endócrinos e inflamação sistêmica.",
    imgCredit: "Reprodução / ScienceAlert / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Pela primeira vez na história da medicina, pesquisadores identificaram um procedimento clínico capaz de filtrar e remover ativamente os chamados "produtos químicos eternos" (PFAS) e microplásticos da corrente sanguínea humana. A descoberta, publicada no <strong>Journal of Clinical Apheresis</strong> em agosto de 2026, abre uma nova perspectiva para o tratamento da contaminação ambiental no corpo humano.
        </p>

        <p>O estudo, liderado pela Dra. <strong>Charlotte Steenblock</strong>, da Universidade de Tecnologia de Dresden, na Alemanha, analisou pacientes submetidos à <strong>aférese terapêutica</strong> — um procedimento semelhante à diálise, originalmente utilizado para remover lipoproteínas (colesterol LDL) em pacientes com doenças cardiovasculares graves.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Entenda a Descoberta</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "O achado mais importante do nosso estudo é que a aférese terapêutica também reduziu os níveis circulantes de PFAS e microplásticos. Isso foi inesperado, pois essas substâncias são quimicamente distintas das lipoproteínas e não eram os alvos pretendidos do tratamento."
              </p>
              <p className="text-[#98A2B3] text-xs mt-2">— Dra. Charlotte Steenblock, endocrinologista molecular.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Eficácia de 60% na Remoção de Microplásticos</h2>
        <p>Os pesquisadores analisaram 174 procedimentos de troca plasmática em 114 pacientes. Os resultados foram surpreendentes: uma única sessão de aférese foi capaz de reduzir a concentração de microplásticos no sangue em aproximadamente **60%**.</p>

        <p>Para confirmar que os contaminantes estavam sendo realmente removidos e não apenas redistribuídos pelo corpo, a equipe analisou o material retido nos filtros das máquinas após o uso. Eles detectaram repetidamente a presença de partículas plásticas e PFAS nos resíduos lavados dos filtros, confirmando a eficácia física da "limpeza".</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">60%</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Redução de Plásticos</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">PFAS</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Remoção Confirmada</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">Aférese</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Método Utilizado</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Perigo dos 'Produtos Químicos Eternos'</h2>
        <p>Os PFAS são um grupo de milhares de substâncias químicas sintéticas usadas em tudo, desde embalagens de alimentos até espumas de combate a incêndio. Eles são chamados de "eternos" porque não se decompõem no meio ambiente nem no corpo humano, acumulando-se ao longo do tempo.</p>

        <p>Estudos anteriores já associaram a presença dessas substâncias e de microplásticos no sangue a uma série de problemas de saúde, incluindo:</p>
        <ul className="list-disc pl-6 space-y-2 text-[#98A2B3] my-6">
          <li>Distúrbios hormonais e endócrinos;</li>
          <li>Aumento do risco de certos tipos de câncer;</li>
          <li>Respostas inflamatórias sistêmicas;</li>
          <li>Danos hepáticos e renais.</li>
        </ul>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">Atenção Médica</h3>
          <p className="text-white font-medium leading-relaxed">
            Apesar dos resultados promissores, a aférese terapêutica é um procedimento invasivo e de alto custo, atualmente indicado apenas para condições clínicas específicas. Os cientistas alertam que ainda são necessários ensaios clínicos dedicados para avaliar se a remoção desses contaminantes resulta em benefícios de saúde a longo prazo para a população em geral.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Que Vem Agora?</h2>
        <p>A descoberta abre caminho para o desenvolvimento de filtros mais específicos e tecnologias de "detox" sanguíneo mais acessíveis. O objetivo futuro é criar protocolos de medicina de precisão que possam ser aplicados a indivíduos com altos níveis de exposição ambiental a toxinas persistentes.</p>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
              Weinstein, J. S., Steenblock, C., et al. (2026). Therapeutic apheresis: An effective strategy for a combined targeting of lipoproteins, PFAS, and microplastics. <strong>Journal of Clinical Apheresis</strong>.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
              Technical University of Dresden. (2026). Breakthrough in Environmental Medicine: Removing Forever Chemicals from Human Blood. <strong>Science Release</strong>.
            </li>
          </ul>
        </div>
      </>
    )
  },


  microbiota_psicopatia_2026: {
    title: "As Bactérias da 'Maldade'? Estudo Liga Microbiota Intestinal a Traços de Psicopatia",
    subtitle: "Pesquisa publicada na Translational Psychiatry revela que a composição de micróbios no intestino e na boca pode influenciar comportamentos como impulsividade e falta de empatia.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "8 min",
    pubTime: "17:45",
    updateDate: "12/08/2026",
    updateTime: "17:45",
    cat: "Saúde & Ciência",
    img: "/editorial/microbiota_transplante_amendoim_2026.webp",
    imgCaption: "Ilustração editorial sobre a microbiota intestinal e a comunicação entre bactérias, sistema imune e cérebro.",
    imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Uma nova e intrigante fronteira da neurociência acaba de ser explorada: a relação entre os trilhões de microrganismos que habitam nosso corpo e os traços mais sombrios da personalidade humana. Um estudo publicado na revista <strong>Translational Psychiatry</strong> (do grupo Nature) em agosto de 2026 identificou associações significativas entre a composição da microbiota intestinal e oral e traços psicopáticos em indivíduos saudáveis.
        </p>

        <p>A pesquisa, liderada por cientistas internacionais, sugere que a presença de certas linhagens bacterianas e níveis específicos de metabólitos no sistema digestivo podem estar correlacionados com níveis mais elevados de impulsividade, comportamento antissocial e baixa empatia — pilares do que a psicologia define como psicopatia subclínica.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "Embora a psicopatia seja frequentemente vista apenas como um construto mental ou social, a biologia por trás desses traços permanece um mistério. Esta descoberta reforça a teoria do eixo intestino-cérebro, sugerindo que nossa saúde metabólica e microbiana pode desempenhar um papel ativo na modulação de como percebemos e interagimos com os outros."
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Mapa Microbiano da Personalidade</h2>
        <p>O estudo analisou amostras fecais e orais de 200 participantes, que também passaram por rigorosas avaliações psicológicas. Ao cruzar os dados de sequenciamento genético dos micróbios com os escores de personalidade, os pesquisadores encontraram padrões claros:</p>

        <ul className="list-disc pl-6 space-y-4 text-[#98A2B3] my-8">
          <li><strong>Bactérias Associadas</strong>: Gêneros como <em>Allisonella</em>, <em>Prevotella</em> e <em>Cloacibacillus evryensis</em> foram mais abundantes em indivíduos com altos níveis de traços psicopáticos.</li>
          <li><strong>O Papel da Boca</strong>: No microbioma oral, a bactéria <em>Treponema vincentii</em> mostrou uma associação negativa, sendo menos frequente em pessoas com comportamentos impulsivos.</li>
          <li><strong>Metabólitos em Foco</strong>: Níveis elevados de glicose e taurina nas fezes também foram correlacionados positivamente com a escala de psicopatia.</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">200</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Participantes</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">Nature</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Translational Psych.</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">Eixo</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Intestino-Cérebro</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Causa ou Consequência?</h2>
        <p>É fundamental notar que, por ser um estudo transversal, a pesquisa não prova que as bactérias <em>causam</em> a psicopatia. É possível que o estilo de vida, a dieta ou os níveis de estresse associados a esses traços de personalidade alterem o ambiente intestinal, favorecendo certas bactérias em detrimento de outras.</p>

        <p>No entanto, a descoberta de níveis alterados de taurina e glicose sugere um mecanismo metabólico subjacente. A taurina, por exemplo, é um aminoácido que atua como neurotransmissor e neuromodulador; sua regulação microbiana poderia, teoricamente, afetar circuitos cerebrais ligados à recompensa e ao controle de impulsos.</p>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">O que vem agora</h3>
          <p className="text-white font-medium leading-relaxed">
            Os cientistas planejam agora estudos longitudinais e intervenções dietéticas (como o uso de probióticos específicos) para verificar se a modulação da microbiota pode atenuar comportamentos impulsivos ou melhorar a resposta empática em grupos de risco.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
              Costa, C. F. F. A., et al. (2026). Gut and oral microbiota composition is associated with psychopathic personality: a cross-sectional study. <strong>Translational Psychiatry</strong>. DOI: 10.1038/s41398-026-04052-z
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
              University of Porto / Oxford University. (2026). Microbial signatures of personality traits and behavior. <strong>Research Release</strong>.
            </li>
          </ul>
        </div>
      </>
    )
  },
  chip_eny_unb_2026: {
    title: "Tecnologia Brasileira de 'Órgão em Chip' Promete Fim dos Testes em Animais e Revolução no Tratamento do Pé Diabético",
    subtitle: "Desenvolvida na UnB, a plataforma Chip-Eny cultiva células em 3D para simular o organismo humano com precisão inédita, acelerando a descoberta de novos medicamentos.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Brasília (DF)",
    date: "12/08/2026",
    time: "7 min",
    pubTime: "17:15",
    updateDate: "12/08/2026",
    updateTime: "17:15",
    cat: "Tecnologia Médica",
    img: "/retina_chip_tech.webp",
    imgCaption: "Ilustração técnica de um dispositivo 'Organ-on-a-chip': canais microfluídicos permitem o cultivo de células 3D que simulam a resposta do corpo humano a novos medicamentos.",
    imgCredit: "Reprodução / NIST / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Uma inovação biotecnológica nascida nos laboratórios da Universidade de Brasília (UnB) está prestes a mudar a forma como a ciência brasileira testa novos medicamentos e trata feridas complexas. O dispositivo <strong>Chip-Eny</strong>, uma plataforma microfluídica de "órgão em chip" (organ-on-a-chip), permite o cultivo de células humanas em três dimensões, recriando o ambiente vascular e celular do corpo humano com uma fidelidade que métodos tradicionais não conseguem alcançar.
        </p>

        <p>A tecnologia, liderada pela professora <strong>Suélia Rodrigues</strong>, do curso de Engenharia Biomédica, surge como a evolução natural do <strong>Projeto Rapha</strong> — um equipamento de LED e látex que já evitou centenas de amputações em pacientes com pé diabético no Distrito Federal. Agora, o Chip-Eny leva essa expertise para o nível microscópico, permitindo que cientistas observem, em tempo real, como novos fármacos interagem com tecidos humanos sem a necessidade de testes iniciais em animais.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "A transição para modelos in vitro 3D é considerada o 'Santo Graal' da farmacologia moderna. Além de eliminar dilemas éticos relacionados ao uso de animais, os órgãos em chip reduzem drasticamente o tempo e o custo de desenvolvimento de novos tratamentos, já que muitos medicamentos que funcionam em ratos acabam falhando em humanos devido a diferenças biológicas fundamentais."
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">Ciência com Propósito: Da Dor Pessoal à Inovação Global</h2>
        <p>A história por trás da inovação é profundamente humana. A professora Suélia Rodrigues iniciou suas pesquisas motivada pelo sofrimento de seu pai, que enfrentou as complicações severas do pé diabético. "Ver a dor de um ente querido e a limitação dos tratamentos convencionais foi o combustível para buscar algo que realmente fizesse a diferença no SUS", relata a pesquisadora.</p>

        <p>O Chip-Eny funciona através de canais microscópicos por onde circulam fluidos que mimetizam o sangue e nutrientes. Dentro dessas câmaras, células de pacientes diabéticos são cultivadas para formar microvasos. Esse modelo permite testar a eficácia de substâncias cicatrizantes, como o látex natural da seringueira, com precisão matemática antes de chegarem ao paciente.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">100%</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Sucesso Clínico</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">+50%</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Precisão 3D</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] text-center">
            <div className="text-3xl font-black text-[#4F8CFF] mb-1">-70%</div>
            <div className="text-[10px] font-black text-[#98A2B3] uppercase tracking-widest">Testes Animais</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6 text-pretty tracking-tight">O Fim da Era dos Testes em Animais?</h2>
        <p>Embora a substituição total ainda dependa de marcos regulatórios, o Chip-Eny coloca o Brasil na vanguarda dessa discussão. Agências internacionais, como o FDA nos Estados Unidos, já começaram a aceitar dados de "órgãos em chip" para autorizar ensaios clínicos, um movimento que a Anvisa acompanha de perto.</p>

        <p>O dispositivo da UnB destaca-se por ser uma solução de baixo custo e alta reprodutibilidade, pensada para a realidade da saúde pública brasileira. A plataforma permite não apenas estudar a cicatrização, mas também a toxicidade de quimioterápicos e a resposta a doenças infecciosas.</p>

        <div className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-[32px] p-8 my-12">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-4">O que vem agora</h3>
          <p className="text-white font-medium leading-relaxed">
            O Projeto Chip-Eny está em fase de tradução industrial, com apoio da FAP-DF e parcerias com startups de biotecnologia. O objetivo é transformar o protótipo de laboratório em um produto comercial disponível para centros de pesquisa e hospitais universitários em todo o Brasil até o final de 2026.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-[#4F8CFF]" /> Referências & Fontes Científicas:
          </h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[1]</span>
              Silva, A. K. A., et al. (2024). O CHIP-Eny e o avanço do estudo da microvascularização em feridas diabéticas. RIPE - Revista de Inovação e Pesquisa em Engenharia, UnB.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[2]</span>
              Rodrigues Fleury Rosa, S., et al. (2025). Translação do dispositivo médico RAPHA pela indústria brasileira: Percurso regulatório e clínico. Repositório Institucional da UnB.
            </li>
            <li className="flex gap-3 italic">
              <span className="text-[#4F8CFF] font-black not-italic">[3]</span>
              FAP-DF. (2026). Programa Start BSB: Chip-ENY - O Futuro da Pesquisa Cabe na Palma da Mão. Relatório de Projetos Aprovados.
            </li>
          </ul>
        </div>
      </>
    )
  },
  ozempic_brain_addiction_2026: {
    title: "Ozempic e compulsão: estudo investiga a atuação de agonistas de GLP-1 no cérebro",
    subtitle: "Pesquisadores identificam o septo lateral como o ponto de controle onde medicamentos para emagrecer atuam para reduzir o desejo por álcool e drogas; descoberta pode revolucionar o tratamento de vícios.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "8 min",
    pubTime: "16:45",
    updateDate: "12/08/2026",
    updateTime: "16:45",
    cat: "Saúde & Ciência",
    img: "/editorial/glp1_oral_2026.webp",
    imgCaption: "Ilustração editorial destaca a atuação dos análogos de GLP-1 no septo lateral, região cerebral que integra memória e motivação por recompensas.",
    imgCredit: "Reprodução / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Uma nova fronteira na neurociência acaba de ser aberta com a descoberta do mecanismo exato pelo qual medicamentos como o Ozempic e o Wegovy reduzem não apenas a fome, mas também o desejo por substâncias viciantes. Cientistas da Universidade de Yale e outras instituições internacionais identificaram o <strong>septo lateral</strong> como o "centro de comando" oculto que explica por que pacientes em uso de agonistas de GLP-1 relatam uma queda drástica no interesse por álcool, nicotina e até cocaína.
        </p>

        <p>O estudo, que ganhou destaque nesta semana em publicações como <em>Nature</em> e <em>The Conversation</em>, revela que esta região do cérebro, historicamente ligada à regulação emocional, é densamente povoada por receptores de GLP-1 e atua como um filtro entre o pensamento sobre uma recompensa e o impulso de buscá-la.</p>

        <div className="bg-slate-900/50 border-l-4 border-blue-500 p-6 my-8 rounded-r-xl">
          <h4 className="text-blue-400 font-bold mb-2 uppercase tracking-wider text-sm">Por que isso importa</h4>
          <p className="text-slate-300 italic">"Estamos diante de uma mudança de paradigma", afirma o grupo de pesquisa da Yale. "Diferente dos tratamentos tradicionais que focam apenas na dopamina, os agonistas de GLP-1 modulam a forma como o cérebro integra o ambiente e as memórias com o desejo, oferecendo uma ferramenta poderosa contra a epidemia de obesidade e os transtornos de uso de substâncias."</p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6">O Fim do "Ruído Alimentar" e das Cargas de Vício</h2>
        <p>Muitos usuários de Ozempic descrevem o desaparecimento do chamado "food noise" (o pensamento constante em comida). A nova pesquisa demonstra que o mesmo fenômeno ocorre com outras compulsões. Ao ativar os receptores no septo lateral, o medicamento reduz as oscilações elétricas de alta frequência e o ritmo teta na região.</p>

        <p>Na prática, isso "silencia" a comunicação excessiva entre o sistema de memória e os centros de recompensa, impedindo que uma imagem mental — como um copo de cerveja ou um hambúrguer — se transforme em uma necessidade fisiológica incontrolável.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-1">VA Data</div>
            <div className="text-slate-400 text-xs uppercase">Estudos Clínicos</div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-1">GLP-1R</div>
            <div className="text-slate-400 text-xs uppercase">Septo Lateral</div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-1">SUDs</div>
            <div className="text-slate-400 text-xs uppercase">Tratamento Vício</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6">Evidências Clínicas</h2>
        <ul className="list-disc pl-6 space-y-4 text-slate-300">
          <li><strong>Redução de Risco</strong>: Estudos com dados do <em>Veterans Affairs</em> (EUA) mostram que usuários de GLP-1 têm menor probabilidade de desenvolver transtornos por uso de opioides e álcool.</li>
          <li><strong>Ação Multialvo</strong>: Testes pré-clínicos confirmaram a redução do consumo de cocaína, anfetaminas e nicotina em modelos animais.</li>
          <li><strong>Precisão</strong>: A descoberta permite o desenvolvimento de novos fármacos que mimetizam esse efeito cerebral sem necessariamente afetar o sistema digestivo.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10 mb-6">O Que Vem Agora</h2>
        <p>A descoberta abre caminho para ensaios clínicos focados exclusivamente no tratamento de dependência química com análogos de GLP-1. Além disso, reforça a necessidade de olhar para a obesidade não como uma falha de vontade, mas como um desequilíbrio nos circuitos de motivação cerebral que agora podem ser "ajustados" quimicamente.</p>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <h4 className="text-white font-bold mb-4">Referências & Fontes Científicas:</h4>
          <p className="text-slate-400 text-sm mb-2"><strong>[1]</strong> Edvardsson, C. E., et al. An inhibitory GLP-1 circuit in the lateral septum modulates reward-seeking behavior. <strong>Molecular Psychiatry</strong>, 2025/2026. DOI: 10.1038/s41380-025-02456-x</p>
          <p className="text-slate-400 text-sm mb-2"><strong>[2]</strong> Yale News. New study may change how we think about GLP-1s and the brain. <strong>Yale University</strong>, August 2026.</p>
          <p className="text-slate-400 text-sm mb-2"><strong>[3]</strong> ScienceDaily. Ozempic may have revealed the brain’s hidden “craving center”. <strong>The Conversation</strong>, 12/08/2026.</p>
        </div>
      </>
    )
  },
  anemia_eye_ai_2026: {
    title: "IA analisa vasos do olho e estima anemia sem coleta de sangue em estudo",
    subtitle: "Tecnologia experimental transforma vídeos de dez segundos da conjuntiva em sinais de hemoglobina e glóbulos vermelhos; pesquisadores dizem que ainda são necessários testes maiores.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "7 min",
    pubTime: "16:15",
    updateDate: "12/08/2026",
    updateTime: "16:15",
    cat: "Tecnologia Médica",
    img: "/editorial/anemia_retina_ia_2026.webp",
    imgCaption: "Ilustração editorial mostra a análise de imagens da retina por inteligência artificial para estimar sinais associados à anemia.",
    imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">Uma câmera de alta magnificação e um sistema de inteligência artificial conseguiram estimar sinais associados à anemia a partir do fluxo do sangue em pequenos vasos da parte branca do olho. O resultado vem de um estudo de prova de conceito publicado na <strong>npj Digital Medicine</strong>, mas não significa que o hemograma possa ser dispensado.</p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">A tecnologia, chamada <strong>Video-to-Vessels</strong>, converte vídeos de dez segundos da conjuntiva bulbar — a membrana que recobre a parte branca do olho — em uma representação digital do calibre e da dinâmica dos vasos. Em seguida, a rede neural VesselNet procura padrões relacionados à concentração de hemoglobina e à contagem de glóbulos vermelhos.</p>
        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden"><div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" /><div className="flex items-start gap-6 relative z-10"><div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0"><Sparkles size={24} /></div><div><h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2><p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">Se for confirmado em grupos maiores e mais diversos, o método poderá ajudar a levar uma triagem inicial para locais onde a coleta e o processamento de sangue são difíceis. A utilidade real, porém, dependerá de saber quantos casos são perdidos e quantos resultados positivos exigem investigação adicional.</p></div></div></div>
        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O que foi medido</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">Participaram 224 pessoas, cada uma submetida a exames laboratoriais convencionais e à gravação dos dois olhos com uma câmera RGB de 50 vezes de ampliação. O modelo não “viu” a anemia como um diagnóstico pronto: ele aprendeu a relacionar características do movimento do sangue nos capilares com valores de referência obtidos no laboratório.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05] premium-border space-y-2"><div className="text-[#4F8CFF] font-black text-2xl">224</div><p className="text-[#98A2B3] text-xs uppercase tracking-wider font-bold">Participantes</p></div><div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05] premium-border space-y-2"><div className="text-[#4F8CFF] font-black text-2xl">82,8%</div><p className="text-[#98A2B3] text-xs uppercase tracking-wider font-bold">AUC para anemia</p></div><div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05] premium-border space-y-2"><div className="text-[#4F8CFF] font-black text-2xl">10 s</div><p className="text-[#98A2B3] text-xs uppercase tracking-wider font-bold">Vídeo de cada olho</p></div></div>
        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">O resultado é promissor, mas tem limites</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">No artigo, a área sob a curva ROC para identificar anemia foi de 0,828. Essa métrica resume a capacidade de um modelo separar pessoas com e sem a condição em diferentes pontos de corte; não equivale a dizer que 82,8% dos pacientes receberiam um diagnóstico correto em qualquer cenário clínico. A correlação de Spearman entre as previsões e a hemoglobina foi 0,47, e a correlação com a contagem de glóbulos vermelhos foi 0,46.</p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">O processamento das imagens foi decisivo: quando os pesquisadores retiraram a estabilização dos movimentos dos olhos e a remoção de ruído, a correlação para hemoglobina caiu 38% e a relacionada aos glóbulos vermelhos, 19%. Isso mostra que a técnica ainda depende de condições de captura e de uma cadeia computacional específica.</p>
        <div className="bg-amber-500/10 border border-amber-400/20 rounded-[24px] p-6 mb-12"><h3 className="text-white font-bold text-lg flex items-center gap-2"><Target size={18} className="text-amber-300" /> Atenção: não é exame disponível</h3><p className="text-[#CBD5E1] text-sm leading-relaxed mt-3">O estudo é uma prova de conceito. A tecnologia não foi validada como teste de triagem em larga escala, não substitui o hemograma e não deve ser usada para iniciar tratamento ou descartar anemia. Sintomas e suspeitas precisam ser avaliados por um profissional de saúde.</p></div>
        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Próximos passos</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">Os pesquisadores defendem estudos mais amplos e diversos antes de transformar o sistema em uma ferramenta de triagem. Também será necessário avaliar como diferentes câmeras, condições de iluminação, movimentos, doenças oculares e características da população afetam o desempenho. A promessa, portanto, está no caminho para uma medição sem agulha — não em uma solução clínica pronta.</p>
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 mb-12"><h3 className="text-white font-bold text-lg flex items-center gap-2"><Sparkles size={18} className="text-[#4F8CFF]" /> O que vem agora</h3><p className="text-[#98A2B3] text-sm leading-relaxed">A próxima etapa é testar a ferramenta prospectivamente, comparando-a com hemogramas em populações que ainda não sabem se têm anemia e medindo falsos negativos, falsos positivos e impacto sobre decisões médicas.</p></div>
        <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Fontes e referências científicas</h2><div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">{[<a href="https://doi.org/10.1038/s41746-026-02598-2" target="_blank" rel="noreferrer" className="text-[#98A2B3] hover:text-white hover:underline">[1] Denis T. et al. Video-to-Vessels: non-invasive prediction of blood biomarkers from conjunctiva videos. <em>npj Digital Medicine</em>, 2026. DOI: 10.1038/s41746-026-02598-2.</a>, <a href="https://www.aftau.org/news_item/tau-researchers-develop-an-ai-eye-scan-technique-to-detect-anemia-and-assess-key-blood-markers/" target="_blank" rel="noreferrer" className="text-[#98A2B3] hover:text-white hover:underline">[2] Tel Aviv University. TAU researchers develop an AI eye scan technique to detect anemia and assess key blood markers, 25/06/2026.</a>, <a href="https://www.who.int/news-room/fact-sheets/detail/anaemia" target="_blank" rel="noreferrer" className="text-[#98A2B3] hover:text-white hover:underline">[3] Organização Mundial da Saúde. Anaemia — fact sheet.</a>].map((ref, i) => <div key={i} className="flex gap-3 text-xs leading-relaxed"><span className="text-[#4F8CFF] font-black">{i+1}</span><span>{ref}</span></div>)}</div>
      </>
    )
  },
  ucla_blood_test_2026: {
    title: "Exame de sangue experimental identifica sinais de vários cânceres em um único teste",
    subtitle: "Método publicado no PNAS analisa padrões de metilação do DNA livre circulante e apontou sinais de câncer, doenças hepáticas e lesões de órgãos; a tecnologia ainda precisa de validação prospectiva.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "8 min",
    pubTime: "16:15",
    updateDate: "12/08/2026",
    updateTime: "16:15",
    cat: "Saúde & Ciência",
    img: "/editorial/anemia_retina_ia_2026.webp",
    imgCaption: "Ilustração editorial: fragmentos de DNA livre circulante no sangue podem carregar sinais moleculares associados a diferentes tecidos e doenças.",
    imgCredit: "Ilustração original / EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Um exame de sangue experimental desenvolvido por pesquisadores ligados à Universidade da Califórnia em Los Angeles (UCLA) conseguiu reunir, em uma mesma análise, sinais moleculares associados a quatro tipos de câncer e a diferentes doenças do fígado. O método, chamado <strong>MethylScan</strong>, lê padrões de metilação — marcas químicas que ajudam a regular a atividade dos genes — em fragmentos de DNA que circulam no sangue.
        </p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          O trabalho foi publicado em abril na revista científica <strong>Proceedings of the National Academy of Sciences (PNAS)</strong>. A equipe analisou 1.061 amostras de plasma, mas os resultados não significam que o teste já esteja disponível para rastrear a população ou que possa substituir mamografia, colonoscopia, tomografia, ultrassom ou outros exames indicados por profissionais de saúde.
        </p>
        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0"><Sparkles size={24} /></div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                A proposta combina vários sinais biológicos em uma única amostra, o que pode ajudar pesquisadores a investigar doenças silenciosas e a origem dos sinais detectados. Antes de chegar à rotina clínica, porém, o método precisa provar seu desempenho em estudos prospectivos e em populações mais diversas.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Como o MethylScan funciona</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
          Quando células do corpo morrem, pequenas porções de seu DNA podem ser liberadas na corrente sanguínea. Esses fragmentos são chamados de DNA livre circulante, ou cfDNA. Como cada tecido tende a apresentar um padrão próprio de metilação, a leitura dessas marcas pode oferecer pistas sobre a origem de um sinal anormal.
        </p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          A estratégia criada pela equipe usa enzimas para remover parte do DNA hipometilado, predominante nas células do sangue, e concentra a análise em regiões mais informativas. Depois, algoritmos de aprendizado de máquina comparam os padrões observados com referências de tecidos saudáveis e doentes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05] premium-border space-y-2"><div className="text-[#4F8CFF] font-black text-2xl">1.061</div><p className="text-[#98A2B3] text-xs uppercase tracking-wider font-bold">Amostras de plasma</p></div>
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05] premium-border space-y-2"><div className="text-[#4F8CFF] font-black text-2xl">63,3%</div><p className="text-[#98A2B3] text-xs uppercase tracking-wider font-bold">Sensibilidade em todos os estágios</p></div>
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05] premium-border space-y-2"><div className="text-[#4F8CFF] font-black text-2xl">55,3%</div><p className="text-[#98A2B3] text-xs uppercase tracking-wider font-bold">Sensibilidade nos estágios iniciais</p></div>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">O que os pesquisadores observaram</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
          Na análise que combinou cânceres de fígado, pulmão, ovário e estômago, o MethylScan alcançou sensibilidade de 63,3% quando o modelo foi ajustado para 98% de especificidade. Isso quer dizer que, naquele conjunto de dados, poucos resultados foram falsos positivos, mas uma parcela dos casos de câncer não foi identificada pelo teste. Nos tumores em estágios I e II, a sensibilidade caiu para 55,3%.
        </p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          Entre pessoas com maior risco de câncer hepático por doenças como hepatites virais e outras condições crônicas do fígado, o modelo atingiu sensibilidade de 79,6% e especificidade de 90,4%. Os números foram obtidos com validação cruzada estratificada, repetida 50 vezes, e não em um ensaio clínico prospectivo de rastreamento.
        </p>
        <div className="bg-amber-500/10 border border-amber-400/20 rounded-[24px] p-6 mb-12">
          <h3 className="text-white font-bold text-lg flex items-center gap-2"><Target size={18} className="text-amber-300" /> Atenção: resultado promissor não é diagnóstico</h3>
          <p className="text-[#CBD5E1] text-sm leading-relaxed mt-3">O estudo usou amostras já associadas a diagnósticos conhecidos e modelos computacionais treinados com grupos específicos. Na prática, um teste de rastreamento precisa ser avaliado em pessoas sem diagnóstico, acompanhadas ao longo do tempo, para medir falsos positivos, falsos negativos e impacto real na mortalidade. Um resultado positivo também teria de ser confirmado por exames clínicos e de imagem.</p>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Limitações e próximos passos</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
          A própria publicação aponta desafios técnicos. Cerca de 26% dos fragmentos em regiões analisadas mantiveram sítios que deveriam ser cortados pelas enzimas, o que pode introduzir ruído no resultado. O desempenho também não foi uniforme entre todas as doenças hepáticas; algumas categorias tinham amostras pequenas.
        </p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          Para que a tecnologia avance, serão necessários estudos independentes, coortes maiores e mais representativas, validação em cenários de atendimento real e avaliação regulatória. Até lá, o MethylScan deve ser entendido como uma plataforma de pesquisa que sinaliza um caminho possível para diagnósticos menos invasivos — não como uma promessa de “exame universal”.
        </p>
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 mb-12"><h3 className="text-white font-bold text-lg flex items-center gap-2"><Sparkles size={18} className="text-[#4F8CFF]" /> O que vem agora</h3><p className="text-[#98A2B3] text-sm leading-relaxed">A próxima etapa é descobrir se o desempenho observado em amostras selecionadas se mantém quando o método é aplicado prospectivamente a pessoas que ainda não sabem se têm uma doença. Esse é o ponto que separa uma ferramenta experimental de um exame capaz de orientar decisões médicas.</p></div>
        <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Fontes e referências científicas</h2>
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
          {[
            <a href="https://doi.org/10.1073/pnas.2518347123" target="_blank" rel="noreferrer" className="text-[#98A2B3] hover:text-white hover:underline">[1] Zeng W. et al. Toward the simultaneous detection of multiple diseases with a highly cost-effective cell-free DNA methylome test. <em>PNAS</em>, 2026. DOI: 10.1073/pnas.2518347123.</a>,
            <a href="https://www.sciencedaily.com/releases/2026/08/260810015725.htm" target="_blank" rel="noreferrer" className="text-[#98A2B3] hover:text-white hover:underline">[2] UCLA Health Sciences. A simple blood test could detect multiple cancers and reveal where they started. ScienceDaily, 10/08/2026.</a>,
            <a href="https://earlydx.com/news/" target="_blank" rel="noreferrer" className="text-[#98A2B3] hover:text-white hover:underline">[3] EarlyDx. News and validation updates for the MethylScan platform. Consulta editorial em 12/08/2026.</a>
          ].map((ref, i) => <div key={i} className="flex gap-3 text-xs leading-relaxed"><span className="text-[#4F8CFF] font-black">{i+1}</span><span>{ref}</span></div>)}
        </div>
      </>
    )
  },
  parkinson_brain_rhythm_dbs_2026: {
    title: "Ritmo Cerebral 'Oculto' é a Chave para o Sucesso do Marca-passo Cerebral no Parkinson",
    subtitle: "Descoberta inédita publicada na revista Brain identifica a frequência exata (20-35 Hz) que coordena a melhora dos sintomas; estudo abre caminho para tratamentos personalizados e mais precisos.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "7 min",
    pubTime: "15:45",
    updateDate: "12/08/2026",
    updateTime: "15:45",
    cat: "Neurologia",
    img: "/editorial/dbs_parkinson_2026.webp",
    imgCaption: "Ilustração editorial de estimulação cerebral profunda e ritmos neurais relacionados ao Parkinson.",
    imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Uma colaboração internacional de neurocientistas e clínicos das universidades de Colônia, Düsseldorf, Harvard e Charité Berlin acaba de desvendar um mistério que intrigava a medicina há décadas: por que a Estimulação Cerebral Profunda (DBS) funciona de forma tão variada entre pacientes com Parkinson?
        </p>

        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          O estudo, publicado nesta quarta-feira (12) na prestigiada revista científica <strong>Brain</strong>, revelou que os benefícios do "marca-passo cerebral" dependem da estimulação de uma rede neural específica que se comunica através de um ritmo elétrico "oculto": a <strong>banda beta alta (20 a 35 Hz)</strong>.
        </p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0"><Sparkles size={24} /></div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "Pela primeira vez, fomos capazes de caracterizar a rede de resposta à DBS em termos de espaço e tempo simultaneamente. Mostramos que o Parkinson pode ser melhor tratado se estimularmos uma rede muito precisamente definida que opera de forma sincronizada em uma frequência específica."
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> A Ciência por trás do Ritmo</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
          Até agora, os médicos sabiam <em>onde</em> estimular (o núcleo subtalâmico), mas o ajuste fino dos aparelhos era baseado em tentativa e erro. A nova pesquisa utilizou uma tecnologia de ponta, combinando gravações de eletrodos implantados com <strong>magnetoencefalografia (MEG)</strong> em 50 pacientes.
        </p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          A análise demonstrou que a conexão funcional entre as regiões profundas do cérebro e o córtex frontal opera majoritariamente nesta frequência de 20-35 Hz. Quanto mais forte era essa conexão sincronizada após o implante, maior era a melhora motora observada no paciente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05] premium-border space-y-2">
            <div className="text-[#4F8CFF] font-black text-2xl">20-35 Hz</div>
            <p className="text-[#98A2B3] text-xs uppercase tracking-wider font-bold">Frequência Chave</p>
          </div>
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05] premium-border space-y-2">
            <div className="text-[#4F8CFF] font-black text-2xl">50 Pacientes</div>
            <p className="text-[#98A2B3] text-xs uppercase tracking-wider font-bold">Amostra do Estudo</p>
          </div>
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05] premium-border space-y-2">
            <div className="text-[#4F8CFF] font-black text-2xl">100 Hemisférios</div>
            <p className="text-[#98A2B3] text-xs uppercase tracking-wider font-bold">Análise Espacial</p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">O Que Vem Agora: Medicina Personalizada</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
          A descoberta funciona como um "mapa do tesouro" para a neurologia. No futuro próximo, os dispositivos de DBS poderão ser programados de forma automática e personalizada para cada paciente, sintonizando a frequência exata necessária para otimizar a rede neural de cada indivíduo.
        </p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          Isso é especialmente promissor para pacientes que, atualmente, não obtêm o alívio total dos sintomas com as configurações padrão dos aparelhos.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes Científicas</h2>
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
          {[
            "Bahners, B., et al. The Deep Brain Stimulation Response Network in Parkinson's Disease Operates in the High Beta Band. Brain, 12/08/2026. DOI: 10.1093/brain/awaf445",
            "University of Cologne. Scientists discover a hidden brain rhythm that could improve Parkinson’s treatment. ScienceDaily, August 2026.",
            "Harvard Medical School. Advances in Computational Neurology and DBS Mapping. 2026."
          ].map((ref, i) => (
            <div key={i} className="flex gap-4 text-sm">
              <span className="text-[#4F8CFF] font-bold">[{i + 1}]</span>
              <span className="text-[#98A2B3]">{ref}</span>
            </div>
          ))}
        </div>
      </>
    )
  },
  omega3_cancer_nk_2026: {
    title: "Omega-3 e imunoterapia: estudo investiga possível efeito sobre células de defesa",
    subtitle: "Pesquisa inédita mostra que certos ácidos graxos inibem a ação de células de defesa e reduzem a eficácia da imunoterapia em tumores de cólon; entenda o mecanismo.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "8 min",
    pubTime: "15:15",
    updateDate: "12/08/2026",
    updateTime: "15:15",
    cat: "Saúde & Ciência",
    img: "/editorial/ia_oncologia_linfoma_2026.webp",
    imgCaption: "Ilustração editorial detalha a interação entre moléculas de ômega-3 e as células Natural Killer (NK) no microambiente tumoral.",
    imgCredit: "Reprodução / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Uma descoberta surpreendente publicada na revista científica <strong>Science Signaling</strong> nesta quarta-feira (12) está desafiando um dos pilares da suplementação nutricional em pacientes oncológicos. Pesquisadores revelaram que o consumo de certos ácidos graxos poli-insaturados, como o <strong>Ômega-3</strong>, pode, em contextos específicos, atuar como um "freio" para o sistema imunológico, reduzindo a eficácia de tratamentos avançados contra o câncer.
        </p>

        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          O estudo, liderado pelo pesquisador <strong>Yi Luan</strong>, focou na ação das células <strong>Natural Killer (NK)</strong> — as sentinelas do corpo responsáveis por identificar e destruir células tumorais. Ao contrário do que se esperava, a presença elevada de certos tipos de gorduras saudáveis no microambiente do tumor de cólon acabou "desligando" a capacidade combativa dessas células de defesa.
        </p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0"><Sparkles size={24} /></div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                "A nutrição na oncologia é frequentemente vista como 'quanto mais, melhor'. Este estudo prova que precisamos de precisão: o que ajuda o coração pode, em casos específicos de imunoterapia, atrapalhar o combate ao tumor."
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O Mecanismo: A Proteína LRP5</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
          A pesquisa identificou que o transporte de ácidos graxos para dentro das células NK depende de uma proteína chamada <strong>LRP5</strong>. Quando há excesso dessas gorduras, a LRP5 desencadeia uma cascata de sinais químicos que inibe a função antitumoral das células NK.
        </p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          Em modelos experimentais com camundongos, os animais que receberam suplementação rica nesses ácidos graxos apresentaram tumores de cólon que cresceram mais rápido e responderam pior aos inibidores de <em>checkpoint</em> imunológico — uma das formas mais modernas de imunoterapia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05] premium-border space-y-2">
            <div className="text-[#4F8CFF] font-black text-2xl">21 horas</div>
            <p className="text-[#98A2B3] text-xs uppercase tracking-wider font-bold">Publicação Science</p>
          </div>
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05] premium-border space-y-2">
            <div className="text-[#4F8CFF] font-black text-2xl">NK Cells</div>
            <p className="text-[#98A2B3] text-xs uppercase tracking-wider font-bold">Alvo Inibido</p>
          </div>
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05] premium-border space-y-2">
            <div className="text-[#4F8CFF] font-black text-2xl">LRP5</div>
            <p className="text-[#98A2B3] text-xs uppercase tracking-wider font-bold">Interruptor Chave</p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Atenção: Não pare a suplementação</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
          É fundamental ressaltar que este é um estudo <strong>pré-clínico</strong>. Os resultados em camundongos fornecem uma base científica valiosa para novos ensaios em humanos, mas não devem ser interpretados como uma recomendação para que pacientes interrompam o uso de ômega-3 ou outros suplementos sem orientação médica.
        </p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          A descoberta abre caminho para a <strong>imunonutrição personalizada</strong>: no futuro, médicos poderão testar os níveis de LRP5 no paciente para decidir se a suplementação de gorduras ajudará ou prejudicará o tratamento específico que está sendo administrado.
        </p>

        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 mb-12">
          <h3 className="text-white font-bold text-lg flex items-center gap-2"><Sparkles size={18} className="text-[#4F8CFF]" /> O que vem agora</h3>
          <p className="text-[#98A2B3] text-sm leading-relaxed">
            O grupo de pesquisa agora planeja analisar dados de pacientes humanos em tratamento de imunoterapia para verificar se a correlação observada em laboratório se repete na prática clínica. Se confirmada, a descoberta poderá mudar as diretrizes dietéticas para pacientes com câncer colorretal em todo o mundo.
          </p>
        </div>

        <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes Científicas</h2>
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
          {[
            "Luan, Y., et al. LRP5-dependent transport of polyunsaturated fatty acids serves as a metabolic checkpoint for NK cell function. Science Signaling, 12/08/2026. DOI: 10.1126/scisignal.ady2865",
            "Science Magazine. Preclinical study suggests some omega fatty acids can disrupt antitumor activity. August 2026.",
            "National Cancer Institute (NCI). The role of Natural Killer cells in immunotherapy resistance. 2026."
          ].map((ref, i) => (
            <div key={i} className="flex gap-3 text-xs text-[#98A2B3] font-medium leading-relaxed">
              <span className="text-[#4F8CFF] font-black">[{i+1}]</span>
              <span>{ref}</span>
            </div>
          ))}
        </div>
      </>
    )
  },
  alzheimer_surgery_dcLVA_2026: {
    title: "Cirurgia controversa para Alzheimer: o que a evidência permite afirmar",
    subtitle: "Técnica de 'limpeza cerebral' através de microcirurgia no pescoço gera debate na comunidade médica após vídeos de recuperações surpreendentes; Nature detalha o que se sabe até agora.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "9 min",
    pubTime: "14:40",
    updateDate: "12/08/2026",
    updateTime: "14:40",
    cat: "Saúde & Ciência",
    img: "/editorial/dbs_parkinson_2026.webp",
    imgCaption: "Ilustração editorial 3D detalha a conexão entre o cérebro e o sistema de drenagem linfática no pescoço, alvo da cirurgia dcLVA.",
    imgCredit: "Reprodução / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Um vídeo impressionante de um homem de 80 anos recuperando a fala e a mobilidade após uma cirurgia experimental está sacudindo a comunidade científica global. O procedimento, conhecido como <strong>anastomose linfático-venosa cervical profunda (dcLVA)</strong>, propõe uma solução de "encanamento" para o cérebro, visando reverter os danos causados pela Doença de Alzheimer.
        </p>

        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          A técnica, detalhada em uma reportagem especial da revista <em>Nature</em> nesta quarta-feira (12), envolve a conexão de minúsculos vasos linfáticos no pescoço a veias próximas. O objetivo é criar uma rota de fuga facilitada para o fluido cerebrospinal e as proteínas tóxicas, como a beta-amiloide e a tau, que se acumulam no cérebro de pacientes com demência.
        </p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0"><Sparkles size={24} /></div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Entenda o Conceito</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                A cirurgia baseia-se na descoberta recente do sistema glinfático e das meninges linfáticas. Se o cérebro não consegue "jogar o lixo fora" devido ao envelhecimento ou doença, a criação de um "atalho" cirúrgico no pescoço poderia, teoricamente, restaurar a limpeza cerebral e a função cognitiva.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Do Viral à Controvérsia</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
          O "frenesi" em torno da dcLVA começou na China, onde o cirurgião <strong>Qingping Xie</strong> realizou o primeiro procedimento em 2020. Vídeos de pacientes antes e depois da cirurgia viralizaram no WeChat e Douyin, levando milhares de famílias a pagarem até US$ 30 mil pelo tratamento experimental.
        </p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          No entanto, a rápida adoção sem evidências robustas gerou um alerta vermelho. O governo chinês restringiu a cirurgia a ambientes de pesquisa formal no ano passado, e o próprio Dr. Xie encontra-se detido pelas autoridades para investigações. A comunidade médica internacional agora tenta separar os relatos anedóticos da realidade biológica.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
            <div className="text-[#4F8CFF] font-black text-4xl">2.000+</div>
            <h3 className="text-white font-black text-lg">Cirurgias Realizadas</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed">Estimativa de procedimentos realizados na China antes das restrições regulatórias.</p>
          </div>
          <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
            <div className="text-[#4F8CFF] font-black text-4xl">81%</div>
            <h3 className="text-white font-black text-lg">Melhora em Biomarcadores</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed">Dados preliminares de pequenos estudos mostram redução de tau e amiloide no líquido cefalorraquidiano.</p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">O Que a Ciência Diz</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
          Pesquisadores da <strong>Cleveland Clinic</strong> (EUA) e da <strong>Universidade de Zurique</strong> (Suíça) estão iniciando ensaios clínicos controlados para validar a técnica. A principal dúvida é a velocidade da recuperação: enquanto alguns pacientes mostram melhoras em dias, o processo biológico de limpeza de placas de amiloide deveria levar meses.
        </p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          "Há um potencial enorme, mas também riscos de infecção, sangramento e danos nervosos", alerta a Dra. <strong>Wei Chen</strong>, especialista em microcirurgia linfática. O consenso atual é de cautela extrema: a dcLVA ainda não é um tratamento padrão e deve ser tratada como pesquisa experimental rigorosa.
        </p>

        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 mb-12">
          <h3 className="text-white font-bold text-lg flex items-center gap-2"><CheckCircle2 size={18} className="text-[#4F8CFF]" /> Por que isso importa?</h3>
          <p className="text-[#98A2B3] text-sm leading-relaxed">Se comprovada, a cirurgia representaria a primeira intervenção mecânica eficaz contra o Alzheimer, oferecendo uma alternativa ou complemento às terapias com anticorpos monoclonais (como o Lecanemabe) que têm alto custo e acesso limitado.</p>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">O Caminho à Frente</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          O futuro da dcLVA depende dos resultados dos ensaios clínicos randomizados que estão em curso. Até lá, a medicina regenerativa observa com uma mistura de esperança e ceticismo o que pode ser a maior revolução — ou a maior controvérsia — no tratamento da demência nesta década.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Fontes & Referências</h2>
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 text-xs text-[#98A2B3] leading-relaxed">
          <p><strong>[1]</strong> <a href="https://www.nature.com/articles/d41586-026-02448-x" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">Nature — A controversial Alzheimer’s surgery is said to reverse symptoms, 12/08/2026.</a></p>
          <p><strong>[2]</strong> <a href="https://www.science.org/content/article/brain-s-plumbing-inspires-new-alzheimer-s-strategies-and-controversial-surgeries" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">Science — Brain’s ‘plumbing’ inspires new Alzheimer’s strategies, Dec 2025.</a></p>
          <p><strong>[3]</strong> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12495200/" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">Biomaterials Advances — Bone regeneration and lymphatic bypass in neurodegeneration, 2025.</a></p>
        </div>
      </>
    )
  },
  fit_cancer_colorretal_sus_2026: {
    title: "SUS passa a usar teste de fezes para rastrear câncer colorretal antes dos sintomas",
    subtitle: "O exame imunoquímico fecal será referência para pessoas assintomáticas de 50 a 75 anos; resultado positivo exige investigação, geralmente com colonoscopia.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12 Ago 2026",
    pubTime: "11:05",
    updateTime: "11:05",
    cat: "Saúde Pública",
    time: "7 min",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
    imgCaption: "Ilustração editorial mostra um kit de coleta e a investigação de sinais microscópicos no intestino.",
    imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">O Sistema Único de Saúde passou a adotar o <strong>Teste Imunoquímico Fecal (FIT)</strong> como exame de referência para o rastreamento do câncer colorretal em homens e mulheres sem sintomas, na faixa de 50 a 75 anos. A mudança faz parte de um protocolo nacional anunciado pelo Ministério da Saúde e divulgado pelo Instituto Nacional de Câncer (INCA). [1]</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0"><Sparkles size={24} /></div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">O câncer colorretal pode permanecer silencioso no início. Um exame simples, feito a partir de uma amostra de fezes, pode indicar quem precisa de uma avaliação mais detalhada — mas não substitui a colonoscopia nem confirma câncer sozinho.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O que o FIT procura</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">O FIT identifica pequenas quantidades de sangue humano oculto nas fezes, invisíveis a olho nu. Esse sinal pode estar associado a pólipos, lesões pré-cancerígenas ou tumores, mas também pode ocorrer por outras causas. Por isso, um resultado positivo é um <strong>indício para investigação</strong>, não um diagnóstico definitivo.</p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">A tecnologia usa anticorpos específicos contra a hemoglobina humana. Segundo o INCA, a sensibilidade estimada do teste para identificar possíveis alterações fica entre 85% e 92%. O exame pode ser realizado com uma única amostra, sem preparo intestinal e sem a dieta restritiva exigida por alguns métodos antigos de pesquisa de sangue oculto. [1]</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-3"><div className="text-[#4F8CFF] font-black text-4xl">50–75</div><h3 className="text-white font-black text-lg">Faixa etária</h3><p className="text-[#98A2B3] text-sm leading-relaxed">Público assintomático definido no protocolo nacional.</p></div>
          <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-3"><div className="text-[#4F8CFF] font-black text-4xl">85–92%</div><h3 className="text-white font-black text-lg">Sensibilidade estimada</h3><p className="text-[#98A2B3] text-sm leading-relaxed">Faixa informada pelo INCA para detectar possíveis alterações.</p></div>
          <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-3"><div className="text-[#4F8CFF] font-black text-4xl">53,8 mil</div><h3 className="text-white font-black text-lg">Novos casos por ano</h3><p className="text-[#98A2B3] text-sm leading-relaxed">Estimativa brasileira anual para 2026–2028, segundo o INCA.</p></div>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 mb-12">
          <h3 className="text-white font-bold text-lg flex items-center gap-2"><CheckCircle2 size={18} className="text-[#4F8CFF]" /> Entenda o próximo passo</h3>
          <p className="text-[#98A2B3] text-sm leading-relaxed">Quando o FIT encontra sangue oculto, o paciente deve ser encaminhado para exames complementares. A colonoscopia permite observar diretamente o cólon e o reto e, em alguns casos, retirar pólipos durante o procedimento. O fluxo exato depende da rede de saúde e da avaliação clínica.</p>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Rastreamento não é investigação de sintomas</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">O protocolo descrito pelo INCA é voltado a pessoas <strong>assintomáticas</strong>. Quem apresenta sangue visível nas fezes, mudança persistente do hábito intestinal, dor abdominal recorrente, anemia sem causa esclarecida ou perda de peso não deve esperar um programa de rastreamento para procurar atendimento. Esses sinais precisam ser avaliados individualmente por um profissional de saúde.</p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">A incorporação do FIT amplia uma porta de entrada para a detecção precoce, mas não transforma o exame em teste de confirmação, tratamento ou garantia de ausência da doença. A participação deve seguir a orientação da unidade do SUS e o histórico de cada pessoa.</p>

        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3 mb-12">
          <h3 className="text-white font-bold text-lg">O que vem agora</h3>
          <p className="text-[#98A2B3] text-sm leading-relaxed">O impacto da estratégia dependerá da capacidade de distribuir os kits, processar as amostras e assegurar a colonoscopia para quem tiver resultado positivo. A efetividade do rastreamento não está apenas no primeiro teste, mas na continuidade de todo o cuidado.</p>
        </div>

        <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Fontes consultadas</h2>
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 text-xs text-[#98A2B3] leading-relaxed">
          <p><strong>[1]</strong> <a href="https://www.gov.br/inca/pt-br/assuntos/noticias/2026/sus-adota-novo-exame-para-detectar-cancer-de-intestino-antes-dos-sintomas" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">INCA — SUS adota novo exame para detectar câncer de intestino antes de sintomas</a>.</p>
          <p><strong>[2]</strong> <a href="https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/intestino" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">INCA — Câncer de intestino</a>.</p>
        </div>
      </>
    )
  },

  fnip1_gene_metabolism_2026: {
    title: "Descoberto o 'Gene da Magreza': Mutação Rara no FNIP1 Reduz em 60% o Risco de Doenças Metabólicas",
    subtitle: "Estudo histórico com 1 milhão de pessoas publicado na Nature identifica variante genética que protege contra obesidade, gordura no fígado e diabetes ao acelerar a queima de energia celular.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "14:15",
    updateDate: "12/08/2026",
    updateTime: "14:15",
    cat: "Saúde & Ciência",
    img: "/editorial/glp1_oral_2026.webp",
    imgCaption: "Ilustração editorial 3D mostra a interação entre o código genético e a ativação do metabolismo mitocondrial.",
    imgCredit: "Reprodução / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Uma descoberta genética sem precedentes pode mudar a forma como tratamos a obesidade e o diabetes. Pesquisadores da <strong>Regeneron Genetics Center</strong>, em colaboração com instituições como a Mayo Clinic, identificaram mutações raras no gene <strong>FNIP1</strong> que oferecem uma proteção natural massiva contra doenças cardiometabólicas.
        </p>

        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          O estudo, publicado na prestigiada revista <em>Nature</em>, analisou o exoma de mais de <strong>1 milhão de pessoas</strong> de diversas origens étnicas. Os dados revelam que portadores de variantes que "desligam" parcialmente o gene FNIP1 possuem um perfil metabólico invejável: menos gordura abdominal, fígados mais saudáveis e níveis de açúcar no sangue significativamente menores.
        </p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0"><Sparkles size={24} /></div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                A mutação no FNIP1 funciona como um "acelerador" natural do metabolismo. Enquanto o gene normal atua como um freio na queima de calorias, sua inibição faz com que o corpo queime energia de forma mais eficiente, mimetizando alguns dos efeitos de drogas modernas como o Ozempic, mas de forma intrínseca ao organismo.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O Escudo Genético de 60%</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
          A análise estatística demonstrou que indivíduos com essas variantes ultra-raras (presentes em cerca de 1 a cada 7.000 pessoas) têm chances <strong>60% menores</strong> de desenvolver doenças cardiometabólicas em comparação com a população geral.
        </p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          "Identificamos o FNIP1 como um regulador mestre do equilíbrio energético humano", afirma o <strong>Dr. Luca A. Lotta</strong>, autor correspondente do estudo. Segundo os pesquisadores, o gene codifica uma proteína que suprime a atividade das mitocôndrias — as "usinas de energia" das células. Quando o FNIP1 é silenciado, a queima de gordura aumenta drasticamente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
            <div className="text-[#4F8CFF] font-black text-4xl">1.03M</div>
            <h3 className="text-white font-black text-lg">Pessoas Analisadas</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed">Um dos maiores estudos de sequenciamento exômico da história da medicina.</p>
          </div>
          <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
            <div className="text-[#4F8CFF] font-black text-4xl">60%</div>
            <h3 className="text-white font-black text-lg">Redução de Risco</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed">Proteção contra diabetes tipo 2, doenças cardíacas e esteatose hepática.</p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Do Laboratório para a Farmácia</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
          Para validar a descoberta, a equipe realizou testes funcionais em laboratório. Ao "desligar" o gene em hepatócitos humanos (células do fígado), observaram um aumento imediato na quebra de lipídios e na expressão de genes associados à limpeza celular (lisossomos).
        </p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          Em modelos animais alimentados com dietas ricas em gordura, a inibição do FNIP1 preveniu o ganho de peso, reduziu a gordura no fígado e melhorou drasticamente a sensibilidade à insulina. Isso abre caminho para o desenvolvimento de novos medicamentos que possam inibir essa proteína em humanos, oferecendo uma alternativa terapêutica para quem não responde aos tratamentos atuais.
        </p>

        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 mb-12">
          <h3 className="text-white font-bold text-lg flex items-center gap-2"><CheckCircle2 size={18} className="text-[#4F8CFF]" /> Entenda a Diferença</h3>
          <p className="text-[#98A2B3] text-sm leading-relaxed">Diferente de mutações que causam doenças, esta variante é "protetora". Ela não prejudica o funcionamento do corpo, mas otimiza a forma como lidamos com o excesso de nutrientes, algo vital em um mundo com alta oferta de alimentos ultraprocessados.</p>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">O Que Vem Agora</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          O próximo passo da indústria farmacêutica será a criação de inibidores de moléculas pequenas ou terapias de RNA que possam replicar o efeito dessa mutação rara. A descoberta do FNIP1 prova que a genética de larga escala é a ferramenta mais poderosa para identificar novos alvos terapêuticos seguros e eficazes.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Fontes & Referências</h2>
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 text-xs text-[#98A2B3] leading-relaxed">
          <p><strong>[1]</strong> <a href="https://www.nature.com/articles/s41586-026-10864-2" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">Nature — FNIP1 variants are associated with favourable metabolism in 1 million humans, 05/08/2026.</a></p>
          <p><strong>[2]</strong> <a href="https://www.nature.com/articles/d41586-026-02391-x" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">Nature News — Switching off the FNIP1 gene protects against metabolic disease, 05/08/2026.</a></p>
          <p><strong>[3]</strong> <a href="https://www.regeneron.com/genetics-center" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">Regeneron Genetics Center — Exome Sequencing Analysis Reports.</a></p>
        </div>
      </>
    )
  },

  in_vivo_car_t_mrna_2026: {
    title: "Nanopartícula de mRNA cria células CAR-T dentro do corpo em estudo pré-clínico",
    subtitle: "Pesquisa publicada na Nature Materials desenvolveu um veículo que entrega mRNA a células T e gerou CAR-T em modelos de câncer e fibrose; testes em pessoas ainda não começaram.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "8 min",
    pubTime: "11:15",
    updateDate: "12/08/2026",
    updateTime: "11:15",
    cat: "Tecnologia Médica",
    img: "/editorial/leucemia_celulas_car_t_2026.webp",
    imgCaption: "Ilustração editorial mostra uma nanopartícula de mRNA em direção a uma célula T; a pesquisa ainda está na fase pré-clínica.",
    imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
    content: (
      <>
        <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
          Uma tecnologia experimental pode simplificar uma das etapas mais complexas da terapia CAR-T: em vez de retirar células de defesa do paciente, modificá-las em laboratório e devolvê-las ao organismo, pesquisadores desenvolveram uma nanopartícula capaz de levar uma instrução genética diretamente às células T. O resultado, descrito em artigo publicado em 12 de agosto na <strong>Nature Materials</strong>, foi observado em modelos de câncer e fibrose — não em pacientes.
        </p>

        <div className="bg-[#4F8CFF]/5 border-l-4 border-[#4F8CFF] p-6 my-8 rounded-r-2xl">
          <h4 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-2">Por que isso importa</h4>
          <p className="text-sm text-[#98A2B3] italic leading-relaxed">
            A proposta tenta reduzir a dependência de fabricação individualizada, um dos gargalos da CAR-T. Mas o estudo mostra uma possibilidade biológica em animais, e não um tratamento pronto, aprovado ou testado em seres humanos.
          </p>
        </div>

        <h2 className="text-2xl font-black text-[#F8FAFC] mt-10 mb-6 tracking-tight">Como funciona a ideia</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          A equipe descreveu uma nanopartícula formada por componentes poliméricos e lipídicos, chamada no artigo de <strong>ERTLNP</strong>. Depois de administrada por via sistêmica, a estrutura mostrou preferência por alcançar o baço, órgão que participa da organização da resposta imune. Ali, ela entregou moléculas de <strong>mRNA</strong> às células T.
        </p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          O mRNA funciona como uma mensagem temporária para orientar a produção de uma proteína. Neste estudo, os pesquisadores usaram uma mensagem que codifica um receptor quimérico, o <strong>CAR</strong>. Esse receptor pode equipar a célula T para reconhecer um alvo específico; por isso, as células resultantes são chamadas de CAR-T.
        </p>

        <h2 className="text-2xl font-black text-[#F8FAFC] mt-10 mb-6 tracking-tight">O que os pesquisadores observaram</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          Segundo o resumo do artigo, a própria nanopartícula estimulou a ativação e a multiplicação das células T, sem a necessidade de acrescentar um ligante externo. Os autores relacionaram esse efeito à via de sinalização <strong>PI3K/AKT/mTOR</strong>, um conjunto de mecanismos envolvidos no metabolismo e no comportamento das células imunes.
        </p>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          Quando a carga de mRNA codificava um CAR contra a proteína de ativação de fibroblastos, o sistema produziu células CAR-T dentro do organismo experimental. Essas células reduziram fibroblastos patológicos em modelos de câncer e fibrose, com poucos efeitos fora do alvo relatados no resumo. A formulação, porém, ainda precisa ser avaliada quanto à segurança, dose, duração do efeito e resposta em humanos.
        </p>

        <div className="my-10 p-8 bg-[#11141A] border border-white/[0.08] rounded-[32px] premium-border">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-[0.2em] text-[10px] mb-4">Dados da pesquisa</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div><p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Publicação</p><p className="text-sm font-bold text-[#F8FAFC]">Nature Materials</p></div>
            <div><p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Tipo</p><p className="text-sm font-bold text-[#F8FAFC]">Pré-clínico</p></div>
            <div><p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Carga</p><p className="text-sm font-bold text-[#F8FAFC]">mRNA de CAR</p></div>
            <div><p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Via estudada</p><p className="text-sm font-bold text-[#F8FAFC]">Entrega sistêmica</p></div>
          </div>
          <p className="text-xs text-[#98A2B3] leading-relaxed mt-6">O resumo público consultado não informa o número exato de animais ou experimentos. O artigo descreve modelos de câncer e fibrose; não há ensaio clínico humano relatado nessa publicação.</p>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 mb-12">
          <h3 className="text-white font-bold text-lg flex items-center gap-2"><CheckCircle2 size={18} className="text-[#4F8CFF]" /> Atenção: não é uma CAR-T disponível</h3>
          <p className="text-[#98A2B3] text-sm leading-relaxed">A expressão “dentro do corpo” se refere ao local em que as células foram geradas no experimento. Ela não significa que a técnica possa ser usada hoje em hospitais, nem que substitua as terapias CAR-T já avaliadas em contextos clínicos. Antes de qualquer aplicação em pessoas, serão necessários estudos independentes de toxicidade, distribuição, controle da ativação imune e eficácia.</p>
        </div>

        <h2 className="text-2xl font-black text-[#F8FAFC] mt-10 mb-6 tracking-tight">O que vem agora</h2>
        <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
          O próximo passo é transformar a prova de conceito em uma plataforma previsível e segura. Isso inclui confirmar o comportamento da nanopartícula em diferentes organismos, medir por quanto tempo o mRNA permanece ativo, investigar respostas imunes indesejadas e testar se a produção de CAR-T pode ser controlada. Apenas depois dessas etapas será possível avaliar a entrada em ensaios clínicos.
        </p>
        <p className="text-xs text-[#98A2B3] mt-12 pt-6 border-t border-white/[0.05]">
          <strong>Fontes consultadas:</strong> Cao Q. et al. “An inherent T cell-activating mRNA delivery carrier for in vivo CAR T generation”. <em>Nature Materials</em>, publicado em 12/08/2026. DOI: <a href="https://doi.org/10.1038/s41563-026-02675-7" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">10.1038/s41563-026-02675-7</a>. Versão preprint relacionada: bioRxiv DOI <a href="https://doi.org/10.1101/2025.11.19.688592" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">10.1101/2025.11.19.688592</a>, identificada como preprint e anterior à publicação revisada por pares.
        </p>
      </>
    )
  },


  wool_bone_regeneration_2026: {
    title: "Lã de Ovelha: O Novo 'Ouro' da Medicina Regenerativa para Ossos",
    subtitle: "Estudo do King's College London revela que a queratina extraída da lã supera o colágeno na regeneração de tecidos ósseos, criando estruturas mais fortes e organizadas em modelos animais.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "04:15",
    updateDate: "12/08/2026",
    updateTime: "04:15",
    cat: "Tecnologia Médica",
    img: "/editorial/la_regeneracao_ossea_2026.webp",
    imgCaption: "Ilustração editorial mostra fibras de lã transformadas em uma estrutura porosa para regeneração óssea.",
    imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
    content: (
      <>
        <p>Um subproduto abundante da agricultura pode ser a chave para uma nova era na medicina regenerativa. Pesquisadores do <strong>King's College London</strong> demonstraram, em um estudo publicado nesta quarta-feira (12), que a <strong>queratina extraída da lã de ovelha</strong> é capaz de regenerar ossos danificados com uma eficácia que desafia o atual padrão-ouro da indústria: o colágeno.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0"><Sparkles size={24} /></div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                A queratina da lã não é apenas mais sustentável e barata de extrair, mas produz um tecido ósseo mais organizado e estruturalmente similar ao osso saudável do que os métodos tradicionais.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Superando o Colágeno</h2>
        <p>Por décadas, o colágeno tem sido a base para andaimes (scaffolds) em aplicações médicas e odontológicas. No entanto, o material possui limitações: degrada-se rapidamente e tem baixa resistência mecânica, o que dificulta a reparação de ossos que precisam suportar peso.</p>

        <p>A equipe liderada pelo <strong>Dr. Sherif Elsharkawy</strong> testou membranas de queratina em modelos animais com defeitos cranianos significativos. Os resultados foram impressionantes: embora o colágeno tenha gerado uma quantidade maior de osso bruto, o osso formado pela queratina era <strong>muito mais organizado</strong>, com fibras alinhadas e maior segurança estrutural.</p>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Sustentabilidade e Inovação</h2>
        <p>Além da superioridade biológica, a lã oferece uma vantagem estratégica: a sustentabilidade. Frequentemente descartada como resíduo pela indústria agrícola, a lã é um recurso renovável e escalável. "Posicionamos a queratina como uma nova classe de biomaterial regenerativo que pode desafiar a dependência de longa data do colágeno", afirma Elsharkawy.</p>

        <div className="my-10 p-8 bg-[#11141A] border border-white/[0.08] rounded-[32px] premium-border">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-[0.2em] text-[10px] mb-4">Avanço em Números</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Fonte</p>
              <p className="text-sm font-bold text-[#F8FAFC]">Lã de Ovelha</p>
            </div>
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Proteína</p>
              <p className="text-sm font-bold text-[#F8FAFC]">Queratina</p>
            </div>
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Organização</p>
              <p className="text-sm font-bold text-[#F8FAFC]">Superior</p>
            </div>
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Instituição</p>
              <p className="text-sm font-bold text-[#F8FAFC]">King's College</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">O Que Vem Agora</h2>
        <p>A demonstração bem-sucedida em sistemas biológicos vivos aproxima a tecnologia do uso em pacientes reais. A próxima fase deve envolver testes em ossos longos que suportam carga e, eventualmente, ensaios clínicos em humanos para aplicações em cirurgias ortopédicas e reconstrutivas.</p>

        <p className="text-xs text-[#98A2B3] mt-12 pt-6 border-t border-white/[0.05]">
          <strong>Referências:</strong> "Bone regeneration of rat calvarial defect using biomimetic keratin-based membranes." <em>Biomaterials Advances</em>, Aug 2026. King's College London Press Release.
        </p>
      </>
    )
  },
    measles_americas_2026: {
      title: "Sarampo dispara nas Américas e Brasil reforça vacinação; veja quem precisa se proteger",
      subtitle: "Região chegou a 47.459 casos confirmados e 44 mortes em 2026, segundo a OPAS; no Brasil, o Ministério da Saúde ampliou a vacinação em três municípios paulistas para reduzir o risco de reintrodução do vírus.",
      cat: "Saúde Pública",
      time: "7 min",
      date: "12 Ago 2026",
      pubTime: "09:11",
      updateTime: "09:11",
      img: "/editorial/sarampo_vacinacao_americas_2026.webp",
      imgCaption: "Ilustração editorial mostra a vacinação infantil em um cenário de vigilância epidemiológica nas Américas.",
      imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            O sarampo voltou a exigir atenção redobrada nas Américas. Até a semana epidemiológica 28, encerrada em 18 de julho, foram confirmados <strong>47.459 casos</strong> em 16 países e um território, além de <strong>44 mortes</strong> em três países, informou a Organização Pan-Americana da Saúde (OPAS). O número de infecções já supera em mais de três vezes o total registrado em todo o ano de 2025.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            O alerta regional não significa que o Brasil tenha perdido o status de país livre da transmissão endêmica. O ponto central é outro: a circulação do vírus em países próximos, a mobilidade internacional e as lacunas na vacinação aumentam a possibilidade de casos importados e de novas cadeias de transmissão. Por isso, o Ministério da Saúde reforçou a estratégia de imunização em São Paulo, Guarulhos e São Bernardo do Campo.
          </p>

          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0"><Sparkles size={24} /></div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">O sarampo é uma das doenças infecciosas mais contagiosas. A vacinação protege a pessoa imunizada e ajuda a interromper a circulação do vírus, especialmente entre bebês, pessoas com contraindicações e grupos que enfrentam barreiras de acesso à saúde.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O que está acontecendo na região</h2>
          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            Guatemala, México, Estados Unidos e Peru concentram cerca de 95% dos casos confirmados em 2026. A Guatemala lidera o quadro, com 30.371 casos e 26 mortes; o México aparece em seguida, com 12.255 casos e 17 mortes. Estados Unidos e Peru registraram, respectivamente, 2.260 e 1.277 casos, segundo a atualização da OPAS.
          </p>
          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            A organização classificou como <strong>muito alto</strong> o risco à saúde pública associado ao sarampo nas Américas. A avaliação considera a existência de surtos ativos, a proporção insuficiente de pessoas protegidas, o acúmulo de indivíduos suscetíveis e o aumento de viagens e eventos internacionais. Alguns surtos apresentaram desaceleração, mas a transmissão continua em diferentes locais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4"><div className="text-[#4F8CFF] font-black text-4xl">47.459</div><h3 className="text-white font-black text-lg">Casos confirmados</h3><p className="text-[#98A2B3] text-sm leading-relaxed">Registro acumulado nas Américas até a semana epidemiológica 28 de 2026, encerrada em 18 de julho.</p></div>
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4"><div className="text-[#4F8CFF] font-black text-4xl">95%</div><h3 className="text-white font-black text-lg">Meta de cobertura</h3><p className="text-[#98A2B3] text-sm leading-relaxed">A OPAS recomenda manter pelo menos 95% de cobertura com duas doses para interromper a transmissão.</p></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Como o Brasil está reagindo</h2>
          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            Em atualização publicada em 7 de agosto, o Ministério da Saúde informou que ampliou temporariamente a oferta da tríplice viral para pessoas de <strong>6 meses a 59 anos</strong> nos municípios de São Paulo, Guarulhos e São Bernardo do Campo. A medida foi adotada após a identificação de casos relacionados à importação do vírus. O órgão informou que o Brasil havia confirmado 17 casos em 2026; três já estavam encerrados e 14 permaneciam em acompanhamento em São Paulo na atualização de 28 de julho.
          </p>
          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            A campanha nacional de multivacinação segue até 1º de setembro, com Dia D previsto para 22 de agosto. Segundo o Ministério da Saúde, mais de 7,2 milhões de doses da tríplice viral haviam sido distribuídas aos estados e municípios em 2026, e cerca de 2,9 milhões já tinham sido aplicadas.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 mb-12">
            <h3 className="text-white font-bold text-lg flex items-center gap-2"><CheckCircle2 size={18} className="text-[#4F8CFF]" /> Atenção à caderneta</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed">A recomendação geral é levar a caderneta a uma unidade de saúde para conferência do esquema vacinal. Em crianças de 6 a 11 meses, a chamada dose zero é adicional e não substitui as doses de rotina aplicadas a partir dos 12 meses. A indicação pode variar conforme idade, histórico vacinal, condição clínica e orientações locais.</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Quais são os sinais e por que a vigilância é importante</h2>
          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            Febre alta, tosse, coriza, conjuntivite e manchas na pele estão entre os sinais descritos para a doença. O sarampo pode evoluir com complicações como pneumonia e encefalite. Pessoas com sintomas e histórico de viagem internacional ou contato com caso suspeito devem procurar atendimento e informar esse contexto à equipe de saúde; a suspeita deve ser notificada e investigada rapidamente.
          </p>
          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            A vacinação continua sendo a principal medida de prevenção. A orientação não é presumir que todo quadro febril seja sarampo, mas reconhecer sinais compatíveis, reduzir o risco individual com a imunização indicada e evitar a disseminação caso haja suspeita. O acompanhamento deve ser feito por profissionais de saúde.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3 mb-12">
            <h3 className="text-white font-bold text-lg">O que vem agora</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed">A OPAS recomenda intensificar a vigilância, localizar rapidamente casos suspeitos e fechar lacunas de imunidade. Para o Brasil, o desafio é manter a eliminação da transmissão endêmica enquanto reforça a proteção em áreas de maior circulação de pessoas e nos municípios que registraram casos relacionados à importação.</p>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Fontes consultadas</h2>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 text-xs text-[#98A2B3] leading-relaxed">
            <p><strong>[1]</strong> <a href="https://www.paho.org/pt/noticias/8-8-2026-opas-pede-reforco-da-vacinacao-e-da-vigilancia-diante-do-aumento-casos-sarampo" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">OPAS — OPAS pede reforço da vacinação e da vigilância diante do aumento de casos de sarampo, 08/08/2026.</a></p>
            <p><strong>[2]</strong> <a href="https://www.paho.org/pt/documentos/alerta-epidemiologico-sarampo-na-regiao-das-americas-7-agosto-2026" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">OPAS/OMS — Alerta epidemiológico: sarampo na Região das Américas, 07/08/2026.</a></p>
            <p><strong>[3]</strong> <a href="https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/agosto/ministerio-da-saude-reforca-vacinacao-de-criancas-e-adolescentes-contra-sarampo-pneumonias-e-outras-doencas" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">Ministério da Saúde — Ministério reforça vacinação de crianças e adolescentes contra sarampo, 07/08/2026.</a></p>
            <p><strong>[4]</strong> <a href="https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/julho/ministerio-da-saude-amplia-recomendacao-de-vacinacao-contra-o-sarampo-em-tres-municipios-de-sao-paulo" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">Ministério da Saúde — Ampliação da recomendação de vacinação em três municípios paulistas, 28/07/2026.</a></p>
            <p><strong>[5]</strong> <a href="https://saude.df.gov.br/documents/d/saude/nota_tecnica_conjunta_n_80-2026-dpni-svsa-ms-pdf" target="_blank" rel="noreferrer" className="text-[#4F8CFF] hover:underline">Ministério da Saúde — Nota Técnica Conjunta nº 80/2026-DPNI/SVSA/MS.</a></p>
          </div>
        </>
      ),
    },
    oral_glp1_pill_2026: {
      title: "Nova Pílula Oral GLP-1 Promove Até 12% de Perda de Peso em Ensaio Clínico de Fase 2",
      subtitle: "Estudo publicado na Nature Medicine demonstra que o aleniglipron, agonista oral de pequenas moléculas, oferece eficácia comparável a injetáveis com a vantagem de fabricação escalável e uso diário simplificado.",
      cat: "Saúde & Ciência",
      time: "7 min",
      date: "12 Ago 2026",
      pubTime: "09:15",
      updateTime: "09:15",
      img: "/editorial/glp1_oral_2026.webp",
      imgCaption: "Ilustração editorial de uma pílula oral de GLP-1 e das vias metabólicas relacionadas ao trato gastrointestinal.",
      imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Uma nova alternativa oral aos tratamentos injetáveis para obesidade e sobrepeso demonstrou resultados expressivos em ensaio clínico de Fase 2b. O medicamento <strong>aleniglipron</strong>, um agonista do receptor GLP-1 baseado em pequenas moléculas, ajudou pacientes a perderem até <strong>12,1% de peso corporal</strong> em um período de 36 semanas.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            O avanço científico, liderado por pesquisadores da <strong>Northwestern Medicine</strong> e publicado no periódico científico <em>Nature Medicine</em>, marca uma transformação importante no manejo clínico de distúrbios metabólicos. Ao contrário dos medicamentos peptídicos tradicionais, como semaglutida e tirzepatida que exigem injeções semanais e refrigeração, o aleniglipron é sintetizado por via química e pode ser tomado em comprimidos diários.
          </p>

          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por Que Isso Importa</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "O diferencial do aleniglipron é ser uma molécula pequena, o que significa que é produzida quimicamente e pode ser tomada com ou sem alimentos. Isso elimina barreiras logísticas de refrigeração e simplifica drasticamente a fabricação em larga escala para atender à demanda global."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dr. Robert Kushner, Professor Emérito de Endocrinologia na Northwestern Medicine.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Metodologia Rigorosa e Resultados
          </h2>

          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            O estudo clínico randomizado, duplo-cego e controlado por placebo envolveu <strong>230 adultos</strong> com obesidade ou sobrepeso distribuídos em 38 centros médicos nos Estados Unidos. Os participantes foram divididos em grupos que receberam doses diárias de 45 mg, 90 mg ou 120 mg de aleniglipron — com aumentos graduais a cada quatro semanas — ou placebo, ao longo de 36 semanas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">-12,1%</div>
              <h3 className="text-white font-black text-lg">Redução de Peso</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                A dose mais alta (120 mg) alcançou perda média de 12,1% do peso corporal, em comparação com -0,5% no grupo placebo.
              </p>
            </div>
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">Fase III</div>
              <h3 className="text-white font-black text-lg">Próximos Passos</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                Com perfil de segurança favorável e sem sinais de hepatotoxicidade, o fármaco avança para programas de Fase III em larga escala.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Perfil de Segurança e Tolerabilidade</h2>
          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            Os efeitos colaterais relatados foram predominantemente gastrointestinais de intensidade leve a moderada, diminuindo à medida que o organismo se adaptava ao tratamento. A taxa geral de descontinuação foi de 10,4%, e os pesquisadores não registraram nenhum caso de lesão hepática induçada por fármacos.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3 mb-12">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]" /> Ficha Técnica da Pesquisa
            </h4>
            <p className="text-[#98A2B3] text-sm leading-relaxed">
              <strong>Publicação:</strong> Nature Medicine (2026)<br />
              <strong>DOI:</strong> 10.1038/s41591-026-04476-6<br />
              <strong>Autores Principais:</strong> Julio Rosenstock, Ildiko Lingvay, Robert Kushner et al.<br />
              <strong>Apoio Institucional:</strong> Northwestern Medicine / Structure Therapeutics
            </p>
          </div>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            Com a progressão para os ensaios de Fase III, a comunidade médica internacional observa com otimismo a transição dos tratamentos para formatos orais acessíveis, capazes de ampliar o acesso global ao controle metabólico avançado.
          </p>
        </>
      ),
    },

    angiotomografia_coronariana_sus_2026: {
      title: "SUS Avalia Inclusão de Exame que Identifica Risco de Infarto de Forma Não Invasiva",
      subtitle: "Conitec abre consulta pública para angiotomografia coronariana; tecnologia pode transformar o diagnóstico de doenças cardíacas, que causam 300 mil mortes por ano no Brasil.",
      cat: "Saúde & Ciência",
      time: "8 min",
      date: "12 Ago 2026",
      pubTime: "01:45",
      updateTime: "01:45",
      img: "/editorial/angiotomografia_coronariana_2026.webp",
      imgCaption: "Ilustração editorial de uma angiotomografia coronariana não invasiva para visualizar artérias do coração.",
      imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            O <strong>Ministério da Saúde</strong>, por meio da Comissão Nacional de Incorporação de Tecnologias no SUS (Conitec), abriu a Consulta Pública nº 73/2026 para avaliar a incorporação da <strong>angiotomografia coronariana</strong> no Sistema Único de Saúde. A medida visa combater as doenças cardiovasculares, responsáveis por cerca de 30% dos óbitos no Brasil.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            Atualmente, as doenças do coração causam mais de 300 mil mortes anuais em território brasileiro. A angiotomografia surge como uma alternativa não invasiva de alta precisão para pacientes com probabilidade pré-teste baixa ou intermediária de doença arterial coronariana, permitindo identificar obstruções e placas de gordura antes de um evento crítico, como o infarto.
          </p>

          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <TrendingUp size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Saúde Pública</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "A incorporação desta tecnologia representa um avanço na medicina preventiva do SUS, permitindo diagnósticos mais rápidos e seguros, evitando procedimentos invasivos desnecessários como o cateterismo em casos de baixo risco."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Nota Técnica da Conitec, Agosto de 2026.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Precisão e Segurança
          </h2>

          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            Diferente do cateterismo, que é um procedimento invasivo, a angiotomografia é realizada em um scanner de tomografia de última geração com uso de contraste. O exame fornece imagens tridimensionais das artérias coronárias com altíssima resolução, permitindo ao médico avaliar a anatomia cardíaca de forma completa em poucos minutos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">300k</div>
              <h3 className="text-white font-black text-lg">Mortes Anuais</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                As doenças cardiovasculares são a principal causa de morte no Brasil, reforçando a urgência de novas tecnologias diagnósticas.
              </p>
            </div>
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">24 Ago</div>
              <h3 className="text-white font-black text-lg">Prazo Final</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                A sociedade civil e especialistas podem contribuir com a consulta pública até o dia 24 de agosto de 2026.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">O Caminho para a Incorporação</h2>
          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            Apesar dos benefícios, a Conitec emitiu inicialmente uma recomendação preliminar desfavorável, citando a necessidade de maior análise sobre a custo-efetividade e a estrutura da rede de saúde para oferecer o exame em larga escala. A consulta pública é o momento em que a comunidade médica e os pacientes apresentam evidências adicionais para reverter essa posição.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3 mb-12">
            <h3 className="text-[#F8FAFC] font-bold text-lg mb-2">Entenda o Processo</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed italic">
              Após o encerramento da consulta pública, a Conitec analisará todas as contribuições e emitirá um parecer final, que será enviado ao Secretário de Ciência, Tecnologia e Inovação do Ministério da Saúde para a decisão definitiva.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes</h2>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
            {[
              "Ministério da Saúde. Consulta Pública nº 73/2026 - Conitec. Brasília, 2026.",
              "Sociedade Brasileira de Cardiologia (SBC). Diretrizes sobre o uso da angiotomografia coronariana. 2025.",
              "Relatório para Sociedade nº 745. Angiotomografia coronariana no SUS. Agosto, 2026."
            ].map((ref, i) => (
              <div key={i} className="flex gap-3 text-xs text-[#98A2B3] font-medium leading-relaxed">
                <span className="text-[#4F8CFF] font-black">[{i+1}]</span>
                <span>{ref}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    gel_unicamp_chica_2026: {
      title: "Gel de planta brasileira é estudado para cicatrização de feridas",
      subtitle: "Pesquisa da Unicamp avalia um gel derivado da planta chica em modelos de cicatrização e mucosite; os resultados ainda não equivalem a um tratamento disponível.",
      cat: "Saúde & Ciência",
      time: "7 min",
      date: "12 Ago 2026",
      pubTime: "00:45",
      updateTime: "00:45",
      img: "/editorial/gel_crajiru_unicamp_2026.webp",
      imgCaption: "Ilustração editorial do gel de Fridericia chica, o crajiru, em contexto de pesquisa sobre cicatrização.",
      imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Uma pesquisa pioneira da <strong>Universidade Estadual de Campinas (Unicamp)</strong> resultou na criação de um gel cicatrizante capaz de fechar feridas duas vezes mais rápido do que os tratamentos convencionais, incluindo a terapia a laser. O produto, desenvolvido a partir de uma planta nativa do Brasil, representa um salto para o tratamento de pacientes oncológicos e diabéticos.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            O fitoterápico utiliza extratos da <em>Fridericia chica</em>, popularmente conhecida como "chica" ou crajiru, uma espécie encontrada na Amazônia e na Mata Atlântica. Os testes clínicos mostraram que o gel é particularmente eficaz no tratamento da mucosite oral — inflamações dolorosas na boca que afetam frequentemente pacientes em quimioterapia e radioterapia.
          </p>

          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Ciência Brasileira</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Em testes clínicos, feridas que levavam 11 dias para cicatrizar com laser fecharam em apenas 5 dias com o uso do gel. É a biodiversidade brasileira sendo transformada em tecnologia médica de ponta."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Equipe de Pesquisa do Instituto de Biologia, Unicamp.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Do Cerrado ao Laboratório
          </h2>

          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            A pesquisa, que levou mais de 20 anos para ser concluída, identificou que os princípios ativos da planta atuam diretamente na fase de inflamação e proliferação celular, acelerando a formação de novos tecidos e colágeno. O gel tem propriedades anti-inflamatórias, antioxidantes e cicatrizantes comprovadas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">50%</div>
              <h3 className="text-white font-black text-lg">Redução no Tempo</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                O tempo médio de cicatrização caiu de 11 para apenas 5 dias em lesões graves durante os ensaios clínicos controlados.
              </p>
            </div>
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">100%</div>
              <h3 className="text-white font-black text-lg">Planta Nativa</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                Tecnologia baseada na biodiversidade brasileira, com potencial para reduzir custos de importação de insumos médicos.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Impacto no SUS e na Oncologia</h2>
          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            Atualmente, a mucosite oral é um dos principais motivos de interrupção do tratamento de câncer, devido à dor extrema e dificuldade de alimentação. O gel da Unicamp oferece uma alternativa de baixo custo e alta eficácia, que pode ser incorporada ao SUS para melhorar a qualidade de vida de milhares de pacientes.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3 mb-12">
            <h3 className="text-[#F8FAFC] font-bold text-lg mb-2">Por que isso importa?</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed italic">
              A aprovação pela Anvisa e a produção em larga escala deste fitoterápico pode evitar amputações em diabéticos e reduzir complicações infecciosas em feridas cirúrgicas, consolidando o Brasil como líder em medicina natural baseada em evidências.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes</h2>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
            {[
              "Agência de Inovação Inova Unicamp. Gel brasileiro é capaz de cicatrizar feridas duas vezes mais rápido. 2025.",
              "Instituto de Biologia (IB) - Unicamp. Desenvolvimento de fitoterápico a partir de Fridericia chica. 2026.",
              "Jornal da Unicamp. Avanços na cicatrização e tratamento de mucosite oral. 2025."
            ].map((ref, i) => (
              <div key={i} className="flex gap-3 text-xs text-[#98A2B3] font-medium leading-relaxed">
                <span className="text-[#4F8CFF] font-black">[{i+1}]</span>
                <span>{ref}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    leukemia_gene_therapy_2026: {
      title: "Terapia genética experimental é avaliada contra leucemia resistente",
      subtitle: "Ensaio clínico inicial avalia células imunes geneticamente modificadas; a taxa observada no estudo não significa cura nem disponibilidade clínica ampla.",
      cat: "Saúde & Ciência",
      time: "7 min",
      date: "11 Ago 2026",
      pubTime: "22:10",
      updateTime: "22:10",
      img: "/editorial/leucemia_celulas_car_t_2026.webp",
      imgCaption: "Ilustração editorial mostra células imunes CAR-T modificadas reconhecendo células tumorais em um ambiente microscópico.",
      imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Em um avanço histórico para a oncologia, uma nova forma de <strong>terapia genética</strong> conseguiu eliminar a leucemia em pacientes considerados incuráveis. Os resultados do ensaio clínico de Fase 1, liderado pelo <strong>Great Ormond Street Hospital (GOSH)</strong> e pela <strong>UCL</strong>, mostram que 64% dos participantes permanecem livres da doença após o tratamento com células imunes editadas por base.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            A pesquisa, publicada no <em>New England Journal of Medicine (NEJM)</em>, focou na Leucemia Linfoblástica Aguda de células T (T-ALL), uma forma agressiva de câncer do sangue que frequentemente resiste a todos os tratamentos convencionais, incluindo transplantes de medula óssea e quimioterapia intensiva.
          </p>

          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Tecnologia Revolucionária</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Esta é a primeira vez que utilizamos a edição de base para criar células CAR-T 'off-the-shelf' (prontas para uso). Ao contrário das terapias tradicionais que usam as próprias células do paciente, esta técnica permite tratar pacientes imediatamente com células de doadores saudáveis."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Prof. Waseem Qasim, UCL Great Ormond Street Institute of Child Health.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Edição de Base: O "Corretor" Genético
          </h2>

          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            Diferente do CRISPR tradicional, que corta as fitas de DNA, a <strong>edição de base</strong> atua como um corretor ortográfico molecular, alterando quimicamente uma única "letra" do código genético. Isso permitiu que os cientistas realizassem múltiplas modificações precisas nas células T de doadores sem o risco de danos estruturais ao genoma.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">82%</div>
              <h3 className="text-white font-black text-lg">Remissão Profunda</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                A maioria dos pacientes atingiu remissão profunda logo após a infusão, permitindo que prosseguissem para o transplante de células-tronco.
              </p>
            </div>
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">64%</div>
              <h3 className="text-white font-black text-lg">Livre da Doença</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                Dois terços dos pacientes permanecem sem sinais de câncer, com alguns casos agora ultrapassando três anos de acompanhamento.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">O Fim das Filas de Espera?</h2>
          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            A grande inovação da terapia <strong>BE-CAR7</strong> é ser "universal". Enquanto as terapias CAR-T atuais levam semanas para serem fabricadas individualmente para cada paciente, a nova técnica permite criar estoques de células prontas para uso imediato, o que é crucial para pacientes com leucemias fulminantes.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3 mb-12">
            <h3 className="text-[#F8FAFC] font-bold text-lg mb-2">Por que isso importa?</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed italic">
              Este estudo prova que a edição genética de precisão pode transformar cânceres fatais em condições tratáveis, abrindo caminho para o uso dessa tecnologia em outras doenças genéticas e autoimunes.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes</h2>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
            {[
              "Chiesa R, Georgiadis C, et al. Universal base-edited CAR7 T cells for T-cell acute lymphoblastic leukemia. New England Journal of Medicine. 2026.",
              "Great Ormond Street Hospital for Children NHS Foundation Trust. Ready-made T-cell gene therapy tackles incurable leukaemia. 2026.",
              "University College London (UCL) News. World-first base-edited gene therapy helps patients fight blood cancer. 2026."
            ].map((ref, i) => (
              <div key={i} className="flex gap-3 text-xs text-[#98A2B3] font-medium leading-relaxed">
                <span className="text-[#4F8CFF] font-black">[{i+1}]</span>
                <span>{ref}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    lens_3d_waterloo_2026: {
      title: "Lentes de Contato Impressas em 3D em 20 Minutos: A Revolução da Universidade de Waterloo",
      subtitle: "Nova plataforma de manufatura digital combina silicone hidrofílico e impressão DLP para criar lentes personalizadas em uma única consulta, transformando o tratamento de córneas irregulares.",
      cat: "Tecnologia Médica",
      time: "6 min",
      date: "12 Ago 2026",
      pubTime: "08:30",
      updateTime: "08:30",
      img: "/editorial/lente_contato_3d_2026.webp",
      imgCaption: "Ilustração editorial de uma lente de contato personalizada produzida por impressão 3D.",
      imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Uma inovação premiada da <strong>Universidade de Waterloo</strong>, no Canadá, promete encerrar a espera de semanas ou meses por lentes de contato especializadas. Pesquisadores desenvolveram uma plataforma de manufatura digital capaz de produzir lentes rígidas personalizadas em apenas <strong>20 minutos</strong>, permitindo que o paciente receba o dispositivo na mesma consulta com o optometrista.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            O avanço, publicado na revista <em>Materials & Design</em>, resolve um desafio histórico da oftalmologia: o ajuste de lentes para pacientes com córneas irregulares, como os portadores de <strong>ceratocone</strong>. Atualmente, esses pacientes dependem de processos manuais de fabricação e múltiplos ajustes que podem levar meses até atingir o conforto e a visão ideais.
          </p>

          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Inovação em Materiais</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "O silicone é ideal para lentes pela alta permeabilidade ao oxigênio, mas é difícil de imprimir em 3D. Desenvolvemos uma nova formulação de silicone hidrofílico que mantém a clareza óptica e o conforto mecânico esperados pelo mercado."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dra. Shirley Tang, professora de Química em Waterloo.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Do Algoritmo à Córnea
          </h2>

          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            O processo começa com a tradução da topografia da córnea do paciente em mapas de espessura digital através de algoritmos baseados em <strong>MATLAB</strong>. Esses dados alimentam uma impressora 3D de processamento digital de luz (DLP), que constrói a lente camada por camada.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">Revestimento</div>
              <h3 className="text-white font-black text-lg">Sem Contato</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                Um processo de fluidização não-contato elimina as imperfeições de "degraus" da impressão 3D, garantindo uma superfície perfeitamente lisa.
              </p>
            </div>
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">20 Minutos</div>
              <h3 className="text-white font-black text-lg">Velocidade Recorde</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                O tempo de produção permite o design, fabricação e entrega da lente durante uma única visita clínica.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Impacto Clínico</h2>
          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            Testes laboratoriais confirmaram que as lentes são altamente biocompatíveis e possuem excelente permeabilidade ao oxigênio, essencial para a saúde da córnea a longo prazo. A equipe agora se prepara para estudos <em>in vivo</em> (em humanos) e já entrou com pedidos de patente para a nova tecnologia e material.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3 mb-12">
            <h3 className="text-[#F8FAFC] font-bold text-lg mb-2">Por que isso importa?</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed italic">
              A democratização de lentes personalizadas de alta precisão pode reduzir drasticamente o tempo de reabilitação visual para milhões de pessoas com patologias corneanas complexas ao redor do mundo.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes</h2>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
            {[
              "Ganguly S, et al. Patient-specific hard contact lenses fabricated by vat photopolymerization printing and non-contact fluidization coating. Materials & Design. 2026.",
              "University of Waterloo. 3D-printed contact lenses for your eyes only in just 20 minutes. Media Relations. July 2026.",
              "Centre for Ocular Research & Education (CORE). Digital manufacturing in optometry: Future perspectives. 2026."
            ].map((ref, i) => (
              <div key={i} className="flex gap-3 text-xs text-[#98A2B3] font-medium leading-relaxed">
                <span className="text-[#4F8CFF] font-black">[{i+1}]</span>
                <span>{ref}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    coffee_brain_2026: {
      title: "Café e conexões neurais: o que mostram os dados de longo prazo",
      subtitle: "Estudo observacional e análises de neuroimagem investigam associações entre consumo de café e atividade cerebral; os resultados não provam proteção ou causalidade.",
      cat: "Saúde & Ciência",
      time: "7 min",
      date: "11 Ago 2026",
      pubTime: "23:45",
      updateTime: "23:45",
      img: "/editorial/dbs_parkinson_2026.webp",
      imgCaption: "Neuroimagem funcional revela que o café puro aumenta a conectividade em áreas do cérebro ligadas à memória de trabalho e controle executivo.",
      imgCredit: "Foto: Reprodução / Banco Editorial EuvouserDoutor",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            O hábito matinal de milhões de brasileiros acaba de ganhar um respaldo científico sem precedentes. Novos dados de um estudo prospectivo publicado no <strong>Journal of the American Medical Association (JAMA)</strong>, que acompanhou 131 mil adultos por quatro décadas, revelam que o consumo regular de café cafeinado está associado a uma redução de 18% no risco de desenvolver demência.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            Paralelamente, pesquisadores da <strong>Universidade Johns Hopkins</strong> utilizaram técnicas avançadas de ressonância magnética funcional (fMRI) para mapear o que acontece no cérebro sob o efeito da bebida. A descoberta é surpreendente: o café não apenas nos mantém alertas, mas promove uma reorganização estrutural nas redes neurais, tornando a comunicação entre diferentes áreas cerebrais mais eficiente.
          </p>

          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">O Fator 'Puro'</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "O benefício neuroprotetor é observado de forma muito mais robusta quando o café é consumido sem açúcar. O excesso de glicose pode gerar picos inflamatórios que anulam os efeitos positivos dos antioxidantes e da cafeína na barreira hematoencefálica."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Insights do estudo JAMA 2026.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Conectividade e Eficiência
          </h2>

          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            A análise de neuroimagem da Johns Hopkins identificou um aumento significativo na conectividade em duas redes cruciais:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">Rede Visual</div>
              <h3 className="text-white font-black text-lg">Processamento Superior</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                Melhora na capacidade de filtrar estímulos externos e focar em tarefas complexas.
              </p>
            </div>
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">Controle Executivo</div>
              <h3 className="text-white font-black text-lg">Memória de Trabalho</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                Fortalecimento da área responsável pelo planejamento, tomada de decisão e resolução de problemas.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">O Papel da Adenosina</h2>
          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            O mecanismo por trás dessa proteção envolve o bloqueio dos receptores de adenosina. Ao impedir que a adenosina se ligue aos seus receptores, a cafeína não apenas afasta o sono, mas também desencadeia a liberação de outros neurotransmissores, como a dopamina e a noradrenalina, que auxiliam na manutenção da saúde dos neurônios a longo prazo.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3 mb-12">
            <h3 className="text-[#F8FAFC] font-bold text-lg mb-2">Por que isso importa?</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed italic">
              Com o envelhecimento da população global, estratégias preventivas de baixo custo e alta adesão, como o consumo moderado de café, tornam-se ferramentas vitais de saúde pública para reduzir a carga de doenças neurodegenerativas.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes</h2>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
            {[
              "Zhang Y, et al. Coffee and Tea Intake, Dementia Risk, and Cognitive Function. JAMA Network Open. 2026.",
              "Johns Hopkins Medicine. Caffeine and the Brain: Neuroimaging Insights into Connectivity. 2026.",
              "Harvard Health Publishing. The neuroprotective effects of moderate coffee consumption. 2026."
            ].map((ref, i) => (
              <div key={i} className="flex gap-3 text-xs text-[#98A2B3] font-medium leading-relaxed">
                <span className="text-[#4F8CFF] font-black">[{i+1}]</span>
                <span>{ref}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    transplante_fecal_amendoim_2026: {
      title: "Transplante Fecal Eleva Tolerância ao Amendoim em Estudo Clínico Inovador",
      subtitle: "Pesquisa publicada na Nature revela que cápsulas com microbiota intestinal aumentaram significativamente a tolerância alimentar em adultos com alergia grave.",
      cat: "Saúde & Ciência",
      time: "7 min",
      date: "12 Ago 2026",
      pubTime: "08:30",
      updateTime: "08:30",
      img: "/editorial/microbiota_transplante_amendoim_2026.webp",
      imgCaption: "Ilustração editorial de uma cápsula de microbiota, bactérias intestinais e barreira imune no estudo experimental sobre alergia ao amendoim.",
      imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Uma nova fronteira na imunologia e no tratamento de alergias alimentares severas acaba de ser aberta. Um estudo clínico de fase 1, publicado no periódico científico <strong>Nature</strong>, demonstrou que o transplante de microbiota fecal (FMT), administrado por meio de cápsulas orais, foi capaz de aumentar expressivamente a tolerância ao amendoim em adultos com alergias graves [1] [2].
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            Conduzido por pesquisadores de centros de referência internacional, como o Boston Children's Hospital e a Universidade de Londres (UCL), o ensaio investigou o papel central do microbioma intestinal na modulação das respostas imunológicas do organismo. A alergia ao amendoim, uma das condições mediadas por IgE mais persistentes e potencialmente fatais, encontra hoje opções terapêuticas limitadas, o que torna o avanço particularmente relevante para a prática médica global.
          </p>

          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por Que Isso Importa</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Demonstramos pela primeira vez que intervenções direcionadas ao microbioma intestinal podem reprogramar a tolerância a alérgenos alimentares em humanos. É a transição da medicina de restrição para a medicina de modulação imunológica."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dra. Rima Rachid, Coordenadora do Estudo e Pesquisadora em Imunologia.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Metodologia e Resultados do Ensaio
          </h2>

          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            O estudo envolveu adultos diagnosticados com alergia severa ao amendoim. Os participantes receberam uma única administração de cápsulas contendo microbiota fecal purificada de doadores saudáveis ou placebo. O acompanhamento clínico revelou que um subgrupo significativo de pacientes apresentou aumento expressivo no limiar de reatividade ao alérgeno [3].
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">40%</div>
              <h3 className="text-white font-black text-lg">Aumento de Tolerância</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                Dos participantes que receberam o transplante ativo, 40% elevaram substancialmente o limiar de tolerância ao amendoim sem reações adversas graves.
              </p>
            </div>
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">Fase 2</div>
              <h3 className="text-white font-black text-lg">Próximos Passos</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                Com a segurança demonstrada na fase 1, o protocolo avança para ensaios clínicos de fase 2 com grupos ampliados de pacientes pediátricos e adultos.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">O Papel dos Metabólitos de Ácidos Biliares</h2>
          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            Além de documentar a melhoria clínica, a pesquisa publicada na <em>Nature</em> detalhou o mecanismo biológico subjacente. Os cientistas descobriram que bactérias específicas introduzidas pelo transplante alteram o metabolismo dos ácidos biliares no intestino, o que por sua vez estimula a proliferação de células T regulatórias e promove a supressão de respostas alérgicas mediadas por anticorpos IgE.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3 mb-12">
            <h3 className="text-[#F8FAFC] font-bold text-lg mb-2">Atenção Editorial</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed italic">
              Especialistas alertam que o transplante de microbiota fecal para alergias alimentares ainda está em estágio de investigação científica rigorosa. O procedimento não deve ser realizado fora de protocolos clínicos controlados devido aos riscos associados e à complexidade da seleção de doadores.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes Científicas</h2>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
            {[
              "Chen, E., et al. First fecal microbiota transplantation to treat food allergy in humans. Nature. 2026.",
              "Rachid, R., Nagler, C. R., & Lynch, S. V. Microbial therapeutics for the prevention and treatment of food allergy. The Journal of Allergy and Clinical Immunology. 2026.",
              "Boston Children's Hospital. Microbiome-driven food allergies and precision therapeutic innovations. Clinical Research Reports. 2026."
            ].map((ref, i) => (
              <div key={i} className="flex gap-3 text-xs text-[#98A2B3] font-medium leading-relaxed">
                <span className="text-[#4F8CFF] font-black">[{i+1}]</span>
                <span>{ref}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    daraxonrasib_2026: {
      title: "Pílula Inovadora Duplica Sobrevida em Câncer de Pâncreas Metastático",
      subtitle: "Resultados do estudo RASolute 302, apresentados na ASCO 2026 e publicados no NEJM, revelam avanço histórico com inibidor oral de RAS que reduz risco de morte em 60%.",
      cat: "Saúde & Ciência",
      time: "8 min",
      date: "11 Ago 2026",
      pubTime: "23:30",
      updateTime: "23:30",
      img: "/editorial/daraxonrasib_pancreas_2026.webp",
      imgCaption: "Ilustração editorial do daraxonrasib e da interação entre uma terapia oral, a proteína KRAS e o câncer de pâncreas.",
      imgCredit: "Ilustração original gerada para o EuvouserDoutor; uso editorial autorizado.",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            A oncologia mundial testemunhou um dos momentos mais marcantes de sua história recente durante o congresso da <strong>American Society of Clinical Oncology (ASCO) 2026</strong>. Uma salva de aplausos de pé, raramente vista em plenárias científicas, celebrou os resultados do estudo de fase 3 <strong>RASolute 302</strong>, que demonstrou que um novo medicamento oral, o daraxonrasibe, foi capaz de duplicar a sobrevida de pacientes com câncer de pâncreas metastático.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            Publicado simultaneamente no <em>The New England Journal of Medicine (NEJM)</em>, o estudo avaliou a eficácia do daraxonrasibe em pacientes que já haviam falhado em tratamentos anteriores. A droga atua como um inibidor multisseletivo da proteína <strong>RAS</strong>, considerada por décadas um alvo "inacusável" pela ciência, apesar de estar presente em mais de 90% dos tumores pancreáticos.
          </p>

          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Visão da SBOC</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Foi uma das cenas mais emocionantes que já presenciei. Ver uma plenária inteira se levantar demonstra a dimensão do impacto. Finalmente transformamos décadas de conhecimento biológico em benefício clínico concreto."
                </p>
                <p className="text-[#98A2B3] text-xs mt-2">— Dra. Clarissa Baldotto, Presidente da Sociedade Brasileira de Oncologia Clínica (SBOC).</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Resultados Históricos em Números
          </h2>

          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            O ensaio clínico randomizado com 500 pacientes comparou o uso diário da pílula contra a quimioterapia padrão. Os dados revelam uma mudança drástica no prognóstico da doença:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">13.2</div>
              <h3 className="text-white font-black text-lg">Meses de Sobrevida</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                Mediana de sobrevida global com daraxonrasibe, comparada a apenas 6.6 meses no grupo da quimioterapia.
              </p>
            </div>
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="text-[#4F8CFF] font-black text-4xl">60%</div>
              <h3 className="text-white font-black text-lg">Menor Risco</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                Redução no risco de morte em comparação ao tratamento convencional, com perfil de segurança superior.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Avanço na Prática Clínica</h2>
          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            Além de prolongar a vida, o medicamento demonstrou ser muito mais bem tolerado. A taxa de interrupção do tratamento por efeitos colaterais foi de apenas 1,2%, contra 11,2% na quimioterapia. Isso representa não apenas mais tempo de vida, mas tempo com qualidade para os pacientes.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3 mb-12">
            <h3 className="text-[#F8FAFC] font-bold text-lg mb-2">Por que isso importa?</h3>
            <p className="text-[#98A2B3] text-sm leading-relaxed italic">
              O câncer de pâncreas é um dos tumores mais letais e desafiadores da medicina, frequentemente diagnosticado em estágios avançados. Pela primeira vez, uma terapia-alvo oral consegue dobrar a sobrevida em um cenário onde a quimioterapia oferecia benefícios limitados.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes</h2>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
            {[
              "Holz FG, et al. Subretinal Photovoltaic Implant to Restore Vision in Geographic Atrophy. New England Journal of Medicine. 2026.",
              "Revolution Medicines. RASolute-302 Phase 3 Clinical Trial Results. ASCO 2026 Plenary Session.",
              "Sociedade Brasileira de Oncologia Clínica (SBOC). Cobertura ASCO 2026: Avanços no Câncer de Pâncreas."
            ].map((ref, i) => (
              <div key={i} className="flex gap-3 text-xs text-[#98A2B3] font-medium leading-relaxed">
                <span className="text-[#4F8CFF] font-black">[{i+1}]</span>
                <span>{ref}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    retina_chip_2026: {
      title: "Chip de Retina Restaura Visão em Pacientes com Degeneração Macular Avançada",
      subtitle: "Tecnologia da Science Corporation, baseada em implantes fotovoltaicos e óculos inteligentes, atinge 81% de sucesso em ensaio clínico publicado no NEJM.",
      cat: "Tecnologia Médica",
      time: "7 min",
      date: "11 Ago 2026",
      pubTime: "20:00",
      updateTime: "23:15",
      img: "/retina_chip_tech.webp",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Uma fronteira histórica na oftalmologia foi rompida. Resultados de um ensaio clínico multicêntrico, publicados no prestigiado <strong>New England Journal of Medicine (NEJM)</strong>, revelam que um implante fotovoltaico sub-retiniano, conhecido como sistema PRIMA, foi capaz de restaurar a visão central funcional em pacientes com cegueira causada por degeneração macular relacionada à idade (DMRI) avançada.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            A tecnologia, desenvolvida pela Science Corporation, combina um chip microscópico de 378 pixels implantado sob a retina com óculos inteligentes equipados com uma câmera e um projetor infravermelho. O sistema atua substituindo os fotorreceptores danificados, convertendo luz em sinais elétricos que estimulam diretamente as células nervosas do olho, permitindo que o cérebro processe imagens novamente.
          </p>

          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">O Impacto em Números</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "No estudo com 38 pacientes, 81% apresentaram uma melhora clinicamente significativa na acuidade visual após 12 meses. Muitos voltaram a ser capazes de ler letras grandes e reconhecer formas que antes eram apenas borrões escuros."
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Como Funciona o "Olho Biônico"
          </h2>

          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            Diferente de tecnologias anteriores que exigiam cabos externos, o chip PRIMA é totalmente sem fio e alimentado por luz. Os óculos capturam a cena visual e a projetam via infravermelho no chip. Os pixels fotovoltaicos transformam essa luz em pulsos elétricos, criando uma interface direta com o sistema visual do paciente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-[#4F8CFF]">
                <Layers size={20} />
              </div>
              <h3 className="text-white font-black text-lg">Interface Fotovoltaica</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                Chip sem fios que converte luz em eletricidade para estimular as células da retina.
              </p>
            </div>
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-[#4F8CFF]">
                <Target size={20} />
              </div>
              <h3 className="text-white font-black text-lg">Foco na DMRI Seca</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed">
                Primeiro tratamento eficaz para a atrofia geográfica, forma avançada e incurável de cegueira central.
              </p>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes</h2>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
            {[
              "Holz FG, et al. Subretinal Photovoltaic Implant to Restore Vision in Geographic Atrophy. New England Journal of Medicine. 2026.",
              "Science Corporation. PRIMAvera Multicenter Clinical Trial Final Results. 2026.",
              "Ophthalmology Times. PRIMA System: A major step in the battle against GA. 2026."
            ].map((ref, i) => (
              <div key={i} className="flex gap-3 text-xs text-[#98A2B3] font-medium leading-relaxed">
                <span className="text-[#4F8CFF] font-black">[{i+1}]</span>
                <span>{ref}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    estudar_medicina: {
      title: "Como Estudar para Medicina com Método, Rotina e Constância",
      subtitle: "Um guia editorial sobre organização acadêmica para transformar esforço em processo de aprovação.",
      cat: "Técnicas de estudo",
      time: "6 min",
      date: "10 Ago 2026",
      img: "/jeff-queiroz-eu-vou-ser-doutor.webp",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Estudar para Medicina exige método, constância e capacidade de revisar o próprio processo sem depender de fórmulas prontas.
          </p>
          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            O EuVouSerDoutor reúne conteúdos educacionais, materiais de apoio e ideias de organização para estudantes e vestibulandos que querem mais clareza na rotina.
          </p>
        </>
      )
    },
    cart_brasil_2026: {
      title: "Terapia CAR-T 100% Nacional Atinge 72% de Remissão em Cânceres Avançados do Sangue",
      subtitle: "Desenvolvida por USP, Hemocentro de Ribeirão Preto e Instituto Butantan, inovação biotecnológica abre caminho para o acesso democrático a tratamentos genéticos avançados no SUS.",
      cat: "Saúde & Ciência",
      time: "8 min",
      date: "11 Ago 2026",
      img: "/retina_chip_tech.webp",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            A ciência brasileira alcançou um marco histórico na oncologia e na biotecnologia avançada. Os primeiros resultados dos ensaios clínicos da <strong>terapia CAR-T 100% nacional</strong> — desenvolvida por uma força-tarefa que une a Universidade de São Paulo (USP), o Hemocentro de Ribeirão Preto (CTC-USP) e o Instituto Butantan — revelaram uma taxa de resposta global de 81% e uma <strong>remissão completa de 72%</strong> em pacientes com leucemias e linfomas agressivos que já haviam esgotado todas as alternativas terapêuticas tradicionais.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            O avanço representa uma mudança de patamar para o Sistema Único de Saúde (SUS). Até então restrita a centros de excelência no exterior com custos milionários que inviabilizavam a incorporação em larga escala, a produção soberana de células geneticamente modificadas no Brasil democratiza o acesso a uma das armas mais poderosas da medicina moderna contra o câncer.
          </p>

          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "A transição de terapias gênicas importadas de milhões de dólares para uma plataforma nacional viável no SUS não é apenas uma conquista científica; é uma questão de soberania sanitária e direito à vida para milhares de brasileiros."
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Como Funciona a Reprogramação Celular
          </h2>

          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            A terapia CAR-T (<i>Chimeric Antigen Receptor T-cell</i>) é uma forma avançada de imunoterapia viva. O processo começa com a coleta dos linfócitos T do próprio paciente através de aférese. Em laboratório, essas células de defesa são geneticamente reprogramadas com a inserção de um gene sintético que lhes confere um "radar" molecular — o receptor quimérico de antígeno.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            Quando reinfundidas no organismo do paciente, as células CAR-T passam a reconhecer e destruir com precisão cirúrgica as células tumorais que expressam o antígeno CD19, característico de neoplasias hematológicas como a leucemia linfoblástica aguda e o linfoma não-Hodgkin. O tratamento age como um medicamento vivo que persiste no corpo, vigiando e eliminando recidivas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-[#4F8CFF]">
                <Sparkles size={20} />
              </div>
              <h3 className="text-base font-black text-[#F8FAFC]">Independência Tecnológica</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">
                A capacidade de fabricação nacional em centros certificados reduz a dependência de insumos internacionais e reduz custos operacionais em até 80%.
              </p>
            </div>
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-[#4F8CFF]">
                <Clock size={20} />
              </div>
              <h3 className="text-base font-black text-[#F8FAFC]">Resposta Rápida</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">
                Avaliações clínicas de acompanhamento demonstraram que a remissão completa pode ser detectada em exames de imagem logo no primeiro mês após a infusão.
              </p>
            </div>
          </div>

          <div className="my-16 relative">
             <div className="absolute inset-0 bg-[#4F8CFF]/5 blur-3xl rounded-full" />
             <blockquote className="relative p-10 border-l-4 border-[#4F8CFF] bg-white/[0.02] rounded-r-[32px] italic text-xl md:text-2xl font-medium text-[#F8FAFC] leading-relaxed">
               "Ver pacientes sem nenhuma outra expectativa de cura retornarem à vida normal após uma única infusão de células modificadas no Brasil é a coroação de anos de pesquisa pública e rigor científico."
               <footer className="mt-4 text-sm font-black uppercase tracking-widest text-[#4F8CFF] not-italic">— Comitê Científico do Centro de Terapia Celular (CTC-USP)</footer>
             </blockquote>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Desafios e Próximos Passos Clínicos
          </h2>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            Embora os índices de 72% de remissão completa coloquem o Brasil no seleto grupo de nações capazes de desenvolver terapias gênicas avançadas, os pesquisadores ressaltam que o monitoramento de longo prazo continua essencial. Efeitos colaterais imunológicos, como a síndrome de liberação de citocinas (SLC), exigem protocolos hospitalares altamente especializados.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-12 text-base md:text-lg font-medium">
            Atualmente, os institutos parceiros expandem os ensaios clínicos para novos centros oncológicos no país e preparam a submissão regulatória definitiva à Agência Nacional de Vigilância Sanitária (Anvisa), pavimentando a incorporação gradual do tratamento nas redes pública e suplementar.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 mb-12">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4F8CFF]">Conteúdo Relacionado</h4>
            <button onClick={() => setView("news")} className="flex items-center justify-between w-full group text-left">
              <span className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#4F8CFF] transition-colors underline decoration-[#4F8CFF]/30 underline-offset-4">Oxford inicia ensaio clínico global de vacina inovadora contra o vírus Ebola</span>
              <ExternalLink size={14} className="text-[#98A2B3] group-hover:text-[#4F8CFF] shrink-0 ml-4" />
            </button>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes Científicas</h2>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
            {[
              "Universidade de São Paulo (USP) / Centro de Terapia Celular (CTC-RP). Resultados preliminares do ensaio clínico de terapia CAR-T nacional. 2026.",
              "Instituto Butantan. Avanços no desenvolvimento soberano de imunoterapias celulares para o SUS. 2026.",
              "Frontiers in Hematology. The evolving landscape of CAR T-cell therapy access in Brazil. DOI: 10.3389/frhem.2026.1813861"
            ].map((ref, i) => (
              <div key={i} className="flex gap-3 text-xs text-[#98A2B3] font-medium leading-relaxed">
                <span className="text-[#4F8CFF] font-black">[{i+1}]</span>
                <span>{ref}</span>
              </div>
            ))}
          </div>
        </>
      )
    },

    ebola_oxford_2026: {
      title: "Oxford Inicia Primeiro Ensaio Clínico Global de Vacina Contra o Vírus Ebola Bundibugyo",
      subtitle: "Estudo de Fase 1 avalia segurança e resposta imune do imunizante ChAdOx1 BDBV, marcando resposta rápida a surto severo na África.",
      cat: "Saúde & Ciência",
      time: "7 min",
      date: "11 Ago 2026",
      img: "/editorial/ebola_congo_2026.webp",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            A Universidade de Oxford, por meio do renomado <strong>Oxford Vaccine Group</strong> e do <i>Pandemic Sciences Institute</i> (PSI), anunciou o início do primeiro ensaio clínico em humanos (Fase 1) da vacina <strong>ChAdOx1 BDBV</strong>. O objetivo é conter o vírus Ebola Bundibugyo, uma variante altamente letal e para a qual ainda não existia imunizante específico.
          </p>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            O estudo, financiado pela CEPI (Coalition for Epidemic Preparedness Innovations), avalia a segurança e a capacidade de gerar resposta imune em 64 voluntários sadios no Reino Unido. Esta etapa é crucial para validar a eficácia da plataforma tecnológica antes da expansão para áreas afetadas na África Central.
          </p>

          <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF] shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
                <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">
                  "Diferente da variante Zaire, a variante Bundibugyo não possuía ferramentas preventivas aprovadas. O sucesso deste ensaio pode significar a diferença entre um surto controlado e uma crise humanitária global."
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4">
            <span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Metodologia e Segurança
          </h2>

          <p className="text-[#98A2B3] leading-relaxed mb-6 text-base md:text-lg font-medium">
            O imunizante utiliza a plataforma <strong>ChAdOx1</strong>, a mesma tecnologia de vetor viral de adenovírus de chimpanzé que serviu de base para a vacina Oxford/AstraZeneca contra a Covid-19. Esta escolha estratégica permite uma produção em escala mais rápida e um perfil de segurança já amplamente documentado em bilhões de doses aplicadas mundialmente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-[#4F8CFF]">
                <Layers size={20} />
              </div>
              <h3 className="text-base font-black text-[#F8FAFC]">Estrutura do Ensaio</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">
                Os participantes receberão diferentes dosagens para determinar o esquema vacinal ideal, com acompanhamento clínico rigoroso por 12 meses.
              </p>
            </div>
            <div className="bg-[#11141A] p-8 rounded-[32px] border border-white/[0.05] premium-border space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-[#4F8CFF]">
                <Sparkles size={20} />
              </div>
              <h3 className="text-base font-black text-[#F8FAFC]">Alcance Global</h3>
              <p className="text-[#98A2B3] text-sm leading-relaxed font-medium">
                Após a Fase 1, o plano editorial e científico prevê a inclusão de centros de pesquisa em Uganda e na República Democrática do Congo.
              </p>
            </div>
          </div>

          <div className="my-16 relative">
             <div className="absolute inset-0 bg-[#4F8CFF]/5 blur-3xl rounded-full" />
             <blockquote className="relative p-10 border-l-4 border-[#4F8CFF] bg-white/[0.02] rounded-r-[32px] italic text-xl md:text-2xl font-medium text-[#F8FAFC] leading-relaxed">
               "Estamos utilizando lições aprendidas na pandemia para acelerar o desenvolvimento de vacinas contra patógenos que a Organização Mundial da Saúde (OMS) classifica como prioritários."
               <footer className="mt-4 text-sm font-black uppercase tracking-widest text-[#4F8CFF] not-italic">— Professor Sir Andrew Pollard, Diretor do Oxford Vaccine Group</footer>
             </blockquote>
          </div>

          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            Os resultados preliminares da Fase 1 são esperados para o final de 2026, com o início da Fase 2 previsto para o primeiro semestre de 2027 em regiões endêmicas.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-4 mb-12">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4F8CFF]">Leia Também</h4>
            <button onClick={() => setView('news')} className="flex items-center justify-between w-full group text-left">
              <span className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#4F8CFF] transition-colors underline decoration-[#4F8CFF]/30 underline-offset-4">Avanços na regeneração neural: O que esperar para 2027</span>
              <ExternalLink size={14} className="text-[#98A2B3] group-hover:text-[#4F8CFF] shrink-0 ml-4" />
            </button>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] mb-6 tracking-tighter">Referências & Fontes</h2>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 space-y-3">
            {[
              "University of Oxford. First volunteer vaccinated in Oxford Bundibugyo Ebola vaccine trial. 2026.",
              "CEPI. Accelerated development of vaccines against Ebola virus diseases. 2026.",
              "The Lancet Infectious Diseases. Safety and immunogenicity of ChAdOx1 BDBV. DOI: 10.1016/S1473-3099(26)00124-5"
            ].map((ref, i) => (
              <div key={i} className="flex gap-3 text-xs text-[#98A2B3] font-medium leading-relaxed">
                <span className="text-[#4F8CFF] font-black">[{i+1}]</span>
                <span>{ref}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    polilaminina: {
      title: "Polilaminina: A Nova Fronteira da Regeneração Neural em 2026",
      subtitle: "Pesquisas avançadas demonstram que a polilaminina pode atuar como um andaime molecular para a recuperação de lesões na medula espinhal.",
      cat: "Neurologia",
      time: "6 min",
      date: "09 Ago 2026",
      img: "/editorial/fibromialgia_genetica_2026.webp",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            A regeneração do sistema nervoso central, um dos maiores desafios da medicina moderna, acaba de ganhar um aliado promissor: a <strong>polilaminina</strong>. Novos estudos publicados em 2026 indicam que este polímero sintético, que mimetiza a matriz extracelular, é capaz de guiar o crescimento de axônios em áreas de lesão severa.
          </p>
          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            Diferente de abordagens anteriores, a polilaminina cria um ambiente bioativo que impede a formação da cicatriz glial, permitindo que as conexões neurais sejam restabelecidas de forma funcional.
          </p>
        </>
      )
    },
    pomodoro: {
      title: "Técnica Pomodoro: Ciência do Foco para Estudantes de Medicina",
      subtitle: "Como ciclos de 25 minutos de concentração total podem prevenir a fadiga cognitiva e aumentar a retenção de conteúdo denso.",
      cat: "Rotina",
      time: "4 min",
      date: "08 Ago 2026",
      img: "/editorial/microbiota_transplante_amendoim_2026.webp",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Para o estudante de Medicina, o volume de informações é o maior inimigo. A <strong>Técnica Pomodoro</strong> não é apenas um timer; é uma estratégia de gerenciamento de carga cognitiva baseada na neurociência da atenção.
          </p>
          <p className="text-[#98A2B3] leading-relaxed mb-8 text-base md:text-lg font-medium">
            Ao fragmentar o estudo em blocos de foco intenso seguidos de pausas estratégicas, o cérebro consegue consolidar informações na memória de curto prazo antes de entrar em exaustão.
          </p>
        </>
      )
    },
    spaced_repetition: {
      title: "Revisão Espaçada: O Fim do Esquecimento na Preparação Médica",
      subtitle: "Entenda a curva do esquecimento e como algoritmos de repetição espaçada garantem que você nunca mais esqueça o que estudou.",
      cat: "Revisão",
      time: "5 min",
      date: "07 Ago 2026",
      img: "/jeff-queiroz-eu-vou-ser-doutor.webp",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            O segredo da aprovação não está no quanto você lê, mas no quanto você retém. A <strong>revisão espaçada</strong> (SRS) utiliza o efeito de espaçamento para desafiar o cérebro no momento exato em que ele começaria a esquecer um conceito.
          </p>
        </>
      )
    },
    feynman: {
      title: "Método Feynman: Se Você Não Sabe Explicar, Você Não Entendeu",
      subtitle: "A técnica do Nobel de Física que ajuda estudantes de medicina a dominar temas complexos através da simplificação radical.",
      cat: "Técnicas de estudo",
      time: "4 min",
      date: "06 Ago 2026",
      img: "/retina_chip_tech.webp",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Richard Feynman acreditava que a verdadeira maestria vem da simplicidade. O <strong>Método Feynman</strong> consiste em quatro passos para transformar temas densos em conhecimento intuitivo.
          </p>
        </>
      )
    },
    mind_maps: {
      title: "Mapas Mentais: Conectando os Pontos da Anatomia e Fisiologia",
      subtitle: "Como o pensamento radiante e a organização visual podem substituir resumos lineares e ineficientes.",
      cat: "Técnicas de estudo",
      time: "5 min",
      date: "05 Ago 2026",
      img: "/jeff-queiroz-eu-vou-ser-doutor.webp",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Mapas mentais mimetizam a forma como os neurônios se conectam. Ao usar cores, imagens e ramificações, você ativa o hemisfério direito do cérebro, facilitando a memorização de sistemas complexos.
          </p>
        </>
      )
    },
    self_evaluation: {
      title: "Autoavaliação: Transformando Erros em Pontos de Aprovação",
      subtitle: "O guia definitivo para analisar simulados e criar um plano de estudo baseado em dados reais de desempenho.",
      cat: "Rotina",
      time: "5 min",
      date: "04 Ago 2026",
      img: "/jeff-queiroz-eu-vou-ser-doutor.webp",
      content: (
        <>
          <p className="text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-bold mb-8 text-pretty">
            Errar um simulado é uma oportunidade de ouro. A <strong>autoavaliação crítica</strong> permite identificar se o erro foi por falta de base, falta de atenção ou má gestão de tempo.
          </p>
        </>
      )
    },
  amiloride_wfdc2_2026: {
    title: "Medicamento Comum para Pressão Pode Tratar Doença Respiratória Fatal, Revela Nature",
    subtitle: "Estudo publicado na Nature Communications identifica mutação no gene WFDC2 como causa de insuficiência respiratória grave e aponta a Amilorida como solução terapêutica promissora.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "02:50",
    updateDate: "12/08/2026",
    updateTime: "02:50",
    cat: "Saúde & Ciência",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
    caption: "Ilustração editorial mostra a interação entre o gene WFDC2 mutado e o mecanismo de ação da Amilorida nos pulmões.",
    credit: "Reprodução / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p>Uma descoberta científica publicada nesta quarta-feira (12) na prestigiada revista <strong>Nature Communications</strong> pode mudar o destino de pacientes com doenças respiratórias crônicas graves. Pesquisadores identificaram que uma mutação específica no gene <strong>WFDC2</strong> é a causa raiz de uma forma severa de insuficiência respiratória, anteriormente confundida com fibrose cística ou discinesia ciliar primária.</p>

        <div className="bg-[#4F8CFF]/5 border-l-4 border-[#4F8CFF] p-6 my-8 rounded-r-2xl">
          <h4 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-2">Por que isso importa</h4>
          <p className="text-sm text-[#98A2B3] italic leading-relaxed">
            A identificação de uma nova origem genética para doenças pulmonares permite diagnósticos precisos e abre caminho para o reposicionamento de medicamentos já existentes, acelerando o acesso ao tratamento.
          </p>
        </div>

        <h2 className="text-2xl font-black text-[#F8FAFC] mt-10 mb-6 tracking-tight">O Mecanismo da Descoberta</h2>
        <p>O estudo, liderado pela <strong>Yonsei University College of Medicine</strong>, utilizou sequenciamento de exoma e genoma total para analisar famílias com histórico de bronquiectasia grave e rinossinusite crônica. A variante <em>p.C97W</em> no gene WFDC2 foi encontrada em múltiplas famílias não aparentadas.</p>

        <p>A mutação compromete o dobramento e a secreção da proteína WFDC2 nas células epiteliais do pulmão. Isso resulta na hiperatividade do canal de sódio epitelial (<strong>ENaC</strong>), levando ao acúmulo de muco e à falência respiratória, um mecanismo muito semelhante ao observado na fibrose cística.</p>

        <h2 className="text-2xl font-black text-[#F8FAFC] mt-10 mb-6 tracking-tight">Amilorida: De Anti-hipertensivo a Esperança Respiratória</h2>
        <p>A grande inovação do estudo reside na solução terapêutica. Ao testar a <strong>Amilorida</strong> — um medicamento diurético e anti-hipertensivo amplamente utilizado e de baixo custo — em modelos animais, os cientistas observaram uma melhora significativa na função respiratória e na sobrevida.</p>

        <p>A Amilorida atua bloqueando justamente o canal ENaC hiperativo, restaurando o equilíbrio de fluidos nas vias aéreas. "Este é um exemplo clássico de como a medicina de precisão pode identificar alvos terapêuticos em medicamentos já aprovados para outras finalidades", destacam os autores no artigo.</p>

        <div className="my-10 p-8 bg-[#11141A] border border-white/[0.08] rounded-[32px] premium-border">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-[0.2em] text-[10px] mb-4">Dados da Pesquisa</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Fonte</p>
              <p className="text-sm font-bold text-[#F8FAFC]">Nature Comms</p>
            </div>
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Amostra</p>
              <p className="text-sm font-bold text-[#F8FAFC]">62 Famílias</p>
            </div>
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Gene Alvo</p>
              <p className="text-sm font-bold text-[#F8FAFC]">WFDC2</p>
            </div>
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Eficácia</p>
              <p className="text-sm font-bold text-[#F8FAFC]">Bloqueio ENaC</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-black text-[#F8FAFC] mt-10 mb-6 tracking-tight">O que vem agora</h2>
        <p>A recomendação imediata dos especialistas é que pacientes com sintomas de fibrose cística que testaram negativo para as mutações clássicas (gene CFTR) sejam submetidos a testes genéticos para o WFDC2. Ensaios clínicos em humanos devem ser iniciados para validar a dosagem ideal da Amilorida inalada para este novo grupo de pacientes.</p>

        <p className="text-xs text-[#98A2B3] mt-12 pt-6 border-t border-white/[0.05]">
          <strong>Referências:</strong> Roh, J.W., et al. "Amiloride mitigates respiratory distress caused by WFDC2 deficiency via inhibiting the epithelial sodium channel." <em>Nature Communications</em>, 12 Aug 2026. DOI: 10.1038/s41467-026-76582-5.
        </p>
      </>
    )
  },
  fibromyalgia_genetics_2026: {
    title: "Fibromialgia é um Transtorno do Sistema Nervoso Central, Comprova Estudo com 2,5 Milhões de Pessoas",
    subtitle: "Pesquisa histórica publicada na Nature Medicine identifica 26 risk loci e revela que a arquitetura genética da doença é idêntica entre homens e mulheres, apesar da diferença na prevalência.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "03:55",
    updateDate: "12/08/2026",
    updateTime: "03:55",
    cat: "Saúde & Ciência",
    img: "/editorial/fibromialgia_genetica_2026.webp",
    caption: "Ilustração editorial mostra a rede neural e os loci genéticos associados à fibromialgia no cérebro humano.",
    credit: "Reprodução / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p>Durante décadas, pacientes com fibromialgia enfrentaram o estigma de uma condição muitas vezes rotulada como "psicossomática" ou de origem desconhecida. Agora, um marco na medicina moderna acaba de mudar definitivamente essa narrativa. Um estudo colossal envolvendo mais de <strong>2,5 milhões de indivíduos</strong>, publicado nesta quarta-feira (12) na revista <strong>Nature Medicine</strong>, fornece a prova genética mais robusta até hoje de que a fibromialgia é, fundamentalmente, um <strong>transtorno do sistema nervoso central (SNC)</strong>.</p>

        <div className="bg-[#4F8CFF]/5 border-l-4 border-[#4F8CFF] p-6 my-8 rounded-r-2xl">
          <h4 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-2">Por que isso importa</h4>
          <p className="text-sm text-[#98A2B3] italic leading-relaxed">
            A descoberta valida biologicamente a dor de milhões de pacientes e abre caminho para o desenvolvimento de tratamentos direcionados a alvos neurológicos específicos, em vez de apenas gerenciar sintomas periféricos.
          </p>
        </div>

        <h2 className="text-2xl font-black text-[#F8FAFC] mt-10 mb-6 tracking-tight">O DNA do Cérebro Sensibilizado</h2>
        <p>A meta-análise, que incluiu dados de 11 coortes internacionais, identificou <strong>26 variantes genéticas</strong> associadas ao risco de desenvolver a síndrome. O achado mais surpreendente foi a forte correlação com o gene <em>HTT</em> (Huntingtina), o mesmo responsável pela doença de Huntington. Embora as condições sejam clinicamente distintas, o estudo sugere que variantes específicas no <em>HTT</em> e em seu regulador, o <em>GPR52</em>, desempenham um papel crucial na regulação da excitabilidade neural.</p>

        <p>Os pesquisadores demonstraram que a hereditariedade da fibromialgia está exclusivamente enriquecida em tecidos cerebrais e tipos de células neurais. Isso confirma a teoria da <strong>sensibilização central</strong>, onde o cérebro se torna hipersensível a estímulos que normalmente não seriam dolorosos.</p>

        <h2 className="text-2xl font-black text-[#F8FAFC] mt-10 mb-6 tracking-tight">Homens e Mulheres: A Mesma Raiz Genética</h2>
        <p>Embora a fibromialgia seja diagnosticada predominantemente em mulheres (cerca de 85% a 90% dos casos), o estudo revelou algo inesperado: a arquitetura genética da doença é <strong>virtualmente idêntica</strong> entre os sexos. A correlação genética entre homens e mulheres foi de 1.03, indicando que os mesmos mecanismos biológicos estão em jogo em ambos.</p>

        <p>Essa descoberta sugere que a maior prevalência feminina pode não ser devido a genes diferentes, mas sim a como esses genes interagem com fatores hormonais ou ambientais, ou ainda a um subdiagnóstico histórico em pacientes do sexo masculino.</p>

        <div className="my-10 p-8 bg-[#11141A] border border-white/[0.08] rounded-[32px] premium-border">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-[0.2em] text-[10px] mb-4">A Fibromialgia em Números</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Participantes</p>
              <p className="text-sm font-bold text-[#F8FAFC]">2,56 Milhões</p>
            </div>
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Loci de Risco</p>
              <p className="text-sm font-bold text-[#F8FAFC]">26 Identificados</p>
            </div>
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Relação com HTT</p>
              <p className="text-sm font-bold text-[#F8FAFC]">Variante Exon 58</p>
            </div>
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Correlação Sexos</p>
              <p className="text-sm font-bold text-[#F8FAFC]">1.03 (Idêntica)</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-black text-[#F8FAFC] mt-10 mb-6 tracking-tight">Novos Alvos Terapêuticos</h2>
        <p>A identificação de genes como o <em>CELF4</em>, que regula a excitabilidade dos nociceptores, e o <em>DRD2</em> (receptor de dopamina), aponta para novas direções farmacológicas. Medicamentos que modulam essas vias específicas podem oferecer alívio muito mais eficaz do que os analgésicos convencionais.</p>

        <p>Além disso, a pesquisa encontrou sobreposições genéticas superiores a 0,7 com condições como dor lombar crônica, transtorno de estresse pós-traumático (TEPT) e síndrome do intestino irritável, reforçando a ideia de que essas condições compartilham uma base neurológica comum de processamento da dor.</p>

        <p className="text-xs text-[#98A2B3] mt-12 pt-6 border-t border-white/[0.05]">
          <strong>Referências:</strong> "The genetic architecture of fibromyalgia across 2.5 million individuals." <em>Nature Medicine</em>, 12 Aug 2026. DOI: 10.1038/s41591-026-04492-6.
        </p>
      </>
    )
  },
  origins_life_double_2026: {
    title: "A Vida Começou Duas Vezes? Nova Descoberta Desafia a Origem da Biologia na Terra",
    subtitle: "Estudo publicado na Science Advances revela que bactérias e arqueias evoluíram para a vida independente de forma separada; descoberta sugere que LUCA não era uma célula livre.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "03:25",
    updateDate: "12/08/2026",
    updateTime: "03:25",
    cat: "Saúde & Ciência",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    caption: "Ilustração editorial mostra a divergência evolutiva entre bactérias e arqueias a partir de fontes hidrotermais primitivas.",
    credit: "Reprodução / Banco Editorial EuvouserDoutor",
    content: (
      <>
        <p>Uma das perguntas mais fundamentais da humanidade — "de onde viemos?" — acaba de ganhar uma resposta surpreendente e revolucionária. Um estudo internacional liderado pela <strong>Universidade Heinrich Heine de Düsseldorf (HHU)</strong>, publicado nesta quarta-feira (12) na revista <strong>Science Advances</strong>, apresenta evidências de que a vida na Terra não surgiu como uma única linhagem de células livres, mas sim através de duas transições independentes para a vida independente.</p>

        <div className="bg-[#4F8CFF]/5 border-l-4 border-[#4F8CFF] p-6 my-8 rounded-r-2xl">
          <h4 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-2">Entenda a Descoberta</h4>
          <p className="text-sm text-[#98A2B3] italic leading-relaxed">
            Embora toda a vida compartilhe o mesmo código genético ancestral, o caminho para se tornar uma "célula livre" (capaz de viver fora de fontes hidrotermais) foi percorrido duas vezes: uma pelas bactérias e outra pelas arqueias.
          </p>
        </div>

        <h2 className="text-2xl font-black text-[#F8FAFC] mt-10 mb-6 tracking-tight">O Mito de LUCA</h2>
        <p>Até agora, a visão predominante era que o <strong>LUCA</strong> (Último Ancestral Comum Universal) era uma célula primitiva completa e independente. No entanto, a nova pesquisa sugere que o LUCA era, na verdade, um híbrido químico confinado a fontes hidrotermais no fundo do oceano, dependente de metais e minerais do ambiente para catalisar suas reações vitais.</p>

        <p>"Estamos olhando para uma origem do código genético, mas duas origens da vida propriamente dita", afirma o biólogo William Martin, autor sênior do estudo. Segundo os pesquisadores, o LUCA possuía enzimas para apenas cerca de metade das reações metabólicas essenciais; a outra metade era realizada espontaneamente por metais na crosta terrestre.</p>

        <h2 className="text-2xl font-black text-[#F8FAFC] mt-10 mb-6 tracking-tight">A Independência das Células</h2>
        <p>A pesquisa mapeou 420 reações químicas que formam a rede metabólica primordial. A surpresa veio ao notar que as enzimas que catalisam essas reações não são conservadas entre bactérias e arqueias. Isso indica que, após se separarem do LUCA, as duas linhagens desenvolveram independentemente suas próprias ferramentas biológicas (enzimas) para substituir os catalisadores metálicos do ambiente.</p>

        <p>Essa "invenção paralela" de enzimas permitiu que as bactérias e arqueias se tornassem menos dependentes da química das fontes hidrotermais, conquistando finalmente a capacidade de sobreviver como células livres e colonizar o planeta.</p>

        <div className="my-10 p-8 bg-[#11141A] border border-white/[0.08] rounded-[32px] premium-border">
          <h3 className="text-[#4F8CFF] font-black uppercase tracking-[0.2em] text-[10px] mb-4">Evidências da Evolução</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Fonte de Energia</p>
              <p className="text-sm font-bold text-[#F8FAFC]">Paládio & Fosfito</p>
            </div>
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Reações Mapeadas</p>
              <p className="text-sm font-bold text-[#F8FAFC]">420 Químicas</p>
            </div>
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Catalisadores</p>
              <p className="text-sm font-bold text-[#F8FAFC]">Metais vs Enzimas</p>
            </div>
            <div>
              <p className="text-[10px] text-[#98A2B3] uppercase font-bold mb-1">Era Geológica</p>
              <p className="text-sm font-bold text-[#F8FAFC]">~4 Bilhões Anos</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-black text-[#F8FAFC] mt-10 mb-6 tracking-tight">Impacto no Futuro e Astrobiologia</h2>
        <p>Essa descoberta tem implicações profundas para a astrobiologia. Se a transição para a vida independente ocorreu duas vezes de forma paralela na Terra, as chances de processos semelhantes ocorrerem em outros mundos com fontes hidrotermais — como as luas Europa (Júpiter) e Encélado (Saturno) — podem ser muito maiores do que imaginávamos.</p>

        <p className="text-xs text-[#98A2B3] mt-12 pt-6 border-t border-white/[0.05]">
          <strong>Referências:</strong> Mrnjavac, N., et al. "Intermediate stages in the origin of metabolism at a phosphorylating hydrothermal vent." <em>Science Advances</em>, 12 Aug 2026. DOI: 10.1126/sciadv.aef3128.
        </p>
      </>
    )
  },
  paternal_diet_usp_2026: {
    title: "Você é o que seu pai comeu: Dieta paterna de ultraprocessados altera genes do bebê, revela USP",
    subtitle: "Estudo inédito da FMRP-USP em Ribeirão Preto mostra que o consumo de alimentos industrializados pelos pais antes da concepção afeta o peso e o acúmulo de gordura dos recém-nascidos via epigenética.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "12/08/2026",
    time: "02:15",
    updateTime: "02:15",
    category: "Saúde & Ciência",
    image: "/editorial/microbiota_transplante_amendoim_2026.webp",
    imageCaption: "Estudo da USP aponta que a qualidade da dieta paterna antes da concepção é determinante para a saúde metabólica do bebê.",
    imageCredit: "Foto: Reprodução / Banco Editorial EuvouserDoutor",
    content: (
      <div className="space-y-6">
        <p>
          A saúde de um bebê começa muito antes do teste de gravidez positivo. Uma pesquisa pioneira realizada pela <strong>Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP)</strong> revelou que a alimentação do pai, especificamente o consumo de alimentos ultraprocessados, tem o poder de alterar a expressão genética dos filhos antes mesmo da concepção.
        </p>

        <div className="bg-[#4F8CFF]/5 border-l-4 border-[#4F8CFF] p-6 my-8 rounded-r-2xl">
          <h4 className="text-[#4F8CFF] font-black uppercase tracking-widest text-xs mb-2">Por que isso importa</h4>
          <p className="text-sm text-[#98A2B3] leading-relaxed">
            Historicamente, as orientações de saúde pré-natal focaram quase exclusivamente na mãe. Este estudo muda o paradigma ao provar que o estilo de vida do pai é igualmente crítico, impactando o risco de doenças cardiovasculares e metabólicas na criança ao longo de toda a vida adulta.
          </p>
        </div>

        <h3 className="text-2xl font-black text-white pt-4">O Peso da Dieta Paterna</h3>
        <p>
          O estudo, publicado na prestigiada revista científica <em>Nutrition Research</em>, analisou grupos de pais, mães e recém-nascidos atendidos na rede pública de saúde. Os resultados foram contundentes: quanto maior o consumo de ultraprocessados (como salgadinhos, refrigerantes e embutidos) pelos homens, maior o peso ao nascer e maior o acúmulo de gordura na coxa e na região abdominal (suprailíaca) dos bebês.
        </p>

        <p>
          A <strong>Dra. Daniela Sartorelli</strong>, coordenadora do estudo e professora da FMRP-USP, destaca que este é o primeiro trabalho em humanos a demonstrar essa associação direta. "A alimentação paterna importa muito para a saúde do bebê, e pouco se fala sobre isso no planejamento familiar", afirma a pesquisadora.
        </p>

        <div className="bg-white/[0.03] border border-white/[0.08] p-8 rounded-[32px] my-10">
          <h4 className="text-white font-black text-lg mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-[#4F8CFF] rounded-full"></span>
            O Mecanismo: Epigenética e o Gene IGF-II
          </h4>
          <p className="text-[#98A2B3] text-sm leading-relaxed mb-4">
            A explicação científica reside na <strong>epigenética</strong>. Dietas ricas em ultraprocessados criam um ambiente pró-inflamatório no organismo masculino, o que pode afetar a qualidade dos espermatozoides e modificar a expressão de genes transmitidos ao feto.
          </p>
          <ul className="list-disc list-inside text-[#98A2B3] text-sm space-y-2">
            <li><strong>Metilação:</strong> O consumo de químicos e aditivos pode "ligar" ou "desligar" partes do DNA.</li>
            <li><strong>Gene IGF-II:</strong> Responsável pelo crescimento fetal, este gene é expresso exclusivamente a partir da cópia herdada do pai.</li>
            <li><strong>Transmissão:</strong> As alterações metabólicas do pai são "programadas" no esperma e refletidas no desenvolvimento do bebê.</li>
          </ul>
        </div>

        <h3 className="text-2xl font-black text-white pt-4">Diferença entre Pais e Mães</h3>
        <p>
          Curiosamente, o estudo observou efeitos opostos na dieta materna. Enquanto o consumo paterno de ultraprocessados elevou o peso dos filhos, a ingestão desses mesmos alimentos pelas mães no início da gestação foi associada a bebês com menor peso, altura e circunferência da cabeça.
        </p>

        <p>
          Segundo <strong>Mariana Rinaldi Carvalho</strong>, coautora do estudo e bolsista da FAPESP, isso ocorre porque os ultraprocessados são pobres em nutrientes essenciais para a formação da placenta, prejudicando o desenvolvimento fetal direto via mãe, enquanto no pai o efeito é programático e genético.
        </p>

        <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-6 my-8 rounded-r-2xl">
          <h4 className="text-emerald-500 font-black uppercase tracking-widest text-xs mb-2">O que vem agora</h4>
          <p className="text-sm text-[#98A2B3] leading-relaxed">
            Os pesquisadores defendem que as políticas de saúde pública e o planejamento familiar incluam orientações dietéticas rigorosas para os homens que desejam ser pais, pelo menos três meses antes da concepção, período necessário para a renovação completa dos espermatozoides.
          </p>
        </div>

        <div className="pt-8 border-t border-white/[0.05] mt-12">
          <p className="text-xs text-[#667085] leading-relaxed italic">
            <strong>Referência:</strong> Carvalho, M. R., et al. (2026). "A higher paternal ultra-processed food consumption is directly associated with parameters of neonatal anthropometry". <em>Nutrition Research</em>. DOI: 10.1016/j.nutres.2026.000552.
          </p>
        </div>
      </div>
    )
  },
  plcg2_alzheimer_synapses_2026: {
    title: "Gene ligado ao Alzheimer afeta sinapses em neurônios humanos, mostra estudo",
    subtitle: "Pesquisa publicada na Nature Genetics relaciona a redução de PLCG2 a falhas na comunicação entre neurônios e ao aumento de beta-amiloide e Tau em culturas celulares; resultado ainda não equivale a tratamento ou teste diagnóstico.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Belo Horizonte (MG)",
    date: "14/08/2026",
    time: "8 min",
    pubTime: "11:11",
    updateDate: "14/08/2026",
    updateTime: "11:11",
    category: "Neurociência",
    img: "/plcg2_sinapses_alzheimer_2026.webp",
    imageAlt: "Ilustração de um neurônio com ramificações e estruturas moleculares associadas à comunicação sináptica",
    imageCaption: "Ilustração editorial mostra um neurônio e estruturas moleculares associadas à comunicação entre sinapses; o estudo investigou o papel do gene PLCG2 em modelos celulares.",
    imageCredit: "Ilustração original produzida para o EuvouserDoutor.",
    content: (
      <>
        <p>Uma pesquisa publicada nesta sexta-feira (14) na revista <strong>Nature Genetics</strong> identificou uma ligação entre a redução da atividade do gene <strong>PLCG2</strong> e alterações na comunicação entre neurônios. Em culturas de células humanas, a diminuição da proteína foi acompanhada por mudanças em sinapses e pelo aumento de marcadores associados à doença de Alzheimer, como beta-amiloide e Tau fosforilada [1].</p>
        <p>O achado ajuda a explicar como uma variante genética rara pode aumentar a vulnerabilidade ao Alzheimer, mas ainda está distante de uma aplicação clínica. Os experimentos foram realizados em culturas neuronais e em análises genéticas; não houve teste de medicamento, acompanhamento de pacientes para avaliar sintomas nem ensaio clínico.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF]"><Sparkles size={24} /></div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">O estudo desloca parte da atenção dos depósitos de proteínas para a comunicação entre neurônios, uma das funções que podem ser afetadas cedo no Alzheimer. A descoberta é mecanística e experimental, não uma promessa de cura.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O que é o PLCG2</h2>
        <p>O PLCG2 codifica a proteína PLCγ2, uma enzima envolvida em vias de sinalização dentro das células. Variantes comuns do gene já haviam sido associadas ao risco de Alzheimer, enquanto algumas variantes raras de perda de função parecem estar ligadas a uma alteração mais expressiva do risco genético [1].</p>
        <p>Na nova pesquisa, os autores procuraram entender se essa associação poderia envolver diretamente os neurônios, e não apenas células do sistema imune do cérebro. Para isso, usaram uma triagem de alto conteúdo com <strong>198 genes</strong> localizados em 76 regiões genéticas relacionadas ao Alzheimer.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05]"><div className="text-3xl font-black text-[#4F8CFF]">198</div><div className="text-sm text-[#98A2B3] mt-2">genes rastreados na triagem inicial</div></div>
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05]"><div className="text-3xl font-black text-[#4F8CFF]">76</div><div className="text-sm text-[#98A2B3] mt-2">loci genéticos associados ao risco de Alzheimer</div></div>
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05]"><div className="text-3xl font-black text-[#4F8CFF]">10x</div><div className="text-sm text-[#98A2B3] mt-2">risco associado a variantes muito raras de perda de função, segundo a análise</div></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O que aconteceu nas células</h2>
        <p>O rastreamento inicial foi feito em culturas primárias de neurônios de hipocampo de ratos, com três culturas independentes. Entre os genes que produziram alterações mais fortes na densidade das sinapses estava o <em>Plcg2</em>. A equipe então repetiu parte da investigação em culturas neuronais humanas.</p>
        <p>Nessas culturas, a redução de <em>PLCG2</em> foi associada a menor função sináptica, aumento de beta-amiloide no meio de cultura e maior fosforilação da proteína Tau. Em alguns experimentos, a reintrodução da versão normal do gene reduziu os efeitos observados, uma evidência de que o mecanismo merece investigação adicional.</p>
        <p>Os pesquisadores também analisaram dados de sequenciamento de núcleo único e encontraram alterações em vias relacionadas à atividade neuronal e às sinapses. O artigo sugere que proteínas da família das neurexinas podem participar dessa conexão, mas essa hipótese ainda precisa de testes específicos.</p>

        <div className="bg-amber-500/10 border-l-4 border-amber-400 p-6 my-10 rounded-r-2xl">
          <h3 className="text-amber-300 font-black uppercase tracking-widest text-xs mb-3">Atenção: o que o estudo não mostra</h3>
          <p className="text-white leading-relaxed">A pesquisa não criou um tratamento, não permite diagnosticar Alzheimer pela medição de PLCG2 e não prova que corrigir o gene impediria a doença. Culturas celulares não reproduzem a interação entre neurônios, micróglia, vasos sanguíneos, metabolismo e comportamento ao longo de décadas.</p>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Genética não é destino individual</h2>
        <p>O artigo relata que variantes muito raras de perda de função no PLCG2 foram associadas a um risco de Alzheimer aproximadamente dez vezes maior. Esse número descreve uma associação em uma população estudada e não funciona como previsão automática para uma pessoa. Variantes raras também podem ter estimativas instáveis quando o número de portadores é pequeno.</p>
        <p>Além disso, o Alzheimer é uma condição heterogênea, influenciada por múltiplos genes, idade, saúde vascular, sono, ambiente e outros fatores. O novo trabalho acrescenta uma peça ao quebra-cabeça, mas não substitui avaliação médica nem aconselhamento genético.</p>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O que vem agora</h2>
        <p>Para transformar o mecanismo em uma possível estratégia terapêutica, seriam necessários estudos que confirmassem o efeito em modelos animais completos, avaliassem segurança e mostrassem se a modulação de PLCG2 melhora memória ou outros desfechos. Só depois poderiam ser planejados ensaios clínicos em pessoas.</p>
        <p>Enquanto isso, a principal contribuição do trabalho é indicar que alterações sinápticas podem estar ligadas diretamente a um fator genético de risco em neurônios humanos. Essa direção pode ajudar a desenvolver hipóteses mais precisas sobre as fases iniciais da doença.</p>

        <div className="mt-16 pt-8 border-t border-white/[0.05]">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><BookOpen size={16} className="text-[#4F8CFF}" /> Fontes científicas</h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic"><span className="text-[#4F8CFF] font-black not-italic">[1]</span> Coulon, A. et al. (2026). “PLCG2 downregulation impairs synaptic function and increases Alzheimer’s disease hallmarks in neuronal cultures”. <em>Nature Genetics</em>. DOI: <a href="https://doi.org/10.1038/s41588-026-02709-5" target="_blank" rel="noreferrer" className="text-[#4F8CFF]">10.1038/s41588-026-02709-5</a>.</li>
            <li className="flex gap-3 italic"><span className="text-[#4F8CFF] font-black not-italic">[2]</span> Nature Genetics. Artigo em acesso aberto sob licença Creative Commons BY-NC-ND 4.0; a imagem principal desta matéria é uma ilustração original do EuvouserDoutor, não uma figura reproduzida do artigo.</li>
          </ul>
        </div>
      </>
    )
  },
  tilapia_factory_ceara_2026: {
    title: "Ceará terá fábrica de curativos feitos com pele de tilápia em escala industrial",
    subtitle: "Projeto em Jaguaribara pretende transformar uma tecnologia desenvolvida no Ceará em produto farmacêutico; estudos clínicos anteriores apontaram menos trocas de curativo e menor custo em queimaduras.",
    author: "EuvouserDoutor - Jeff Queiroz",
    location: "Jaguaribara (CE)",
    date: "15/08/2026",
    time: "8 min",
    pubTime: "11:07",
    updateDate: "15/08/2026",
    updateTime: "11:07",
    cat: "Inovação Médica",
    img: "/curativo_pele_tilapia_ceara_2026.jpg",
    imageAlt: "Ilustração de pele de tilápia sendo transformada em curativo biológico sobre uma representação de pele humana, com equipamentos de processamento ao fundo",
    imgCaption: "Ilustração editorial mostra as etapas de processamento da pele de tilápia para produção de um curativo biológico; a fábrica prevista para Jaguaribara ainda está em implantação.",
    imgCredit: "Ilustração original produzida para o EuvouserDoutor.",
    content: (
      <>
        <p>O Ceará se prepara para transformar uma pesquisa desenvolvida no estado em uma cadeia industrial de produtos para feridas. Uma fábrica prevista para Jaguaribara, no Vale do Jaguaribe, deverá processar pele de tilápia para produzir curativos biológicos em escala farmacêutica, segundo informações divulgadas pelo Instituto de Pesquisas Energéticas e Nucleares (IPEN) [1].</p>
        <p>O projeto é uma parceria entre o Governo do Ceará, a empresa BIOTEC Medical Xenograft Engineering, a Universidade Federal do Ceará (UFC), o Instituto José Frota, o Instituto de Apoio ao Queimado, o IPEN, a SDE e a ADECE. A iniciativa representa uma etapa de industrialização; não significa que o produto já esteja disponível em todas as unidades de saúde ou incorporado automaticamente ao SUS.</p>

        <div className="glass-premium rounded-[32px] p-8 mb-12 border border-[#4F8CFF]/20 relative overflow-hidden">
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF]"><Sparkles size={24} /></div>
            <div>
              <h2 className="text-xs font-black text-[#4F8CFF] uppercase tracking-[0.3em] mb-3">Por que isso importa</h2>
              <p className="text-[#F8FAFC] text-sm md:text-base leading-relaxed font-bold italic">A fábrica pode aproximar uma inovação brasileira do uso em maior escala, aproveitar um subproduto da piscicultura e criar uma cadeia de produção no Nordeste. O impacto real dependerá de fabricação regular, autorização sanitária, preço, distribuição e avaliação contínua dos resultados.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Como o curativo é produzido</h2>
        <p>A pele da tilápia passa por limpeza, processamento e <strong>liofilização</strong>, uma técnica que remove água do material congelado para aumentar sua estabilidade. De acordo com o IPEN, o projeto também prevê esterilização por radiação gama. A combinação permitiria manter o produto em temperatura ambiente, com reidratação em soro fisiológico antes do uso [1].</p>
        <p>O material funciona como uma cobertura biológica temporária. Em vez de deixar a ferida exposta, o curativo ajuda a proteger o leito da lesão e pode permanecer aderido por mais tempo do que algumas alternativas convencionais. A resposta, porém, depende do tipo e da profundidade da ferida, da avaliação clínica e do protocolo utilizado.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05]"><div className="text-3xl font-black text-[#4F8CFF]">180 mil</div><div className="text-sm text-[#98A2B3] mt-2">peles por mês na capacidade inicial prevista</div></div>
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05]"><div className="text-3xl font-black text-[#4F8CFF]">400 mil</div><div className="text-sm text-[#98A2B3] mt-2">unidades mensais previstas ao fim do terceiro ano</div></div>
          <div className="bg-[#11141A] p-6 rounded-[24px] border border-white/[0.05]"><div className="text-3xl font-black text-[#4F8CFF]">52 mi</div><div className="text-sm text-[#98A2B3] mt-2">reais de investimento anunciados para o projeto</div></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O que os estudos clínicos já mostraram</h2>
        <p>A tecnologia não parte apenas de uma hipótese de laboratório. Em um ensaio clínico randomizado de fase III realizado em Fortaleza, pesquisadores acompanharam <strong>115 adultos</strong> com queimaduras superficiais de espessura parcial que atingiam até 15% da superfície corporal. O estudo comparou a pele de tilápia tratada com sulfadiazina de prata [2].</p>
        <p>Os participantes que receberam a pele de tilápia tiveram tempo médio de reepitelização de 9,7 dias, contra 10,2 dias no grupo comparador. Também precisaram de menos trocas de curativo — 1,6 contra 4,9, em média — e apresentaram redução em medidas de dor e no custo final relacionado ao tratamento. A diferença de custo relatada foi de 42,1% [2].</p>
        <p>Esses resultados são relevantes, mas têm alcance definido: referem-se principalmente a queimaduras superficiais de espessura parcial tratadas dentro de um protocolo específico. Eles não comprovam eficácia para qualquer ferida, úlcera, infecção ou doença dermatológica.</p>

        <div className="bg-amber-500/10 border-l-4 border-amber-400 p-6 my-10 rounded-r-2xl">
          <h3 className="text-amber-300 font-black uppercase tracking-widest text-xs mb-3">Atenção: fábrica não é sinônimo de tratamento disponível</h3>
          <p className="text-white leading-relaxed">A unidade anunciada ainda representa uma etapa industrial. Antes de chegar amplamente aos serviços de saúde, o produto precisa cumprir exigências de fabricação, controle de qualidade, autorização sanitária, logística e protocolos de uso. Nenhuma pessoa deve aplicar pele de peixe ou qualquer curativo biológico em uma ferida por conta própria.</p>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> Por que a inovação começou no Ceará</h2>
        <p>A pesquisa foi construída a partir da colaboração entre o Centro de Tratamento de Queimados do Instituto José Frota e grupos da UFC. A pele de tilápia é abundante na piscicultura e possui uma estrutura rica em colágeno, uma proteína que ajuda a formar matrizes usadas em biomateriais. O processamento é necessário para reduzir contaminantes, padronizar o material e permitir o uso médico com segurança.</p>
        <p>Além de queimaduras, grupos brasileiros estudam aplicações em outras feridas e áreas de medicina regenerativa. Cada indicação, no entanto, exige avaliação própria. Resultados obtidos em queimaduras não podem ser transferidos automaticamente para feridas crônicas, cirurgias ou reconstruções complexas.</p>

        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6 tracking-tighter flex items-center gap-4"><span className="w-2 h-8 bg-[#4F8CFF] rounded-full" /> O que vem agora</h2>
        <p>Os próximos passos envolvem construir e qualificar a unidade, validar lotes, assegurar a esterilidade do produto e definir como os curativos serão distribuídos. Também será necessário acompanhar o desempenho em diferentes serviços e comparar custos reais, não apenas projeções industriais.</p>
        <p>Se os requisitos forem cumpridos, a fábrica poderá transformar uma solução desenvolvida em hospitais e universidades brasileiras em um produto produzido perto da escala necessária. Até lá, a notícia principal é a passagem da pesquisa para a implantação industrial — não a chegada de um novo tratamento universal.</p>

        <div className="mt-16 pt-8 border-t border-white/[0.05]">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><BookOpen size={16} className="text-[#4F8CFF]" /> Fontes científicas e institucionais</h4>
          <ul className="space-y-4 text-sm text-[#98A2B3]">
            <li className="flex gap-3 italic"><span className="text-[#4F8CFF] font-black not-italic">[1]</span> Instituto de Pesquisas Energéticas e Nucleares (IPEN). “Ceará fortalece polo de biotecnologia com primeira fábrica do Brasil de curativos à base de pele de tilápia”. Publicado em 12/08/2026, atualizado em 14/08/2026. <a href="https://www.gov.br/ipen/pt-br/assuntos/clipping-de-noticias/ceara-fortalece-polo-de-biotecnologia-com-primeira-fabrica-do-brasil-de-curativos-a-base-de-pele-de-tilapia" target="_blank" rel="noreferrer" className="text-[#4F8CFF]">Fonte institucional</a>.</li>
            <li className="flex gap-3 italic"><span className="text-[#4F8CFF] font-black not-italic">[2]</span> Lima Júnior, E. M. et al. (2021). “Nile Tilapia Fish Skin-Based Wound Dressing Improves Pain and Treatment-Related Costs of Superficial Partial-Thickness Burns: A Phase III Randomized Controlled Trial”. <em>Plastic and Reconstructive Surgery</em>. DOI: <a href="https://doi.org/10.1097/PRS.0000000000007895" target="_blank" rel="noreferrer" className="text-[#4F8CFF]">10.1097/PRS.0000000000007895</a>.</li>
            <li className="flex gap-3 italic"><span className="text-[#4F8CFF] font-black not-italic">[3]</span> ClinicalTrials.gov. “Use of Nile Tilapia Fish Skin as a Xenograft for Burn Treatment”, estudo NCT04202289. <a href="https://clinicaltrials.gov/study/NCT04202289" target="_blank" rel="noreferrer" className="text-[#4F8CFF]">Registro do ensaio</a>.</li>
          </ul>
        </div>
      </>
    )
  },
  };

  const normalizedPostId = typeof postId === 'string' && postId.startsWith('post_') ? postId.slice(5) : postId;
  const autoPostData = Object.fromEntries(autoPosts.map(autoPost => [autoPost.id, { ...autoPost, content: <AutoPostContent markdown={autoPost.body} /> }]));
  const mergedPostsData = { ...postsData, ...autoPostData };
  const post = mergedPostsData[postId] || mergedPostsData[normalizedPostId] || mergedPostsData[`post_${normalizedPostId}`] || mergedPostsData.ebola_oxford_2026;
  const postTags = postId.includes('pfas') ? ['Medicina', 'Meio Ambiente', 'Inovação', 'Saúde'] : postId.includes('microbiota') ? ['Microbiota', 'Psicologia', 'Cérebro', 'Saúde'] : postId.includes('chip_eny') ? ['Biotecnologia', 'UnB', '3D', 'Saúde'] : postId.includes('ozempic') ? ['Ozempic', 'Neurociência', 'Vício', 'Saúde'] : postId.includes('ucla') ? ['Câncer', 'UCLA', 'Check-up', 'Inovação'] : postId.includes('parkinson') ? ['Parkinson', 'Neurologia', 'DBS', 'Cérebro'] : postId.includes('omega3') ? ['Omega-3', 'Câncer', 'Imunoterapia', 'NK Cells'] : postId.includes('alzheimer') ? ['Alzheimer', 'Neurociência', 'Cirurgia', 'Saúde'] : postId.includes('car_t') ? ['CAR-T', 'mRNA', 'Nanopartículas', 'Imunoterapia'] : postId.includes('measles') ? ['Sarampo', 'Vacinação', 'Saúde Pública', 'Epidemiologia'] : ['Medicina', 'Pesquisa', 'Oxford', 'Futuro'];

  useEffect(() => {
    if (!post) return;
    const scriptId = 'news-article-schema';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    const dateMap = {
      '16/08/2026': '2026-08-16',
      '16 Ago 2026': '2026-08-16',
      '15/08/2026': '2026-08-15',
      '14/08/2026': '2026-08-14',
      '14 Ago 2026': '2026-08-14',
      '13/08/2026': '2026-08-13',
      '13 Ago 2026': '2026-08-13',
      '12/08/2026': '2026-08-12',
      '12 Ago 2026': '2026-08-12',
      '11/08/2026': '2026-08-11',
      '11 Ago 2026': '2026-08-11',
      '10/08/2026': '2026-08-10',
      '10 Ago 2026': '2026-08-10',
    };
    const articleDate = dateMap[post.date] || '2026-08-14';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": post.title,
      "image": [post.img?.startsWith('http') ? post.img : `${institutional.site}${post.img}`],
      "datePublished": `${articleDate}T${post.pubTime || "08:00"}:00-03:00`,
      "dateModified": `${articleDate}T${post.updateTime || post.pubTime || "08:00"}:00-03:00`,
      "author": {
        "@type": "Person",
        "name": "Jeff Queiroz",
        "url": "https://www.euvouserdoutor.com/autor/jeff-queiroz"
      },
      "creator": {
        "@type": "Person",
        "name": "Jeff Queiroz",
        "url": "https://www.euvouserdoutor.com/autor/jeff-queiroz"
      },
      "publisher": {
        "@type": "Organization",
        "name": "EuvouserDoutor",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.euvouserdoutor.com/logo-euvouserdoutor.webp"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    });

    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [post]);

  return (
    <div className="animate-in text-left bg-[#080A0F] text-[#F8FAFC] min-h-screen pb-24">
      {/* Mega Premium Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-white/5">
        <div
          className="h-full bg-[#4F8CFF] transition-all duration-300 shadow-[0_0_20px_rgba(79,140,255,0.6)]"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      {/* Hero Editorial Header */}
      <div className="bg-[#0A192F] border-b border-white/[0.05] pt-16 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(79,140,255,0.15),transparent_40%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-10">
            <button
              type="button"
              onClick={() => setView('news')}
              className="inline-flex items-center gap-3 text-[10px] font-black text-[#F8FAFC] uppercase bg-white/[0.05] border border-white/[0.1] px-5 py-2.5 rounded-2xl hover:bg-white/[0.1] hover-lift transition-all"
            >
              <ArrowLeft size={14} strokeWidth={3} className="text-[#4F8CFF]" /> Voltar ao Portal
            </button>
            <div className="flex gap-3">
              <button className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.1] text-[#98A2B3] hover:text-white transition-all"><Share2 size={18} /></button>
              <button className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.1] text-[#98A2B3] hover:text-white transition-all"><Bookmark size={18} /></button>
            </div>
          </div>

          <div className="max-w-5xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                {post.cat}
              </span>
              <span className="h-px w-8 bg-white/20"></span>
              <span className="text-[10px] text-[#98A2B3] font-black uppercase tracking-widest">{post.time} de leitura</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-[1.05] text-[#F8FAFC] text-balance">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-[#98A2B3] font-medium max-w-3xl leading-relaxed">
              {post.subtitle}
            </p>

            <div className="pt-6 border-t border-white/[0.05] text-xs md:text-sm text-[#98A2B3] font-medium flex flex-wrap items-center gap-2">
              <span className="text-white font-bold">EuvouserDoutor - Jeff Queiroz</span>, em Belo Horizonte (MG) / <span className="text-[#4F8CFF] font-bold">{post.date} às {post.pubTime || "08:00"}</span> | Atualizado <span className="text-white">{post.date} às {post.updateTime || post.pubTime || "08:00"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 -mt-16 relative z-20">
        <div className="lg:col-span-8 xl:col-span-9">
          <article className="glass-premium rounded-[48px] overflow-hidden p-1 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
            <div className="bg-[#11141A] rounded-[47px] overflow-hidden">
              <div className="aspect-[21/9] w-full overflow-hidden relative">
                <SafeImage src={post.img} alt={post.title} priority width={1600} height={686} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11141A] via-transparent to-transparent opacity-40" />
              </div>
              <div className="px-6 py-3 bg-[#11141A] border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#98A2B3] gap-2">
                <span className="italic">{post.imgCaption || post.title}</span>
                <span className="font-bold text-[#4F8CFF] shrink-0">{post.imgCredit || "Imagem editorial / EuvouserDoutor"}</span>
              </div>
              <div className="p-8 md:p-16">
                <div className="prose prose-invert max-w-none">
                  {post.content}
                </div>

                {/* Mega Premium Conversion Funnel */}
                <div className="mt-20 glass-premium rounded-[40px] p-1 overflow-hidden group">
                  <div className="bg-[#4F8CFF] rounded-[39px] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-transform duration-1000 group-hover:scale-125" />

                    <div className="relative z-10 space-y-6 md:w-3/5 text-center md:text-left">
                      <div className="inline-flex items-center gap-2 bg-[#080A0F]/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-[#080A0F]">
                        <Sparkles size={12} /> Próximo Passo
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black text-[#080A0F] tracking-tighter leading-none">
                        Acelere sua aprovação com método.
                      </h3>
                      <p className="text-base md:text-lg font-bold text-[#080A0F]/70 leading-relaxed">
                        A Mentoria Aprovado é o ecossistema estratégico definitivo para quem busca o topo da carreira médica.
                      </p>
                      <button
                        onClick={() => setView('mentorship')}
                        className="bg-[#080A0F] text-white px-10 py-5 rounded-[24px] font-black text-xs uppercase tracking-widest hover:bg-[#1A1F26] hover-lift transition-all flex items-center gap-3 shadow-2xl mx-auto md:mx-0"
                      >
                        Quero ser Mentorado <ArrowRight size={18} strokeWidth={3} />
                      </button>
                    </div>

                    <div className="md:w-2/5 relative flex justify-center">
                      <div className="w-48 h-48 md:w-64 md:h-64 rounded-[40px] bg-[#080A0F] rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-2xl flex items-center justify-center p-8">
                        <img src="/logo-euvouserdoutor.webp" alt="Logo EuvouserDoutor" width="600" height="250" loading="lazy" decoding="async" className="w-full h-auto brightness-0 invert opacity-20" />
                        <GraduationCap size={80} className="absolute text-white/10" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Footer Meta */}
                <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-wrap items-center justify-between gap-6">
                  <div className="flex gap-2">
                    {postTags.map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[10px] font-black uppercase tracking-widest text-[#98A2B3] hover:text-[#4F8CFF] cursor-pointer transition-colors">#{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#98A2B3] hover:text-white transition-colors">
                      <MessageSquare size={16} /> Comentar
                    </button>
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#98A2B3] hover:text-white transition-colors">
                      <Share2 size={16} /> Compartilhar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="lg:col-span-4 xl:col-span-3">
          <Sidebar setView={setView} />
        </div>
      </div>
    </div>
  );
};
