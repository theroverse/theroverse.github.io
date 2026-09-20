import { ToolId, LandingPageData } from '../types';

export const LANDING_PAGES_DATA: Record<ToolId, LandingPageData> = {
  genesis: {
    id: 'genesis',
    heroBadge: 'SETOR OMEGA · PLANETA TERRAFORMER',
    heroHeadline: 'O Big Bang do seu Windows 11. Sem ele, seu PC é um peso de papel caro.',
    heroSubheadline: 'O assistente de setup pós-formatação de 17 etapas que acorda sua máquina do coma. Escolha tudo o que entra, revise numa página só e clique em instalar.',
    punchline: 'Chega de passar 6 horas fechando popups do Edge para baixar o Chrome com instalador falso.',
    licenseType: 'MIT License · Open-Source',
    licenseNote: '100% Livre e auditável. Projetado para rodar em Windows 10/11 x64/ARM.',
    comicProblem: {
      title: 'A agonia cósmica do primeiro dia com um PC formatado',
      lead: 'Você acabou de instalar o Windows 11 limpo. O papel de parede do Bloom azul parece lindo por exatos 12 segundos até que o choque da realidade atinge seu córtex pré-frontal:',
      agonyBullets: [
        'O Microsoft Edge abre em tela cheia com 47 notícias de fofocas da MSN e te implora de joelhos para ser seu navegador padrão.',
        'Você não tem nem o git instalado. Nem o Python. Nem seu editor de código. Nem um descompactador de ZIP decente.',
        'Ao pesquisar "baixar VS Code" ou "baixar Steam", você clica em 3 anúncios patrocinados com botões verdes gigantes de "DOWNLOAD HERE" de procedência altamente suspeita.',
        'Seu terminal é aquela janela azul dos anos 90 com a fonte Consolas pixelada em vez de um Starship reluzente com Nerd Fonts.',
        'Você passa o sábado inteiro reiniciando o computador para instalar drivers e dependências uma por uma como se estivéssemos em 2004.'
      ],
      cosmicWarning: 'Diagnóstico: O vácuo estéril do Windows recém-instalado drena sua vontade de viver. É por isso que o Genesis existe.'
    },
    solutionSummary: {
      title: 'A Terraformação Completa em 17 Etapas Guiadas',
      description: 'O SETUP.EXE é uma matriz executiva que reúne tudo o que um desenvolvedor e usuário avançado realmente precisa em 4 pilares: Sistema & Terminal, Navegadores, Jogos e a suíte completa de Claude Code.',
      stats: [
        { label: 'Etapas Guiadas', value: '17', hint: 'Do terminal aos jogos' },
        { label: 'Tempo Economizado', value: '~4.5h', hint: 'Chega de caçar instaladores' },
        { label: 'Instaladores Suspeitos', value: '0', hint: 'Winget & fontes oficiais' },
        { label: 'Claude Code Suite', value: '100%', hint: 'Thero + Athena + Zeus pré-armados' }
      ]
    },
    features: [
      {
        title: 'Terminal dos Deuses (Starship + PowerToys + Windhawk)',
        description: 'Instala e configura o Windows Terminal com Starship prompt, histórico inteligente, Nerd Fonts e atalhos globais de produtividade.',
        badge: 'Sistema',
        technicalDetail: 'Configura Starship.toml, Winget packages e profiles.json do Windows Terminal.',
        iconName: 'Terminal'
      },
      {
        title: 'Claude Code Suite Pré-Armada',
        description: 'Não apenas instala o Claude Code: já deixa o Thero, a Athena e o Zeus prontos para uso imediato no PowerShell.',
        badge: 'IA & Engenharia',
        technicalDetail: 'Garante Python 3.10+, Node.js/npx e atalhos de console no PATH do sistema.',
        iconName: 'Sparkles'
      },
      {
        title: 'Navegadores & Ferramentas Sem Lixo',
        description: 'Escolha exatamente seus navegadores e utilitários sem barras de ferramentas, sem extensões de adware e sem lixo promocional.',
        badge: 'Navegação',
        technicalDetail: 'Instalação silenciosa via flags oficiais de linha de comando.',
        iconName: 'Globe'
      },
      {
        title: 'Ecossistema Gamer & Mídia',
        description: 'Steam, Discord, drivers gráficos essenciais e o cliente de mídia do Nexo preparados num único lote ordenado.',
        badge: 'Lazer & Mídia',
        technicalDetail: 'Dependências DirectX, Visual C++ Redistributables e runtimes incluídos.',
        iconName: 'Gamepad2'
      }
    ],
    cliSnippet: {
      command: '.\\setup.exe --preset developer --unattended',
      description: 'Execute o assistente gráfico interativo ou rode em modo desacompanhado para automação em lote.',
      outputSample: `[GENESIS] Inicializando matriz de terraformação Windows 11...
[✓] Terminal Starship injetado com sucesso no perfil PowerShell.
[✓] PowerToys & Windhawk ativos com módulos de produtividade.
[✓] Python 3.12 detectado: Suíte Claude Code (Thero, Athena, Zeus) linkada.
[✓] 17/17 etapas concluídas. O seu PC agora é uma estação estelar de verdade.`
    },
    acidFaq: [
      {
        question: 'Por que você chamou de Genesis?',
        answer: 'Porque sem ele o universo do meu PC simplesmente não existe. Depois de formatar o SSD, tentar usar o Windows 11 cru é uma experiência medieval. O Genesis é o Big Bang que sopra vida inteligente nas partículas de silício.',
        nerdFootnote: 'Gênesis 1:3: "E disse o dev: Haja terminal com Starship e Claude Code. E houve terminal."'
      },
      {
        question: 'Ele instala tranqueira patrocinada ou antivírus indiano?',
        answer: 'Absolutamente não. Zero bloatware, zero patrocinadores obscuros, zero "McAfee Trial de 30 dias". Você marca estritamente o que quer numa lista transparente e revisa tudo antes de um único clique de instalação.',
        nerdFootnote: 'Se algum dia eu colocar um instalador com checkbox escondido para instalar barra do Baidu, favor atirar meu PC no sol.'
      },
      {
        question: 'E se eu já tiver formatado e só quiser o terminal e o Claude Code?',
        answer: 'Você pode desmarcar qualquer categoria! O Genesis te dá controle granular. Se só quiser a Claude Code Suite e o Starship, marque apenas eles e prossiga para a revisão final.',
        nerdFootnote: 'Modularidade civilizada sem coerção.'
      }
    ],
    portalPitch: {
      genesis: 'Você está no solo de Genesis — onde a máquina ganha consciência.',
      nexo: 'Após terraformar a máquina, o Nexo assume como o planeta onde seus arquivos e fotos vivem protegidos.',
      thero: 'O Genesis prepara o terminal para que o Thero assuma o comando do Claude Code.',
      athena: 'A nave Athena depende do Python e do ambiente que o Genesis preparou no solo.',
      zeus: 'O Zeus usa o terminal e o ambiente do Genesis para calcular cada raio de código.'
    }
  },

  nexo: {
    id: 'nexo',
    heroBadge: 'SETOR ALPHA · PLANETA ARQUIVO VIVO',
    heroHeadline: 'Seus arquivos pertencem ao seu disco. Não à nuvem de um bilionário.',
    heroSubheadline: 'O organizador local que cataloga documentos, reconhece rostos em fotos offline, entrega streaming de filmes pra sua TV e roda silencioso no System Tray.',
    punchline: '100% Gratuito. 0 telemetria. 0 assinaturas mensais de US$ 19,99 para ver fotos do seu cachorro.',
    licenseType: '100% Gratuito · Closed-Source (Privacidade Total)',
    licenseNote: 'Totalmente gratuito para uso pessoal e profissional. Seus dados nunca saem da sua máquina.',
    comicProblem: {
      title: 'A chantagem das nuvens corporativas modernas',
      lead: 'Em algum momento da última década, a indústria de tecnologia decidiu que você não tem maturidade emocional para possuir seus próprios arquivos:',
      agonyBullets: [
        'Seu HD de 2TB está 80% vazio, mas o Google Drive e o iCloud estão bloqueando seus e-mails porque faltam 200MB de cota de fotos.',
        'Para assistir um vídeo do aniversário da família na TV da sala, você precisa fazer upload num servidor em Virgínia para depois fazer download na sua TV a 2 metros do PC.',
        'Seus contratos e declarações de imposto de renda estão servindo para treinar modelos de publicidade direcionada.',
        'Sua pasta "Downloads" parece uma gaveta de cabos emaranhados com 4.800 arquivos chamados "documento (1).pdf", "setup_final_v2_FINAL.exe" e "IMG_2024.jpg".'
      ],
      cosmicWarning: 'Alerta de Soberania: Confiar sua história digital a servidores alheios é como alugar um apartamento onde o síndico lê seu diário toda madrugada.'
    },
    solutionSummary: {
      title: 'Biosfera Autossuficiente no seu Disco Local',
      description: 'O Nexo é um aplicativo completo para Windows 10/11 com instalador .exe simples e wizard guiado. Ele organiza pastas automaticamente, sobe um media server embutido e processa IA local.',
      stats: [
        { label: 'Preço / Assinatura', value: 'R$ 0,00', hint: 'Sem pegadinhas ou planos premium' },
        { label: 'Dados Enviados pra Nuvem', value: '0 Bytes', hint: '100% local no seu hardware' },
        { label: 'Reconhecimento Facial', value: 'Offline', hint: 'Modelos de visão executados localmente' },
        { label: 'Media Server', value: 'Embutido', hint: 'Transmite pra TV, celular e browser' }
      ]
    },
    features: [
      {
        title: 'Mídia Server Embutido (Pronto pra TV e Celular)',
        description: 'Não precisa configurar Jellyfin, Plex ou Docker. O Nexo entrega os metadados corretos de filmes/séries e serve na sua rede local com 1 clique.',
        badge: 'Streaming',
        technicalDetail: 'Servidor HTTP leve compatível com Smart TVs, browsers modernos e apps móveis.',
        iconName: 'Tv'
      },
      {
        title: 'Reconhecimento Facial de Fotos 100% Local',
        description: 'Agrupa fotos por pessoas sem enviar um único pixel para a internet. Na primeira aparição ele pergunta quem é; depois, reconhece sozinho.',
        badge: 'Visão Computacional',
        technicalDetail: 'Redes neurais compactas rodando na CPU/GPU local com banco de embeddings criptografado.',
        iconName: 'ScanFace'
      },
      {
        title: 'Triagem Inteligente de Documentos & Boletos',
        description: 'Separa automaticamente PDFs, notas fiscais, boletos, faturas e contratos em árvores de diretórios limpas e pesquisáveis.',
        badge: 'Organização',
        technicalDetail: 'Extração de texto offline e categorização contextual sem telemetria.',
        iconName: 'FileText'
      },
      {
        title: 'Guardião de Limpeza no System Tray',
        description: 'Vive quietinho ao lado do relógio do Windows. Descompacta ZIPs automaticamente, alerta sobre instaladores duplicados e não consome sua RAM.',
        badge: 'Windows Tray',
        technicalDetail: 'Daemon leve com consumo inferior a 45MB de memória em repouso.',
        iconName: 'HardDrive'
      }
    ],
    cliSnippet: {
      command: 'nexo --status',
      description: 'Ou abra pelo ícone com anel orbital no System Tray ao lado do relógio do Windows.',
      outputSample: `[NEXO CORE] Biosfera Local Operante · http://localhost:4321
[✓] 1.482 Fotos catalogadas localmente (18 rostos indexados)
[✓] Media Server: 84 Filmes prontos para streaming na TV da sala
[✓] 32 Boletos arquivados em ~/Documentos/Fiscal/2026/
[✓] Telemetria externa: 0 pacotes enviados. Seus dados estão seguros em casa.`
    },
    acidFaq: [
      {
        question: 'Se é grátis, eu sou o produto?',
        answer: 'Não. O modelo de negócios de "se é grátis você é o produto" só se aplica a empresas que têm custos de servidores em nuvem para sustentar. O Nexo roda no SEU computador, usa a SUA eletricidade e grava no SEU disco. Eu não tenho servidores seus para pagar, logo não preciso bisbilhotar seus dados nem vender anúncio.',
        nerdFootnote: 'Soberania digital pura: o software trabalha para você, não para os acionistas de Mountain View.'
      },
      {
        question: 'Preciso saber programar ou subir Docker pra usar o Nexo?',
        answer: 'Nem pensar. Você baixa o instalador .exe (ou o .zip portátil), roda o assistente que pergunta quais pastas monitorar e pronto. Sem prompt de comando, sem Python, sem compilar nada.',
        nerdFootnote: 'Feito para humanos que valorizam seu tempo e seus arquivos.'
      },
      {
        question: 'Ele substitui o Plex ou Jellyfin?',
        answer: 'Se você já usa Plex ou Jellyfin, o Nexo é o melhor amigo deles: organiza as pastas com os nomes e metadados perfeitos. Se você NÃO usa nenhum deles, o Nexo tem um player web embutido que já resolve seu streaming sem complicação.',
        nerdFootnote: 'Paz de espírito multimídia.'
      }
    ],
    portalPitch: {
      genesis: 'O Genesis prepara o autostart e dependências de sistema para o Nexo rodar liso no Windows.',
      nexo: 'Você está no Nexo — o cofre vivo que protege tudo o que é seu.',
      thero: 'O Thero pode consultar o Nexo para resgatar documentações de projetos arquivados.',
      athena: 'A Athena mapeia o código do ecossistema para que o Nexo continue rápido.',
      zeus: 'O Zeus planeja melhorias para os algoritmos de triagem local do Nexo.'
    }
  },

  thero: {
    id: 'thero',
    heroBadge: 'SETOR DELTA · HABITANTE COMANDANTE',
    heroHeadline: 'Seu Claude Code agora pensa como um Engenheiro Sênior que já perdeu o sono.',
    heroSubheadline: 'Configura o Claude Code com um Engineering Operating System enxuto, Agent Skills sob demanda e regras de conduta implacáveis antes de você digitar a primeira linha.',
    punchline: 'Impeça a IA de reescrever 500 linhas de código legado que já funcionavam só pra trocar por uma biblioteca experimental.',
    licenseType: 'MIT License · Open-Source',
    licenseNote: 'Python 3.10+ Stdlib pura. Zero dependências externas de terceiros.',
    comicProblem: {
      title: 'A síndrome do Estagiário de IA Hiperativo',
      lead: 'Você abre o Claude Code num projeto novo e ele começa do zero absoluto: não conhece suas convenções, não tem bom senso de produção e sofre de otimismo imprudente:',
      agonyBullets: [
        'Você pede: "Adiciona um campo de CPF no formulário". A IA prontamente reescreve 6 arquivos de autenticação, troca o router e quebra o CSS da navbar.',
        'A cada nova sessão, você é forçado a reexplicar as mesmas 15 regras: "Não apague testes existentes", "Avise antes de comandos destrutivos", "Termine com resumo".',
        'Seu arquivo de instruções (CLAUDE.md) virou uma bíblia de 4.000 linhas que consome metade da sua janela de contexto antes da primeira mensagem.',
        'A IA alucina pacotes inexistentes com nomes convincentes e você passa 40 minutos depurando um erro de import.'
      ],
      cosmicWarning: 'O perigo real não é a IA se rebelar; é a IA refatorar silenciosamente seu banco de dados na sexta-feira às 17h58.'
    },
    solutionSummary: {
      title: 'Engineering OS: Contexto Firme, Skills Sob Demanda',
      description: 'O thero.py roda uma única vez e estrutura seu fluxo de engenharia profissional. Ele separa regras globais de comportamento de conhecimentos especializados (React, Supabase, Stripe, etc.), mantendo seu CLAUDE.md leve e econômico em tokens.',
      stats: [
        { label: 'Dependências Externas', value: '0', hint: 'Stdlib pura de Python' },
        { label: 'Risco de Perda de Código', value: 'Zero', hint: 'Backup sagrado antes de qualquer toque' },
        { label: 'Economia de Tokens', value: '~65%', hint: 'Skills acionadas só quando necessárias' },
        { label: 'Comando Global', value: 'thero', hint: 'PowerShell, Bash ou Zsh com atalho direto' }
      ]
    },
    features: [
      {
        title: 'Engineering Operating System Enxuto',
        description: 'Injeta instruções testadas em campo: favorecer mudanças pequenas e verificáveis, nunca quebrar código legado funcional e avisar antes de ações de risco.',
        badge: 'Governança',
        technicalDetail: 'Consolidação inteligente preservando regras existentes no CLAUDE.md.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Agent Skills Sob Demanda (Sem Inflar Contexto)',
        description: 'React, Supabase, Stripe, Firebase, TypeScript e testes entram no contexto somente quando a tarefa realmente exige, sem gastar seus tokens à toa.',
        badge: 'Economia de Tokens',
        technicalDetail: 'Integração oficial via `npx skills add`, preservando caveman e impeccable.',
        iconName: 'Boxes'
      },
      {
        title: 'Orquestração Estelar com Athena & Zeus',
        description: 'O Thero já vem com os atalhos `thero --index` (Athena) e `thero --plan "tarefa"` (Zeus) embutidos no seu terminal diário.',
        badge: 'Suíte Cósmica',
        technicalDetail: 'Clona e atualiza Athena e Zeus automaticamente caso não estejam instalados.',
        iconName: 'Compass'
      },
      {
        title: 'Modo Auditoria & Backups Blindados',
        description: 'Audite um repositório em modo somente leitura (`thero --audit-only`) antes de mexer em qualquer arquivo. E todo backup é versionado com carimbo de tempo.',
        badge: 'Segurança Máxima',
        technicalDetail: 'Backups gravados em .claude/backups/ com hash verificável.',
        iconName: 'History'
      }
    ],
    cliSnippet: {
      command: 'python thero.py',
      description: 'Rode no projeto atual com --local ou configure seu ambiente global com 1 clique.',
      outputSample: `[THERO] Engineering Operating System iniciado...
[✓] Backup sagrado gerado em ~/.claude/backups/2026-09-19_20-15.bak
[✓] Injetando skills sob demanda (React, TypeScript, Supabase, Testes)...
[✓] Preservadas regras customizadas e integrados guardrails de engenharia sênior.
[✓] Atalho global instalado: agora digite apenas 'thero' no terminal!`
    },
    acidFaq: [
      {
        question: 'Preciso ser um desenvolvedor sênior pra usar o Thero?',
        answer: 'Pelo contrário! Se você está começando a programar e quer que o Claude Code te ajude com padrão de qualidade de quem já quebrou a cabeça por anos na indústria, o Thero é o atalho perfeito. Ele importa para o seu repositório a maturidade de arquitetura que você levaria anos para formular em prompts.',
        nerdFootnote: 'Sênior de bolso rodando em Python padrão.'
      },
      {
        question: 'Ele vai apagar meu CLAUDE.md atual?',
        answer: 'Nunca. O Thero tem uma regra inegociável de respeito ao trabalho humano: ele faz backup antes de espirrar e usa o próprio Claude para mesclar suas instruções prévias com o novo Engineering OS, sem deletar nada que você escreveu.',
        nerdFootnote: 'Backup first, perguntas depois.'
      },
      {
        question: 'Por que Stdlib Only em Python sem dependências?',
        answer: 'Porque cansei de ferramentas que prometem te ajudar com código mas antes exigem que você instale 400 bibliotecas que quebram com atualizações de versão. Você já tem Python; o Thero roda com o que já existe no seu sistema operacional.',
        nerdFootnote: 'Zero node_modules de 800MB só pra colocar regras num arquivo markdown.'
      }
    ],
    portalPitch: {
      genesis: 'O Genesis prepara o terminal e o Python para que o Thero possa atuar.',
      nexo: 'O Thero orienta o Claude a construir código limpo caso você vá integrar APIs com o Nexo.',
      thero: 'Você está no posto de comando do Thero — onde a engenharia humana sênior dita o rumo.',
      athena: 'O Thero aciona a Athena através do comando `thero --index` para levantar o mapa do projeto.',
      zeus: 'O Thero invoca o Zeus via `thero --plan` para blindar qualquer alteração antes da execução.'
    }
  },

  athena: {
    id: 'athena',
    heroBadge: 'SETOR EPSILON · NAVE CARTÓGRAFA',
    heroHeadline: 'A IA não precisa reler 800 arquivos a cada pergunta. Nem você.',
    heroSubheadline: 'O radar de código que percorre seu repositório de baixo para cima, sintetizando arquivos e pastas em resumos hierárquicos com cache incremental de hash.',
    punchline: 'Pare de queimar dezenas de dólares em tokens a cada sessão do Claude por falta de uma planta baixa do seu código.',
    licenseType: 'MIT License · Open-Source',
    licenseNote: 'Python 3.10+ Stdlib pura. Respeita .gitignore e .athenaignore nativamente.',
    comicProblem: {
      title: 'A amnésia crônica e cara dos modelos de linguagem',
      lead: 'Toda vez que você abre uma conversa sobre um projeto com mais de 30 arquivos, o ritual de tortura digital se repete:',
      agonyBullets: [
        'A IA precisa ler arquivo por arquivo no escuro, consumindo 80.000 tokens de entrada antes de conseguir entender onde fica o banco de dados.',
        'Na metade da tarefa, a janela de contexto estoura e o modelo "esquece" que aquele método de autenticação que ele sugeriu vai quebrar a API pública.',
        'Se você trabalha numa equipe com código legado e sem documentação, nenhum ser vivo sabe o que faz a pasta `/utils/legacy_v1_backup/`.',
        'Cada pergunta boba do tipo "onde eu cadastro um novo webhook?" custa 10 minutos de busca cega de arquivos.'
      ],
      cosmicWarning: 'Navegar em código sem a Athena é como pilotar uma nave espacial num campo de asteroides usando uma vela de cera como farol.'
    },
    solutionSummary: {
      title: 'Cartografia Estelar Recursiva Bottom-Up',
      description: 'A Athena percorre o projeto das folhas para a raiz: primeiro gera um resumo compacto de cada arquivo (propósito, API pública, dependências). Depois, resume cada pasta com base nos resumos dos seus filhos imediatos. O resultado é uma planta baixa viva gravada em `.athena/`.',
      stats: [
        { label: 'Leitura de Arquivos', value: 'Bottom-Up', hint: 'Folhas primeiro, raiz por síntese' },
        { label: 'Cache Incremental', value: 'Por Hash', hint: 'Só re-resume o que realmente mudou' },
        { label: 'Proteção de Custos', value: '--max-files', hint: 'Trava de segurança para monorepos gigantes' },
        { label: 'Modo Simulação', value: '--dry-run', hint: 'Veja o que seria processado antes de gastar' }
      ]
    },
    features: [
      {
        title: 'Varredura Piramidal de Baixo para Cima',
        description: 'Em vez de tentar ler tudo de uma vez, resume os arquivos folha e constrói o entendimento das pastas de forma ascendente até a raiz.',
        badge: 'Arquitetura',
        technicalDetail: 'Resumos armazenados na árvore `.athena/tree/` espelhando a estrutura do projeto.',
        iconName: 'Layers'
      },
      {
        title: 'Cache Incremental de Hash (.athena/manifest.json)',
        description: 'Mudou apenas 1 arquivo no Git? A Athena recalcula o hash e só gasta chamada do Claude para aquele arquivo e suas pastas ancestrais.',
        badge: 'Economia Extrema',
        technicalDetail: 'Manifesto com hashes SHA-256 e limpeza automática de resumos de arquivos deletados.',
        iconName: 'Cpu'
      },
      {
        title: 'Trava de Segurança Financeira de Tokens',
        description: 'O parâmetro `--max-files` impede que você rode acidentalmente a indexação numa pasta com 4.000 arquivos gerados sem confirmação prévia.',
        badge: 'Anti-Prejuízo',
        technicalDetail: 'Bloqueia execução com aviso explícito e contagem de arquivos.',
        iconName: 'ShieldAlert'
      },
      {
        title: 'Visualização Rápida no Terminal (`athena show`)',
        description: 'Quer lembrar o que faz um módulo sem abrir 5 abas de código? O comando `python athena.py show src/auth` imprime o resumo instantâneo.',
        badge: 'Produtividade',
        technicalDetail: 'Acesso instantâneo aos resumos em disco sem depender de rede ou de nova IA.',
        iconName: 'Eye'
      }
    ],
    cliSnippet: {
      command: 'python athena.py index .',
      description: 'Indexe o repositório atual ou use através do atalho integrado `thero --index`.',
      outputSample: `[ATHENA] Iniciando varredura neural bottom-up em ~/meu-projeto...
[✓] .gitignore respeitado (ignoradas pastas node_modules e dist)
[✓] Processados 18 arquivos folha -> Resumos compactos gerados
[✓] Sintetizadas 4 subpastas a partir dos nós filhos
[✓] Resumo raiz consolidado em .athena/summary.md
[✓] Planta baixa estelar pronta: o Claude Code agora enxerga a arquitetura completa!`
    },
    acidFaq: [
      {
        question: 'A Athena substitui a documentação do projeto?',
        answer: 'Se a sua alternativa é ter ZERO documentação (como 99% dos projetos do mundo real), a resposta é SIM: a Athena é 10.000 vezes melhor. Ela gera uma planta baixa técnica precisa, concisa e que nunca mente, porque é gerada do código real.',
        nerdFootnote: 'Código mente pouco; documentação em wiki desatualizada mente sempre.'
      },
      {
        question: 'Vai gastar muito na minha conta do Claude se o projeto for grande?',
        answer: 'A Athena tem trava de segurança: ela te avisa quantos arquivos novos/alterados existem e só prossegue se você autorizar. Além disso, tem `--dry-run` para você inspecionar sem gastar 1 centavo, e o cache de hash impede que você reprocesse arquivos intocados.',
        nerdFootnote: 'Sua fatura de IA agradece.'
      },
      {
        question: 'Como o Zeus e o Thero usam a Athena?',
        answer: 'A Athena é a cartógrafa: ela entrega o mapa estelar (.athena/). O Thero disponibiliza isso com o comando `thero --index`, e o Zeus lê esse mapa para planejar cirurgicamente tarefas sem precisar ler código bruto.',
        nerdFootnote: 'A tríplice aliança cósmica da produtividade.'
      }
    ],
    portalPitch: {
      genesis: 'O Genesis prepara o ecossistema para que a Athena possa decolar sem atritos.',
      nexo: 'A Athena mantém o código do próprio ecossistema mapeado e livre de dívida técnica.',
      thero: 'O Thero convoca a Athena como sua nave de reconhecimento em todo projeto.',
      athena: 'Você está no convés de Athena — a cartógrafa que ilumina o escuro dos repositórios.',
      zeus: 'A Athena entrega o mapa de navegação direto para a mira tática do Zeus.'
    }
  },

  zeus: {
    id: 'zeus',
    heroBadge: 'SETOR ZETA · HABITANTE ESTRATEGISTA',
    heroHeadline: 'Antes de mexer em código, saiba exatamente onde o raio vai cair.',
    heroSubheadline: 'Cruza a tarefa que você quer realizar com o índice arquitetural da Athena e escreve um plano de ação em Markdown antes de qualquer linha de código mudar.',
    punchline: 'Pare de adivinhar arquivos no escuro e pare de deixar a IA editar 15 arquivos errados por pura precipitação.',
    licenseType: 'MIT License · Open-Source',
    licenseNote: 'Python 3.10+ Stdlib pura. Gera planos verificáveis em .claude/zeus-plan.md.',
    comicProblem: {
      title: 'A roleta russa do "vai dar certo, confia"',
      lead: 'O desenvolvedor afobado (e a IA sem rumo) recebem uma demanda simples e imediatamente começam a atirar para todos os lados:',
      agonyBullets: [
        'Você digita "muda a cor do botão de checkout" e a IA sai alterando 8 componentes compartilhados, quebrando o design system da empresa inteira.',
        'Você passa 45 minutos abrindo pastas aleatórias tentando adivinhar onde raios foi instanciado aquele singleton de banco de dados.',
        'Não há plano prévio, não há lista de riscos, não há revisão humana: só código sendo modificado às cegas e testes quebrando em cascata.',
        'Ao final, você gasta 3 vezes mais tempo desfazendo o estrago com `git reset --hard` do que teria levado para planejar a tarefa com calma.'
      ],
      cosmicWarning: 'Lei de Zeus: Quem programa sem plano gasta a manhã codando e a tarde inteira chorando no git log.'
    },
    solutionSummary: {
      title: 'O Raio Tático de Decisão em 4 Pilares Fixos',
      description: 'Você descreve a tarefa em português claro. O Zeus roda a Athena se necessário, junta o mapa arquitetural do projeto e instrui o Claude Code a montar um plano executivo com 4 seções sagradas: Objetivo, Arquivos Selecionados, Passo a Passo e Riscos Calculados.',
      stats: [
        { label: 'Formato do Plano', value: 'Markdown', hint: 'Salvo em .claude/zeus-plan.md' },
        { label: 'Leitura de Código', value: 'Zero', hint: 'Lê apenas a síntese da Athena, economizando tokens' },
        { label: 'Seções Estruturadas', value: '4 Fixas', hint: 'Objetivo, Arquivos, Passos, Riscos' },
        { label: 'Chamada Direta', value: 'thero --plan', hint: 'Integrado organicamente ao Thero' }
      ]
    },
    features: [
      {
        title: 'Seleção Cirúrgica de Arquivos Relevantes',
        description: 'Em vez de abrir 20 arquivos, o Zeus entrega uma lista restrita e justificada: "Apenas src/api/user.ts e src/db/schema.ts precisam ser alterados".',
        badge: 'Foco Absoluto',
        technicalDetail: 'Cruza a semântica da sua tarefa com os resumos das pastas gerados pela Athena.',
        iconName: 'Target'
      },
      {
        title: 'Plano Escrito em Markdown (.claude/zeus-plan.md)',
        description: 'Gera um artefato de texto que você pode ler, editar, discutir com seu time ou rejeitar antes de qualquer código ser alterado.',
        badge: 'Verificabilidade',
        technicalDetail: 'Faz backup versionado do plano anterior caso você já tenha rodado antes.',
        iconName: 'FileCode2'
      },
      {
        title: 'Mapeamento Preventivo de Riscos',
        description: 'O Zeus alerta sobre efeitos colaterais antes de você começar: "Atenção: alterar esta tipagem afeta o endpoint de webhook consumido pelo Stripe".',
        badge: 'Defesa Antecipada',
        technicalDetail: 'Analisa dependências cruzadas registradas nos resumos arquiteturais.',
        iconName: 'AlertTriangle'
      },
      {
        title: 'Auto-Provisionamento da Athena',
        description: 'Se a Athena ainda não estiver no projeto, o Zeus oferece cloná-la e rodar a indexação automaticamente sem exigir trabalho manual.',
        badge: 'Zero Fricção',
        technicalDetail: 'Compartilha pasta gerenciada de clones com o Thero.',
        iconName: 'Zap'
      }
    ],
    cliSnippet: {
      command: 'python zeus.py plan "adicionar campo de telefone no cadastro"',
      description: 'Ou use através do seu orquestrador diário: `thero --plan "minha tarefa"`.',
      outputSample: `[ZEUS] Oráculo Tático Acionado...
[✓] Validando índice estelar da Athena (.athena/summary.md detectado)
[✓] Identificados 2 arquivos críticos:
    → src/users/form.tsx (Adicionar input com máscara)
    → src/api/models.py (Persistir novo campo 'phone' no PostgreSQL)
[✓] Riscos: 1 potencial impacto em validações antigas sem DDI
[✓] Plano executivo salvo com sucesso em .claude/zeus-plan.md!
[!] Revise o plano antes de autorizar a implementação no Claude Code.`
    },
    acidFaq: [
      {
        question: 'O Zeus altera meu código-fonte?',
        answer: 'NÃO! O Zeus é o estrategista, não o peão de obra. Ele JAMAIS altera uma linha de código da sua aplicação. O único arquivo que ele escreve é o seu plano de voo em `.claude/zeus-plan.md`. Você lê, concorda e só então pede pro Claude (ou você mesmo) implementar.',
        nerdFootnote: 'General pensa antes de disparar o canhão.'
      },
      {
        question: 'Por que ele precisa da Athena?',
        answer: 'Porque sem a Athena o Zeus teria que ler todos os arquivos do seu repositório para adivinhar onde a tarefa mexe — e aí gastaria uma fortuna de tokens. Como a Athena já tem a "planta baixa" resumida, o Zeus toma a decisão tática em segundos gastando uma fração mínima de contexto.',
        nerdFootnote: 'Economia e precisão geométrica.'
      },
      {
        question: 'Posso editar o arquivo zeus-plan.md depois que ele gera?',
        answer: 'Com certeza! É exatamente essa a ideia. Você pode ajustar os passos, adicionar notas, apagar o que achar desnecessário e depois dizer pro Claude Code: "Siga o plano em .claude/zeus-plan.md". É o fluxo de engenharia definitivo.',
        nerdFootnote: 'Você no controle, a IA como copiloto.'
      }
    ],
    portalPitch: {
      genesis: 'O Genesis prepara a base para que você execute o Zeus confortavelmente no seu dia a dia.',
      nexo: 'O Zeus pode planejar refatorações e novas features no hub do Nexo.',
      thero: 'O Thero chama o Zeus sob demanda com `thero --plan "tarefa"`.',
      athena: 'O Zeus bebe da sabedoria da Athena para nunca atirar no escuro.',
      zeus: 'Você está no olho da tempestade com Zeus — onde a estratégia precede a execução.'
    }
  }
};
