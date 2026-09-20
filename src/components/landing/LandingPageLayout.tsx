import React, { useState } from 'react';
import {
  Sparkles, Terminal, Copy, Check, ExternalLink,
  ShieldCheck, AlertTriangle, Play, Globe, Navigation, UserCheck, Code2
} from 'lucide-react';
import { ToolId, EcosystemTool } from '../../types';
import { AppIcon } from '../icons/AppIcon';
import { AcidFaq } from './AcidFaq';
import { CrossPortalNav } from './CrossPortalNav';
import { GenesisSimulator } from './GenesisSimulator';
import { NexoSimulator } from './NexoSimulator';
import { TheroSimulator } from './TheroSimulator';
import { AthenaSimulator } from './AthenaSimulator';
import { ZeusSimulator } from './ZeusSimulator';
import { soundFx } from '../../utils/audio';
import { useLanguage } from '../../context/LanguageContext';

interface LandingPageLayoutProps {
  tool: EcosystemTool;
  onNavigateToTool: (toolId: ToolId) => void;
}

export const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({
  tool,
  onNavigateToTool
}) => {
  const { t } = useLanguage();
  const [copiedCli, setCopiedCli] = useState(false);
  const data = tool.landing;
  const localized = t.toolData[tool.id];

  const handleCopyCli = (text: string) => {
    soundFx.playChirp();
    navigator.clipboard.writeText(text);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const getRoleIcon = () => {
    switch (tool.role) {
      case 'planeta': return <Globe className="w-4 h-4" />;
      case 'nave': return <Navigation className="w-4 h-4" />;
      case 'habitante': return <UserCheck className="w-4 h-4" />;
    }
  };

  const renderSimulator = () => {
    switch (tool.id) {
      case 'genesis': return <GenesisSimulator />;
      case 'nexo': return <NexoSimulator />;
      case 'thero': return <TheroSimulator />;
      case 'athena': return <AthenaSimulator />;
      case 'zeus': return <ZeusSimulator />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen text-slate-200 pb-24 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background ambient subtle gradient */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at 50% 15%, ${tool.colors.primary} 0%, transparent 60%)`
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-10 sm:pt-16">
        {/* Top Breadcrumb & Sector Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-cyan-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{localized?.heroBadge || data.heroBadge}</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono text-slate-400 bg-white/5 border border-white/10">
              {getRoleIcon()}
              <span>{t.hub.roles[tool.role]}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-lg bg-black/40 border border-white/5">
              {data.licenseType}
            </span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto mb-20">
          {/* Cosmic Icon with subtle Glow */}
          <div className="inline-block relative mb-8">
            <div
              className="absolute inset-0 rounded-3xl blur-xl opacity-30"
              style={{ backgroundColor: tool.colors.primary }}
            />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl p-3 bg-slate-950/90 border border-white/15 shadow-xl flex items-center justify-center backdrop-blur-xl">
              <AppIcon toolId={tool.id} size={80} />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            {localized?.heroHeadline || data.heroHeadline}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-4 font-light">
            {localized?.heroSubheadline || data.heroSubheadline}
          </p>

          <p className="text-sm font-mono text-slate-400 max-w-2xl mx-auto mb-10 italic">
            &quot;{localized?.punchline || data.punchline}&quot;
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {tool.siteUrl && (
              <a
                href={tool.siteUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playClick()}
                className="px-6 py-3 rounded-xl font-bold text-sm text-slate-950 transition-all flex items-center gap-2 shadow-lg hover:scale-105 bg-cyan-400 hover:bg-cyan-300"
              >
                <span>{t.toolPages.officialSite}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {tool.repoUrl && (
              <a
                href={tool.repoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playClick()}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 font-semibold text-sm text-white transition-all flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-slate-400" />
                <span>{t.toolPages.githubRepo}</span>
              </a>
            )}

            {/* Quick installation CLI pill */}
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 font-mono text-xs text-slate-300">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>{data.cliSnippet.command}</span>
              <button
                onClick={() => handleCopyCli(data.cliSnippet.command)}
                className="ml-2 p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title={t.toolPages.copyCmd}
              >
                {copiedCli ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </section>

        {/* SECTION: The Acid Comic Problem ("A agonia cósmica...") */}
        <section className="mb-20">
          <div className="rounded-3xl border border-rose-500/20 bg-[#0e121d]/90 p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-widest font-semibold mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span>{t.toolPages.diagnosticBadge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {data.comicProblem.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-light">
              {data.comicProblem.lead}
            </p>

            <div className="space-y-3 mb-6">
              {data.comicProblem.agonyBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-white/5 text-xs sm:text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/25 text-rose-300 text-xs font-mono flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{data.comicProblem.cosmicWarning}</span>
            </div>
          </div>
        </section>

        {/* SECTION: Interactive Simulator */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{t.toolPages.labBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.toolPages.labTitle}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {t.toolPages.labSubtitle}
            </p>
          </div>

          {renderSimulator()}
        </section>

        {/* SECTION: Engineering Solution & Stats */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {data.solutionSummary.title}
            </h2>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed font-light">
              {data.solutionSummary.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {data.solutionSummary.stats.map((stat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 text-center backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-extrabold text-white block mb-1 font-mono text-cyan-300">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-slate-200 block uppercase font-mono tracking-wider">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  {stat.hint}
                </span>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-md transition-all hover:border-white/20 hover:bg-slate-900/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-white/5 border border-white/10 text-slate-300"
                    >
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-light">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  <span className="text-slate-400 block font-semibold text-[10px] uppercase mb-0.5">Especificação Técnica:</span>
                  <span>{feat.technicalDetail}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Terminal / CLI Quickstart */}
        <section className="mb-20">
          <div className="rounded-2xl border border-white/15 bg-black/70 p-6 sm:p-8 backdrop-blur-xl font-mono">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-white font-semibold">Instalação & Linha de Comando</span>
              </div>
              <span className="text-[10px] uppercase text-slate-400">
                {tool.id === 'nexo' ? 'Windows Executable' : 'Python 3.10+ Stdlib'}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-4 font-sans leading-relaxed">
              {data.cliSnippet.description}
            </p>

            <div className="p-3 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-between gap-2 mb-4">
              <code className="text-xs sm:text-sm font-mono text-cyan-300 overflow-x-auto whitespace-nowrap">
                {data.cliSnippet.command}
              </code>
              <button
                onClick={() => handleCopyCli(data.cliSnippet.command)}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white flex items-center gap-1.5 transition-colors shrink-0"
              >
                {copiedCli ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copiedCli ? t.toolPages.copied : t.toolPages.copyCmd}</span>
              </button>
            </div>

            <div className="rounded-lg bg-black/50 p-4 border border-white/5 text-[11px] sm:text-xs text-slate-400 leading-relaxed whitespace-pre-wrap">
              {data.cliSnippet.outputSample}
            </div>
          </div>
        </section>

        {/* SECTION: Acid FAQ */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.toolPages.faqBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.toolPages.faqTitle}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {t.toolPages.faqSubtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <AcidFaq items={data.acidFaq} accentColor="#38bdf8" />
          </div>
        </section>

        {/* SECTION: Cross Portal Travel */}
        <CrossPortalNav currentToolId={tool.id} onJumpToTool={onNavigateToTool} />

        {/* FOOTER */}
        <footer className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            <span>© 2026 THEROVERSE · {tool.name}</span>
            <span className="mx-2">·</span>
            <a
              href="https://netovieira.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
            >
              <span>{t.toolPages.footerArchitect}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="mx-2">·</span>
            <span className="text-slate-400">{data.licenseNote}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.toolPages.readyBadge}</span>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};
