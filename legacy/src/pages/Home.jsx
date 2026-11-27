import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Check,
  Clock3,
  Dna,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Microscope,
  MoveUpRight,
  Newspaper,
  Play,
  Quote,
  ScanLine,
  Sparkles,
  Stethoscope,
  Telescope,
} from 'lucide-react';

const latestStories = [
  {
    id: 'post_retina_chip_2026',
    category: 'Tecnologia médica',
    title: 'Chip de retina restaura visão em estudo publicado no NEJM',
    excerpt: 'Uma tecnologia implantável abre uma nova frente de pesquisa para pessoas com degeneração macular.',
    image: '/retina_chip_tech.webp',
    date: 'Em destaque',
  },
  {
    id: 'post_heart_gene_architect_2026',
    category: 'Genética',
    title: 'Gene arquiteto do coração ajuda a explicar malformações congênitas',
    excerpt: 'A descoberta mostra como alterações no TBX5 podem afetar a organização do DNA durante o desenvolvimento.',
    image: '/tbx5_dna_heart_2026.webp',
    date: 'Ciência',
  },
  {
    id: 'post_plcg2_alzheimer_synapses_2026',
    category: 'Neurociência',
    title: 'Pesquisa investiga como o gene PLCG2 influencia as sinapses no Alzheimer',
    excerpt: 'O estudo amplia a compreensão de mecanismos celulares ligados à memória e à neurodegeneração.',
    image: '/plcg2_sinapses_alzheimer_2026.webp',
    date: 'Pesquisa',
  },
];

const areas = [
  { name: 'Saúde & Medicina', icon: HeartPulse, color: 'from-[#4F8CFF] to-[#274989]' },
  { name: 'Ciência & Pesquisa', icon: Microscope, color: 'from-[#8E7DFF] to-[#443A86]' },
  { name: 'Tecnologia & Inovação', icon: Dna, color: 'from-[#39B8A6] to-[#1D695F]' },
  { name: 'Educação Médica', icon: GraduationCap, color: 'from-[#E0A45D] to-[#845C2C]' },
  { name: 'Neurociência', icon: BrainCircuit, color: 'from-[#C86EAA] to-[#733B62]' },
];

const pillars = [
  { number: '01.', title: 'Curadoria científica', text: 'Selecionamos acontecimentos e pesquisas que merecem contexto, sem transformar hipótese em certeza.' },
  { number: '02.', title: 'Tradução acessível', text: 'Explicamos termos e resultados complexos em uma linguagem clara, precisa e útil.' },
  { number: '03.', title: 'Olhar para o futuro', text: 'Conectamos descobertas, tecnologia, educação e os desafios que já estão moldando o Brasil.' },
];

const services = [
  { title: 'Saúde baseada em evidências', text: 'Notícias sobre doenças, tratamentos, prevenção e políticas de saúde.', icon: Stethoscope },
  { title: 'Pesquisa e descobertas', text: 'Estudos, universidades, pesquisadores e novas fronteiras da ciência.', icon: FlaskConical },
  { title: 'Tecnologia médica', text: 'IA, robótica, dispositivos, genética, biotecnologia e futuro da medicina.', icon: ScanLine },
  { title: 'Educação e carreira', text: 'Aprendizagem, vestibular, formação médica e vida acadêmica.', icon: BookOpen },
];

