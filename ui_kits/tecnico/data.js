// Morah técnico — demo data (plain JS, loaded before the JSX scripts)
window.MORAH = {
  tenant: { name: 'Clínica Pedrosa', tech: 'Lucas C. Pedrosa Marques', email: 'tec.pedrosa@gmail.com', role: 'Administrador' },

  // Seções internas da empresa (central de cards + sidebar contextual do drill-down)
  secoesEmpresa: [
    { id: 'link',          icon: 'users',            label: 'Colaboradores',   desc: 'Cadastro e envio do questionário' },
    { id: 'campanhas',     icon: 'calendar-range',   label: 'Campanhas',       desc: 'Ciclos de avaliação' },
    { id: 'relatorios',    icon: 'bar-chart-3',      label: 'Relatórios',      desc: 'Semáforo de riscos e laudo' },
    { id: 'plano',         icon: 'list-checks',      label: 'Plano de Ação',   desc: 'Medidas, prazos e responsáveis' },
    { id: 'denuncias',     icon: 'shield',           label: 'Denúncias',       desc: 'Apuração dos relatos do canal' },
    { id: 'comparar',      icon: 'arrow-left-right', label: 'Comparar Ciclos', desc: 'Evolução entre campanhas' },
    { id: 'unidades',      icon: 'map-pin',          label: 'Unidades',        desc: 'Filiais e locais' },
    { id: 'setor',         icon: 'layers',           label: 'Setores',         desc: 'Estrutura de setores' },
    { id: 'departamentos', icon: 'network',          label: 'Departamentos',   desc: 'Organização interna' },
    { id: 'cargos',        icon: 'briefcase',        label: 'Cargos',          desc: 'Funções e posições' },
    { id: 'overview',      icon: 'layout-grid',      label: 'Visão Geral',     desc: 'Indicadores da empresa' },
  ],

  // Navegação e identidade por perfil de acesso:
  //  admin       → Moorah: gerencia todas as empresas contratantes
  //  rh          → empresa contratante: estrutura própria + colaboradores + relatórios
  //  colaborador → telas do trabalhador (questionários pendentes, canal de denúncias)
  perfis: {
    // Admin e técnico usam DRILL-DOWN: fora da empresa veem o hub (Empresas +
    // Cobrança); ao "Gerenciar" uma empresa, a sidebar troca para o contexto
    // dela (navEmpresa) e o topo trava na empresa (sem seletor — trocar = voltar).
    admin: {
      rotulo: 'ADMIN MOORAH',
      tenant: { name: 'Moorah — Administração', tech: 'Admin Moorah', role: 'Administrador Moorah' },
      inicio: 'empresas',
      nav: {
        navegacao: [
          { id: 'empresas',   icon: 'building-2',  label: 'Empresas' },
          { id: 'cobranca',   icon: 'credit-card', label: 'Cobrança' },
        ],
        ferramentas: [
          { id: 'modelos', icon: 'clipboard-list', label: 'Modelos de Apresentação' },
          { id: 'termos',  icon: 'file-text',      label: 'Termos de Aceite' },
        ],
      },
    },
    tecnico: {
      rotulo: 'TÉCNICO SST',
      tenant: { name: 'Consultoria SST Demo', tech: 'Técnico(a) SST Demo', role: 'Técnico de Segurança do Trabalho' },
      inicio: 'empresas',
      nav: {
        navegacao: [
          { id: 'empresas',   icon: 'building-2',  label: 'Empresas' },
          { id: 'cobranca',   icon: 'credit-card', label: 'Cobrança' },
        ],
        ferramentas: [
          { id: 'modelos', icon: 'clipboard-list', label: 'Modelos de Apresentação' },
          { id: 'termos',  icon: 'file-text',      label: 'Termos de Aceite' },
        ],
      },
    },
    rh: {
      rotulo: 'RH',
      tenant: { name: 'DG Sports', tech: 'Gestor(a) de RH Demo', role: 'RH — Gestão de Pessoas' },
      inicio: 'overview',
      seletorEmpresas: false,
      nav: {
        navegacao: [
          { id: 'overview',   icon: 'layout-grid', label: 'Visão Geral' },
          { id: 'link',       icon: 'users',       label: 'Colaboradores' },
          { id: 'campanhas',  icon: 'calendar-range', label: 'Campanhas' },
          { id: 'relatorios', icon: 'bar-chart-3', label: 'Relatórios' },
          { id: 'comparar',   icon: 'arrow-left-right', label: 'Comparar Relatórios' },
          { id: 'plano',      icon: 'list-checks', label: 'Plano de Ação' },
          { id: 'denuncias',  icon: 'shield',      label: 'Denúncias' },
          { id: 'cobranca',   icon: 'credit-card', label: 'Cobrança' },
        ],
        ferramentas: [
          { id: 'unidades',      icon: 'map-pin',   label: 'Unidades' },
          { id: 'setor',         icon: 'layers',    label: 'Setores' },
          { id: 'departamentos', icon: 'network',   label: 'Departamentos' },
          { id: 'cargos',        icon: 'briefcase', label: 'Cargos' },
          { id: 'modelos',       icon: 'clipboard-list', label: 'Modelos de Apresentação' },
          { id: 'termos',        icon: 'file-text', label: 'Termos de Aceite' },
        ],
      },
    },
    colaborador: {
      rotulo: 'COLABORADOR',
      tenant: { name: 'DG Sports', tech: 'Colaborador(a) Demo', role: 'Colaborador' },
      inicio: 'pendentes',
      seletorEmpresas: false,
      nav: {
        navegacao: [
          { id: 'pendentes', icon: 'clipboard-list', label: 'Questionários Pendentes' },
          { id: 'denuncia',  icon: 'shield',         label: 'Canal de Denúncias' },
        ],
        ferramentas: [],
      },
    },
  },

  titles: {
    overview:   { h: 'Visão Geral',            sub: 'Acompanhe os indicadores das suas avaliações' },
    termos:     { h: 'Termos de Aceite',       sub: 'Status do aceite dos termos de uso da plataforma' },
    empresas:   { h: 'Empresas',               sub: 'Sua carteira — clique em Gerenciar para entrar em uma empresa e operar dentro dela' },
    setor:      { h: 'Setores',                sub: 'Estruture as empresas por setor' },
    cargos:     { h: 'Cargos',                 sub: 'Gerencie os cargos de cada setor' },
    campanhas:  { h: 'Campanhas',              sub: 'Organize os períodos de avaliação' },
    relatorios: { h: 'Relatórios',             sub: 'Resultados e interpretações das avaliações' },
    link:       { h: 'Colaboradores',          sub: 'Cadastre colaboradores e envie o questionário por e-mail ou WhatsApp' },
    comparar:   { h: 'Comparar Relatórios',    sub: 'Evolução dos resultados entre períodos' },
    modelos:    { h: 'Modelos de Apresentação',sub: 'Materiais de apoio para download' },
    unidades:   { h: 'Unidades',               sub: 'Estruture as unidades e filiais da empresa' },
    departamentos: { h: 'Departamentos',       sub: 'Organize os departamentos de cada unidade' },
    pendentes:  { h: 'Questionários Pendentes',sub: 'Avaliações enviadas para você responder' },
    denuncia:   { h: 'Canal de Denúncias',     sub: 'Relate situações de assédio ou violência com segurança e sigilo' },
    denuncias:  { h: 'Gestão de Denúncias',    sub: 'Apuração dos relatos do canal com protocolo e prazo (Lei 14.457/22)' },
    plano:      { h: 'Plano de Ação',          sub: 'Medidas com prazo, responsável e indicador — exigência da NR-1' },
    cobranca:   { h: 'Cobrança',               sub: 'Faturas, boletos e links de pagamento (integração Asaas em breve)' },
    empresa:    { h: '',                       sub: 'Central da empresa — informações e ferramentas de gestão em um só lugar' },
  },

  companies: [
    { name: 'AUTO POSTO NOVA AÇAILANDIA LTDA', cnpj: '12.811.039/0001-78', tag: 'SETOR', tone: 'neutral' },
    { name: 'DG SPORTS', cnpj: '29.956.077/0001-11', tag: 'SETOR', tone: 'neutral' },
    { name: 'ESCOLA ARCO ÍRIS', cnpj: '41.534.414/0001-88', tag: 'SETOR', tone: 'neutral' },
    { name: 'F&S ASSESSORIA E CONSULTORIA - UNF MA', cnpj: '16.568.488/0001-98', tag: 'GHE', tone: 'berry' },
    { name: 'F&S ASSESSORIA E CONSULTORIA - UNF MS', cnpj: '16.568.488/0001-98', tag: 'GES', tone: 'info' },
    { name: 'TRANSPORTES VALE VERDE', cnpj: '33.402.118/0001-04', tag: 'SETOR', tone: 'neutral' },
  ],

  models: [
    { t: 'Vídeo Aula: Implementação da Plataforma (Como colocar no PGR)', d: '03/06/2026', kind: 'Vídeo' },
    { t: 'Interpretação das Perguntas (Copsoq II Versão Curta)', d: '28/05/2026', kind: 'PDF' },
    { t: 'Formulário de avaliação manual para impressão', d: '21/05/2026', kind: 'PDF' },
    { t: 'Manual de interpretação e aplicação do capítulo 1.5 da NR-1', d: '14/05/2026', kind: 'PDF' },
    { t: 'Modelo de Contrato de Canal de Denúncias', d: '09/05/2026', kind: 'DOC' },
    { t: 'Apresentação para os clientes', d: '02/05/2026', kind: 'Slides' },
  ],

  chart: { labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'], values: [0, 0, 0, 2, 13, 1], max: 16 },

  kpis: [
    { id: 'emp',  label: 'Total de Empresas',       value: 6,     icon: 'building-2',     tone: 'blue',  data: [1,2,2,3,4,5,6] },
    { id: 'rest', label: 'Avaliações Restantes',    value: '11.864', icon: 'clipboard-list', tone: 'green', data: [14,13,13,12,12,12,11] },
    { id: 'rel',  label: 'Relatórios Salvos',       value: 0,     icon: 'file-text',      tone: 'amber', data: [0,0,0,0,0,0,0] },
    { id: 'enc',  label: 'Avaliações Realizadas',   value: 16,    icon: 'message-circle', tone: 'berry', data: [2,4,6,8,10,13,16] },
  ],
};
