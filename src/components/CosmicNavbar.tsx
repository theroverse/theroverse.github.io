import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Compass, ExternalLink, Terminal, Globe } from 'lucide-react';
import { ActiveView, ToolId } from '../types';
import { ECOSYSTEM_TOOLS } from '../data/ecosystem';
import { AppIcon } from './icons/AppIcon';
import { TheroverseIcon } from './icons/TheroverseIcon';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface CosmicNavbarProps {
  activeView: ActiveView;
  onNavigate: (view: ActiveView) => void;
}

export const CosmicNavbar: React.FC<CosmicNavbarProps> = ({
  activeView,
  onNavigate
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [isMuted, setIsMuted] = useState(soundFx.getMuted());

  useEffect(() => {
    setIsMuted(soundFx.getMuted());
  }, []);

  const handleToggleSound = () => {
    const nextMuted = soundFx.toggleMute();
    setIsMuted(nextMuted);
  };

  const handleNavClick = (view: ActiveView) => {
    soundFx.playWarp();
    onNavigate(view);
  };

  const currentTool = ECOSYSTEM_TOOLS.find(t => t.id === activeView);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#060a14]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand / Hub Return */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('portal-hub')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="transition-transform group-hover:scale-105 duration-300">
              <TheroverseIcon size={36} variant="app" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white font-mono block">
                THERO<span className="text-cyan-400">VERSE</span>
              </span>
            </div>
          </button>
        </div>

        {/* Center: Planetary Quick Jump Strip (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-black/50 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => handleNavClick('portal-hub')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeView === 'portal-hub'
                ? 'bg-white/15 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.navbar.hub}</span>
          </button>

          {ECOSYSTEM_TOOLS.map(tool => {
            const isActive = activeView === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => handleNavClick(tool.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white font-bold shadow-sm bg-white/15 border border-white/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className="w-3.5 h-3.5">
                  <AppIcon toolId={tool.id} size={14} />
                </div>
                <span>{tool.name}</span>
              </button>
            );
          })}

          <a
            href="https://netovieira.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 text-slate-400 hover:text-white hover:bg-white/5 group border border-transparent hover:border-cyan-500/30"
            title="Acessar QG do Arquiteto (netovieira.github.io)"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400 group-hover:text-cyan-300" />
            <span className="whitespace-nowrap">{t.navbar.architectHq}</span>
            <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
          </a>
        </nav>

        {/* Right: Language Selector + Audio + active repo link */}
        <div className="flex items-center gap-2">
          {/* Language Selector (PT | EN) */}
          <div className="flex items-center rounded-xl bg-slate-900/90 p-0.5 border border-white/15 text-xs font-mono">
            <button
              onClick={() => {
                if (language !== 'pt') {
                  soundFx.playClick();
                  setLanguage('pt');
                }
              }}
              className={`px-2.5 py-1 rounded-lg transition-all font-semibold ${
                language === 'pt'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Português"
            >
              PT
            </button>
            <button
              onClick={() => {
                if (language !== 'en') {
                  soundFx.playClick();
                  setLanguage('en');
                }
              }}
              className={`px-2.5 py-1 rounded-lg transition-all font-semibold ${
                language === 'en'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Audio toggle */}
          <button
            onClick={handleToggleSound}
            className={`p-2 rounded-xl border text-xs font-mono transition-all flex items-center gap-1.5 ${
              isMuted
                ? 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white'
                : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
            }`}
            title={t.navbar.audioToggleTitle}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            <span className="hidden sm:inline text-[11px] font-mono">
              {isMuted ? t.navbar.audioMute : t.navbar.audioOn}
            </span>
          </button>

          {/* Current tool source link if on a tool page */}
          {currentTool && (
            <a
              href={currentTool.repoUrl || currentTool.siteUrl || '#'}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playClick()}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-all"
            >
              <span>{currentTool.id === 'nexo' ? t.navbar.officialSite : t.navbar.githubRepo}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          )}
        </div>
      </div>

      {/* Mobile Bar for fast switching: só ícones + o nome do item ATIVO.
          Com todos os nomes visíveis essa faixa ficava longa demais (e
          rolável na horizontal) na largura de um celular. */}
      <div className="md:hidden flex items-center justify-between gap-1.5 overflow-x-auto px-4 py-2 border-t border-white/5 custom-scrollbar">
        <button
          onClick={() => handleNavClick('portal-hub')}
          title={t.navbar.hub}
          aria-label={t.navbar.hub}
          aria-current={activeView === 'portal-hub' ? 'page' : undefined}
          className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
            activeView === 'portal-hub' ? 'bg-white/20 text-white font-semibold' : 'text-slate-400'
          }`}
        >
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          {activeView === 'portal-hub' && <span>{t.navbar.hub}</span>}
        </button>

        {ECOSYSTEM_TOOLS.map(tool => {
          const isActive = activeView === tool.id;
          return (
            <button
              key={tool.id}
              onClick={() => handleNavClick(tool.id)}
              title={tool.name}
              aria-label={tool.name}
              aria-current={isActive ? 'page' : undefined}
              className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                isActive ? 'bg-white/20 text-white font-bold' : 'text-slate-400'
              }`}
            >
              <AppIcon toolId={tool.id} size={isActive ? 16 : 24} />
              {isActive && <span>{tool.name}</span>}
            </button>
          );
        })}

        <a
          href="https://netovieira.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundFx.playClick()}
          title={t.navbar.architectHq}
          aria-label={t.navbar.architectHq}
          className="shrink-0 flex items-center px-2.5 py-1.5 rounded-lg text-xs font-mono text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 border border-cyan-500/20"
        >
          <Terminal className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
};
