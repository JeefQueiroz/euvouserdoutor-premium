export const questions = [
  {
    "id": "epi-inc",
    "topic": "Epidemiologia",
    "question": "Qual medida expressa a ocorrência de casos novos em uma população sob risco ao longo do tempo?",
    "options": [
      "Prevalência",
      "Incidência",
      "Especificidade",
      "Valor preditivo positivo"
    ],
    "correct": 1,
    "explanations": [
      "Prevalência descreve casos existentes.",
      "Incidência considera casos novos em uma população sob risco.",
      "Especificidade avalia o teste entre pessoas sem a condição.",
      "Valor preditivo positivo expressa a proporção de verdadeiros positivos entre os resultados positivos."
    ]
  },
  {
    "id": "epi-sens",
    "topic": "Epidemiologia",
    "question": "Entre 100 pessoas com uma doença, 90 tiveram teste positivo. Qual é a sensibilidade?",
    "options": [
      "10%",
      "50%",
      "90%",
      "100%"
    ],
    "correct": 2,
    "explanations": [
      "10% corresponde à proporção de falsos negativos.",
      "Não corresponde a 90 de 100.",
      "Sensibilidade = verdadeiros positivos / total de pessoas com a doença = 90%.",
      "Há 10 falsos negativos, portanto não é 100%."
    ]
  },
  {
    "id": "epi-coorte",
    "topic": "Epidemiologia",
    "question": "Qual desenho acompanha grupos definidos pela exposição para observar a ocorrência de um desfecho?",
    "options": [
      "Coorte",
      "Caso-controle",
      "Relato de caso",
      "Estudo transversal"
    ],
    "correct": 0,
    "explanations": [
      "Coortes acompanham a ocorrência de desfechos em grupos definidos pela exposição.",
      "Caso-controle parte do desfecho e compara exposições anteriores.",
      "Relato de caso descreve uma observação individual.",
      "Estudo transversal avalia características em um recorte temporal."
    ]
  },
  {
    "id": "fisio-dc",
    "topic": "Fisiologia",
    "question": "Qual expressão representa o débito cardíaco?",
    "options": [
      "Pressão arterial × frequência cardíaca",
      "Frequência cardíaca / volume sistólico",
      "Volume sistólico × resistência periférica",
      "Frequência cardíaca × volume sistólico"
    ],
    "correct": 3,
    "explanations": [
      "O produto não corresponde ao volume bombeado por minuto.",
      "A relação correta é multiplicação, não divisão.",
      "Resistência periférica não integra essa fórmula.",
      "Frequência cardíaca multiplicada pelo volume sistólico fornece o volume bombeado por minuto."
    ]
  },
  {
    "id": "fisio-alv",
    "topic": "Fisiologia",
    "question": "Qual estrutura é o principal local de troca gasosa pulmonar?",
    "options": [
      "Alvéolos",
      "Traqueia",
      "Brônquios principais",
      "Pleura"
    ],
    "correct": 0,
    "explanations": [
      "Nos alvéolos, gases difundem entre o ar alveolar e os capilares.",
      "A traqueia conduz o ar.",
      "Brônquios principais conduzem o ar aos pulmões.",
      "A pleura reveste os pulmões e a parede torácica."
    ]
  },
  {
    "id": "fisio-renal",
    "topic": "Fisiologia",
    "question": "Qual processo ocorre nos capilares glomerulares?",
    "options": [
      "Produção de bile",
      "Filtração de plasma",
      "Absorção de oxigênio alveolar",
      "Secreção de insulina"
    ],
    "correct": 1,
    "explanations": [
      "A bile é produzida pelo fígado.",
      "O glomérulo filtra parte do plasma para formar o filtrado glomerular.",
      "A troca gasosa alveolar ocorre nos pulmões.",
      "A insulina é secretada por células beta pancreáticas."
    ]
  },
  {
    "id": "met-rec",
    "topic": "Métodos de estudo",
    "question": "Qual atividade exemplifica recuperação ativa?",
    "options": [
      "Reler um parágrafo várias vezes",
      "Copiar um texto integralmente",
      "Tentar explicar um conceito sem consultar a resposta",
      "Grifar todas as frases"
    ],
    "correct": 2,
    "explanations": [
      "Releitura pode ajudar, mas não exige recuperar a informação sem consulta.",
      "Copiar não testa necessariamente a capacidade de recordar.",
      "Explicar de memória exige recuperar a informação antes de conferir.",
      "Grifar por si só não testa a lembrança."
    ]
  },
  {
    "id": "met-esp",
    "topic": "Métodos de estudo",
    "question": "Qual estratégia corresponde à repetição espaçada?",
    "options": [
      "Distribuir revisões ao longo de vários dias",
      "Concentrar todas as revisões em uma sessão",
      "Evitar revisar erros",
      "Ler apenas a primeira página"
    ],
    "correct": 0,
    "explanations": [
      "Repetição espaçada distribui encontros com o conteúdo ao longo do tempo.",
      "Isso corresponde à prática concentrada.",
      "Revisar erros é útil para corrigir lacunas.",
      "Não caracteriza revisões distribuídas."
    ]
  },
  {
    "id": "met-feedback",
    "topic": "Métodos de estudo",
    "question": "Depois de responder uma questão incorretamente, qual ação ajuda a identificar lacunas?",
    "options": [
      "Ignorar a questão",
      "Memorizar apenas a letra",
      "Repetir a resposta incorreta",
      "Comparar a resposta com a explicação e revisar o conceito"
    ],
    "correct": 3,
    "explanations": [
      "Ignorar impede a identificação do erro.",
      "Memorizar a letra não garante compreensão.",
      "Repetir o erro pode consolidar uma informação equivocada.",
      "O feedback permite reconhecer a lacuna e corrigir o raciocínio."
    ]
  }
];
export const topics = [...new Set(questions.map(q=>q.topic))];
