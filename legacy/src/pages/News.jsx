import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Sparkles, TrendingUp, Filter } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { SafeImage } from '../components/SafeImage';
import { autoPosts } from '../autoPosts';

export const News = ({ setView }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', 'Saúde Pública', 'Saúde & Ciência', 'Tecnologia Médica', 'Técnicas de estudo', 'Neurologia', 'Rotina', 'Revisão'];

  const posts = [...autoPosts,
    {
      id: "post_tilapia_factory_ceara_2026",
      title: "Ceará terá fábrica de curativos feitos com pele de tilápia em escala industrial",
      subtitle: "Projeto em Jaguaribara pretende transformar uma tecnologia desenvolvida no Ceará em produto farmacêutico; estudos clínicos anteriores apontaram menos trocas de curativo e menor custo em queimaduras.",
      cat: "Inovação Médica",
      date: "15 Ago 2026",
      readTime: "8 min",
      img: "/curativo_pele_tilapia_ceara_2026.jpg",
      target: "post_tilapia_factory_ceara_2026",
      featured: true,
    },
    {
      id: "post_plcg2_alzheimer_synapses_2026",
      title: "Gene ligado ao Alzheimer afeta sinapses em neurônios humanos, mostra estudo",
      subtitle: "Pesquisa na Nature Genetics relaciona a redução de PLCG2 a alterações sinápticas e a marcadores celulares da doença, mas ainda não testa tratamento em pessoas.",
      cat: "Neurociência",
      date: "14 Ago 2026",
      readTime: "8 min",
      img: "/plcg2_sinapses_alzheimer_2026.webp",
      target: "post_plcg2_alzheimer_synapses_2026",
      featured: true,
    },
    {
      id: "post_fnip1_gene_metabolism_2026",
      title: "Vantagem Genética: Mutação no Gene FNIP1 Reduz Gordura e Risco Cardíaco",
      subtitle: "Estudo massivo na Nature identifica 'freio biológico' que protege contra obesidade e diabetes em 1 milhão de pessoas.",
      cat: "Saúde & Ciência",
      date: "14 Ago 2026",
      readTime: "8 min",
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
      target: "post_fnip1_gene_metabolism_2026",
      featured: true,
    },
    {
      id: "post_once_weekly_hiv_pill_2026",
      title: "Fim do Comprimido Diário? Pílula Semanal Contra HIV Apresenta Resultados Históricos",
      subtitle: "Estudo de Fase 3 no The Lancet revela que a combinação de islatravir e lenacapavir mantém a supressão viral com apenas uma dose por semana.",
      cat: "Inovação Médica",
      date: "14 Ago 2026",
      readTime: "8 min",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200",
      target: "post_once_weekly_hiv_pill_2026",
      featured: true,
    },
    {
      id: "post_lab_grown_sperm_nature_2026",
      title: "Revolução na Fertilidade: Cientistas Criam Espermatozoides em Laboratório",
      subtitle: "Descoberta histórica na Nature revela técnica que gera células germinativas humanas a partir de células-tronco.",
      cat: "Inovação & Futuro",
      date: "14 Ago 2026",
      readTime: "9 min",
      img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1200",
      target: "post_lab_grown_sperm_nature_2026",
      featured: true,
    },
    {
      id: "post_polylaminin_spinal_cord_recovery_2026",
      title: "Ciência Brasileira: Tratamento com Polilaminina em Lesão Medular",
      subtitle: "Estudo clínico da UFRJ revela que a molécula descoberta no Brasil foi capaz de reverter paralisias graves e devolver sensibilidade.",
      cat: "Saúde & Ciência",
      date: "14 Ago 2026",
      readTime: "9 min",
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
      target: "post_polylaminin_spinal_cord_recovery_2026",
    },
    {
      id: "post_verve_base_editing_cholesterol_2026",
      title: "Edição Genética de Dose Única Reduz Colesterol em 62%",
      subtitle: "Terapia revolucionária VERVE-102 utiliza 'base editing' para desligar gene no fígado e oferece cura potencial para o colesterol alto.",
      cat: "Inovação & Futuro",
      date: "14 Ago 2026",
      readTime: "8 min",
      img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200",
      target: "post_verve_base_editing_cholesterol_2026",
    },
    {
      id: "post_fit_test_sus_colorectal_cancer_2026",
      title: "SUS Adota Teste FIT para Rastrear Câncer de Intestino",
      subtitle: "Ministério da Saúde incorporou teste de alta tecnologia que detecta câncer colorretal com 92% de precisão e sem dieta prévia.",
      cat: "Saúde Pública",
      date: "14 Ago 2026",
      readTime: "6 min",
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
      target: "post_fit_test_sus_colorectal_cancer_2026",
    },
    {
      id: "post_ai_science_research_limitations_2026",
      title: "IA Cientista: Nature Alerta Limites da Pesquisa Autônoma",
      subtitle: "Análise revela que inteligência artificial ainda não está pronta para substituir o rigor e a intuição humana na ciência.",
      cat: "Inovação & Futuro",
      date: "14 Ago 2026",
      readTime: "8 min",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      target: "post_ai_science_research_limitations_2026",
    },
    {
      id: "post_moderna_mrna_flu_vaccine_2026",
      title: "FDA Aprova Primeira Vacina de mRNA contra Gripe",
      subtitle: "Imunizante da Moderna demonstra eficácia superior aos tradicionais e permite adaptação recorde a novas cepas.",
      cat: "Saúde Pública",
      date: "14 Ago 2026",
      readTime: "7 min",
      img: "https://images.unsplash.com/photo-1618961734760-466979ce35b0?auto=format&fit=crop&q=80&w=1200",
      target: "post_moderna_mrna_flu_vaccine_2026",
    },
    {
      id: "post_science_alzheimer_fraud_investigation_2026",
      title: "Escândalo na Ciência: Science Questiona Genes do Alzheimer",
      subtitle: "Investigação aponta indícios de manipulação de dados em estudos que prometiam revolucionar o tratamento da demência.",
      cat: "Ciência & Ética",
      date: "14 Ago 2026",
      readTime: "10 min",
      img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200",
      target: "post_science_alzheimer_fraud_investigation_2026",
    },
    {
      id: "post_waist_bmi_heart_risk_2026",
      title: "Cintura é Melhor Preditor de Risco Cardíaco que o IMC",
      subtitle: "Estudo massivo revela que a gordura abdominal identifica perigos ao coração mesmo em quem tem peso normal.",
      cat: "Saúde & Ciência",
      date: "14 Ago 2026",
      readTime: "8 min",
      img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=1200",
      target: "post_waist_bmi_heart_risk_2026",
    },
    {
      id: "post_insilico_ai_drug_discovery_2026",
      title: "IA na Medicina: Novo Benchmark Global de Fármacos",
      subtitle: "Ferramenta avalia eficiência de robôs na criação de novos medicamentos, reduzindo custos em até 70%.",
      cat: "Inovação & Futuro",
      date: "14 Ago 2026",
      readTime: "7 min",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      target: "post_insilico_ai_drug_discovery_2026",
    },
    {
      id: "post_duvyzat_duchenne_anvisa_2026",
      title: "Anvisa Aprova Duvyzat para Distrofia de Duchenne",
      subtitle: "Registro do primeiro tratamento não esteroidal marca vitória histórica para famílias brasileiras.",
      cat: "Saúde Pública",
      date: "14 Ago 2026",
      readTime: "6 min",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200",
      target: "post_duvyzat_duchenne_anvisa_2026",
    },
    {
      id: "post_dengue_brazil_balance_2026",
      title: "Dengue no Brasil: Casos Recuam 75% em 2026",
      subtitle: "Balanço aponta eficácia da vacinação e alerta para riscos climáticos futuros.",
      cat: "Saúde Pública",
      date: "14 Ago 2026",
      readTime: "6 min",
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
      target: "post_dengue_brazil_balance_2026",
    },
    {
      id: "post_head_neck_cancer_chemo_immuno_2026",
      title: "Nova Estratégia Contra Câncer de Cabeça e Pescoço",
      subtitle: "Quimio-imunoterapia antes da cirurgia reduz tumores de forma significativa, revela estudo no JAMA.",
      cat: "Inovação Médica",
      date: "14 Ago 2026",
      readTime: "7 min",
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
      target: "post_head_neck_cancer_chemo_immuno_2026",
    },
    {
      id: "post_acoustic_robots_science_2026",
      title: "Minirrobôs sem Bateria Voam com Ondas Sonoras",
      subtitle: "Ressonadores acústicos capazes de navegar por ambientes complexos sem eletrônica embarcada.",
      cat: "Inovação Médica",
      date: "14 Ago 2026",
      readTime: "5 min",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
      target: "post_acoustic_robots_science_2026",
    },
    {
      id: "post_heart_gene_architect_2026",
      title: "Gene 'Arquiteto' do Coração Organiza o DNA",
      subtitle: "Descoberta revela como falhas genéticas fazem o DNA se dobrar errado e causam malformações.",
      cat: "Inovação Médica",
      date: "14 Ago 2026",
      readTime: "8 min",
      img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200",
      target: "post_heart_gene_architect_2026",
    },
    {
      id: "post_vanillin_vape_embryonic_cells_2026",
      title: "Vanilina em Vapes pode Alterar Células Embrionárias",
      subtitle: "Estudo alerta que aromatizante comum pode dificultar a gravidez e prejudicar o embrião.",
      cat: "Saúde Pública",
      date: "14 Ago 2026",
      readTime: "6 min",
      img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200",
      target: "post_vanillin_vape_embryonic_cells_2026",
    },
    {
      id: "post_whale_longevity_dna_repair_2026",
      title: "O Segredo da Longevidade: Como Baleias 'Consertam' o DNA",
      subtitle: "Mecanismos ultraeficientes de reparo genômico podem ser a chave para retardar o envelhecimento humano.",
      cat: "Saúde & Ciência",
      date: "14 Ago 2026",
      readTime: "10 min",
      img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=1200",
      target: "post_whale_longevity_dna_repair_2026",
    },
    {
      id: "post_mapa_nervo_vago_2026",
      title: "Mapa Inédito do Nervo Vago: O 'Santo Graal' da Medicina Bioeletrônica é Revelado na Science",
      subtitle: "Estudo histórico mapeia 200 mil fibras nervosas e abre caminho para tratamentos ultraprecisos de doenças inflamatórias e neurológicas sem o uso de medicamentos.",
      cat: "Tecnologia Médica",
      date: "13 Ago 2026",
      readTime: "8 min",
      img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200",
      target: "post_mapa_nervo_vago_2026",
      featured: true,
    },
    {
      id: "cintura_imc_2026",
      title: "Tamanho da Cintura é Melhor que o IMC para Prever Risco Cardíaco, Revela Estudo com 260 Mil Pessoas",
      subtitle: "Pesquisa publicada no JACC mostra que gordura abdominal identifica perigos ao coração mesmo em quem tem peso considerado normal; entenda os novos limites.",
      cat: "Saúde Pública",
      date: "12 Ago 2026",
      readTime: "7 min",
      img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=1200",
      target: "post_cintura_imc_2026",
      featured: false,
    },
    {
      id: "post_hearing_gene_therapy_2026",
      title: "Terapia Gênica Restaura Audição Natural em Crianças e Adultos Surdos, Revela Estudo Histórico na Nature",
      subtitle: "Pesquisa multicêntrica publicada na Nature e Nature Medicine demonstra recuperação auditiva duradoura de até 2,5 anos em pacientes com surdez congênita relacionada ao gene OTOF.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "8 min",
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
      target: "post_hearing_gene_therapy_2026",
      featured: false,
    },
        {
          id: "ebola_outbreak_drc_2026",
          title: "Ebola: OMS Emite Alerta Urgente Sobre Segunda Maior Epidemia da História; Mortes Superam 2 Mil",
          subtitle: "Diretor-Geral da OMS afirma que surto na República Democrática do Congo avança em ritmo sem precedentes e pode se tornar o mais letal já registrado se o financiamento não chegar.",
          cat: "Saúde Pública",
          date: "12 Ago 2026",
          readTime: "8 min",
          img: "/editorial/ebola_congo_2026.webp",
          target: "post_ebola_outbreak_drc_2026",
          featured: false,
        },
        {
          id: "ai_oncology_lymphoma_2026",
          title: "IA na Oncologia: Novo Modelo de Machine Learning Personaliza Tratamento de Linfoma e Evita Superdosagem",
          subtitle: "Estudo publicado na Science Partner Journals revela que algoritmo consegue identificar quais pacientes realmente se beneficiam da terapia de manutenção com rituximabe, reduzindo riscos e custos.",
          cat: "Saúde & Ciência",
          date: "12 Ago 2026",
          readTime: "8 min",
          img: "/editorial/ia_oncologia_linfoma_2026.webp",
          target: "post_ai_oncology_lymphoma_2026",
          featured: false,
        },
        {
          id: "silicosis_engineered_stone_2026",
          title: "Alerta de Saúde: Bancadas de Quartzo Causam Surto de Doença Pulmonar Fatal em Trabalhadores",
          subtitle: "Estudo publicado no NEJM revela centenas de casos de silicose grave e dezenas de mortes ligadas ao corte de pedras artificiais; especialistas pedem proibição do material.",
          cat: "Saúde Pública",
          date: "12 Ago 2026",
          readTime: "7 min",
          img: "/editorial/angiotomografia_coronariana_2026.webp",
          target: "post_silicosis_engineered_stone_2026",
          featured: false,
        },
        {
          id: "ai_knee_mri_2026",
          title: "IA reduz em 55% o tempo da ressonância do joelho sem perder qualidade em estudo",
          subtitle: "Pesquisa prospectiva na Scientific Reports combinou compressão assistida por inteligência artificial e reconstrução por deep learning; resultado ainda é de viabilidade e não substitui a avaliação de radiologistas.",
          cat: "Tecnologia Médica",
          date: "12 Ago 2026",
          readTime: "7 min",
          img: "/editorial/angiotomografia_coronariana_2026.webp",
          target: "post_ai_knee_mri_2026",
          featured: false,
        },
        {
          id: "promote_polipilula_avc_2026",
          title: "Brasil testa polipílula para prevenir AVC e declínio cognitivo em mais de 8 mil pessoas",
          subtitle: "Ensaio clínico de fase 3 compara cápsula com três medicamentos e cuidado habitual; pesquisa ainda não tem resultados finais nem transforma a combinação em tratamento disponível.",
          cat: "Saúde Pública",
          date: "12 Ago 2026",
          readTime: "7 min",
          img: "/editorial/dbs_parkinson_2026.webp",
          target: "post_promote_polipilula_avc_2026",
          featured: false,
        },
        {
          id: "anvisa_plataformas_medicamentos_regulacao_2026",
          title: "Anvisa revoga bloqueios a apps de remédios, mas venda ainda depende de novas regras",
          subtitle: "Nota da agência esclarece que iFood, Rappi, Mercado Livre e outras plataformas continuam sujeitas à regulamentação sanitária; a mudança não libera automaticamente a comercialização.",
          cat: "Saúde Pública",
          date: "12 Ago 2026",
          readTime: "6 min",
          img: "/editorial/ia_oncologia_linfoma_2026.webp",
          target: "post_anvisa_plataformas_medicamentos_regulacao_2026",
          featured: false,
        },
    {
      id: "hiv_vaccine_breakthrough_2026",
      title: "Vacina contra HIV: Estudo na Nature revela avanço histórico na produção de anticorpos potentes",
      subtitle: "Pesquisa em primatas demonstra que nova estratégia consegue 'treinar' o sistema imune para combater variantes globais do vírus; descoberta aproxima ciência da vacina definitiva.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "8 min",
      img: "/editorial/vacina_hiv_2026.webp",
      target: "post_hiv_vaccine_breakthrough_2026",
      featured: false,
    },
    {
      id: "huntington_msh3_study_2026",
      title: "Bloqueio Genético: Cientistas Conseguem Interromper Avanço da Doença de Huntington em Estudo Histórico",
      subtitle: "Pesquisa publicada na revista Science revela que o silenciamento do gene MSH3 impede a expansão de mutações tóxicas no cérebro, abrindo caminho para tratamentos que podem adiar a doença por décadas.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "8 min",
      img: "/editorial/fibromialgia_genetica_2026.webp",
      target: "post_huntington_msh3_study_2026",
      featured: false,
    },
    {
      id: "broccoli_ataxia_study_2026",
      title: "Brócolis contra Ataxia: Composto Natural Pode Tratar Doença Neurológica Rara, Revela Estudo",
      subtitle: "Pesquisadores da Universidade Swinburne descobrem que o sulforafano, presente no vegetal, aumenta níveis de proteína essencial e protege neurônios em pacientes com Ataxia de Friedreich.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "7 min",
      img: "/editorial/fibromialgia_genetica_2026.webp",
      target: "post_broccoli_ataxia_study_2026",
      featured: false,
    },
    {
      id: "brain_stimulation_genes_2026",
      title: "Marca-passo Cerebral Ativa 'Programas Genéticos' Ocultos para Curar o Cérebro",
      subtitle: "Estudo histórico na Nature revela que a estimulação elétrica profunda (DBS) modula 611 genes em células específicas, abrindo caminho para tratamentos personalizados de Parkinson e depressão.",
      cat: "Neurociência",
      date: "12 Ago 2026",
      readTime: "8 min",
      img: "/editorial/dbs_parkinson_2026.webp",
      target: "post_brain_stimulation_genes_2026",
      featured: false,
    },
    {
      id: "anemia_eye_ai_2026",
      title: "IA analisa vasos do olho e estima anemia sem coleta de sangue em estudo",
      subtitle: "Tecnologia Video-to-Vessels avaliou vídeos de 224 pessoas e teve AUC de 82,8%; resultado é experimental e ainda não substitui hemograma.",
      cat: "Tecnologia Médica",
      date: "12 Ago 2026",
      readTime: "7 min",
      img: "/editorial/anemia_retina_ia_2026.webp",
      target: "post_anemia_eye_ai_2026",
      featured: false,
    },
    {
      id: "ringconn_nature_study_2026",
      title: "Anéis Inteligentes: Estudo na Nature Revela que Monitoramento em Duas Mãos Aumenta Precisão Cardíaca",
      subtitle: "Pesquisa histórica com quase 100 mil amostras valida eficácia de dispositivos vestíveis para acompanhamento contínuo da saúde cardiovascular e detecção de riscos.",
      cat: "Tecnologia Médica",
      date: "12 Ago 2026",
      readTime: "7 min",
      img: "https://images.unsplash.com/photo-1618961734760-466979ce35b0?auto=format&fit=crop&q=80&w=1200",
      target: "post_ringconn_nature_study_2026",
      featured: false,
    },
    {
      id: "neo_brain_implant_2026",
      title: "Implante Cerebral 'NEO' Recebe Primeira Aprovação Comercial para Tratar Tetraplegia",
      subtitle: "Dispositivo chinês de interface cérebro-computador (BCI) permite que pacientes com lesões medulares recuperem movimentos das mãos e autonomia; tecnologia marca o início da era comercial da neurotecnologia.",
      cat: "Tecnologia Médica",
      date: "12 Ago 2026",
      readTime: "8 min",
      img: "/editorial/dbs_parkinson_2026.webp",
      target: "post_neo_brain_implant_2026",
      featured: false,
    },
    {
      id: "pfas_microplastics_removal_2026",
      title: "'Limpeza' de Sangue: Procedimento Médico Consegue Remover Microplásticos e PFAS do Corpo Humano",
      subtitle: "Estudo publicado no Journal of Clinical Apheresis revela que técnica usada para colesterol reduz em 60% a presença de contaminantes ambientais no sangue.",
      cat: "Inovação Médica",
      date: "12 Ago 2026",
      readTime: "7 min",
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
      target: "post_pfas_microplastics_removal_2026",
      featured: false,
    },
    {
      id: "microbiota_psicopatia_2026",
      title: "As Bactérias da 'Maldade'? Estudo Liga Microbiota a Traços de Psicopatia",
      subtitle: "Pesquisa na Translational Psychiatry revela que micróbios no intestino e na boca podem influenciar comportamentos como impulsividade e falta de empatia.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "8 min",
      img: "/editorial/microbiota_transplante_amendoim_2026.webp",
      target: "post_microbiota_psicopatia_2026",
      featured: false,
    },
    {
      id: "chip_eny_unb_2026",
      title: "Tecnologia Brasileira de 'Órgão em Chip' Promete Fim dos Testes em Animais",
      subtitle: "Desenvolvida na UnB, a plataforma Chip-Eny cultiva células em 3D para simular o organismo humano com precisão inédita, acelerando a descoberta de novos medicamentos.",
      cat: "Tecnologia Médica",
      date: "12 Ago 2026",
      readTime: "7 min",
      img: "/retina_chip_tech.webp",
      target: "post_chip_eny_unb_2026",
      featured: false,
    },
    {
      id: "ozempic_brain_addiction_2026",
      title: "Além do Peso: Ozempic 'Desliga' o Centro de Vício no Cérebro, Revela Estudo",
      subtitle: "Pesquisadores identificam o septo lateral como o ponto de controle onde medicamentos para emagrecer atuam para reduzir o desejo por álcool e drogas; descoberta pode revolucionar o tratamento de vícios.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "8 min",
      img: "/editorial/glp1_oral_2026.webp",
      target: "post_ozempic_brain_addiction_2026",
      featured: false,
    },
    {
      id: "ucla_blood_test_2026",
      title: "Exame de sangue experimental identifica sinais de vários cânceres em um único teste",
      subtitle: "Método da UCLA analisou padrões de metilação do DNA em 1.061 amostras; resultado é promissor, mas ainda não substitui exames de rastreamento.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "8 min",
      img: "/editorial/anemia_retina_ia_2026.webp",
      target: "post_ucla_blood_test_2026",
      featured: false,
    },
    {
      id: "parkinson_brain_rhythm_dbs_2026",
      title: "Ritmo Cerebral 'Oculto' é a Chave para o Sucesso do Marca-passo Cerebral no Parkinson",
      subtitle: "Descoberta inédita identifica a frequência exata (20-35 Hz) que coordena a melhora dos sintomas; estudo abre caminho para tratamentos personalizados.",
      cat: "Neurologia",
      date: "12 Ago 2026",
      readTime: "7 min",
      img: "/editorial/dbs_parkinson_2026.webp",
      target: "post_parkinson_brain_rhythm_dbs_2026",
      featured: false,
    },
    {
      id: "omega3_cancer_nk_2026",
      title: "Omega-3 Pode 'Sabotar' Tratamento de Câncer, Revela Estudo na Science",
      subtitle: "Pesquisa inédita mostra que certos ácidos graxos inibem a ação de células de defesa e reduzem a eficácia da imunoterapia em tumores de cólon; entenda o mecanismo.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "8 min",
      img: "/editorial/ia_oncologia_linfoma_2026.webp",
      target: "post_omega3_cancer_nk_2026",
      featured: false,
    },
    {
      id: "alzheimer_surgery_dcLVA_2026",
      title: "Cirurgia Controversa de Alzheimer: Ciência Investiga Procedimento que Promete Reverter Sintomas",
      subtitle: "Técnica de 'limpeza cerebral' através de microcirurgia no pescoço gera debate na comunidade médica após vídeos de recuperações surpreendentes; Nature detalha o que se sabe até agora.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "9 min",
      img: "/editorial/dbs_parkinson_2026.webp",
      target: "post_alzheimer_surgery_dcLVA_2026",
      featured: false,
    },
        {
          id: "fit_cancer_colorretal_sus_2026",
          title: "SUS passa a usar teste de fezes para rastrear câncer colorretal antes dos sintomas",
          subtitle: "O exame imunoquímico fecal será referência para pessoas assintomáticas de 50 a 75 anos; resultado positivo exige investigação, geralmente com colonoscopia.",
          cat: "Saúde Pública",
          date: "12 Ago 2026",
          readTime: "7 min",
          img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
          target: "post_fit_cancer_colorretal_sus_2026",
          featured: false,
        },

    {
      id: "fnip1_gene_metabolism_2026",
      title: "Descoberto o 'Gene da Magreza': Mutação Rara no FNIP1 Reduz em 60% o Risco de Doenças Metabólicas",
      subtitle: "Estudo histórico com 1 milhão de pessoas publicado na Nature identifica variante genética que protege contra obesidade e diabetes ao acelerar a queima de energia.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "8 min",
      img: "/editorial/glp1_oral_2026.webp",
      target: "post_fnip1_gene_metabolism_2026",
      featured: false,
    },
    {
      id: "in_vivo_car_t_mrna_2026",
      title: "Nanopartícula de mRNA cria células CAR-T dentro do corpo em estudo pré-clínico",
      subtitle: "Pesquisa publicada na Nature Materials desenvolveu um veículo que entrega mRNA a células T e gerou CAR-T em modelos de câncer e fibrose; testes em pessoas ainda não começaram.",
      cat: "Tecnologia Médica",
      date: "12 Ago 2026",
      readTime: "8 min",
      img: "/editorial/leucemia_celulas_car_t_2026.webp",
      target: "post_in_vivo_car_t_mrna_2026",
      featured: false,
    },
    {
      id: "wool_bone_regeneration_2026",
      title: "Lã de Ovelha: O Novo 'Ouro' da Medicina Regenerativa para Ossos",
      subtitle: "Estudo do King's College London revela que a queratina extraída da lã supera o colágeno na regeneração de tecidos ósseos, criando estruturas mais fortes e organizadas.",
      cat: "Tecnologia Médica",
      date: "12 Ago 2026",
      readTime: "7 min",
      img: "/editorial/la_regeneracao_ossea_2026.webp",
      target: "post_wool_bone_regeneration_2026",
      featured: false,
    },
    {
      id: "fibromyalgia_genetics_2026",
      title: "Fibromialgia é um Transtorno do Sistema Nervoso Central, Comprova Estudo com 2,5 Milhões de Pessoas",
      subtitle: "Pesquisa histórica publicada na Nature Medicine identifica 2 risk loci e revela que a arquitetura genética da doença é idêntica entre homens e mulheres, apesar da diferença na prevalência.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "9 min",
      img: "/editorial/fibromialgia_genetica_2026.webp",
      target: "post_fibromyalgia_genetics_2026",
      featured: false,
    },
    {
      id: "origins_life_double_2026",
      title: "A Vida Começou Duas Vezes? Nova Descoberta Desafia a Origem da Biologia na Terra",
      subtitle: "Estudo publicado na Science Advances revela que bactérias e arqueias evoluíram para a vida independente de forma separada; descoberta sugere que LUCA não era uma célula livre.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "8 min",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      target: "post_origins_life_double_2026",
      featured: false,
    },
    {
      id: "measles_americas_2026",
      title: "Sarampo dispara nas Américas e Brasil reforça vacinação; veja quem precisa se proteger",
      subtitle: "Região chegou a 47.459 casos confirmados e 44 mortes em 2026; no Brasil, o Ministério da Saúde ampliou a vacinação em três municípios paulistas.",
      cat: "Saúde Pública",
      date: "12 Ago 2026",
      readTime: "7 min",
      img: "/editorial/sarampo_vacinacao_americas_2026.webp",
      target: "post_measles_americas_2026",
      featured: false,
    },
    {
      id: "amiloride_wfdc2_2026",
      title: "Medicamento Comum para Pressão Pode Tratar Doença Respiratória Fatal, Revela Nature",
      subtitle: "Estudo publicado na Nature Communications identifica mutação no gene WFDC2 como causa de insuficiência respiratória grave e aponta a Amilorida como solução terapêutica promissora.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "7 min",
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
      target: "post_amiloride_wfdc2_2026",
      featured: false,
    },
    {
      id: "paternal_diet_usp_2026",
      title: "Você é o que seu pai comeu: Dieta paterna de ultraprocessados altera genes do bebê, revela USP",
      subtitle: "Estudo inédito da FMRP-USP em Ribeirão Preto mostra que o consumo de alimentos industrializados pelos pais antes da concepção afeta o peso e o acúmulo de gordura dos recém-nascidos via epigenética.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "8 min",
      img: "/editorial/microbiota_transplante_amendoim_2026.webp",
      target: "post_paternal_diet_usp_2026",
      featured: false,
    },
    {
      id: "oral_glp1_pill_2026",
      title: "Nova Pílula Oral GLP-1 Promove Até 12% de Perda de Peso em Ensaio Clínico de Fase 2",
      subtitle: "Estudo publicado na Nature Medicine demonstra que o aleniglipron, agonista oral de pequenas moléculas, oferece eficácia comparável a injetáveis com a vantagem de fabricação escalável e uso diário simplificado.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "7 min",
      img: "/editorial/glp1_oral_2026.webp",
      target: "post_oral_glp1_pill_2026",
      featured: false,
    },
        {
          id: "daraxonrasib_2026",
          title: "Pílula Inovadora Duplica Sobrevida em Câncer de Pâncreas Metastático",
          subtitle: "Resultados do estudo RASolute 302, publicados no NEJM, revelam avanço histórico com inibidor oral que reduz risco de morte em 60%.",
          cat: "Saúde & Ciência",
          date: "11 Ago 2026",
          readTime: "8 min",
          img: "/editorial/daraxonrasib_pancreas_2026.webp",
          target: "post_daraxonrasib_2026",
          featured: false,
        },
        {
          id: "angiotomografia_coronariana_sus_2026",
          title: "SUS Avalia Inclusão de Exame que Identifica Risco de Infarto de Forma Não Invasiva",
          subtitle: "Conitec abre consulta pública para angiotomografia coronariana; tecnologia pode transformar o diagnóstico de doenças cardíacas, que causam 300 mil mortes por ano no Brasil.",
          cat: "Saúde & Ciência",
          date: "12 Ago 2026",
          readTime: "8 min",
          img: "/editorial/angiotomografia_coronariana_2026.webp",
          target: "post_angiotomografia_coronariana_sus_2026",
          featured: false,
        },
    {
      id: "gel_unicamp_chica_2026",
      title: "Gel de Planta Brasileira Cicatriza Feridas 2x Mais Rápido, Revela Estudo da Unicamp",
      subtitle: "Desenvolvido a partir da 'chica', fitoterápico inovador acelera a cura de feridas graves e mucosite oral em pacientes com câncer, superando a eficácia do laser.",
      cat: "Saúde & Ciência",
      date: "12 Ago 2026",
      readTime: "7 min",
      img: "/editorial/gel_crajiru_unicamp_2026.webp",
      target: "post_gel_unicamp_chica_2026",
      featured: false,
    },
    {
      id: "leukemia_gene_therapy_2026",
      title: "Terapia Genética 'Pronta para Uso' Elimina Leucemia Incurável em 64% dos Pacientes",
      subtitle: "Estudo clínico do Great Ormond Street Hospital, publicado no NEJM, utiliza edição de base para criar células imunes universais que superam o câncer resistente.",
      cat: "Saúde & Ciência",
      date: "11 Ago 2026",
      readTime: "7 min",
      img: "/editorial/leucemia_celulas_car_t_2026.webp",
      target: "post_leukemia_gene_therapy_2026",
      featured: false,
    },
    {
      id: "lens_3d_waterloo_2026",
      title: "Lentes de Contato Impressas em 3D em 20 Minutos: A Revolução da Universidade de Waterloo",
      subtitle: "Nova plataforma de manufatura digital combina silicone hidrofílico e impressão DLP para criar lentes personalizadas em uma única consulta, transformando o tratamento de córneas irregulares.",
      cat: "Tecnologia Médica",
      date: "12 Ago 2026",
      readTime: "6 min",
      img: "/editorial/lente_contato_3d_2026.webp",
      target: "post_lens_3d_waterloo_2026",
      featured: false,
    },
    {
      id: "coffee_brain_2026",
      title: "Café sem Açúcar: Estudo Revela Como a Bebida Fortalece Conexões Neurais e Protege o Cérebro",
      subtitle: "Pesquisa de longo prazo com 130 mil pessoas e análises de neuroimagem da Johns Hopkins confirmam que o café puro atua como um 'escudo' para o cérebro, reorganizando redes neurais para maior eficiência.",
      cat: "Saúde & Ciência",
      date: "11 Ago 2026",
      readTime: "7 min",
      img: "/editorial/dbs_parkinson_2026.webp",
      target: "post_coffee_brain_2026",
      featured: false,
    },
    {
      id: "transplante_fecal_amendoim_2026",
      title: "Transplante Fecal Eleva Tolerância ao Amendoim em Estudo Clínico Inovador",
      subtitle: "Procedimento experimental demonstra que a transferência de microbiota de doadores saudáveis pode mitigar reações alérgicas severas em adultos.",
      cat: "Saúde & Ciência",
      date: "11 Ago 2026",
      readTime: "7 min",
      img: "/editorial/microbiota_transplante_amendoim_2026.webp",
      target: "post_transplante_fecal_amendoim_2026",
      featured: false,
    },
    {
      id: "estudar_medicina",
      title: "Como Estudar para Medicina com Método e Constância",
      subtitle: "Um guia editorial sobre rotina, revisão e organização para transformar esforço em processo de estudo.",
      cat: "Rotina",
      date: "10 Ago 2026",
      readTime: "12 min",
      img: "/jeff-queiroz-eu-vou-ser-doutor.webp",
      target: "post_estudar_medicina",
      featured: false,
    },
    {
      id: "cart_brasil_2026",
      title: "Terapia CAR-T 100% Nacional Atinge 72% de Remissão em Cânceres Avançados do Sangue",
      subtitle: "Inovação biotecnológica brasileira abre caminho para o acesso a tratamentos genéticos de ponta no SUS com custo reduzido.",
      cat: "Tecnologia Médica",
      date: "10 Ago 2026",
      readTime: "8 min",
      img: "/editorial/leucemia_celulas_car_t_2026.webp",
      target: "post_cart_brasil_2026",
      featured: false,
    },
    {
      id: "ebola_oxford_2026",
      title: "Oxford Inicia Ensaio Clínico de Vacina Contra o Vírus Ebola",
      subtitle: "Estudo de Fase 1 avaliará a segurança e a resposta imune do novo imunizante ChAdOx1 BDBV em voluntários saudáveis.",
      cat: "Saúde Pública",
      date: "09 Ago 2026",
      readTime: "6 min",
      img: "/editorial/ebola_congo_2026.webp",
      target: "post_ebola_oxford_2026",
      featured: false,
    },
    {
      id: "polilaminina",
      title: "Polilaminina: A Proteína Brasileira que Pode Revolucionar a Regeneração Neural",
      subtitle: "Descoberta na UFRJ, a substância demonstra capacidade inédita de guiar o crescimento de neurônios em lesões medulares e cerebrais.",
      cat: "Neurologia",
      date: "08 Ago 2026",
      readTime: "9 min",
      img: "/editorial/fibromialgia_genetica_2026.webp",
      target: "post_polilaminina",
      featured: false,
    },
    {
      id: "pomodoro",
      title: "Técnica Pomodoro: Como Blocos de Foco Podem Salvar sua Rotina de Estudos",
      subtitle: "Entenda a ciência por trás dos ciclos de 25 minutos e como aplicá-los para manter o alto rendimento sem esgotamento mental.",
      cat: "Técnicas de estudo",
      date: "07 Ago 2026",
      readTime: "5 min",
      img: "/jeff-queiroz-eu-vou-ser-doutor.webp",
      target: "post_pomodoro",
      featured: false,
    },
    {
      id: "spaced_repetition",
      title: "Revisão Espaçada: O Segredo para Nunca Mais Esquecer o que Estudou",
      subtitle: "Como o uso de algoritmos de repetição e flashcards pode otimizar a curva do esquecimento e garantir a memorização de longo prazo.",
      cat: "Revisão",
      date: "07 Ago 2026",
      readTime: "7 min",
      img: "/jeff-queiroz-eu-vou-ser-doutor.webp",
      target: "post_spaced_repetition",
      featured: false,
    },
    {
      id: "feynman",
      title: "Método Feynman: Se Você Não Sabe Explicar, Você Não Entendeu",
      subtitle: "A técnica do Nobel de Física que ajuda estudantes de medicina a dominar temas complexos através da simplificação radical.",
      cat: "Técnicas de estudo",
      date: "06 Ago 2026",
      readTime: "4 min",
      img: "/retina_chip_tech.webp",
      target: "post_feynman",
      featured: false,
    },
    {
      id: "mind_maps",
      title: "Mapas Mentais: Conectando os Pontos da Anatomia e Fisiologia",
      subtitle: "Como o pensamento radiante e a organização visual podem substituir resumos lineares e ineficientes.",
      cat: "Técnicas de estudo",
      date: "05 Ago 2026",
      readTime: "5 min",
      img: "/jeff-queiroz-eu-vou-ser-doutor.webp",
      target: "post_mind_maps",
      featured: false,
    },
    {
      id: "self_evaluation",
      title: "Autoavaliação: Transformando Erros em Pontos de Aprovação",
      subtitle: "O guia definitivo para analisar simulados e criar um plano de estudo baseado em dados reais de desempenho.",
      cat: "Rotina",
      date: "04 Ago 2026",
      readTime: "5 min",
      img: "/jeff-queiroz-eu-vou-ser-doutor.webp",
      target: "post_self_evaluation",
      featured: false,
    }
  ];

  const filteredPosts = selectedCategory === 'Todas' 
    ? posts 
    : posts.filter(post => post.cat === selectedCategory);

  const featuredPost = posts.find(p => p.featured);
  const recentPosts = filteredPosts.filter(p => !p.featured).slice(0, 3);
  const otherPosts = filteredPosts.filter(p => !p.featured).slice(3);

  return (
    <div className="bg-[#080A0F] text-[#F8FAFC] min-h-screen pb-24 text-left">
      {/* Editorial Header */}
      <div className="bg-[#0A192F] border-b border-white/[0.05] pt-16 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(79,140,255,0.15),transparent_40%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-[#4F8CFF]"></span>
            <span className="text-[10px] font-black text-[#4F8CFF] uppercase tracking-[0.4em]">Editorial Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-[#F8FAFC] mb-8">
            Notícias <span className="text-white/20">&</span> Insights
          </h1>
          <p className="text-lg md:text-xl text-[#98A2B3] font-medium max-w-2xl leading-relaxed">
            Explorando as fronteiras da medicina, ciência e tecnologia para acelerar sua jornada acadêmica.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-12 bg-[#11141A] p-2 rounded-[28px] border border-white/[0.05] w-fit shadow-2xl">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-[22px] text-[10px] font-black uppercase tracking-widest transition-all ${
                selectedCategory === cat 
                ? 'bg-[#4F8CFF] text-white shadow-[0_0_20px_rgba(79,140,255,0.4)]' 
                : 'text-[#98A2B3] hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <h2 className="sr-only">Lista de notícias</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 xl:col-span-9 space-y-12">
            {/* Featured Post */}
            {featuredPost && selectedCategory === 'Todas' && (
              <button
                type="button"
                onClick={() => setView(featuredPost.target)}
                className="w-full text-left group cursor-pointer relative rounded-[48px] overflow-hidden border border-white/[0.05] bg-[#11141A] hover-lift transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8CFF]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-[4/3] md:aspect-auto overflow-hidden relative">
                    <SafeImage 
                      src={featuredPost.img} 
                      alt={featuredPost.title} 
                      priority
                      width={1200}
                      height={900}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#11141A] via-transparent to-transparent opacity-60 hidden md:block" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                        {featuredPost.cat}
                      </span>
                      <span className="text-[10px] text-[#98A2B3] font-black uppercase tracking-widest flex items-center gap-2">
                        <Clock size={12} /> {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-white group-hover:text-[#4F8CFF] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-[#98A2B3] text-lg leading-relaxed line-clamp-3 font-medium">
                      {featuredPost.subtitle}
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <TrendingUp size={18} className="text-[#4F8CFF]" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">Matéria em Destaque</span>
                    </div>
                  </div>
                </div>
              </button>
            )}

            {/* Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {(selectedCategory === 'Todas' ? [...recentPosts, ...otherPosts] : filteredPosts).map((post, idx) => (
                <button
                  type="button"
                  key={post.id}
                  onClick={() => setView(post.target)}
                  className="w-full text-left group cursor-pointer bg-[#11141A] rounded-[40px] border border-white/[0.05] overflow-hidden hover-lift transition-all duration-500 flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8CFF]"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <SafeImage 
                      src={post.img} 
                      alt={post.title} 
                      width={960}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                        {post.cat}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow space-y-4">
                    <div className="flex items-center justify-between text-[9px] font-black text-[#98A2B3] uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Clock size={10} /> {post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight group-hover:text-[#4F8CFF] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#98A2B3] text-sm leading-relaxed line-clamp-3 font-medium flex-grow">
                      {post.subtitle}
                    </p>
                    <div className="pt-6 flex items-center gap-2 text-[9px] font-black text-[#4F8CFF] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                      Ler Matéria Completa <ArrowRight size={14} strokeWidth={3} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 xl:col-span-3">
            <Sidebar setView={setView} />
          </div>
        </div>
      </div>
    </div>
  );
};
