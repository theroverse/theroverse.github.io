import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Navigation, UserCheck, Sparkles, ArrowRight, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { ECOSYSTEM_TOOLS, COSMIC_ROLES_INFO } from '../data/ecosystem';
import { EcosystemTool } from '../types';
import { EcosystemIcon } from './icons/EcosystemIcon';

interface UniverseMapProps {
  onSelectTool: (tool: EcosystemTool) => void;
}

export const UniverseMap: React.FC<UniverseMapProps> = ({ onSelectTool }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const nexo = ECOSYSTEM_TOOLS.find((t) => t.id === 'nexo')!;
  const genesis = ECOSYSTEM_TOOLS.find((t) => t.id === 'genesis')!;
  const athena = ECOSYSTEM_TOOLS.find((t) => t.id === 'athena')!;
  const zeus = ECOSYSTEM_TOOLS.find((t) => t.id === 'zeus')!;
  const thero = ECOSYSTEM_TOOLS.find((t) => t.id === 'thero')!;

  const activeTool = ECOSYSTEM_TOOLS.find((t) => t.id === activeId);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-b from-[#080d17] via-[#0c1220] to-[#080c14] p-6 lg:p-10 shadow-2xl">
      {/* Background Starfield & Radial Nebula Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-3xl" />
        {/* Subtle celestial grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Header section */}
      <div className="relative z-10 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/60 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Cosmologia do Ecossistema</span>
          </div>
          <h2 className="mt-1 text-2xl md:text-3xl font-bold tracking-tight text-white font-display">
            O Universo Digital & Suas Entidades
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm text-slate-400">
            Cada ferramenta possui um papel orbital bem definido: os <strong className="text-cyan-300">Planetas</strong> fornecem base e autosustentação, as <strong className="text-emerald-300">Naves</strong> transportam dados e mapeamentos, e os <strong className="text-amber-300">Habitantes</strong> orquestram e decidem.
          </p>
        </div>

        {/* Legend pills */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono text-cyan-300">
            <Globe className="h-3.5 w-3.5" />
            <span>Planetas (Nexo, Genesis)</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-mono text-emerald-300">
            <Navigation className="h-3.5 w-3.5" />
            <span>Nave (Athena)</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/40 px-3 py-1 text-xs font-mono text-amber-300">
            <UserCheck className="h-3.5 w-3.5" />
            <span>Habitantes (Thero, Zeus)</span>
          </div>
        </div>
      </div>

      {/* Central Visual Stage */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left / Center: Interactive Orbital Diagram */}
        <div className="lg:col-span-8 relative min-h-[460px] rounded-xl border border-slate-800/60 bg-[#090e18]/80 p-6 flex flex-col justify-between overflow-hidden">
          {/* Orbital Rings in SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Concentric orbit lines */}
            <circle cx="50%" cy="50%" r="170" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="50%" cy="50%" r="105" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2 4" />
            
            {/* Dynamic flow vectors between nodes */}
            {/* Genesis to Thero */}
            <line x1="22%" y1="78%" x2="50%" y2="50%" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            {/* Thero to Athena */}
            <line x1="50%" y1="50%" x2="22%" y2="24%" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            {/* Athena to Zeus */}
            <line x1="22%" y1="24%" x2="78%" y2="24%" stroke="#eab308" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            {/* Zeus to Thero */}
            <line x1="78%" y1="24%" x2="50%" y2="50%" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            {/* Nexo to Thero / Genesis */}
            <line x1="78%" y1="78%" x2="50%" y2="50%" stroke="#00d2ff" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          </svg>

          {/* Orbit Layout:
              Top-Left: Athena (Nave)
              Top-Right: Zeus (Habitante)
              Center: Thero (Habitante Comandante)
              Bottom-Left: Genesis (Planeta Matriz)
              Bottom-Right: Nexo (Planeta Arquivo)
          */}
          <div className="relative w-full h-[400px]">
            {/* Top-Left: Athena */}
            <div className="absolute top-[8%] left-[10%] -translate-x-1/2 -translate-y-1/2">
              <CelestialNode
                tool={athena}
                isActive={activeId === 'athena'}
                onHover={() => setActiveId('athena')}
                onClick={() => onSelectTool(athena)}
              />
            </div>

            {/* Top-Right: Zeus */}
            <div className="absolute top-[8%] left-[90%] -translate-x-1/2 -translate-y-1/2">
              <CelestialNode
                tool={zeus}
                isActive={activeId === 'zeus'}
                onHover={() => setActiveId('zeus')}
                onClick={() => onSelectTool(zeus)}
              />
            </div>

            {/* Center: Thero (The Commander) */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
              <CelestialNode
                tool={thero}
                isCenter
                isActive={activeId === 'thero'}
                onHover={() => setActiveId('thero')}
                onClick={() => onSelectTool(thero)}
              />
            </div>

            {/* Bottom-Left: Genesis */}
            <div className="absolute top-[92%] left-[10%] -translate-x-1/2 -translate-y-1/2">
              <CelestialNode
                tool={genesis}
                isActive={activeId === 'genesis'}
                onHover={() => setActiveId('genesis')}
                onClick={() => onSelectTool(genesis)}
              />
            </div>

            {/* Bottom-Right: Nexo */}
            <div className="absolute top-[92%] left-[90%] -translate-x-1/2 -translate-y-1/2">
              <CelestialNode
                tool={nexo}
                isActive={activeId === 'nexo'}
                onHover={() => setActiveId('nexo')}
                onClick={() => onSelectTool(nexo)}
              />
            </div>
          </div>

          {/* Interactive Hint */}
          <div className="mt-2 flex items-center justify-between text-xs font-mono text-slate-500 pt-2 border-t border-slate-800/40">
            <span>✦ Passe o mouse ou clique em qualquer entidade para ver a dinâmica orbital</span>
            <span className="hidden sm:inline">5 Entidades Cósmicas · 0 Cores Repetidas</span>
          </div>
        </div>

        {/* Right: Role & Relationship Inspector */}
        <div className="lg:col-span-4 h-full rounded-xl border border-slate-800/60 bg-[#090e18] p-6 flex flex-col justify-between">
          {activeTool ? (
            <div>
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider"
                  style={{
                    backgroundColor: `${activeTool.colors.primary}18`,
                    color: activeTool.colors.primary,
                    border: `1px solid ${activeTool.colors.primary}40`,
                  }}
                >
                  {activeTool.roleTitle}
                </span>
                <span className="text-xs font-mono text-slate-500">{activeTool.colors.name}</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <EcosystemIcon id={activeTool.id} variant="app" size={48} />
                <div>
                  <h3 className="text-xl font-bold text-white font-display">{activeTool.name}</h3>
                  <p className="text-xs text-slate-400 font-mono">{activeTool.tagline}</p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-slate-300">
                {activeTool.roleDescription}
              </p>

              {/* Connections list */}
              <div className="mt-5 border-t border-slate-800/60 pt-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
                  Conexões no Universo
                </span>
                <div className="space-y-2.5">
                  {activeTool.connections.map((c, i) => {
                    const targetTool = ECOSYSTEM_TOOLS.find((t) => t.id === c.toId);
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 p-2.5 text-xs text-slate-300"
                      >
                        <div
                          className="mt-1 h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: targetTool?.colors.primary || '#94a3b8' }}
                        />
                        <div>
                          <div className="font-medium text-slate-200">
                            {c.relationship} <strong className="text-white">{targetTool?.name}</strong>
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{c.roleDescription}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectTool(activeTool)}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700/80 px-4 py-2.5 text-xs font-semibold text-white transition-all shadow-sm"
              >
                <span>Inspecionar Ícone & Exportar</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <div className="h-12 w-12 rounded-full border border-slate-800 bg-slate-900/60 flex items-center justify-center text-slate-400 mb-3">
                <Layers className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-semibold text-white">Selecione uma Entidade</h4>
              <p className="mt-1 text-xs text-slate-400 max-w-xs">
                Passe o mouse por Nexo, Thero, Athena, Zeus ou Genesis para visualizar os fluxos de dados, arquitetura e papéis cósmicos.
              </p>
            </div>
          )}

          {/* Bottom quick stats */}
          <div className="mt-6 pt-4 border-t border-slate-800/60 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg bg-slate-900/40 p-2">
              <div className="text-lg font-bold text-cyan-400 font-mono">2</div>
              <div className="text-[10px] uppercase font-mono text-slate-400">Planetas</div>
            </div>
            <div className="rounded-lg bg-slate-900/40 p-2">
              <div className="text-lg font-bold text-emerald-400 font-mono">1</div>
              <div className="text-[10px] uppercase font-mono text-slate-400">Nave</div>
            </div>
            <div className="rounded-lg bg-slate-900/40 p-2">
              <div className="text-lg font-bold text-amber-400 font-mono">2</div>
              <div className="text-[10px] uppercase font-mono text-slate-400">Habitantes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CelestialNodeProps {
  tool: EcosystemTool;
  isActive: boolean;
  isCenter?: boolean;
  onHover: () => void;
  onClick: () => void;
}

const CelestialNode: React.FC<CelestialNodeProps> = ({
  tool,
  isActive,
  isCenter = false,
  onHover,
  onClick,
}) => {
  return (
    <div
      onMouseEnter={onHover}
      onClick={onClick}
      className={`group cursor-pointer flex flex-col items-center transition-transform duration-300 ${
        isActive ? 'scale-110' : 'hover:scale-105'
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Ambient Ring glow */}
        <div
          className={`absolute -inset-2 rounded-2xl blur-md transition-opacity duration-300 ${
            isActive ? 'opacity-90' : 'opacity-20 group-hover:opacity-60'
          }`}
          style={{ backgroundColor: tool.colors.primary }}
        />

        {/* Outer orbital indicator */}
        <div
          className={`relative rounded-2xl p-1 transition-all ${
            isActive
              ? 'ring-2 ring-offset-2 ring-offset-[#090e18]'
              : 'border border-slate-800/80 bg-slate-900/90'
          }`}
          style={{
            borderColor: isActive ? tool.colors.primary : undefined,
          }}
        >
          <EcosystemIcon
            id={tool.id}
            variant="app"
            size={isCenter ? 64 : 54}
            className="transition-transform group-hover:rotate-1"
          />
        </div>

        {/* Center crown for Thero */}
        {isCenter && (
          <span className="absolute -top-2.5 rounded-full bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 text-[9px] font-mono font-bold text-amber-300">
            MAESTRO
          </span>
        )}
      </div>

      <div className="mt-2 text-center">
        <span
          className="text-xs font-bold font-display tracking-tight text-white block transition-colors"
          style={{ color: isActive ? tool.colors.primary : '#ffffff' }}
        >
          {tool.name}
        </span>
        <span className="text-[10px] font-mono text-slate-400 capitalize block">
          {tool.role}
        </span>
      </div>
    </div>
  );
};
