// Questionário Moorah v1.0 — Avaliação Psicossocial NR-1
// Núcleo: COPSOQ II-Br versão curta (NRCWE; Gonçalves et al., Rev Saúde Pública 2021;55:69)
// Módulos B–F: indicadores complementares Moorah (Guia FRPRT/MTE + Lei 14.457/22)
// ⚠️ A redação dos itens do Módulo A é oficial e não pode ser alterada.
// Este arquivo é o contrato de dados do questionário — o backend (AWS) consome esta mesma estrutura.

window.MORAH_QUESTIONARIO = {
  versao: '1.0',
  nucleo: 'COPSOQ II-Br (curta)',

  escalas: {
    FREQ:     [{ t: 'Sempre', v: 4 }, { t: 'Frequentemente', v: 3 }, { t: 'Às vezes', v: 2 }, { t: 'Raramente', v: 1 }, { t: 'Nunca', v: 0 }],
    FREQ_INV: [{ t: 'Sempre', v: 0 }, { t: 'Frequentemente', v: 1 }, { t: 'Às vezes', v: 2 }, { t: 'Raramente', v: 3 }, { t: 'Nunca', v: 4 }],
    MEDIDA:   [{ t: 'Em grande parte', v: 4 }, { t: 'Em boa parte', v: 3 }, { t: 'De certa forma', v: 2 }, { t: 'Pouco', v: 1 }, { t: 'Muito pouco', v: 0 }],
    MEDIDA_NA:[{ t: 'Em grande parte', v: 4 }, { t: 'Em boa parte', v: 3 }, { t: 'De certa forma', v: 2 }, { t: 'Pouco', v: 1 }, { t: 'Muito pouco', v: 0 }, { t: 'Não se aplica', v: null }],
    SATISF:   [{ t: 'Muito satisfeito', v: 3 }, { t: 'Satisfeito', v: 2 }, { t: 'Insatisfeito', v: 1 }, { t: 'Muito insatisfeito', v: 0 }],
    SIMNAO3:  [{ t: 'Sim, com certeza', v: 3 }, { t: 'Sim, até certo ponto', v: 2 }, { t: 'Sim, mas muito pouco', v: 1 }, { t: 'Não, realmente não', v: 0 }],
    SAUDE:    [{ t: 'Excelente', v: 4 }, { t: 'Muito boa', v: 3 }, { t: 'Boa', v: 2 }, { t: 'Razoável', v: 1 }, { t: 'Ruim', v: 0 }],
    EXPO:     [{ t: 'Sim, diariamente', v: 4 }, { t: 'Sim, semanalmente', v: 3 }, { t: 'Sim, mensalmente', v: 2 }, { t: 'Sim, poucas vezes', v: 1 }, { t: 'Não', v: 0 }],
    SIM_NAO:      [{ t: 'Sim', v: 1 }, { t: 'Não', v: 0 }],
    SIM_NAO_NS:   [{ t: 'Sim', v: 1 }, { t: 'Não', v: 0 }, { t: 'Não tenho certeza', v: 2 }],
    SIM_NAO_PNR:  [{ t: 'Sim', v: 1 }, { t: 'Não', v: 0 }, { t: 'Prefiro não responder', v: null }],
    TEMPO_EMPRESA:[{ t: 'Menos de 6 meses', v: 0 }, { t: '6 meses a 2 anos', v: 1 }, { t: '2 a 5 anos', v: 2 }, { t: 'Mais de 5 anos', v: 3 }],
    REGIME:   [{ t: 'Presencial', v: 0 }, { t: 'Híbrido', v: 1 }, { t: 'Remoto', v: 2 }],
    TURNO:    [{ t: 'Diurno', v: 0 }, { t: 'Noturno', v: 1 }, { t: 'Revezamento de turnos', v: 2 }],
  },

  // Follow-up padrão dos itens de exposição (COPSOQ 20–23 e C1)
  fontesExposicao: ['Colegas', 'Gerente, supervisor', 'Subordinados', 'Clientes, fregueses, pacientes'],

  // Cada seção = uma etapa/tela do formulário.
  // direcao: 'risco' = quanto maior, pior · 'protecao' = quanto maior, melhor
  secoes: [
    // ============ MÓDULO A — COPSOQ II-Br (redação oficial) ============
    {
      id: 'demandas', modulo: 'A', dimensao: 'Demandas no trabalho', direcao: 'risco',
      itens: [
        { id: '1A', texto: 'Você atrasa a entrega do seu trabalho?', escala: 'FREQ' },
        { id: '1B', texto: 'O tempo para realizar as suas tarefas no trabalho é suficiente?', escala: 'FREQ_INV' },
        { id: '2A', texto: 'É necessário manter um ritmo acelerado no trabalho?', escala: 'FREQ' },
        { id: '2B', texto: 'Você trabalha em ritmo acelerado ao longo de toda jornada?', escala: 'FREQ' },
        { id: '3A', texto: 'Seu trabalho coloca você em situações emocionalmente desgastantes?', escala: 'FREQ' },
        { id: '3B', texto: 'Você tem que lidar com os problemas pessoais de outras pessoas como parte do seu trabalho?', escala: 'FREQ' },
      ],
    },
    {
      id: 'organizacao', modulo: 'A', dimensao: 'Organização do trabalho e conteúdo', direcao: 'protecao',
      itens: [
        { id: '4A', texto: 'Você tem um alto grau de influência nas decisões sobre o seu trabalho?', escala: 'FREQ' },
        { id: '4B', texto: 'Você pode interferir na quantidade de trabalho atribuída a você?', escala: 'FREQ' },
        { id: '5A', texto: 'Você tem a possibilidade de aprender coisas novas através do seu trabalho?', escala: 'MEDIDA' },
        { id: '5B', texto: 'O seu trabalho exige que você tome iniciativas?', escala: 'MEDIDA' },
        { id: '6A', texto: 'O seu trabalho é significativo?', escala: 'MEDIDA' },
        { id: '6B', texto: 'Você sente que o trabalho que você faz é importante?', escala: 'MEDIDA' },
        { id: '7A', texto: 'Você sente que o seu local de trabalho é muito importante para você?', escala: 'MEDIDA' },
        { id: '7B', texto: 'Você recomendaria a um amigo que se candidatasse a uma vaga no seu local de trabalho?', escala: 'MEDIDA' },
      ],
    },
    {
      id: 'relacoes', modulo: 'A', dimensao: 'Relações interpessoais e liderança', direcao: 'protecao',
      itens: [
        { id: '8A', texto: 'No seu local de trabalho, você é informado antecipadamente sobre decisões importantes, mudanças ou planos para o futuro?', escala: 'MEDIDA' },
        { id: '8B', texto: 'Você recebe toda a informação necessária para fazer bem o seu trabalho?', escala: 'MEDIDA' },
        { id: '9A', texto: 'O seu trabalho é reconhecido e valorizado pelos seus superiores?', escala: 'MEDIDA' },
        { id: '9B', texto: 'Você é tratado de forma justa no seu local de trabalho?', escala: 'MEDIDA' },
        { id: '10A', texto: 'O seu trabalho tem objetivos/metas claros(as)?', escala: 'MEDIDA' },
        { id: '10B', texto: 'Você sabe exatamente o que se espera de você no trabalho?', escala: 'MEDIDA' },
        { id: '11A', texto: 'Você diria que o seu superior imediato dá alta prioridade para a satisfação com trabalho?', escala: 'MEDIDA' },
        { id: '11B', texto: 'Você diria que o seu superior imediato é bom no planejamento do trabalho?', escala: 'MEDIDA' },
        { id: '12A', texto: 'Com que frequência o seu superior imediato está disposto a ouvir os seus problemas no trabalho?', escala: 'FREQ' },
        { id: '12B', texto: 'Com que frequência você recebe ajuda e suporte do seu superior imediato?', escala: 'FREQ' },
      ],
    },
    {
      id: 'interface', modulo: 'A', dimensao: 'Interface trabalho-indivíduo', direcao: 'mista',
      itens: [
        { id: '13', texto: 'Qual o seu nível de satisfação com o seu trabalho como um todo, considerando todos os aspectos?', escala: 'SATISF', dir: 'protecao' },
        { id: '14A', texto: 'Você sente que o seu trabalho consome tanto sua energia que ele tem um efeito negativo na sua vida particular?', escala: 'SIMNAO3', dir: 'risco', notaAntes: 'As próximas duas perguntas são sobre a forma como o seu trabalho afeta a sua vida particular e familiar.' },
        { id: '14B', texto: 'Você sente que o seu trabalho ocupa tanto tempo que ele tem um efeito negativo na sua vida particular?', escala: 'SIMNAO3', dir: 'risco' },
      ],
    },
    {
      id: 'valores', modulo: 'A', dimensao: 'Valores no local de trabalho', direcao: 'protecao',
      nota: 'As próximas quatro perguntas não são sobre o seu próprio trabalho, mas sobre a empresa em que você trabalha.',
      itens: [
        { id: '15A', texto: 'Você pode confiar nas informações que vêm dos seus superiores?', escala: 'MEDIDA' },
        { id: '15B', texto: 'Os seus superiores confiam que os funcionários farão bem seu trabalho?', escala: 'MEDIDA' },
        { id: '16A', texto: 'Os conflitos são resolvidos de forma justa?', escala: 'MEDIDA' },
        { id: '16B', texto: 'O trabalho é distribuído de forma justa?', escala: 'MEDIDA' },
      ],
    },
    {
      id: 'saude', modulo: 'A', dimensao: 'Saúde e bem-estar', direcao: 'mista',
      nota: 'As próximas cinco perguntas são sobre a sua própria saúde e bem-estar. Por favor, tente não distinguir entre sintomas que são causados pelo trabalho e sintomas que se devem a outras causas. Descreva como você está no geral. As perguntas são sobre a sua saúde e bem-estar nas últimas quatro semanas.',
      itens: [
        { id: '17', texto: 'Em geral, você diria que a sua saúde é:', escala: 'SAUDE', dir: 'protecao' },
        { id: '18A', texto: 'Com que frequência você tem se sentido fisicamente esgotado?', escala: 'FREQ', dir: 'risco' },
        { id: '18B', texto: 'Com que frequência você tem se sentido emocionalmente esgotado?', escala: 'FREQ', dir: 'risco' },
        { id: '19A', texto: 'Com que frequência você tem se sentido estressado?', escala: 'FREQ', dir: 'risco' },
        { id: '19B', texto: 'Com que frequência você tem se sentido irritado?', escala: 'FREQ', dir: 'risco' },
      ],
    },
    {
      id: 'ofensivos', modulo: 'A', dimensao: 'Comportamentos ofensivos', direcao: 'risco', alerta: true,
      nota: 'As próximas perguntas referem-se aos últimos 12 meses. Lembre-se: suas respostas são anônimas.',
      itens: [
        { id: '20', texto: 'Você foi exposto a atenção sexual indesejada no seu local de trabalho durante os últimos 12 meses?', escala: 'EXPO', followup: true },
        { id: '21', texto: 'Você foi exposto a ameaças de violência no seu local de trabalho nos últimos 12 meses?', escala: 'EXPO', followup: true },
        { id: '22', texto: 'Você foi exposto a violência física em seu local de trabalho durante os últimos 12 meses?', escala: 'EXPO', followup: true },
        { id: '23', texto: 'Você foi exposto a "bullying" no seu local de trabalho nos últimos 12 meses?', escala: 'EXPO', followup: true, notaAntes: '"Bullying" significa que uma pessoa é repetidamente exposta a tratamento desagradável ou degradante, do qual a vítima tem dificuldade para se defender.' },
      ],
    },

    // ============ MÓDULO B — Aprofundamento Moorah ============
    {
      id: 'apoio', modulo: 'B', dimensao: 'Apoio e comunidade', direcao: 'protecao',
      itens: [
        { id: 'B1', texto: 'Com que frequência você recebe ajuda e apoio dos seus colegas de trabalho?', escala: 'FREQ' },
        { id: 'B2', texto: 'Existe um clima de cooperação e respeito entre você e seus colegas?', escala: 'MEDIDA' },
        { id: 'B3', texto: 'Você se sente parte de uma equipe no seu local de trabalho?', escala: 'MEDIDA' },
      ],
    },
    {
      id: 'reconhecimento', modulo: 'B', dimensao: 'Reconhecimento e desenvolvimento', direcao: 'protecao',
      itens: [
        { id: 'B4', texto: 'Você recebe retorno (feedback) claro sobre a qualidade do trabalho que realiza?', escala: 'FREQ' },
        { id: 'B5', texto: 'Você considera justo o que recebe (salário e benefícios) em relação ao seu esforço e aos seus resultados?', escala: 'MEDIDA' },
        { id: 'B6', texto: 'Você enxerga possibilidade de crescimento ou desenvolvimento profissional na empresa?', escala: 'MEDIDA' },
      ],
    },
    {
      id: 'papeis', modulo: 'B', dimensao: 'Clareza e conflito de papéis', direcao: 'risco',
      itens: [
        { id: 'B7', texto: 'Você recebe orientações contraditórias sobre como fazer o seu trabalho?', escala: 'FREQ' },
        { id: 'B8', texto: 'Você precisa fazer tarefas que considera desnecessárias ou sem sentido?', escala: 'FREQ' },
      ],
    },
    {
      id: 'carga', modulo: 'B', dimensao: 'Carga, ritmo e jornada', direcao: 'risco',
      itens: [
        { id: 'B9', texto: 'Seu trabalho exige atenção constante e intensa?', escala: 'FREQ' },
        { id: 'B10', texto: 'Você consegue fazer pausas durante a jornada quando sente necessidade?', escala: 'FREQ', dir: 'protecao' },
        { id: 'B11', texto: 'Você trabalha além do seu horário contratual (horas extras)?', escala: 'FREQ' },
        { id: 'B12', texto: 'Você é contatado sobre assuntos de trabalho fora do seu horário (mensagens, ligações, e-mails)?', escala: 'FREQ' },
        { id: 'B13', texto: 'As metas estabelecidas para o seu trabalho podem ser alcançadas dentro da jornada normal?', escala: 'MEDIDA', dir: 'protecao' },
      ],
    },
    {
      id: 'seguranca', modulo: 'B', dimensao: 'Segurança e mudanças', direcao: 'risco',
      itens: [
        { id: 'B14', texto: 'Você se preocupa em perder o seu emprego?', escala: 'MEDIDA' },
        { id: 'B15', texto: 'Você se preocupa com mudanças indesejadas na sua função, no seu horário ou no seu salário?', escala: 'MEDIDA' },
        { id: 'B16', texto: 'Quando há mudanças importantes na empresa, os trabalhadores são ouvidos?', escala: 'MEDIDA', dir: 'protecao' },
      ],
    },
    {
      id: 'remoto', modulo: 'B', dimensao: 'Trabalho remoto ou híbrido', direcao: 'protecao',
      nota: 'Responda apenas se você trabalha à distância pelo menos 1 dia por semana. Caso contrário, marque "Não se aplica".',
      itens: [
        { id: 'B17', texto: 'Quando você trabalha à distância, a empresa oferece condições adequadas (equipamentos, comunicação e apoio)?', escala: 'MEDIDA_NA' },
      ],
    },

    // ============ MÓDULO C — Violência, assédio e canal (Lei 14.457/22) ============
    {
      id: 'assedio', modulo: 'C', dimensao: 'Violência, assédio e canal de escuta', direcao: 'risco', alerta: true,
      nota: 'As perguntas a seguir referem-se aos últimos 12 meses. Suas respostas são anônimas e apenas resultados agregados são divulgados.',
      itens: [
        { id: 'C1', texto: 'Você foi humilhado, ridicularizado ou constrangido na frente de outras pessoas no seu local de trabalho?', escala: 'EXPO', followup: true },
        { id: 'C2', texto: 'Você foi tratado de forma hostil ou perseguido por um superior (cobranças vexatórias, isolamento proposital, ameaças veladas)?', escala: 'EXPO' },
        { id: 'C3', texto: 'Você sofreu discriminação no trabalho (por gênero, raça/cor, idade, orientação sexual, deficiência, religião ou aparência)?', escala: 'EXPO' },
        { id: 'C4', texto: 'Você presenciou colegas sofrendo assédio, humilhação ou violência no seu local de trabalho?', escala: 'EXPO' },
        { id: 'C5', texto: 'Você sabe onde e como relatar uma situação de assédio ou violência na sua empresa?', escala: 'SIM_NAO_NS' },
        { id: 'C6', texto: 'Você confia que um relato de assédio ou violência seria tratado com seriedade e sem retaliação?', escala: 'MEDIDA', dir: 'protecao' },
      ],
    },

    // ============ MÓDULO D — Sinais de alerta de saúde ============
    {
      id: 'sinais', modulo: 'D', dimensao: 'Sinais de alerta de saúde', direcao: 'risco',
      nota: 'As perguntas a seguir referem-se aos últimos 3 meses, exceto quando indicado. Este bloco é um rastreio de bem-estar — não é um diagnóstico.',
      itens: [
        { id: 'D1', texto: 'Você tem tido dificuldades para dormir por causa de preocupações com o trabalho?', escala: 'FREQ' },
        { id: 'D2', texto: 'Você tem sentido sintomas físicos que associa ao estresse do trabalho (dores de cabeça, tensão muscular, problemas digestivos)?', escala: 'FREQ' },
        { id: 'D3', texto: 'Você foi trabalhar sentindo-se mal (física ou emocionalmente) por receio de faltar?', escala: 'FREQ' },
        { id: 'D4', texto: 'Você já pensou em deixar o emprego por causa do impacto do trabalho na sua saúde emocional?', escala: 'SIM_NAO' },
        { id: 'D5', texto: 'Nos últimos 12 meses, você precisou se afastar do trabalho por questões de saúde emocional?', escala: 'SIM_NAO_PNR' },
      ],
    },

    // ============ MÓDULO E — Contexto (recortes com n≥5) ============
    {
      id: 'contexto', modulo: 'E', dimensao: 'Contexto de trabalho', direcao: 'neutra',
      nota: 'Estas informações servem apenas para agrupar resultados por área e regime de trabalho. Nenhum recorte com menos de 5 respondentes é exibido.',
      itens: [
        { id: 'E2', texto: 'Tempo de empresa:', escala: 'TEMPO_EMPRESA' },
        { id: 'E3', texto: 'Regime de trabalho:', escala: 'REGIME' },
        { id: 'E4', texto: 'Turno:', escala: 'TURNO' },
        { id: 'E5', texto: 'Você exerce função de liderança (coordena outras pessoas)?', escala: 'SIM_NAO' },
      ],
    },

    // ============ MÓDULO F — Voz do trabalhador (opcional) ============
    {
      id: 'voz', modulo: 'F', dimensao: 'Voz do trabalhador', direcao: 'neutra', opcional: true,
      nota: 'Estas perguntas são opcionais. Se preferir, deixe em branco. Não escreva nada que possa identificar você ou colegas.',
      itens: [
        { id: 'F1', texto: 'Na sua opinião, o que mais gera estresse ou desgaste no seu trabalho hoje?', tipo: 'texto' },
        { id: 'F2', texto: 'O que a empresa poderia fazer para melhorar o seu bem-estar no trabalho?', tipo: 'texto' },
      ],
    },
  ],
};
