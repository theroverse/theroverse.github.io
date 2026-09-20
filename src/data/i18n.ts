export type Language = 'pt' | 'en';

export function getDeviceLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  
  // 1. Check saved preference
  try {
    const stored = localStorage.getItem('theroverse_lang');
    if (stored === 'pt' || stored === 'en') {
      return stored;
    }
  } catch (e) {
    // localStorage may be disabled or restricted
  }

  // 2. Inspect device language
  const nav = (
    navigator.language ||
    (navigator.languages && navigator.languages[0]) ||
    ''
  ).toLowerCase();

  // If Portuguese (pt-BR, pt-PT, pt), default to Portuguese
  if (nav.startsWith('pt')) {
    return 'pt';
  }

  // If not Portuguese (even if English or any other foreign language), default to English
  return 'en';
}

export const translations = {
  pt: {
    navbar: {
      hub: 'Hub',
      architectHq: 'QG do Arquiteto',
      audioOn: 'Áudio ON',
      audioMute: 'Mudo',
      audioToggleTitle: 'Alternar Efeitos Sonoros',
      officialSite: 'Site Nexo',
      githubRepo: 'GitHub',
      iconsVault: 'Acervo de Ícones',
    },
    hub: {
      badge: 'Ecossistema THEROVERSE',
      subtitle: 'Planetas autossustentáveis que protegem seus dados, naves que mapeiam código sem queimar tokens, e inteligência de engenharia para blindar sua produção.',
      toolsCount: '5 Ferramentas Soberanas',
      zeroTelemetry: '0% Telemetria Invasiva',
      localExecution: '100% Execução Local',
      portalsBadge: 'Portais Hiperespaço',
      portalsTitle: 'Escolha uma Entidade & Salte Através do Portal',
      architectBtn: 'QG do Arquiteto · Anthero Vieira Neto',
      enterLanding: 'Viajar pelo portal',
      roles: {
        planeta: 'Planeta',
        nave: 'Nave Cósmica',
        habitante: 'Habitante Sênior',
      },
      rolesShort: {
        genesis: 'Terraformer',
        thero: 'Maestro Sênior',
        athena: 'Cartógrafa',
        zeus: 'Estrategista',
        nexo: 'Cofre Local',
      },
      architectCard: {
        badge: 'Arquiteto do THEROVERSE',
        name: 'Anthero Vieira Neto',
        subtitle: 'Base de Comando & Engenharia Soberana',
        description: 'O quartel-general de onde emergem as diretrizes operacionais, ferramentas de precisão, sistemas de infraestrutura e a arquitetura do ecossistema.',
        cta: 'Acessar QG do Arquiteto',
      },
      manifesto: {
        badge: 'O Manifesto do THEROVERSE',
        title: 'Engenharia Pragmática, 0% Telemetria Invasiva, 100% Autonomia',
        body: 'Criado por um desenvolvedor cansado de softwares que exigem dezenas de logins em nuvem, atualizações que quebram fluxos consagrados e assistentes de IA que inventam código sem critérios de engenharia. Cada ferramenta deste ecossistema foi forjada por mim para resolver um problema real, cirúrgico e com respeito sagrado à máquina local.',
        pills: [
          'Python 3.10+ Stdlib Pura',
          'Armazenamento Local Soberano',
          'Setup Automatizado Windows 11'
        ]
      }
    },
    warp: {
      thrusters: 'PROPULSORES WARP ATIVADOS',
      jumpingTo: 'SALTANDO PARA',
      syncing: 'Sincronizando coordenadas quânticas do setor estelar...',
      portalHub: 'Portal Hub',
      iconsVault: 'Acervo de Ícones',
    },
    toolPages: {
      officialSite: 'Acessar Site Oficial',
      githubRepo: 'Ver Repositório GitHub',
      copyCmd: 'Copiar comando',
      copied: 'Copiado!',
      diagnosticBadge: 'Diagnóstico de Bordo · A Dor Humana',
      labBadge: 'Laboratório Cósmico Interativo',
      labTitle: 'Experimente a Ferramenta ao Vivo',
      labSubtitle: 'Sem enrolação nem vídeos de 20 minutos. Clique nos controles e veja a ferramenta operar.',
      faqBadge: 'Perguntas Frequentes & Respostas Sem Filtro',
      faqTitle: 'FAQ Direto ao Ponto',
      faqSubtitle: 'Tudo o que você queria saber antes de instalar, respondido com transparência total.',
      jumpTo: 'Salto Hiperespaço para Outras Ferramentas',
      footerArchitect: 'Anthero Vieira Neto · QG do Arquiteto',
      readyBadge: 'GitHub Pages Ready',
    },
    toolData: {
      nexo: {
        tagline: 'O Planeta dos Dados & Hub de Mídia Local',
        heroBadge: 'Soberania de Dados & Streaming Local',
        heroHeadline: 'Seus dados. Sua máquina. Sem mensalidades nem nuvens alheias.',
        heroSubheadline: 'Organizador local completo para documentos, fotos com reconhecimento facial, filmes/séries, ZIPs e media server integrado com tray e autostart.',
        punchline: 'Seus arquivos não pertencem à nuvem de ninguém.',
      },
      genesis: {
        tagline: 'O Berço da Criação & Matriz do Universo',
        heroBadge: 'Setup Automatizado Windows 11',
        heroHeadline: 'Windows recém-formatado configurado em minutos, sem estresse.',
        heroSubheadline: 'Assistente automatizado pós-formatação. Instala Terminal Starship, PowerToys, Windhawk, navegadores, jogos e a suíte Claude Code.',
        punchline: 'Nunca mais passe um domingo inteiro instalando programas.',
      },
      athena: {
        tagline: 'A Nave Cartógrafa & Radar de Código',
        heroBadge: 'Indexador Recursivo de Repositórios',
        heroHeadline: 'Mapeie projetos inteiros sem queimar a janela de contexto da IA.',
        heroSubheadline: 'Indexador recursivo de código que resume projetos bottom-up, gerando um mapa arquitetural completo com cache incremental de hash.',
        punchline: 'A IA não precisa ler 40.000 linhas para alterar uma função.',
      },
      zeus: {
        tagline: 'O Estrategista Tático & Raio de Decisão',
        heroBadge: 'Planejador Tático de Engenharia',
        heroHeadline: 'Pense antes de codar. Planejamento objetivo sem alucinações.',
        heroSubheadline: 'Planejador de tarefas que cruza intenções com os resumos da Athena e gera um plano executivo em Markdown (.claude/zeus-plan.md).',
        punchline: 'Código sem plano é débito técnico com juros compostos.',
      },
      thero: {
        tagline: 'O Maestro da IA & Navegador Supremo',
        heroBadge: 'Orquestrador Sênior para Claude Code',
        heroHeadline: 'Transforme o Claude Code em uma máquina cirúrgica de engenharia.',
        heroSubheadline: 'Suíte que injeta contexto persistente, regras de engenharia sênior e coordena Athena e Zeus no fluxo diário do terminal.',
        punchline: 'IA sem postura sênior é apenas um gerador de código desgovernado.',
      },
    }
  },
  en: {
    navbar: {
      hub: 'Hub',
      architectHq: 'Architect HQ',
      audioOn: 'Audio ON',
      audioMute: 'Muted',
      audioToggleTitle: 'Toggle Sound Effects',
      officialSite: 'Nexo Site',
      githubRepo: 'GitHub',
      iconsVault: 'Icons Vault',
    },
    hub: {
      badge: 'THEROVERSE Ecosystem',
      subtitle: 'Self-sustaining planets protecting your data, starships mapping code without burning tokens, and engineering intelligence guarding your production.',
      toolsCount: '5 Sovereign Tools',
      zeroTelemetry: '0% Invasive Telemetry',
      localExecution: '100% Local Execution',
      portalsBadge: 'Hyperspace Portals',
      portalsTitle: 'Select an Entity & Jump Through the Portal',
      architectBtn: 'Architect HQ · Anthero Vieira Neto',
      enterLanding: 'Travel through the portal',
      roles: {
        planeta: 'Planet',
        nave: 'Starship',
        habitante: 'Senior Resident',
      },
      rolesShort: {
        genesis: 'Terraformer',
        thero: 'Senior Maestro',
        athena: 'Cartographer',
        zeus: 'Strategist',
        nexo: 'Local Vault',
      },
      architectCard: {
        badge: 'Architect of the THEROVERSE',
        name: 'Anthero Vieira Neto',
        subtitle: 'Command Base & Sovereign Engineering',
        description: 'The command center where operational directives, precision tooling, infrastructure systems, and ecosystem architecture are forged.',
        cta: 'Access Architect HQ',
      },
      manifesto: {
        badge: 'The THEROVERSE Manifesto',
        title: 'Pragmatic Engineering, 0% Invasive Telemetry, 100% Autonomy',
        body: 'Built by an independent developer fed up with tools demanding endless cloud logins, forced updates breaking proven workflows, and AI assistants fabricating code without engineering discipline. Every tool in this ecosystem was forged by me to solve real, surgical problems while strictly respecting the user’s local machine.',
        pills: [
          'Pure Python 3.10+ Stdlib',
          'Sovereign Local Storage',
          'Automated Windows 11 Setup'
        ]
      }
    },
    warp: {
      thrusters: 'WARP THRUSTERS ENGAGED',
      jumpingTo: 'WARPING TO',
      syncing: 'Synchronizing stellar sector quantum coordinates...',
      portalHub: 'Portal Hub',
      iconsVault: 'Icons Vault',
    },
    toolPages: {
      officialSite: 'Visit Official Site',
      githubRepo: 'View GitHub Repository',
      copyCmd: 'Copy command',
      copied: 'Copied!',
      diagnosticBadge: 'Onboard Diagnostic · The Real Pain',
      labBadge: 'Interactive Cosmic Lab',
      labTitle: 'Try the Tool Live',
      labSubtitle: 'No marketing fluff or 20-minute sales videos. Click the controls and see the engine in action.',
      faqBadge: 'Frequently Asked Questions & Raw Answers',
      faqTitle: 'Straightforward FAQ',
      faqSubtitle: 'Everything you wanted to know before installing, answered with full transparency.',
      jumpTo: 'Hyperspace Jump to Other Tools',
      footerArchitect: 'Anthero Vieira Neto · Architect HQ',
      readyBadge: 'GitHub Pages Ready',
    },
    toolData: {
      nexo: {
        tagline: 'The Data Planet & Local Media Hub',
        heroBadge: 'Data Sovereignty & Local Streaming',
        heroHeadline: 'Your data. Your machine. Zero subscriptions or third-party clouds.',
        heroSubheadline: 'Complete local organizer for documents, facial-recognition photos, movies/series, archives, and integrated media server with tray and autostart.',
        punchline: 'Your personal files belong to no one else’s cloud.',
      },
      genesis: {
        tagline: 'The Cradle of Creation & Matrix',
        heroBadge: 'Automated Windows 11 Setup',
        heroHeadline: 'Fresh Windows install fully configured in minutes, zero friction.',
        heroSubheadline: 'Automated post-format assistant. Installs Starship Terminal, PowerToys, Windhawk, browsers, gaming runtimes, and the Claude Code suite.',
        punchline: 'Never waste an entire Sunday installing software again.',
      },
      athena: {
        tagline: 'The Cartographer Ship & Code Radar',
        heroBadge: 'Recursive Repository Indexer',
        heroHeadline: 'Map entire codebases without exhausting your AI context window.',
        heroSubheadline: 'Recursive code indexer that summarizes projects bottom-up, generating a complete architectural map with incremental hash caching.',
        punchline: 'The AI does not need to read 40,000 raw lines to modify one function.',
      },
      zeus: {
        tagline: 'The Tactical Strategist & Decision Bolt',
        heroBadge: 'Tactical Engineering Planner',
        heroHeadline: 'Think before coding. Objective task planning with zero hallucinations.',
        heroSubheadline: 'Task planner that synthesizes intent with Athena summaries and produces an executive Markdown roadmap (.claude/zeus-plan.md).',
        punchline: 'Code without a plan is technical debt with compound interest.',
      },
      thero: {
        tagline: 'The AI Maestro & Supreme Navigator',
        heroBadge: 'Senior Orchestrator for Claude Code',
        heroHeadline: 'Transform Claude Code into a surgical engineering powerhouse.',
        heroSubheadline: 'Suite that injects persistent context, senior software engineering guardrails, and coordinates Athena and Zeus directly in your terminal.',
        punchline: 'AI without senior discipline is just an unguided code dispenser.',
      },
    }
  }
};
