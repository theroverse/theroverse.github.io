import React from 'react';
import {
  Sparkles, ArrowRight, Globe, Navigation, UserCheck,
  Terminal, ShieldCheck, HardDrive, Zap, Compass, Laptop, ExternalLink
} from 'lucide-react';
import { ToolId, EcosystemTool } from '../types';
import { ECOSYSTEM_TOOLS } from '../data/ecosystem';
import { AppIcon } from './icons/AppIcon';
import { TheroverseIcon } from './icons/TheroverseIcon';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface CosmicPortalHubProps {
  onSelectTool: (toolId: ToolId) => void;
  onGoToIcons: () => void;
}

export const CosmicPortalHub: React.FC<CosmicPortalHubProps> = ({
  onSelectTool,
  onGoToIcons
}) => {
  const { t } = useLanguage();

  const getRoleIcon = (role: EcosystemTool['role']) => {
    switch (role) {
      case 'planeta': return <Globe className="w-3.5 h-3.5" />;
      case 'nave': return <Navigation className="w-3.5 h-3.5" />;
      case 'habitante': return <UserCheck className="w-3.5 h-3.5" />;
    }
  };

  const getRoleLabel = (role: EcosystemTool['role']) => {
    return t.hub.roles[role];
  };

  return (
    <div className="space-y-16 pb-16">
      {/* GRAND HERO BANNER */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0c1220]/95 via-[#080d17]/95 to-[#060a12]/95 p-8 sm:p-12 md:p-16 backdrop-blur-2xl shadow-2xl">
        {/* Subtle pale ambient glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-slate-700/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-cyan-950/20 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Central Cosmic Sun / Galaxy Emblem */}
          <div className="inline-block relative mb-6">
            <div className="absolute inset-0 rounded-3xl blur-xl opacity-40 bg-cyan-500/15" />
            <div className="relative p-2 rounded-3xl bg-black/70 border border-white/15 shadow-xl backdrop-blur-xl">
              <TheroverseIcon size={80} variant="app" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{t.hub.badge}</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6 font-display">
            THERO<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-cyan-300">VERSE</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            {t.hub.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 font-mono text-xs text-slate-300">
            <span className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400/80" />
              <Laptop className="w-3.5 h-3.5 text-slate-400" />
              <span>Genesis: {t.hub.rolesShort.genesis}</span>
            </span>
            <span className="text-slate-600">→</span>
            <span className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400/80" />
              <Terminal className="w-3.5 h-3.5 text-slate-400" />
              <span>Thero: {t.hub.rolesShort.thero}</span>
            </span>
            <span className="text-slate-600">→</span>
            <span className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
              <Compass className="w-3.5 h-3.5 text-slate-400" />
              <span>Athena: {t.hub.rolesShort.athena}</span>
            </span>
            <span className="text-slate-600">→</span>
            <span className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
              <Zap className="w-3.5 h-3.5 text-slate-400" />
              <span>Zeus: {t.hub.rolesShort.zeus}</span>
            </span>
            <span className="text-slate-600">→</span>
            <span className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
              <HardDrive className="w-3.5 h-3.5 text-slate-400" />
              <span>Nexo: {t.hub.rolesShort.nexo}</span>
            </span>
          </div>
        </div>
      </section>

      {/* 5 PLANETARY CARDS (WARP GATES) */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-widest font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>{t.hub.portalsBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              {t.hub.portalsTitle}
            </h2>
          </div>

          <a
            href="https://netovieira.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/15"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>{t.hub.architectBtn}</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOSYSTEM_TOOLS.map(tool => {
            const localized = t.toolData[tool.id];

            return (
              <div
                key={tool.id}
                onClick={() => {
                  soundFx.playWarp();
                  onSelectTool(tool.id);
                }}
                className="group cursor-pointer rounded-3xl border border-white/10 bg-[#090e18]/85 p-6 md:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 flex flex-col justify-between relative overflow-hidden shadow-lg hover:shadow-cyan-500/5"
              >
                {/* Ambient subtle glow in card corner */}
                <div
                  className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-10 group-hover:opacity-25 transition-opacity"
                  style={{ backgroundColor: tool.colors.primary }}
                />

                <div>
                  {/* Top bar */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl p-2 bg-black/60 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform"
                    >
                      <AppIcon toolId={tool.id} size={40} />
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/5 text-slate-300 border border-white/10">
                        {getRoleIcon(tool.role)}
                        <span>{getRoleLabel(tool.role)}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {tool.id === 'nexo' ? 'Freeware' : 'Open-Source (MIT)'}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </h3>

                  <p className="text-xs font-mono mt-1 font-semibold text-slate-300">
                    {localized?.tagline || tool.tagline}
                  </p>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed line-clamp-3">
                    {localized?.heroSubheadline || tool.landing.heroSubheadline}
                  </p>

                  {/* Acid Comic Highlight */}
                  <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] text-slate-400 leading-snug italic">
                    &quot;{localized?.punchline || tool.landing.punchline}&quot;
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-semibold text-slate-300 group-hover:text-white transition-colors">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{t.hub.enterLanding}</span>
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Anthero Vieira Neto - QG do Arquiteto (com foto em vidro fosco) */}
          <a
            href="https://netovieira.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="group relative overflow-hidden cursor-pointer rounded-3xl border border-cyan-500/25 p-6 md:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/60 flex flex-col justify-between shadow-[0_4px_25px_-5px_rgba(6,182,212,0.15)] min-h-[340px]"
          >
            {/* Foto de fundo do Arquiteto */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
              style={{
                backgroundImage: `url('/anthero-architect.jpg'), url('https://netovieira.github.io/assets/anthero-casual-CbiE3RKD.jpeg')`,
                backgroundPosition: '50% 48%'
              }}
            />

            {/* Vidro fosco translúcido sóbrio (Frosted Glass) */}
            <div className="absolute inset-0 bg-[#060a12]/80 backdrop-blur-[10px] transition-colors duration-500 group-hover:bg-[#060a12]/70 group-hover:backdrop-blur-[7px]" />

            {/* Reflexo especular suave do vidro */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#04070e]/90 pointer-events-none" />
            <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

            {/* Conteúdo à frente do vidro */}
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="relative w-14 h-14 rounded-2xl p-0.5 border border-cyan-400/40 bg-slate-900/90 shadow-md group-hover:scale-105 transition-transform overflow-hidden">
                  <img
                    src="/anthero-architect.jpg"
                    alt={t.hub.architectCard.name}
                    className="w-full h-full object-cover object-center rounded-[14px]"
                    onError={(e) => {
                      // Fallback resiliente com centralização exata no rosto
                      const target = e.currentTarget;
                      if (!target.src.includes('netovieira.github.io')) {
                        target.src = 'https://netovieira.github.io/assets/anthero-casual-CbiE3RKD.jpeg';
                        target.style.objectPosition = '50% 50%';
                      }
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-black/70 backdrop-blur-md text-cyan-300 border border-cyan-400/30 font-semibold tracking-wide shadow-sm">
                  {t.hub.architectCard.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors font-display drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {t.hub.architectCard.name}
              </h3>

              <p className="text-xs font-mono text-cyan-300 mt-1 font-semibold tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                {t.hub.architectCard.subtitle}
              </p>

              <p className="text-xs text-slate-200 mt-3 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] bg-black/40 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                {t.hub.architectCard.description}
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono font-semibold text-slate-200 group-hover:text-white transition-colors">
              <span className="text-cyan-300 font-bold group-hover:text-cyan-200 drop-shadow">
                {t.hub.architectCard.cta}
              </span>
              <div className="w-7 h-7 rounded-lg bg-cyan-500/25 backdrop-blur-sm flex items-center justify-center text-cyan-200 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all shadow-md">
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* WHY THIS UNIVERSE MATTERS (ACID NERD MANIFESTO) */}
      <section className="rounded-3xl border border-white/10 bg-black/40 p-8 sm:p-10 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t.hub.manifesto.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {t.hub.manifesto.title}
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed font-light">
            {t.hub.manifesto.body}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            {t.hub.manifesto.pills.map((pill, idx) => (
              <span key={idx} className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> {pill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
