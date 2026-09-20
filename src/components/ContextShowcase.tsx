import React, { useState } from 'react';
import {
  Monitor,
  Terminal as TerminalIcon,
  Globe,
  Github,
  CheckCircle2,
  ChevronRight,
  Maximize2,
  Minus,
  X,
  Sparkles,
  Volume2,
  Wifi,
  Battery,
} from 'lucide-react';
import { ECOSYSTEM_TOOLS } from '../data/ecosystem';
import { EcosystemIcon } from './icons/EcosystemIcon';

export const ContextShowcase: React.FC = () => {
  const [activeContext, setActiveContext] = useState<'windows' | 'terminal' | 'github'>('windows');

  const genesis = ECOSYSTEM_TOOLS.find((t) => t.id === 'genesis')!;
  const nexo = ECOSYSTEM_TOOLS.find((t) => t.id === 'nexo')!;
  const thero = ECOSYSTEM_TOOLS.find((t) => t.id === 'thero')!;
  const athena = ECOSYSTEM_TOOLS.find((t) => t.id === 'athena')!;
  const zeus = ECOSYSTEM_TOOLS.find((t) => t.id === 'zeus')!;

  return (
    <div className="w-full space-y-6">
      {/* Context Switcher Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-800/80 bg-[#0c1220] p-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block">
            Ambientes Reais de Aplicação
          </span>
          <h3 className="text-lg font-bold text-white font-display">
            Como os Ícones se Comportam no Seu Fluxo de Trabalho
          </h3>
        </div>

        <div className="flex rounded-lg bg-slate-900/90 p-1 border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveContext('windows')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md transition-all ${
              activeContext === 'windows'
                ? 'bg-slate-800 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Monitor className="h-3.5 w-3.5 text-purple-400" />
            <span>Windows 11 & Genesis.exe</span>
          </button>

          <button
            onClick={() => setActiveContext('terminal')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md transition-all ${
              activeContext === 'terminal'
                ? 'bg-slate-800 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <TerminalIcon className="h-3.5 w-3.5 text-orange-400" />
            <span>Terminal / Starship</span>
          </button>

          <button
            onClick={() => setActiveContext('github')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md transition-all ${
              activeContext === 'github'
                ? 'bg-slate-800 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Github className="h-3.5 w-3.5 text-emerald-400" />
            <span>GitHub & Favicons</span>
          </button>
        </div>
      </div>

      {/* WINDOWS 11 MOCKUP */}
      {activeContext === 'windows' && (
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#070b14] shadow-2xl">
          {/* Simulated Desktop Wallpaper */}
          <div className="relative min-h-[580px] p-6 flex flex-col justify-between bg-gradient-to-br from-[#0c1324] via-[#090d18] to-[#050810]">
            {/* Desktop Icons */}
            <div className="grid grid-cols-1 gap-4 w-24">
              <div className="group flex flex-col items-center p-2 rounded-lg hover:bg-white/5 cursor-pointer text-center">
                <EcosystemIcon id="genesis" variant="app" size={44} />
                <span className="mt-1 text-[11px] text-slate-200 group-hover:text-white drop-shadow-md">
                  Genesis.exe
                </span>
              </div>
              <div className="group flex flex-col items-center p-2 rounded-lg hover:bg-white/5 cursor-pointer text-center">
                <EcosystemIcon id="nexo" variant="app" size={44} />
                <span className="mt-1 text-[11px] text-slate-200 group-hover:text-white drop-shadow-md">
                  Nexo Media
                </span>
              </div>
            </div>

            {/* Central Window: Genesis.exe faithful recreation with new Icon */}
            <div className="relative mx-auto w-full max-w-3xl rounded-xl border border-slate-700/60 bg-[#0a0f1d]/95 backdrop-blur-xl shadow-2xl overflow-hidden my-4">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between border-b border-slate-800/80 px-4 py-2.5 bg-[#080d1a]">
                <div className="flex items-center gap-2.5">
                  {/* New Genesis Icon in Titlebar */}
                  <EcosystemIcon id="genesis" variant="line" size={16} />
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-200">
                    GENESIS . EXE
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Minus className="h-3.5 w-3.5 hover:text-white cursor-pointer" />
                  <Maximize2 className="h-3 w-3 hover:text-white cursor-pointer" />
                  <X className="h-3.5 w-3.5 hover:text-red-400 cursor-pointer" />
                </div>
              </div>

              {/* Window Interior (from user's image.png) */}
              <div className="grid grid-cols-12 min-h-[360px]">
                {/* Sidebar */}
                <div className="col-span-4 border-r border-slate-800/80 bg-[#070b16] p-4 text-[11px] font-mono space-y-4">
                  <div>
                    <div className="text-[10px] uppercase text-slate-500 font-semibold mb-1.5">
                      INÍCIO
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1.5 text-cyan-300 font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>Bem-vindo</span>
                    </div>
                    <div className="px-2.5 py-1 text-slate-400 mt-1">Sobre o autor</div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase text-slate-500 font-semibold mb-1.5">
                      TERMINAL & SISTEMA
                    </div>
                    <div className="px-2.5 py-0.5 text-slate-400">Starship (prompt)</div>
                    <div className="px-2.5 py-0.5 text-slate-400">PowerToys</div>
                    <div className="px-2.5 py-0.5 text-slate-400">Windhawk</div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase text-slate-500 font-semibold mb-1.5">
                      CLAUDE CODE SUITE
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-0.5 text-orange-300 font-medium">
                      <EcosystemIcon id="thero" variant="line" size={12} />
                      <span>thero</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-0.5 text-emerald-300 font-medium">
                      <EcosystemIcon id="athena" variant="line" size={12} />
                      <span>athena</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-0.5 text-amber-300 font-medium">
                      <EcosystemIcon id="zeus" variant="line" size={12} />
                      <span>zeus</span>
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="col-span-8 p-6 flex flex-col justify-between bg-[#0a0f1d]">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-white font-display">
                      Bem-vindo ao{' '}
                      <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                        setup pós-formatação
                      </span>
                      .
                    </h2>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      Este assistente escolhe, com você, tudo que entra no seu PC recém-formatado — aplicativos, etapas de sistema e as ferramentas do Claude Code.
                    </p>

                    <div className="mt-4 rounded-xl border border-slate-800 bg-[#080d18] p-4 text-xs">
                      <div className="font-semibold text-slate-200">Como funciona</div>
                      <p className="mt-1 text-slate-400 text-[11px] leading-relaxed">
                        Nas próximas telas você marca o que quer instalar, por categoria, revisa tudo numa página só, e clica em "Instalar agora".
                      </p>
                    </div>
                  </div>

                  {/* Window Bottom Actions */}
                  <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 mt-6">
                    <span className="text-[11px] font-mono text-slate-500">
                      ETAPA 1 / 17 — BEM-VINDO
                    </span>
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300">
                        Voltar
                      </button>
                      <button className="rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-1 text-xs font-semibold text-white shadow-md">
                        Avançar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Windows 11 Taskbar */}
            <div className="w-full rounded-xl border border-slate-700/50 bg-[#090d1a]/90 backdrop-blur-xl px-4 py-2 flex items-center justify-between shadow-2xl mt-4">
              {/* Left widgets */}
              <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                <span className="text-cyan-400 font-semibold">24°C Limpo</span>
              </div>

              {/* Centered Taskbar Icons */}
              <div className="flex items-center gap-2">
                {/* Windows Start Button */}
                <div className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-white/10 cursor-pointer">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="h-2 w-2 rounded-xs bg-cyan-400" />
                    <div className="h-2 w-2 rounded-xs bg-cyan-400" />
                    <div className="h-2 w-2 rounded-xs bg-cyan-400" />
                    <div className="h-2 w-2 rounded-xs bg-cyan-400" />
                  </div>
                </div>

                {/* Genesis Running in Taskbar */}
                <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 cursor-pointer" title="Genesis Setup (Ativo)">
                  <EcosystemIcon id="genesis" variant="line" size={22} />
                  <span className="absolute bottom-0.5 h-0.5 w-3 rounded-full bg-purple-400" />
                </div>

                {/* Nexo Pinned */}
                <div className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-white/10 cursor-pointer" title="Nexo Media">
                  <EcosystemIcon id="nexo" variant="line" size={22} />
                </div>

                {/* Terminal Pinned */}
                <div className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-white/10 cursor-pointer" title="Terminal">
                  <TerminalIcon className="h-5 w-5 text-slate-300" />
                </div>
              </div>

              {/* System Tray (Nexo running in Tray!) */}
              <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                {/* Nexo Tray Icon */}
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300" title="Nexo Media Server rodando em background">
                  <EcosystemIcon id="nexo" variant="line" size={14} />
                  <span className="text-[10px] hidden sm:inline">Nexo: Ativo</span>
                </div>

                <Wifi className="h-3.5 w-3.5" />
                <Volume2 className="h-3.5 w-3.5" />
                <Battery className="h-3.5 w-3.5" />
                <span className="text-slate-300">20:15</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TERMINAL & STARSHIP PROMPT MOCKUP */}
      {activeContext === 'terminal' && (
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#070b14] shadow-2xl p-6">
          <div className="rounded-xl border border-slate-700/60 bg-[#050811] shadow-2xl overflow-hidden font-mono text-xs">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2 bg-[#090e1a]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-slate-400 text-[11px]">Windows Terminal · PowerShell (Starship)</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 space-y-4 text-slate-200">
              {/* Prompt Line 1 */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">~/workspace/meu-ecossistema</span>
                  <span className="text-purple-400">on git:(main)</span>
                  <span className="inline-flex items-center gap-1 rounded bg-orange-950/60 border border-orange-500/30 px-1.5 py-0.5 text-[10px] text-orange-300">
                    <EcosystemIcon id="thero" variant="line" size={10} />
                    <span>thero:ready</span>
                  </span>
                </div>
                <div className="text-slate-300 mt-1">
                  <span className="text-emerald-400 font-bold">$</span> thero index
                </div>
              </div>

              {/* Athena Output */}
              <div className="pl-3 border-l-2 border-emerald-500/40 space-y-1 text-slate-300 text-[11px]">
                <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                  <EcosystemIcon id="athena" variant="line" size={14} />
                  <span>[Athena] Iniciando mapeamento recursivo bottom-up...</span>
                </div>
                <div className="text-slate-400">✓ Resumo de 42 arquivos processados via Claude Code</div>
                <div className="text-slate-400">✓ Cache incremental atualizado em .athena/manifest.json</div>
                <div className="text-emerald-400">● Planta baixa gerada com sucesso em .athena/summary.md</div>
              </div>

              {/* Prompt Line 2: Zeus Execution */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">~/workspace/meu-ecossistema</span>
                  <span className="text-purple-400">on git:(main)</span>
                </div>
                <div className="text-slate-300 mt-1">
                  <span className="text-emerald-400 font-bold">$</span> thero --plan "adicionar reconhecimento facial no Nexo"
                </div>
              </div>

              {/* Zeus Output */}
              <div className="pl-3 border-l-2 border-amber-500/40 space-y-1 text-slate-300 text-[11px]">
                <div className="flex items-center gap-2 text-amber-300 font-semibold">
                  <EcosystemIcon id="zeus" variant="line" size={14} />
                  <span>[Zeus] Cruzando tarefa com o índice da Athena...</span>
                </div>
                <div className="text-slate-400">→ Identificados 2 arquivos críticos: src/media/faces.py, src/db/models.py</div>
                <div className="text-slate-400">→ Plano estruturado: 1. Carregar modelo local; 2. Salvar embeddings; 3. Expor via API</div>
                <div className="text-amber-300">● Plano executivo salvo em .claude/zeus-plan.md (pronto para revisão sem mexer em código)</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GITHUB & REPO SHOWCASE */}
      {activeContext === 'github' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Athena GitHub Card */}
          <div className="rounded-xl border border-slate-800 bg-[#090e1a] p-5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Github className="h-4 w-4" />
                <span>netovieira / <strong className="text-white">athena</strong></span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-slate-700 text-slate-400">Public</span>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <EcosystemIcon id="athena" variant="app" size={48} />
              <div>
                <h4 className="text-base font-bold text-white font-display">Athena</h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Recursive project-summary indexer for Claude Code: resumes files bottom-up into folder summaries.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800/60">
              <span className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span>Python</span>
              </span>
              <span>·</span>
              <span>MIT License</span>
              <span>·</span>
              <span className="text-emerald-400">Stdlib only</span>
            </div>
          </div>

          {/* Zeus GitHub Card */}
          <div className="rounded-xl border border-slate-800 bg-[#090e1a] p-5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Github className="h-4 w-4" />
                <span>netovieira / <strong className="text-white">zeus</strong></span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-slate-700 text-slate-400">Public</span>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <EcosystemIcon id="zeus" variant="app" size={48} />
              <div>
                <h4 className="text-base font-bold text-white font-display">Zeus</h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Planejador que cruza uma tarefa com o índice da Athena via Claude Code antes de qualquer linha mudar.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800/60">
              <span className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span>Python</span>
              </span>
              <span>·</span>
              <span>MIT License</span>
              <span>·</span>
              <span className="text-amber-400">Stdlib only</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