export const Home = ({ setView }) => {
  const profileImg = '/jeff-queiroz-perfil.webp';
  const featured = latestStories[0];

  return (
    <div className="animate-in overflow-hidden bg-[#080A0F] text-white">
      <section className="relative min-h-[680px] overflow-hidden bg-[#17212D] text-white">
        <img src={featured.image} alt="Ilustração editorial de tecnologia médica" width="1600" height="900" fetchpriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#17212D_0%,rgba(23,33,45,.94)_34%,rgba(23,33,45,.45)_74%,rgba(23,33,45,.72)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#17212D_0%,transparent_36%,rgba(23,33,45,.15)_100%)]" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 pb-20 pt-28 lg:grid-cols-[1fr_390px] lg:gap-20">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.32em] text-[#A9C6FF]"><Sparkles size={15} /> Portal editorial de ciência e futuro</div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-[5.2rem]">Conhecimento que ajuda a construir o próximo capítulo.</h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">O EuvouserDoutor aproxima você da ciência, da medicina, da tecnologia e da educação que estão mudando a forma como entendemos o mundo.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button type="button" onClick={() => setView('news')} className="group inline-flex items-center gap-3 rounded-full bg-[#A9C6FF] px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#17212D] transition hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white">Explorar a redação <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></button>
              <button type="button" onClick={() => setView('author')} className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/[0.06] px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:-translate-y-1 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white">Sobre o projeto <MoveUpRight size={15} /></button>
            </div>
            <div className="mt-14 flex max-w-xl border-t border-white/20 pt-5">
              <div className="w-1/3"><strong className="text-3xl font-semibold">01</strong><p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/50">Rigor editorial</p></div>
              <div className="w-1/3 border-l border-white/20 pl-5"><strong className="text-3xl font-semibold">24h</strong><p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/50">Olhar atualizado</p></div>
              <div className="w-1/3 border-l border-white/20 pl-5"><strong className="text-3xl font-semibold">BR</strong><p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/50">Contexto brasileiro</p></div>
            </div>
          </div>
          <button type="button" onClick={() => setView(featured.id)} className="group relative overflow-hidden rounded-[28px] border border-white/20 bg-white/[0.08] p-2 text-left shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-white">
            <div className="relative aspect-[.82] overflow-hidden rounded-[22px]"><img src={featured.image} alt={featured.title} width="700" height="850" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#17212D] via-transparent to-transparent" /><span className="absolute left-5 top-5 rounded-full bg-[#17212D]/75 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-[#A9C6FF]">{featured.category}</span><div className="absolute inset-x-5 bottom-5"><p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60"><Clock3 size={12} /> {featured.date}</p><h2 className="text-2xl font-semibold leading-tight tracking-tight text-white">{featured.title}</h2><span className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#A9C6FF] text-[#17212D] transition group-hover:translate-x-1"><ArrowRight size={17} /></span></div></div>
          </button>
        </div>
      </section>

      <section className="bg-[#080A0F] py-16 text-white sm:py-24"><div className="mx-auto max-w-7xl px-6"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><h2 className="text-4xl font-semibold leading-none tracking-[-.05em] sm:text-6xl">Evidência que permanece relevante.</h2><p className="max-w-xl text-lg leading-relaxed text-white/60 lg:justify-self-end">Somos um portal editorial que transforma descobertas, estudos e mudanças na saúde em informação compreensível, contextualizada e responsável.</p></div><div className="mt-12 flex items-center gap-4 overflow-hidden whitespace-nowrap border-y border-white/15 py-5 text-2xl font-semibold tracking-[-.03em] text-white/75 sm:text-4xl"><span className="inline-flex items-center gap-4">Saúde <Sparkles size={18} /> Ciência <Sparkles size={18} /> Tecnologia <Sparkles size={18} /> Educação <Sparkles size={18} /> Futuro <Sparkles size={18} /></span><span className="inline-flex items-center gap-4">Saúde <Sparkles size={18} /> Ciência <Sparkles size={18} /> Tecnologia <Sparkles size={18} /> Educação <Sparkles size={18} /> Futuro</span></div></div></section>

      <section className="bg-[#080A0F] pb-20 text-white sm:pb-28"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center"><div className="relative overflow-hidden rounded-2xl bg-[#17212D]"><img src="/jeff-queiroz-eu-vou-ser-doutor.webp" alt="Jeff Queiroz e a identidade do EuvouserDoutor" width="900" height="1125" loading="lazy" className="h-full min-h-[420px] w-full object-cover object-center" /></div><div><p className="mb-5 text-[10px] font-black uppercase tracking-[0.3em] text-[#5278B9]">Sobre o EuvouserDoutor</p><h2 className="max-w-xl text-4xl font-semibold leading-[.98] tracking-[-.05em] sm:text-6xl">Um projeto editorial para quem quer compreender o mundo com mais profundidade.</h2><div className="mt-8 flex flex-wrap gap-2"><span className="rounded-full bg-[#253446] px-4 py-2 text-xs font-bold">Saúde baseada em evidências</span><span className="rounded-full bg-[#253446] px-4 py-2 text-xs font-bold">Educação médica</span></div><button type="button" onClick={() => setView('about')} className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-black uppercase tracking-widest text-[#080A0F] transition hover:bg-[#5278B9]">Conheça a história <ArrowRight size={16} /></button><div className="mt-12 space-y-5 border-t border-white/15 pt-7">{pillars.map((pillar) => <div key={pillar.number} className="grid grid-cols-[55px_1fr] gap-3 border-b border-white/10 pb-5"><span className="text-sm font-bold text-[#5278B9]">{pillar.number}</span><div><h3 className="text-lg font-semibold">{pillar.title}</h3><p className="mt-1 text-sm leading-relaxed text-white/60">{pillar.text}</p></div></div>)}</div></div></div></section>

      <section className="bg-[#17212D] py-20 text-white sm:py-28"><div className="mx-auto max-w-7xl px-6"><div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#A9C6FF]">Por que acompanhar</p><h2 className="max-w-2xl text-4xl font-semibold leading-none tracking-[-.05em] sm:text-6xl">Informação com contexto, não apenas manchetes.</h2></div><p className="max-w-sm text-sm leading-relaxed text-white/60">Cada pauta é organizada para mostrar o que aconteceu, o que a evidência permite dizer e o que ainda precisa ser investigado.</p></div><div className="grid gap-4 lg:grid-cols-3"><div className="rounded-2xl bg-[#253446] p-7"><BarChart3 className="text-[#A9C6FF]" /><strong className="mt-14 block text-6xl font-semibold tracking-[-.06em]">100%</strong><p className="mt-3 text-sm text-white/60">Compromisso com fontes, limites e transparência editorial.</p></div><div className="rounded-2xl bg-[#253446] p-7 text-white"><Lightbulb className="text-[#5278B9]" /><strong className="mt-14 block text-6xl font-semibold tracking-[-.06em]">05</strong><p className="mt-3 text-sm text-white/60">Grandes áreas conectadas em uma mesma jornada de conhecimento.</p></div><div className="relative min-h-[270px] overflow-hidden rounded-2xl bg-[#5278B9] p-7"><img src="/jeff-queiroz-perfil.webp" alt="Jeff Queiroz" width="400" height="400" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-luminosity" /><div className="relative flex h-full flex-col justify-between"><Quote className="text-white" /><p className="max-w-xs text-lg font-semibold leading-snug">“O conhecimento fica mais forte quando é compartilhado com clareza.”</p><button type="button" onClick={() => setView('author')} className="inline-flex items-center gap-2 self-start text-[10px] font-black uppercase tracking-widest">Conheça Jeff Queiroz <ArrowRight size={14} /></button></div></div></div></div></section>

      <section className="bg-[#080A0F] py-20 text-white sm:py-28"><div className="mx-auto max-w-7xl px-6"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#5278B9]">Nossos pilares</p><h2 className="text-4xl font-semibold leading-none tracking-[-.05em] sm:text-6xl">Um mapa para acompanhar as mudanças.</h2></div><p className="max-w-xl text-lg leading-relaxed text-white/60 lg:justify-self-end">Escolha uma área, siga as histórias e encontre as conexões entre o que acontece hoje e o futuro que está sendo construído.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(({ title, text, icon: Icon }) => <button key={title} type="button" onClick={() => setView('news')} className="group min-h-[250px] rounded-2xl bg-[#111A27] p-6 text-left shadow-[0_12px_40px_rgba(0,0,0,.18)] transition hover:-translate-y-2 hover:bg-[#17212D] hover:text-white"><Icon size={24} className="text-[#5278B9] transition group-hover:text-[#A9C6FF]" /><h3 className="mt-20 text-xl font-semibold leading-tight">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/60 group-hover:text-white/60">{text}</p><ArrowDownRight size={17} className="mt-6 opacity-40 transition group-hover:translate-x-1 group-hover:translate-y-1 group-hover:opacity-100" /></button>)}</div></div></section>

      <section className="overflow-hidden bg-[#253446] py-5 text-white"><div className="flex min-w-max animate-[evdMarquee_30s_linear_infinite] items-center gap-6 text-3xl font-semibold tracking-[-.04em] sm:text-5xl">{[...areas, ...areas].map(({ name, icon: Icon, color }, index) => <span key={`${name}-${index}`} className="inline-flex items-center gap-6"><span className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${color} text-white sm:h-20 sm:w-20`}><Icon size={26} /></span>{name}<Sparkles size={20} className="text-[#5278B9]" /></span>)}</div></section>

      <section className="bg-[#080A0F] py-20 text-white sm:py-28"><div className="mx-auto max-w-7xl px-6"><div className="mb-10 flex flex-col gap-5 border-b border-white/15 pb-8 md:flex-row md:items-end md:justify-between"><div><p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#5278B9]">Últimas notícias</p><h2 className="text-4xl font-semibold leading-none tracking-[-.05em] sm:text-6xl">O que está em movimento.</h2></div><button type="button" onClick={() => setView('news')} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-[#5278B9]">Ver redação completa <ArrowRight size={15} /></button></div><div className="grid gap-8 md:grid-cols-3">{latestStories.map((story) => <article key={story.id} className="group"><button type="button" onClick={() => setView(story.id)} className="w-full text-left focus:outline-none focus:ring-2 focus:ring-[#5278B9]"><div className="aspect-[16/10] overflow-hidden rounded-2xl bg-[#17212D]"><img src={story.image} alt={story.title} width="900" height="563" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div><p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-[#5278B9]">{story.category} · {story.date}</p><h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-.03em] transition group-hover:text-[#5278B9]">{story.title}</h3><p className="mt-3 text-sm leading-relaxed text-white/60">{story.excerpt}</p></button></article>)}</div></div></section>

      <section className="bg-[#17212D] py-20 text-white sm:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#A9C6FF]">Uma iniciativa de Jeff Queiroz</p><h2 className="max-w-3xl text-4xl font-semibold leading-none tracking-[-.05em] sm:text-6xl">Acompanhe as ideias que podem mudar a forma como vemos o futuro.</h2></div><button type="button" onClick={() => setView('news')} className="inline-flex items-center gap-3 rounded-full bg-[#A9C6FF] px-7 py-5 text-[10px] font-black uppercase tracking-widest text-[#17212D] transition hover:bg-white">Entrar na redação <ArrowRight size={16} /></button></div></section>
    </div>
  );
};
