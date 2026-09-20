import { EcosystemTool } from '../types';
import { LANDING_PAGES_DATA } from './landingPages';

export const ECOSYSTEM_TOOLS: EcosystemTool[] = [
  {
    id: 'nexo',
    name: 'Nexo',
    tagline: 'O Planeta dos Dados & Hub de Mídia Local',
    role: 'planeta',
    roleTitle: 'Planeta-Arquivo / Biosfera Local',
    roleDescription: 'Ferramenta autossustentável que guarda, cataloga e serve seus dados sem depender de nuvem externa. Um porto seguro estelar.',
    colors: {
      primary: '#00D2FF',
      secondary: '#0EA5E9',
      accent: '#38BDF8',
      glow: 'rgba(0, 210, 255, 0.45)',
      bgDark: '#0A1526',
      gradient: 'linear-gradient(135deg, #00D2FF 0%, #0284C7 100%)',
      name: 'Ciano Elétrico & Deep Cyan',
    },
    siteUrl: 'https://get-nexo.vercel.app/',
    repoUrl: 'https://github.com/avnt-sistemas/nexo',
    description: 'Organizador local completo para documentos, fotos com reconhecimento facial, filmes/séries, ZIPs e media server integrado com tray e autostart.',
    designRationale: 'O ícone representa um planeta autossuficiente com um núcleo de alta densidade de dados protegido por um anel orbital de fluxo contínuo. Quatro nós nodais simétricos representam as diferentes categorias de arquivos (documentos, mídia, fotos, sistema) gravitando ao redor do centro soberano.',
    symbolism: [
      'Núcleo Esférico Central: Armazenamento local autossustentável e inviolável',
      'Anel Orbital Elíptico: Streaming contínuo e distribuição para TV, celular e navegador',
      'Nós Periféricos de Rede: Conexão harmoniosa de arquivos heterogêneos',
      'Geometria Limpa: Sem ruído visual, alta legibilidade no system tray do Windows'
    ],
    geometricSpecs: [
      'Grid de 64x64px com círculo central de raio 14px',
      'Órbita elíptica com inclinação de 24° e espessura uniforme de 3.5px',
      'Nós de 3px com alinhamento orbital trigonométrico',
      'Vértices e terminais com stroke-linecap arredondado'
    ],
    connections: [
      {
        toId: 'genesis',
        relationship: 'Hospedado no solo de',
        roleDescription: 'Instalado e configurado no boot inicial pós-formatação',
        direction: 'from',
      },
      {
        toId: 'thero',
        relationship: 'Fornece armazenamento para',
        roleDescription: 'Pode persistir backups de projetos e documentações estruturadas',
        direction: 'to',
      }
    ],
    cliUsage: 'nexo --daemon --tray',
    landing: LANDING_PAGES_DATA.nexo
  },
  {
    id: 'genesis',
    name: 'Genesis',
    tagline: 'O Berço da Criação & Matriz do Universo',
    role: 'planeta',
    roleTitle: 'Planeta-Matriz / O Terraformer',
    roleDescription: 'A fundação que prepara o solo estéril pós-formatação (Windows 11), instalando terminais, navegadores, jogos e a suíte de IA.',
    colors: {
      primary: '#A855F7',
      secondary: '#8B5CF6',
      accent: '#C084FC',
      glow: 'rgba(168, 85, 247, 0.45)',
      bgDark: '#1A0E2E',
      gradient: 'linear-gradient(135deg, #C084FC 0%, #7C3AED 100%)',
      name: 'Nebulosa Ametista & Violeta Cósmico',
    },
    siteUrl: 'https://github.com/theroverse/genesis/releases/latest',
    repoUrl: 'https://github.com/theroverse/genesis',
    description: 'Assistente automatizado de setup pós-formatação do Windows 11. Instala Terminal Starship, PowerToys, Windhawk, navegadores, jogos e a suíte Claude Code.',
    designRationale: 'A gênese de um cosmos digital é simbolizada por uma centelha primordial emergindo de um diamante cósmico de quatro quadrantes. Cada quadrante evoca um dos 4 pilares configurados pelo Genesis: Sistema/Terminal, Navegadores, Jogos e Claude Code Suite.',
    symbolism: [
      'Diamante Primordial (Octaedro): A estrutura cristalina estável do novo Windows 11',
      'Centelha de 4 Pontas: A fagulha de criação que acorda a máquina recém-formatada',
      'Camadas Concêntricas de Expansão: Os passos progressivos do assistente (Etapa 1 a 17)',
      'Aura Violeta Cósmica: Harmonia com os botões e gradientes da interface do Genesis'
    ],
    geometricSpecs: [
      'Losango/diamante com proporção de ouro (largura 44px, altura 44px)',
      'Vértice central em estrela de 4 pontas com nós de ativação nas pontas',
      'Linhas de pulso tangenciais a 45° simbolizando expansão e autonomia',
      'Construção concêntrica perfeitamente balanceada no centro óptico'
    ],
    connections: [
      {
        toId: 'thero',
        relationship: 'Instala e prepara',
        roleDescription: 'Garante o ambiente Claude Code, Python 3.10+ e terminal prontos',
        direction: 'to',
      },
      {
        toId: 'nexo',
        relationship: 'Prepara o ecossistema para',
        roleDescription: 'Configura o autostart e dependências de sistema para o Nexo',
        direction: 'to',
      }
    ],
    cliUsage: 'genesis.exe --unattended',
    landing: LANDING_PAGES_DATA.genesis
  },
  {
    id: 'athena',
    name: 'Athena',
    tagline: 'A Nave Cartógrafa & Radar de Código',
    role: 'nave',
    roleTitle: 'Nave de Reconhecimento / Exploradora Neural',
    roleDescription: 'Navega por repositórios desconhecidos, escaneando arquivos de baixo para cima e transmitindo a "planta baixa" para a base.',
    colors: {
      primary: '#10B981',
      secondary: '#059669',
      accent: '#34D399',
      glow: 'rgba(16, 185, 129, 0.45)',
      bgDark: '#071F18',
      gradient: 'linear-gradient(135deg, #34D399 0%, #059669 100%)',
      name: 'Menta Esmeralda & Cyber Jade',
    },
    siteUrl: 'https://theroverse.github.io/athena/',
    repoUrl: 'https://github.com/theroverse/athena',
    description: 'Indexador recursivo de código que resume projetos inteiros bottom-up, gerando um mapa arquitetural completo com cache incremental de hash.',
    designRationale: 'A nave exploradora Athena é expressa como um vetor aerodinâmico em chevron ascendente integrado a um radar neural. Ramos de varredura convergem recursivamente da base para o ápice, simbolizando a leitura bottom-up de arquivos até a raiz.',
    symbolism: [
      'Fuselagem em Chevron Ascendente: Exploração célere através de qualquer repositório',
      'Feixes de Varredura / Radar: Escaneamento recursivo e sensibilidade a mudanças de hash',
      'Três Nós de Base Convergentes: Arquivos e subpastas sendo sintetizados no cume',
      'Esmeralda da Sabedoria: Homenagem à deusa Athena, inteligência pura sem retrabalho'
    ],
    geometricSpecs: [
      'Triângulo delta/chevron com ângulo apical de 70°',
      'Linhas de pulso de escaneamento em arco concêntrico (raio 18px e 26px)',
      'Nós nodais nos pontos de amostragem inferiores ligados por vetores finos',
      'Simetria bilateral rigorosa e alinhamento vertical absoluto'
    ],
    connections: [
      {
        toId: 'zeus',
        relationship: 'Transmite o mapa estelar para',
        roleDescription: 'Entrega o índice .athena/ para que o Zeus saiba onde agir',
        direction: 'to',
      },
      {
        toId: 'thero',
        relationship: 'Reporta status de missão para',
        roleDescription: 'Executada nativamente pelo comando `thero index`',
        direction: 'from',
      }
    ],
    cliUsage: 'python athena.py index .',
    landing: LANDING_PAGES_DATA.athena
  },
  {
    id: 'zeus',
    name: 'Zeus',
    tagline: 'O Estrategista Tático & Raio de Decisão',
    role: 'habitante',
    roleTitle: 'Habitante Estrategista / Oráculo Tático',
    roleDescription: 'O habitante tático que cruza o objetivo da missão com o mapa da Athena, disparando um plano de ação preciso antes de tocar no código.',
    colors: {
      // Trocado de amarelo-ouro (#EAB308, gradiente indo ate #D97706) pra
      // lima eletrico: o tom antigo ficava proximo demais do laranja do
      // thero (#F97316) a distancia de olhar rapido - principalmente o
      // gradiente, que descia ate um amber quase identico. Lima fica
      // inconfundivel e ainda combina com o tema de raio/voltagem.
      primary: '#A3E635',
      secondary: '#65A30D',
      accent: '#D9F99D',
      glow: 'rgba(163, 230, 53, 0.45)',
      bgDark: '#1A2205',
      gradient: 'linear-gradient(135deg, #D9F99D 0%, #65A30D 100%)',
      name: 'Lima Elétrico & Voltagem Verde',
    },
    siteUrl: 'https://theroverse.github.io/zeus/',
    repoUrl: 'https://github.com/theroverse/zeus',
    description: 'Planejador de tarefas que cruza intenções com os resumos da Athena e gera um plano objetivo em Markdown (.claude/zeus-plan.md) sem adivinhações.',
    designRationale: 'O raio divino de Zeus é reinterpretado como um vetor geométrico angular que atravessa um retículo de coordenadas cirúrgicas. O raio representa a tomada de decisão instantânea; as miras representam a precisão de selecionar apenas os arquivos que realmente importam.',
    symbolism: [
      'Raio Angular em Z: O poder de síntese e a quebra de inércia antes do código',
      'Miras Táticas Cardinais: Alinhamento de coordenadas (Objetivo, Arquivos, Passos, Riscos)',
      'Corte Diagonal Preciso: Eliminação de desperdício de tokens e ruído',
      'Ouro Radiante: Clareza absoluta e liderança estratégica'
    ],
    geometricSpecs: [
      'Zigue-zague de 3 vértices com ângulos de 60° e espessura de 4px',
      'Miras cardinais nos 4 eixos (N, S, L, O) com separação óptica de 6px',
      'Terminais afiados com chanfro arredondado ergonômico',
      'Centro de massa coincidente com o centro do plano coordenado'
    ],
    connections: [
      {
        toId: 'athena',
        relationship: 'Consulta a cartografia de',
        roleDescription: 'Lê os resumos gerados pela Athena para não ler código cru',
        direction: 'from',
      },
      {
        toId: 'thero',
        relationship: 'Entrega o plano executivo para',
        roleDescription: 'O Thero aciona o Zeus via `thero --plan "tarefa"`',
        direction: 'to',
      }
    ],
    cliUsage: 'python zeus.py plan "minha tarefa"',
    landing: LANDING_PAGES_DATA.zeus
  },
  {
    id: 'thero',
    name: 'Thero',
    tagline: 'O Maestro da IA & Navegador Supremo',
    role: 'habitante',
    roleTitle: 'Habitante Comandante / O Arquiteto Supremo',
    roleDescription: 'O habitante piloto que veste o traje de comando. Dá contexto, critérios sênior e orquestra todas as outras entidades no Claude Code.',
    colors: {
      primary: '#F97316',
      secondary: '#EA580C',
      accent: '#FB923C',
      glow: 'rgba(249, 115, 22, 0.45)',
      bgDark: '#261208',
      gradient: 'linear-gradient(135deg, #FB923C 0%, #C2410C 100%)',
      name: 'Terracota Solar & Âmbar Flamejante',
    },
    siteUrl: 'https://theroverse.github.io/thero/',
    repoUrl: 'https://github.com/theroverse/thero',
    description: 'Suíte que transforma o Claude Code numa máquina de trabalho profissional: injeta contexto persistente, regras de engenharia sênior e coordena Athena e Zeus.',
    designRationale: 'O ícone sintetiza o visor HUD / elmo do habitante navegador espacial fundido ao glifo de um "T" arquitetônico. A linha horizontal do horizonte representa estabilidade e maturidade sênior; o foco central com arco de cobertura simboliza visão holística de engenharia.',
    symbolism: [
      'Visor HUD & Elmo do Comandante: A mente humana sênior guiando a força da IA',
      'Glifo Arquitetônico "T": A inicial de Thero e a régua T de arquitetura de software',
      'Arco Superior Protetor: Engenharia sólida que protege contra regressões e alucinações',
      'Terracota Orgânico Quente: A presença humana, o calor da experiência e a cultura artesanal de software'
    ],
    geometricSpecs: [
      'Barra superior T de largura 42px com espessura de 4px',
      'Haste central vertical descendente com terminação em seta sutil de alinhamento',
      'Arco de visor superior a 180° com raio de 18px',
      'Indicador de foco/pupila central de diâmetro 6px'
    ],
    connections: [
      {
        toId: 'athena',
        relationship: 'Comanda a missão de',
        roleDescription: 'Chama a Athena para mapear o repositório sob demanda',
        direction: 'to',
      },
      {
        toId: 'zeus',
        relationship: 'Delega o planejamento a',
        roleDescription: 'Solicita plano tático para qualquer tarefa complexa',
        direction: 'to',
      },
      {
        toId: 'genesis',
        relationship: 'Instalado no ambiente de',
        roleDescription: 'Configurado como ferramenta primária na Claude Code Suite',
        direction: 'from',
      }
    ],
    cliUsage: 'python thero.py',
    landing: LANDING_PAGES_DATA.thero
  }
];

export const COSMIC_ROLES_INFO = {
  planeta: {
    label: 'Planetas',
    iconName: 'Globe',
    badgeClass: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    description: 'Ferramentas autossustentáveis que fornecem ou consomem dados de forma perene no ecossistema.',
    tools: ['nexo', 'genesis']
  },
  nave: {
    label: 'Naves',
    iconName: 'Navigation',
    badgeClass: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    description: 'Veículos rápidos que transitam entre diretórios e sistemas, transportando dados, resumos e índices.',
    tools: ['athena']
  },
  habitante: {
    label: 'Habitantes',
    iconName: 'UserCheck',
    badgeClass: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    description: 'As mentes que operam, orquestram e tomam decisões no ecossistema digital.',
    tools: ['thero', 'zeus']
  }
};
