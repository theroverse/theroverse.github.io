# Theroverse

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![React 19](https://img.shields.io/badge/react-19-blue.svg)
![Vite](https://img.shields.io/badge/build-vite%208-646CFF.svg)
![Tailwind CSS 4](https://img.shields.io/badge/css-tailwind%204-38BDF8.svg)

**O portal — um único lugar que liga todas as ferramentas do ecossistema
Theroverse.**

Cada ferramenta (Thero, Athena, Zeus, Nexo, Genesis) vive no seu próprio
repositório, com histórico, issues e releases independentes. O problema é
que ninguém visita cinco repositórios para entender como eles se
conectam. O `theroverse` resolve isso: é um site estático que apresenta o
ecossistema inteiro — o que cada ferramenta faz, onde ela vive, como ela
conversa com as outras — e serve também como **cofre de identidade
visual** (ícones vetoriais, paletas e contextos de uso) de cada uma.

Publicado em: **https://theroverse.github.io/**

## O que tem dentro

- **Portal central** — o mapa do "universo" do ecossistema, com cada
  ferramenta representada como planeta, nave ou habitante, e as conexões
  entre elas (quem comanda quem, quem fornece dados para quem).
- **Landing page por ferramenta** — cada item do portal abre uma página
  própria com descrição, justificativa de design do ícone, especificações
  geométricas, exemplos de uso no terminal e links para o repositório.
- **Acervo de ícones (Icons Vault)** — grade de ícones SVG do
  ecossistema, com inspeção de geometria, alternância de variantes
  (app / ecossistema), modo wireframe e exportação em SVG/PNG.
- **Mapa do universo e contextos** — visualização das relações entre as
  ferramentas e dos contextos reais de uso de cada uma.
- **Guia de cores** — paletas oficiais por ferramenta, com contraste e
  uso recomendado.
- **Bilíngue** — português e inglês, com detecção automática pelo idioma
  do navegador e preferência salva em `localStorage`.
- **Transições "warp"** e efeitos sonoros opcionais na navegação entre
  views.

## Ferramentas mapeadas

| Ferramenta | Papel no ecossistema | Repositório |
|---|---|---|
| Nexo | Planeta (armazenamento local / media hub) | [avnt-sistemas/nexo](https://github.com/avnt-sistemas/nexo) |
| Genesis | Planeta (setup pós-formatação do Windows 11) | [theroverse/genesis](https://github.com/theroverse/genesis) |
| Athena | Nave (indexação de arquitetura) | [theroverse/athena](https://github.com/theroverse/athena) |
| Zeus | Habitante (planejamento de tarefas) | [theroverse/zeus](https://github.com/theroverse/zeus) |
| Thero | Habitante (setup do Claude Code) | [theroverse/thero](https://github.com/theroverse/thero) |

Quem entra ou sai do ecossistema é ajustado em um único arquivo:
[`src/data/ecosystem.ts`](src/data/ecosystem.ts) (ficha, cores, ícone,
conexões e `repoUrl`/`siteUrl` de cada ferramenta). O conteúdo textual de
cada landing page fica em [`src/data/landingPages.ts`](src/data/landingPages.ts)
e as traduções em [`src/data/i18n.ts`](src/data/i18n.ts).

## Rodando localmente

Requisitos: Node.js 20+ (o CI usa 22) e npm.

```
git clone git@github.com:theroverse/theroverse.github.io.git
cd theroverse.github.io
npm install
npm run dev
```

O servidor de desenvolvimento sobe em `http://localhost:3000`.

Outros comandos:

```
npm run lint      # type-check (tsc --noEmit)
npm run build     # build de produção em dist/
npm run preview   # serve o dist/ localmente
```

> Não precisa de chave de API nenhuma. O app é 100% estático — o
> `.env.example` e a dependência `@google/genai` vêm do template do
> Google AI Studio, mas o código do site não faz chamada de IA. O
> `GEMINI_API_KEY` do template pode ser ignorado.

## Deploy

Este repositório é o **site raiz da organização** (`theroverse.github.io`),
então ele é servido na raiz do domínio — o `base` padrão do Vite (`/`)
já está correto, sem precisar de sub-caminho.

O deploy é automático via GitHub Actions
([`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)):
todo push em `main` que toque no site roda `npm run lint`, builda com
`npm run build` e publica o `dist/` no GitHub Pages.

Configuração única no GitHub (uma vez só):
**Settings → Pages → Source = "GitHub Actions"**. Sem isso, o job de
deploy falha ao publicar (o Pages continua com a configuração antiga de
branch).

## Estrutura

```
src/
  components/          # UI do portal, das landings e do acervo de ícones
    icons/             # ícones SVG do ecossistema (app + ecossistema)
    landing/           # layout e simuladores de cada landing page
  context/             # provider de idioma (pt/en)
  data/                # ecosystem.ts, landingPages.ts, i18n.ts
  utils/               # exportação SVG/PNG, efeitos sonoros
index.html             # shell do Vite (fontes, meta tags de SEO/OG)
```

## Notas técnicas

- O `esbuild` está fixado em `^0.28` porque o Vite 8 exige
  `esbuild@^0.27 || ^0.28` como peer; com a versão antiga do template do
  AI Studio o `npm install` falhava com `ERESOLVE`.
- O CI usa `npm install` (e não `npm ci`) porque o lockfile é gerado no
  Windows e pode não carregar todos os binários nativos que o bundler
  precisa no runner Linux.

## Licença

MIT — veja [LICENSE](LICENSE).

## Autor

**Anthero Vieira Neto**

- GitHub: https://github.com/netovieira
- LinkedIn: https://www.linkedin.com/in/anthero-vieira-neto-aa7a6b8a
