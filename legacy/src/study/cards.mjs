export const cards = [
  {
    "id": "metodo-01",
    "deck": "Métodos de estudo",
    "question": "O que é prática de recuperação ativa?",
    "answer": "Tentar recordar uma informação antes de consultar a resposta, em vez de apenas reler o material."
  },
  {
    "id": "metodo-02",
    "deck": "Métodos de estudo",
    "question": "Qual é o princípio da repetição espaçada?",
    "answer": "Distribuir revisões em intervalos ao longo do tempo, em vez de concentrá-las em uma única sessão."
  },
  {
    "id": "metodo-03",
    "deck": "Métodos de estudo",
    "question": "Por que comparar sua resposta com o gabarito?",
    "answer": "Para identificar lacunas, corrigir erros e evitar consolidar informações equivocadas."
  },
  {
    "id": "metodo-04",
    "deck": "Métodos de estudo",
    "question": "O que é intercalar tópicos na prática de estudo?",
    "answer": "Alternar tipos de problemas ou temas relacionados, exercitando a identificação da estratégia adequada."
  },
  {
    "id": "fisio-01",
    "deck": "Fisiologia",
    "question": "Qual é a função principal das hemácias?",
    "answer": "Transportar oxigênio por meio da hemoglobina e contribuir para o transporte de dióxido de carbono."
  },
  {
    "id": "fisio-02",
    "deck": "Fisiologia",
    "question": "Qual é a função dos alvéolos pulmonares?",
    "answer": "Realizar as trocas gasosas entre o ar alveolar e o sangue dos capilares pulmonares."
  },
  {
    "id": "fisio-03",
    "deck": "Fisiologia",
    "question": "O que é débito cardíaco?",
    "answer": "Volume de sangue bombeado por um ventrículo por minuto. É o produto da frequência cardíaca pelo volume sistólico."
  },
  {
    "id": "fisio-04",
    "deck": "Fisiologia",
    "question": "Qual é a principal função do glomérulo renal?",
    "answer": "Filtrar parte do plasma sanguíneo para formar o filtrado glomerular."
  },
  {
    "id": "epi-01",
    "deck": "Epidemiologia",
    "question": "O que é incidência?",
    "answer": "Medida da ocorrência de casos novos em uma população sob risco durante um período definido."
  },
  {
    "id": "epi-02",
    "deck": "Epidemiologia",
    "question": "O que é prevalência?",
    "answer": "Proporção de pessoas que apresentam uma condição em um ponto ou período definido."
  },
  {
    "id": "epi-03",
    "deck": "Epidemiologia",
    "question": "O que é sensibilidade de um teste diagnóstico?",
    "answer": "Proporção de indivíduos com a condição que apresentam resultado positivo no teste."
  },
  {
    "id": "epi-04",
    "deck": "Epidemiologia",
    "question": "O que é especificidade de um teste diagnóstico?",
    "answer": "Proporção de indivíduos sem a condição que apresentam resultado negativo no teste."
  }
];
export const decks = [...new Set(cards.map(card => card.deck))];
