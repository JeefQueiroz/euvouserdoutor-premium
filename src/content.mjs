export const brand = {
  name: 'EuvouserDoutor',
  base: 'https://www.euvouserdoutor.com',
  description: 'Informação confiável em medicina, ciência e tecnologia, além de materiais e métodos de estudo para quem sonha em cursar Medicina.',
  email: 'contato@euvouserdoutor.com',
  social: [
    { label: 'Instagram', url: 'https://www.instagram.com/euvouserdoutor/' },
    { label: 'GitHub', url: 'https://github.com/JeefQueiroz' }
  ]
};

export const categories = [
  { slug: 'saude', index: '01', category: 'Saúde e medicina', title: 'Saúde com evidência, sem alarmismo.', description: 'Entenda doenças e descobertas sem confundir hipótese com certeza ou divulgação com diagnóstico.', accent: 'teal', icon: 'pulse' },
  { slug: 'medicina', index: '02', category: 'Vida acadêmica', title: 'Uma trajetória possível na Medicina.', description: 'Estudo ativo, revisão, organização acadêmica e aprendizagem contínua para estudantes de Medicina.', accent: 'blue', icon: 'book' },
  { slug: 'vestibular', index: '03', category: 'Rumo à faculdade', title: 'Seu caminho para a aprovação.', description: 'Estratégias de preparação, organização dos estudos e fontes oficiais para quem quer entrar em Medicina.', accent: 'violet', icon: 'target' },
  { slug: 'ciencia', index: '04', category: 'Pesquisa e tecnologia', title: 'O que a ciência realmente diz.', description: 'Estudos, tecnologia médica e inteligência artificial analisados com contexto e transparência.', accent: 'orange', icon: 'spark' }
];

