export const labs = [
  {
    "id": "circulacao",
    "title": "Circulação pulmonar e sistêmica",
    "intro": "Siga o sangue pelos dois circuitos conectados pelo coração.",
    "steps": [
      {
        "title": "Do coração direito aos pulmões",
        "description": "O ventrículo direito impulsiona sangue relativamente pobre em oxigênio pelas artérias pulmonares até os capilares dos pulmões.",
        "key": "Artérias pulmonares → pulmões"
      },
      {
        "title": "Dos pulmões ao coração esquerdo",
        "description": "Nos capilares pulmonares, o sangue recebe oxigênio e libera dióxido de carbono. As veias pulmonares levam esse sangue ao átrio esquerdo.",
        "key": "Veias pulmonares → átrio esquerdo"
      },
      {
        "title": "Do coração esquerdo aos tecidos",
        "description": "O ventrículo esquerdo bombeia sangue pela aorta e pelas artérias sistêmicas até os tecidos, onde ocorrem trocas de substâncias.",
        "key": "Aorta → tecidos"
      },
      {
        "title": "Dos tecidos ao coração direito",
        "description": "O sangue que retorna dos tecidos chega pelas veias cavas ao átrio direito, seguindo ao ventrículo direito para reiniciar o circuito.",
        "key": "Veias cavas → átrio direito"
      }
    ]
  },
  {
    "id": "trocas-gasosas",
    "title": "Trocas gasosas nos alvéolos",
    "intro": "Observe a direção da difusão de cada gás na interface alveolocapilar.",
    "steps": [
      {
        "title": "Chegada do ar e do sangue",
        "description": "A ventilação leva ar aos alvéolos. Os capilares pulmonares recebem sangue venoso proveniente do coração direito.",
        "key": "Ventilação e perfusão"
      },
      {
        "title": "Difusão de oxigênio",
        "description": "O oxigênio difunde-se do ar alveolar para o sangue capilar, segundo seu gradiente de pressão parcial. A maior parte liga-se à hemoglobina.",
        "key": "O₂: alvéolo → sangue"
      },
      {
        "title": "Difusão de dióxido de carbono",
        "description": "O dióxido de carbono difunde-se do sangue capilar para o ar alveolar segundo seu gradiente de pressão parcial, sendo eliminado na expiração.",
        "key": "CO₂: sangue → alvéolo"
      }
    ]
  }
];
export function stepIndex(index,delta,length){if(!Number.isInteger(length)||length<1)throw new RangeError('Sequência vazia');return Math.max(0,Math.min(length-1,index+delta));}
