import React from 'react';

export const AutoPostContent = ({ markdown }) => (
  <div className="space-y-5">
    {markdown.split(/\n{2,}/).map((block, index) => {
      const text = block.trim();
      if (!text) return null;
      if (text.startsWith('## ')) return <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4">{text.slice(3)}</h2>;
      if (text.startsWith('### ')) return <h3 key={index} className="text-xl font-bold text-white mt-8 mb-3">{text.slice(4)}</h3>;
      if (text.startsWith('> ')) return <blockquote key={index} className="border-l-4 border-[#4F8CFF] pl-5 text-[#CBD5E1] italic">{text.slice(2)}</blockquote>;
      return <p key={index}>{text}</p>;
    })}
  </div>
);

export const autoPosts = [
  {
    id: 'post_oral_microbiome_cognition_2026',
    title: 'Bactérias da língua podem estar associadas à velocidade do raciocínio, aponta estudo',
    subtitle: 'Pesquisa com 60 adultos do Reino Unido e da Bélgica identificou associações entre microrganismos orais e testes cognitivos, mas não demonstrou causa e efeito.',
    cat: 'Saúde & Ciência',
    date: '11 Out 2026',
    pubTime: '23:00',
    readTime: '6 min',
    time: '6 min',
    author: 'EuvouserDoutor - Jeff Queiroz',
    img: '/editorial/bacterias-lingua-cognicao.svg',
    target: 'post_oral_microbiome_cognition_2026',
    featured: true,
    sourceUrl: 'https://www.metropoles.com/saude/bacterias-da-boca-podem-estar-ligadas-a-velocidade-do-raciocinio',
    primarySourceUrl: 'https://doi.org/10.1371/journal.pone.0359559',
    body: `Uma pesquisa internacional sugere que determinadas bactérias presentes na língua podem estar associadas à velocidade de resposta em testes cognitivos. Publicado em outubro de 2026 na revista PLOS ONE, o trabalho examinou a microbiota oral e o desempenho de 60 voluntários saudáveis no Reino Unido e na Bélgica. Os resultados são observacionais e não comprovam que microrganismos melhorem diretamente o raciocínio.

## Como foi feito o estudo?

Participaram 30 pessoas de cada país, divididas entre adultos jovens e mais velhos. Os pesquisadores coletaram amostras da língua, saliva e sangue e realizaram testes de diferentes aspectos cognitivos, incluindo atenção, memória e reconhecimento de emoções. As análises compararam a presença relativa de espécies bacterianas ao tempo de resposta e à precisão nas tarefas.

## Quais bactérias chamaram atenção?

A espécie Prevotella histicola apresentou associação com respostas mais rápidas em algumas avaliações nos dois países, embora não exatamente nas mesmas tarefas. Haemophilus parainfluenzae também esteve relacionada ao desempenho, mas as associações mudaram entre os grupos e os testes realizados.

Esses achados não significam que essas espécies aumentem a inteligência ou que sua presença permita prever o desempenho mental de uma pessoa.

## Por que a microbiota oral pode ter relação com o cérebro?

Parte das bactérias da boca participa do metabolismo do nitrato obtido pela alimentação, contribuindo para a formação de nitrito e, por vias fisiológicas, de óxido nítrico. Essa molécula atua na regulação vascular, o que desperta interesse científico sobre possíveis relações entre microbiota, circulação e funções cerebrais.

O estudo, entretanto, não demonstrou que essa via seja a responsável pelas associações registradas. A hipótese precisa ser avaliada em estudos específicos.

## O que a pesquisa não permite concluir?

A amostra pequena e o desenho observacional não permitem estabelecer causalidade. Não há evidência de que mudar a microbiota da língua, tomar probióticos ou consumir determinados produtos aumente a rapidez do pensamento, previna demência ou trate doenças neurológicas.

Fatores como idade, hábitos de saúde, sono e características individuais também podem influenciar os testes cognitivos e a composição da microbiota.

## Qual é o próximo passo?

Novos estudos, com grupos maiores e acompanhamento ao longo do tempo, precisam verificar se as associações se repetem e se existe um mecanismo biológico relevante. Por enquanto, os resultados ampliam o conhecimento sobre o possível eixo boca-cérebro, sem estabelecer recomendações clínicas.

## Fontes e transparência

Pesquisa original: L'Heureux e colaboradores. Oral microbiome signatures of ageing and cognitive function across distinct geographical cohorts. PLOS ONE, 5 de outubro de 2026. DOI: https://doi.org/10.1371/journal.pone.0359559

Pauta jornalística: Metrópoles, 11 de outubro de 2026: https://www.metropoles.com/saude/bacterias-da-boca-podem-estar-ligadas-a-velocidade-do-raciocinio

Texto original do Eu Vou Ser Doutor, com base em fontes publicadas. Achados preliminares; associação não representa causalidade.`,
  },

  {
    id: 'post_ucla_blood_test_2026',
    title: 'Teste de sangue da UCLA identifica sinais de quatro tipos de câncer em estudo',
    subtitle: 'Método chamado MethylScan analisou DNA livre no plasma e alcançou 55,3% de sensibilidade para tumores em estágio inicial; pesquisa ainda não transforma a técnica em exame disponível para rastreamento.',
    cat: 'Saúde & Ciência',
    date: '16 Ago 2026',
    pubTime: '11:30',
    readTime: '8 min',
    time: '8 min',
    author: 'EuvouserDoutor - Jeff Queiroz',
    img: '/editorial/methylscan_pnas_2026.jpg',
    imgCaption: 'Esquema do MethylScan, método que enriquece fragmentos de DNA livre de células com padrões de metilação associados a tecidos doentes.',
    imgCredit: 'Imagem: Zeng et al., PNAS (2026), licença CC BY-NC-ND 4.0.',
    target: 'post_ucla_blood_test_2026',
    featured: true,
    sourceUrl: 'https://www.metropoles.com/saude/exame-pode-identificar-canceres-no-inicio',
    primarySourceUrl: 'https://doi.org/10.1073/pnas.2518347123',
    body: `Um exame de sangue experimental desenvolvido por pesquisadores da Universidade da Califórnia em Los Angeles (UCLA) conseguiu identificar sinais moleculares associados a quatro tipos de câncer e a diferentes doenças do fígado em amostras humanas. O método, batizado de MethylScan, procura padrões de metilação no DNA livre de células que circula no plasma — uma estratégia que pode ampliar o alcance das chamadas biópsias líquidas, mas ainda precisa ser testada em estudos prospectivos antes de qualquer uso rotineiro.

## O que o MethylScan procura no sangue

Quando células morrem, pequenos fragmentos de seu DNA podem chegar à corrente sanguínea. Esses fragmentos carregam marcas químicas, chamadas de metilações, que variam conforme o tecido de origem e podem mudar quando há doença. O MethylScan foi projetado para retirar parte do DNA abundante que vem das células do sangue e enriquecer os fragmentos com sinais potencialmente relacionados a tumores ou a órgãos lesionados.

A equipe combinou essa análise molecular com modelos de aprendizado de máquina. A proposta não é procurar apenas uma mutação específica, mas observar um conjunto mais amplo de marcas que pode indicar a presença de uma alteração e sugerir de qual tecido ela veio.

> **Por que isso importa?** Um teste capaz de apontar simultaneamente sinais de diferentes doenças poderia, no futuro, ajudar a direcionar a investigação médica. Mas um resultado positivo não seria um diagnóstico: ele precisaria ser confirmado por exames de imagem, biópsia ou outros métodos apropriados.

## Resultados para câncer em estágio inicial

O estudo, publicado na revista Proceedings of the National Academy of Sciences (PNAS), analisou 1.061 amostras de plasma. Desse total, 460 vieram de pessoas com câncer de fígado, pulmão, ovário ou estômago, enquanto 601 pertenciam a grupos sem câncer, incluindo pessoas com doenças hepáticas crônicas, nódulos pulmonares benignos e visitantes hospitalares sem câncer.

Considerando diferentes estágios dos quatro tumores, o modelo identificou cerca de 63% dos casos quando configurado para uma especificidade de 98%. Isso significa que aproximadamente 2% das amostras sem câncer foram classificadas como positivas nesse ponto de corte. Nos tumores em estágio inicial, correspondentes aos estágios I e II, a sensibilidade média foi de 55,3%, com intervalo de confiança de 49,1% a 62,1%.

A sensibilidade não foi igual para todos os tumores. O número de amostras de câncer gástrico, por exemplo, foi menor na etapa de descoberta dos marcadores, o que pode ter influenciado o desempenho desse subtipo.

## Desempenho em pessoas com alto risco de câncer de fígado

Uma análise separada reuniu 91 pessoas com câncer hepático e 157 participantes sem câncer, mas com condições associadas a maior risco, como hepatite B, hepatite C, doença hepática relacionada ao álcool e doença hepática esteatótica associada à disfunção metabólica.

Entre os tumores hepáticos em estágio inicial, que representavam 79,1% dos casos desse subgrupo, o método alcançou sensibilidade de 76,3% com especificidade de 98%. Esse resultado é promissor para a vigilância de grupos de alto risco, mas não equivale à validação de um novo protocolo clínico. O estudo não comparou o MethylScan, em um programa real de rastreamento, com a estratégia atualmente recomendada para cada população.

## O teste também diferenciou doenças do fígado?

Os pesquisadores avaliaram se os padrões de DNA poderiam separar tipos de doença hepática. O desempenho foi melhor para hepatites B e C, com acurácia superior a 79% e precisão acima de 92% nas análises descritas no artigo. Para doença hepática relacionada ao álcool e doença esteatótica associada à disfunção metabólica, os resultados foram mais modestos: os próprios autores relacionam parte dessa diferença ao tamanho reduzido de alguns grupos.

A equipe também usou a composição do DNA circulante para estimar sinais de dano em tecidos. Essa parte sugere que o sangue pode carregar informações sobre a origem celular de alterações, mas não permite concluir sozinho qual doença está causando o dano.

## Atenção: o que o estudo não mostra

O trabalho não demonstrou que o MethylScan reduz mortes, aumenta a sobrevida ou melhora o tratamento de pessoas com câncer. Também não mostrou que o teste substitui exames já usados na prática clínica. Sensibilidade de 55,3% em tumores iniciais significa que uma parcela relevante dos casos não foi identificada no ponto de corte analisado; especificidade de 98% ainda deixa espaço para resultados falsos positivos.

Além disso, as amostras vieram de grupos selecionados, e não de uma população ampla de pessoas assintomáticas convidadas para um programa de rastreamento. Esse desenho pode produzir estimativas diferentes das observadas em serviços de saúde, onde a prevalência das doenças, a diversidade da população e os motivos para realizar o exame são outros.

## O que vem agora

A próxima etapa é avaliar o método prospectivamente, antes que os participantes recebam o diagnóstico, em populações mais diversas e com acompanhamento suficiente para medir falsos positivos, falsos negativos, exames adicionais, ansiedade, custos e possíveis efeitos sobre decisões médicas. Também será necessário comparar o MethylScan com os exames padrão e estabelecer como um resultado positivo seria confirmado.

Por enquanto, a descoberta deve ser interpretada como uma demonstração de viabilidade de uma tecnologia de análise de DNA circulante. Ela aproxima a pesquisa de um teste capaz de reunir sinais de vários órgãos em uma única amostra, mas ainda está distante de um exame universal disponível em laboratórios para a população geral.

## Sobre o estudo

A pesquisa é um estudo de desenvolvimento e avaliação diagnóstica baseado em amostras humanas de plasma e tecido, com modelos computacionais de classificação. Não é um ensaio clínico randomizado e não avaliou um tratamento. O artigo foi publicado em 2026 na PNAS, volume 123, edição 15, com DOI 10.1073/pnas.2518347123. A publicação informa apoio parcial do National Cancer Institute; o leitor deve consultar a declaração completa de interesses concorrentes no artigo e nos materiais suplementares.

## Fontes e transparência

A reportagem foi produzida de forma original pelo EuvouserDoutor. Os resultados, a amostra e o desenho da pesquisa foram conferidos no artigo publicado pela PNAS e no material institucional da UCLA Health Sciences.

O MethylScan representa uma possibilidade relevante para o futuro dos exames de sangue, mas a evidência atual ainda pede validação em pessoas acompanhadas desde antes do diagnóstico. É essa etapa que dirá se a promessa observada no laboratório poderá se transformar em uma ferramenta segura e útil na prática médica.

**EuvouserDoutor - Jeff Queiroz**`,
  },
];