export const articles = [
  {
    slug: 'revisao-espacada-e-pratica-de-recuperacao', category: 'medicina', tag: 'Aprendizagem',
    title: 'Revisão espaçada e prática de recuperação: como estudar com mais eficiência',
    description: 'O que a pesquisa em educação médica indica sobre revisões distribuídas, testes frequentes e retenção de longo prazo.',
    lead: 'Aprender não é apenas reler. Estudos em educação em saúde investigam como distribuir revisões e recuperar informações da memória pode favorecer o aprendizado.',
    readTime: '6 min de leitura', updated: '2026-11-07',
    blocks: [
      { heading: 'O que são essas estratégias?', paragraphs: [
        'Revisão espaçada significa retornar a um assunto em sessões separadas ao longo do tempo, em vez de concentrar toda a prática numa única ocasião. Prática de recuperação significa tentar lembrar o conteúdo antes de consultar o material — por exemplo, respondendo a uma questão ou explicando o tema com as próprias palavras.',
        'As duas técnicas podem ser combinadas. Uma revisão não precisa começar pela leitura do resumo: primeiro tente recuperar o conceito, verifique o que acertou e só então estude as lacunas.'
      ] },
      { heading: 'O que os estudos mostram?', paragraphs: [
        'Uma revisão sistemática de 2024 em cursos da área da saúde encontrou benefícios significativos em parte importante dos estudos incluídos. Os autores também destacaram heterogeneidade entre as intervenções e a necessidade de desenhos metodológicos melhores.',
        'Uma revisão de 2026 dedicada a estudantes de Medicina encontrou resultados favoráveis em estudos controlados, mas observou resultados mistos em pesquisas observacionais de uso autônomo de flashcards. Isso é importante: usar uma ferramenta por si só não garante melhor desempenho.'
      ] },
      { heading: 'Como aplicar sem complicar sua rotina', bullets: [
        'Ao terminar um tema, escreva três perguntas que exigem recuperar a ideia principal.',
        'Faça uma revisão breve em outro dia e registre quais pontos continuam difíceis.',
        'Misture questões de conteúdos relacionados para praticar a escolha do raciocínio adequado.',
        'Use o erro como orientação para a próxima sessão, em vez de repetir tudo indiscriminadamente.'
      ] },
      { heading: 'O que ainda não sabemos?', paragraphs: [
        'A frequência ideal de revisão depende da matéria, do tipo de avaliação e do estudante. Pesquisas existentes usam métodos e desfechos variados. Prefira um sistema que você consiga manter e acompanhe sua própria compreensão com questões e feedback.'
      ] }
    ],
    sources: [
      { label: 'Trumble et al. — revisão sistemática (2024), PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/37615780/' },
      { label: 'Luu & Severance — revisão sistemática (2026), PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/42866698/' }
    ]
  },
  {
    slug: 'como-ler-um-estudo-cientifico', category: 'ciencia', tag: 'Alfabetização científica',
    title: 'Como ler um estudo científico sem cair nas manchetes',
    description: 'Um guia de leitura crítica para reconhecer pergunta, método, limitações, resultados e grau de certeza de uma pesquisa.',
    lead: 'Uma descoberta pode ser importante sem ser definitiva. Ler um artigo científico é aprender a distinguir o que foi observado, o que foi inferido e o que ainda precisa ser confirmado.',
    readTime: '5 min de leitura', updated: '2026-11-07',
    blocks: [
      { heading: 'Comece pela pergunta, não pela conclusão', paragraphs: [
        'Identifique a população estudada, a intervenção ou exposição, a comparação e os desfechos. A pergunta orienta o que uma pesquisa pode responder, e também o que ela não pode concluir.'
      ] },
      { heading: 'Observe o tipo de estudo', paragraphs: [
        'Uma pesquisa observacional pode identificar associações, mas geralmente enfrenta maior dificuldade para estabelecer causalidade. Ensaios randomizados podem ajudar a avaliar intervenções, embora também estejam sujeitos a vieses e a limitações de generalização.'
      ] },
      { heading: 'Procure as limitações', bullets: [
        'Quem participou da pesquisa? Os resultados se aplicam a outras populações?',
        'O desfecho medido é importante para pessoas ou apenas um marcador intermediário?',
        'O tamanho da amostra, o período de acompanhamento e os dados ausentes afetam a confiança?',
        'Há financiamento, conflitos de interesse ou outras fontes de viés descritos?'
      ] },
      { heading: 'Uma boa síntese científica', paragraphs: [
        'Uma síntese útil explica o contexto da pergunta, o desenho do estudo, os principais resultados, os limites e o que seria necessário investigar depois. Uma manchete deve refletir esse equilíbrio, não apenas destacar a descoberta mais chamativa.'
      ] }
    ],
    sources: [
      { label: 'Cochrane Handbook for Systematic Reviews of Interventions', url: 'https://training.cochrane.org/handbook/current' },
      { label: 'Cochrane Handbook — interpretação de resultados (Capítulo 15)', url: 'https://training.cochrane.org/handbook/current' }
    ]
  },
  {
    slug: 'esofago-de-barrett-o-que-e', category: 'saude', tag: 'Saúde digestiva',
    title: 'Esôfago de Barrett: o que é e por que merece acompanhamento',
    description: 'Entenda as alterações do revestimento do esôfago, a relação com refluxo e o papel da endoscopia e da biópsia.',
    lead: 'O esôfago de Barrett é uma alteração do revestimento do esôfago associada a maior risco de certos tumores, mas a maioria das pessoas com a condição não desenvolve câncer.',
    readTime: '5 min de leitura', updated: '2026-11-07',
    medical: true,
    blocks: [
      { heading: 'O que muda no esôfago?', paragraphs: [
        'No esôfago de Barrett, o revestimento interno do esôfago passa por uma alteração em que o tecido se assemelha ao revestimento intestinal. A condição está associada à doença do refluxo gastroesofágico, embora suas causas sejam complexas.'
      ] },
      { heading: 'Barrett é a mesma coisa que câncer?', paragraphs: [
        'Não. O esôfago de Barrett é uma condição que aumenta o risco de adenocarcinoma de esôfago, mas a maior parte das pessoas com Barrett não desenvolverá esse câncer. A presença e o grau de displasia — alterações celulares identificadas em análise microscópica — influenciam o acompanhamento.'
      ] },
      { heading: 'Como é feito o diagnóstico?', paragraphs: [
        'O diagnóstico é habitualmente realizado por endoscopia digestiva alta, com coleta de amostras para biópsia quando indicada. A avaliação histológica ajuda a confirmar as alterações e identificar displasia.'
      ] },
      { heading: 'O que define o acompanhamento?', paragraphs: [
        'A conduta depende de achados endoscópicos e histológicos, fatores individuais e diretrizes atualizadas. A American Gastroenterological Association publicou em 2025 recomendações para vigilância endoscópica personalizada.',
        'Este material é educativo. Não permite diagnosticar a condição, determinar risco individual nem substituir decisões compartilhadas com uma equipe de saúde.'
      ] }
    ],
    sources: [
      { label: 'NIDDK — Barrett’s Esophagus (2024)', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/barretts-esophagus' },
      { label: 'NIDDK — Diagnosis of Barrett’s Esophagus', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/barretts-esophagus/diagnosis' },
      { label: 'AGA — Surveillance of Barrett’s Esophagus (2025)', url: 'https://gastro.org/clinical-guidance/surveillance-of-barretts-esophagus/' }
    ]
  },
  {
    slug: 'como-organizar-estudos-para-medicina', category: 'vestibular', tag: 'Vestibular',
    title: 'Como organizar seus estudos para ingressar em Medicina',
    description: 'Uma estrutura de planejamento e revisão adaptável à realidade de quem estuda para o ENEM e outros processos seletivos.',
    lead: 'Uma preparação consistente começa com um diagnóstico realista das matérias, um plano que cabe na rotina e um jeito claro de acompanhar erros e avanços.',
    readTime: '4 min de leitura', updated: '2026-11-07',
    blocks: [
      { heading: 'Descubra o ponto de partida', paragraphs: [
        'Antes de montar horários, resolva questões de provas anteriores e identifique as habilidades mais difíceis. Separe lacunas conceituais de erros de interpretação ou de gestão do tempo.'
      ] },
      { heading: 'Planeje por objetivos verificáveis', bullets: [
        'Escolha prioridades por relevância para a prova e dificuldade pessoal.',
        'Reserve sessões para compreensão do conteúdo e para resolução de questões.',
        'Acompanhe erros por tema e retorne a eles com feedback.',
        'Inclua descanso e ajuste o planejamento à rotina real, sem metas inviáveis.'
      ] },
      { heading: 'Use as provas oficiais', paragraphs: [
        'Questões de edições anteriores ajudam a compreender o estilo das avaliações. Consulte sempre informações de calendário, inscrição e regras nos canais oficiais dos organizadores.'
      ] },
      { heading: 'Avalie progresso, não apenas horas', paragraphs: [
        'A melhora pode ser acompanhada pela qualidade das justificativas, pelo desempenho em questões novas e pela capacidade de recuperar conceitos depois de algum tempo. Ajuste o plano com base nessas evidências.'
      ] }
    ],
    sources: [
      { label: 'INEP — Portal do ENEM', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem' },
      { label: 'Trumble et al. — prática distribuída e recuperação (2024)', url: 'https://pubmed.ncbi.nlm.nih.gov/37615780/' }
    ]
  }
];
