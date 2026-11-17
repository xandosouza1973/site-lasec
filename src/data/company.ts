export interface GalleryItem {
  id: string;
  title: string;
  category: 'seriados' | 'cnc' | 'complexas' | 'materiais';
  categoryLabel: string;
  description: string;
  image: string;
  specs: string[];
}

export interface SectorItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  examples: string[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export const COMPANY_INFO = {
  name: 'LASEC',
  tradeName: 'LASEC / MALELO',
  tagline: 'Usinagem Aliada à Precisão',
  foundationYear: 1992,
  yearsInMarket: new Date().getFullYear() - 1992,
  phone: '(11) 3936-5041',
  phoneRaw: '1139365041',
  whatsapp: '551139365041',
  emailOrcamento: 'orcamento@lasec.com.br',
  emailGeral: 'lasec@lasec.com.br',
  address: {
    street: 'Rua Álvaro Silva, 233',
    neighborhood: 'Bairro do Limão',
    city: 'São Paulo',
    state: 'SP',
    zip: '02721-020',
    full: 'Rua Álvaro Silva, 233 - Bairro do Limão, São Paulo - SP',
  },
  openingHours: 'Segunda a Sexta: 07:30 às 17:30',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7497475143093!2d-46.685324523910385!3d-23.498114678844883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef84d5df63d91%3A0xc48c03c51323b723!2sR.%20%C3%81lvaro%20Silva%2C%20233%20-%20Lim%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002721-020!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Peças Seriadas de Alta Tolerância',
    category: 'seriados',
    categoryLabel: 'Produção Seriada',
    description: 'Componentes torneados com controle dimensional rigoroso para indústria mecânica e eletrônica.',
    image: '/images/pecas-torneadas-1.jpg',
    specs: ['Lotes Médios e Grandes', 'Acabamento Micrométrico', 'Concentricidade Rigorosa'],
  },
  {
    id: '2',
    title: 'Componentes Especiais Multieixo',
    category: 'cnc',
    categoryLabel: 'Usinagem CNC',
    description: 'Peças complexas executadas em torno com ferramenta acionada em ciclo contínuo.',
    image: '/images/pecas-torneadas-2.jpg',
    specs: ['Furos Radiais e Axiais', 'Usinagem em Pega Única', 'Materiais Ferrosos e Não-Ferrosos'],
  },
  {
    id: '3',
    title: 'Lotes Seriados em Grande Escala',
    category: 'seriados',
    categoryLabel: 'Lotes Seriados',
    description: 'Repetibilidade assegurada e rastreabilidade total de lotes de produção contínua.',
    image: '/images/pecas-lote-seriado.jpg',
    specs: ['Padronização Fabril', 'Alta Produtividade', 'Inspeção Amostral e 100%'],
  },
  {
    id: '4',
    title: 'Geometrias e Chavetas em Torno CNC',
    category: 'complexas',
    categoryLabel: 'Usinagem Especial',
    description: 'Fresamentos, chavetas e perfis especiais sem necessidade de operações secundárias.',
    image: '/images/pecas-precisao.jpg',
    specs: ['Zero Re-fixação', 'Menor Lead Time', 'Máxima Precisão Geométrica'],
  },
  {
    id: '5',
    title: 'Torno CNC Lynx com Ferramenta Acionada',
    category: 'cnc',
    categoryLabel: 'Estrutura CNC',
    description: 'Torno CNC Lynx preparado para furações radiais e axiais, chavetas e usinagens em ciclo único.',
    image: '/images/torno-lynx-ferramenta-acionada.jpg',
    specs: ['Doosan Lynx', 'Ferramenta Acionada', 'Usinagem em Pega Única'],
  },
  {
    id: '6',
    title: 'Usinagem e Estamparia Integradas',
    category: 'complexas',
    categoryLabel: 'Ferramentais',
    description: 'Mais de três décadas no desenvolvimento de soluções completas de usinagem e ferramentaria.',
    image: '/images/maquinario-fabrica.jpg',
    specs: ['Tradição desde 1992', 'Sede Própria em SP', 'Equipe Técnica Qualificada'],
  },
];

export const SECTORS: SectorItem[] = [
  {
    id: 'automotivo',
    title: 'Setor Automotivo',
    description: 'Peças torneadas para sistemas de injeção, sensores, suspensão, buchas e eixos com estrita repetibilidade.',
    icon: 'Car',
    examples: ['Eixos calibrados', 'Buchas de precisão', 'Conexões hidráulicas'],
  },
  {
    id: 'odontologico',
    title: 'Odontológico & Hospitalar',
    description: 'Componentes de alta exigência em aço inox e ligas especiais com acabamento superficial isento de rebarbas.',
    icon: 'Stethoscope',
    examples: ['Corpos de instrumentos', 'Pinos especiais', 'Componentes cirúrgicos'],
  },
  {
    id: 'eletronico',
    title: 'Eletrônico & Radiofrequência (RF)',
    description: 'Conectores, blindagens e dissipadores em latão, cobre e alumínio com tolerâncias rigorosas para alta condutividade.',
    icon: 'Radio',
    examples: ['Conectores RF', 'Pinos de contato', 'Carcaças de blindagem'],
  },
  {
    id: 'industrial',
    title: 'Máquinas & Automação Industrial',
    description: 'Peças seriadas para montagem de equipamentos industriais, atuadores pneumáticos, válvulas e engrenagens.',
    icon: 'Cpu',
    examples: ['Corpos de válvula', 'Pistões e hastes', 'Flanges e engrenagens'],
  },
];

export const TIMELINE: TimelineMilestone[] = [
  {
    year: '1992',
    title: 'Fundação da LASEC',
    description: 'Nascemos em Outubro de 1992 com foco em prestação de serviços de usinagem mecânica, estamparia e confecção de ferramental.',
  },
  {
    year: '2000',
    title: 'Sede Própria no Bairro do Limão',
    description: 'Aquisição da nossa sede fabril própria na Rua Álvaro Silva em São Paulo, ampliando a capacidade instalada e a infraestrutura logística.',
  },
  {
    year: '2003',
    title: 'A Era CNC & Produção Seriada',
    description: 'Compra dos primeiros tornos CNC industriais, marcando o ingresso da LASEC no mercado de produção seriada de alta complexidade dimensional.',
  },
  {
    year: 'Atualidade',
    title: 'Tecnologia em Ferramenta Acionada',
    description: 'Parque fabril moderno com tornos com ferramenta acionada, usinagem multieixo em pega única e atendimento a clientes em todo o território nacional.',
  },
];

export const MATERIALS_LIST = [
  { category: 'Aços Inoxidáveis', items: ['Inox 304', 'Inox 316 / 316L', 'Inox 410 / 420', 'Inox 430'] },
  { category: 'Aços Carbono & Ligas', items: ['SAE 1020 / 1045', 'Aço 4140 / 4340', 'Aço 8620', 'Aço 12L14 (Automato)'] },
  { category: 'Metais Não-Ferrosos', items: ['Alumínio (Ligas 6061, 7075, 5052)', 'Latão CLA e Especial', 'Cobre Eletrolítico', 'Bronze Fosforoso e Alumínio'] },
  { category: 'Polímeros de Engenharia', items: ['Nylon 6.0 / 6.6', 'Poliacetal (Delrin/POM)', 'PTFE (Teflon)', 'UHMW e Celeron'] },
];
