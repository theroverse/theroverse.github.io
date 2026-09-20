import React from 'react';
import { Sparkles, Grid, Download, Layers, Monitor, Palette, Globe } from 'lucide-react';
import { IconVariant } from '../types';
import { ECOSYSTEM_TOOLS } from '../data/ecosystem';
import { downloadSvgFile } from '../utils/exportSvg';

interface HeaderProps {
  activeTab: 'grid' | 'universe' | 'contexts' | 'guidelines';
  setActiveTab: (tab: 'grid' | 'universe' | 'contexts' | 'guidelines') => void;
  variant: IconVariant;
  setVariant: (v: IconVariant) => void;
  showWireframe: boolean;
  setShowWireframe: (show: boolean) => void;
}

// Single source for the icons-vault tabs: each one always shows its icon, but
// the (long) label only appears for the ACTIVE tab on phones and for every tab
// from `sm:` up - the full labels made this bar overflow on mobile.
const VAULT_TABS: {
  id: HeaderProps['activeTab'];
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  iconClass: string;
}[] = [
  { id: 'grid', label: 'Grade de Ícones', Icon: Layers, iconClass: 'text-cyan-400' },
  { id: 'universe', label: 'Mapa do Universo (Planetas / Naves / Habitantes)', Icon: Globe, iconClass: 'text-emerald-400' },
  { id: 'contexts', label: 'Contextos Reais (Windows 11 / Terminal)', Icon: Monitor, iconClass: 'text-purple-400' },
  { id: 'guidelines', label: 'Identidade & Paleta Sem Repetição', Icon: Palette, iconClass: 'text-amber-400' },
];

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  variant,
  setVariant,
  showWireframe,
  setShowWireframe,
}) => {
  const handleDownloadAll = () => {
    ECOSYSTEM_TOOLS.forEach((tool, index) => {
      setTimeout(() => {
        downloadSvgFile(tool, variant, 64);
      }, index * 200);
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#070b14]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 shadow-sm">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold tracking-tight text-white font-display">
                  ECOSYSTEM ICONS
                </h1>
                <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.2 text-[10px] font-mono text-cyan-300">
                  v1.0 · Universo Digital
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Nexo · Thero · Athena · Zeus · Genesis
              </p>
            </div>
          </div>

          {/* Controls & Quick Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Variant selector */}
            <div className="flex rounded-lg bg-slate-900/90 p-1 border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setVariant('app')}
                className={`px-3 py-1 rounded-md transition-all ${
                  variant === 'app'
                    ? 'bg-slate-800 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                App Tile
              </button>
              <button
                onClick={() => setVariant('line')}
                className={`px-3 py-1 rounded-md transition-all ${
                  variant === 'line'
                    ? 'bg-slate-800 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Linha Minimal
              </button>
            </div>

            {/* Wireframe toggle */}
            <button
              onClick={() => setShowWireframe(!showWireframe)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border transition-colors ${
                showWireframe
                  ? 'border-purple-500/50 bg-purple-950/40 text-purple-300 font-semibold'
                  : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-slate-200'
              }`}
              title="Exibir grid e linhas de construção geométrica"
            >
              <Grid className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Grid Geométrico</span>
            </button>

            {/* Batch download button */}
            <button
              onClick={handleDownloadAll}
              className="flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 px-3 py-1.5 text-xs font-mono font-medium text-cyan-300 transition-colors shadow-sm"
              title="Baixar os 5 ícones SVG simultaneamente"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Baixar Todos (5 SVG)</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 overflow-x-auto border-t border-slate-800/60 pt-2 pb-2 text-xs font-mono">
          {VAULT_TABS.map(({ id, label, Icon, iconClass }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                title={label}
                aria-label={label}
                aria-current={isActive ? 'page' : undefined}
                className={`shrink-0 flex items-center gap-2 rounded-lg px-3.5 py-1.5 transition-colors ${
                  isActive
                    ? 'bg-slate-800/80 text-white font-semibold border border-slate-700/80'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${iconClass}`} />
                <span className={isActive ? 'inline' : 'hidden sm:inline'}>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
