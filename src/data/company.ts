export interface GalleryItem {
  id: string;
  title: string;
  category: '4eixo' | 'torneamento' | 'polimeros' | 'nao-ferrosos' | 'seriados';
  categoryLabel: string;
  description: string;
  image: string;
  specs: string[];
}

export interface MachineItem {
  id: string;
  name: string;
  brand: string;
  type: string;
  image: string;
  description: string;
  highlights: string[];
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
  contactPerson: 'Alexandre Souza',
  tagline: 'Usinagem Aliada à Precisão',
  foundationYear: 1992,
  yearsInMarket: new Date().getFullYear() - 1992,
  phone: '(11) 3798-8782 / 3791-8782',
  phonePrimary: '(11) 3798-8782',
  phoneSecondary: '(11) 3791-8782',
  phoneRaw: '1137988782',
  phoneSecondaryRaw: '1137918782',
  whatsapp: '551139365041',
  whatsappDisplay: '(11) 3936-5041',
  emailOrcamento: 'orcamento@lasec.com.br',
  emailCompras: 'compras@lasec.com.br',
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

export const MACHINERY_LIST: MachineItem[] = [
  {
    id: 'doosan-lynx',
    name: '2x Centros de torneamento Doosan Lynx 220LM',
    brand: 'Doosan Lynx 220LM',
    type: 'Torneamento multieixo com ferramenta acionada',
    image: '/images/hq/doosan-lynx-220lm.jpg',
    description: 'Tornos CNC com cabeçote acionado para executar usinagens radiais e axiais, chavetas e polígonos em pega única sem troca de fixação.',
    highlights: ['2 máquinas disponíveis', 'Ferramenta acionada', 'Pega única', 'Furação radial e axial'],
  },
  {
    id: 'discovery-760',
    name: 'Centro de usinagem vertical Discovery 760 com 4º eixo',
    brand: 'Romi Discovery 760',
    type: 'Fresamento CNC 4 eixos',
    image: '/images/machinery/romi-discovery-760-4eixo.jpg',
    description: 'Centro de usinagem robusto equipado com mesa giratória de 4º eixo para peças complexas, prismáticas e geometrias cilíndricas conjugadas.',
    highlights: ['Mesa 4º eixo sincronizado', 'Curso X: 760 mm', 'Alta rigidez', 'Fresamento contínuo'],
  },
  {
    id: 'romi-gl280',
    name: 'Torno CNC Romi GL280',
    brand: 'Romi GL280',
    type: 'Torneamento de produção',
    image: '/images/machinery/romi-torno-gl280.jpg',
    description: 'Estrutura maciça voltada para torneamento de alta repetibilidade, acabamento fino e produção seriada ininterrupta.',
    highlights: ['Alta estabilidade térmica', 'Rápida troca de ferramenta', 'Produção seriada'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Conjunto Usinado em 4º Eixo com Anodização',
    category: '4eixo',
    categoryLabel: 'Fresamento 4º Eixo',
    description: 'Peças em alumínio aeronáutico usinadas com furações transversais, rebaixos precisos e acabamento anodizado.',
    image: '/images/hq/pecas-anodizadas-roxo.jpg',
    specs: ['Alumínio Anodizado', 'Centro Discovery 4º Eixo', 'Acabamento Fino'],
  },
  {
    id: '2',
    title: 'Corpo Usinado com Eixos Cruzados e Roscas',
    category: '4eixo',
    categoryLabel: 'Geometria Complexa',
    description: 'Bloco usinado em alumínio com torneamento lateral conjugado, canais de vedação e furo central escalonado.',
    image: '/images/hq/bloco-eixos-cruzados.jpg',
    specs: ['Pega Única', 'Concentricidade Rigorosa', 'Inspeção TESA 3D'],
  },
  {
    id: '3',
    title: 'Guia de Onda & Flange para Radiofrequência (RF)',
    category: 'nao-ferrosos',
    categoryLabel: 'Eletrônico & RF',
    description: 'Corpo retangular em alumínio espelhado com cavidade interna precisa e furações de montagem calibradas.',
    image: '/images/hq/guia-onda-rf-aluminio.jpg',
    specs: ['Setor Telecom / RF', 'Acabamento Espelhado', 'Tolerância Milesimal'],
  },
  {
    id: '4',
    title: 'Produção Seriada com Recartilhado de Precisão',
    category: 'seriados',
    categoryLabel: 'Lotes Seriados',
    description: 'Lote de peças cilíndricas em série com recartilhado uniforme, rosca interna e canais de anel O-ring.',
    image: '/images/hq/lote-seriado-recartilhado.jpg',
    specs: ['Alto Volume', 'Repetibilidade 100%', 'Torno CNC Doosan Lynx'],
  },
  {
    id: '5',
    title: 'Disco Flangedo com Furos Roscados & Rasgo',
    category: '4eixo',
    categoryLabel: 'Usinagem CNC',
    description: 'Placa circular usinada com padrão polar de furos roscados, furo oblongo central e rebaixos escareados.',
    image: '/images/hq/disco-furos-roscados.jpg',
    specs: ['Furação Polar CNC', 'Roscas Calibradas', 'Paralelismo Estrito'],
  },
  {
    id: '6',
    title: 'Eixo Escalonado com Rosca Fina e Furo Radial',
    category: 'torneamento',
    categoryLabel: 'Torno com Ferramenta Acionada',
    description: 'Eixo de precisão em aço liga com múltiplos degraus, rosca externa fina e furo transversal em pega única.',
    image: '/images/hq/eixo-escalonado-rosca.jpg',
    specs: ['Aço Liga', 'Ferramenta Acionada', 'Zero Re-fixação'],
  },
  {
    id: '7',
    title: 'Manga Flangeada com Rasgo de Chaveta Interno',
    category: 'torneamento',
    categoryLabel: 'Torneamento & Chaveta',
    description: 'Peça cilíndrica com flange furada, canal externo de precisão e rasgo de chaveta interno.',
    image: '/images/hq/manga-rasgo-chaveta.jpg',
    specs: ['Doosan Lynx 220LM', 'Rasgo de Chaveta', 'Furos Axiais'],
  },
  {
    id: '8',
    title: 'Corpo em Latão com Janelas e Roscas Axiais',
    category: 'nao-ferrosos',
    categoryLabel: 'Metais Não-Ferrosos',
    description: 'Componente complexo em latão com janelas laterais fresadas e múltiplos furos roscados na face e base.',
    image: '/images/hq/corpo-latao-janelas.jpg',
    specs: ['Latão CLA', 'Furação & Fresamento', 'Ferramenta Acionada'],
  },
  {
    id: '9',
    title: 'Carcaça Cilíndrica em Alumínio com Rebaixos',
    category: 'seriados',
    categoryLabel: 'Carcaças & Alojamentos',
    description: 'Alojamento flangeado com parede fina controlada, rebaixos concêntricos internos e micro-roscas de fixação.',
    image: '/images/hq/carcaca-aluminio-flange.jpg',
    specs: ['Alumínio Naval/Aeronáutico', 'Parede Fina', 'Medição Tridimensional'],
  },
];

export const SECTORS: SectorItem[] = [
  {
    id: 'automotivo',
    title: 'Setor Automotivo',
    description: 'Peças torneadas para sistemas de injeção, sensores, suspensão, buchas e eixos com estrita repetibilidade e rastreabilidade total.',
    icon: 'Car',
    examples: ['Eixos calibrados', 'Buchas de precisão', 'Conexões hidráulicas'],
  },
  {
    id: 'odontologico',
    title: 'Odontológico & Hospitalar',
    description: 'Componentes de alta exigência dimensional em aço inox, titânio e ligas especiais com acabamento superficial isento de rebarbas.',
    icon: 'Stethoscope',
    examples: ['Corpos de instrumentos', 'Pinos especiais', 'Componentes cirúrgicos'],
  },
  {
    id: 'eletronico',
    title: 'Eletrônico & Radiofrequência (RF)',
    description: 'Conectores, guias de onda, blindagens e dissipadores em latão, cobre e alumínio com tolerâncias rigorosas.',
    icon: 'Radio',
    examples: ['Guias de onda RF', 'Conectores de latão', 'Carcaças de blindagem'],
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
    description: 'Nascemos em Outubro de 1992 com foco em prestação de serviços de usinagem mecânica, estamparia e confecção de ferramental técnico.',
  },
  {
    year: '2000',
    title: 'Sede Própria no Bairro do Limão',
    description: 'Aquisição da nossa sede fabril própria na Rua Álvaro Silva em São Paulo, ampliando a infraestrutura física e a capacidade de expansão.',
  },
  {
    year: '2003',
    title: 'A Era CNC & Produção Seriada',
    description: 'Compra dos primeiros tornos CNC industriais, marcando o ingresso definitivo no mercado de produção seriada de alta complexidade dimensional.',
  },
  {
    year: 'Hoje',
    title: 'Parque CNC Multieixo & Metrologia Tridimensional',
    description: 'Parque consolidado com 2 centros Doosan Lynx com ferramenta acionada, centros Romi Discovery com 4º eixo e sala climatizada de metrologia tridimensional TESA Hite 3D.',
  },
];

export const MATERIALS_LIST = [
  { category: 'Aços Inoxidáveis', items: ['Inox 304', 'Inox 316 / 316L', 'Inox 410 / 420', 'Inox 430'] },
  { category: 'Aços Carbono & Ligas', items: ['SAE 1020 / 1045', 'Aço 4140 / 4340', 'Aço 8620', 'Aço 12L14 (Automato)'] },
  { category: 'Metais Não-Ferrosos', items: ['Alumínio (Ligas 6061, 7075, 5052)', 'Latão CLA e Especial', 'Cobre Eletrolítico', 'Bronze Fosforoso e Alumínio'] },
  { category: 'Polímeros & Ópticos', items: ['Acrílico / Policarbonato Translúcido', 'Poliacetal (Delrin/POM)', 'Nylon 6.0 / 6.6', 'PTFE (Teflon)'] },
];
