import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Download,
  Terminal,
  Layers,
  Sparkles,
  ExternalLink,
  Code2,
  Grid,
  Sun,
  Moon,
  Info,
  Sliders,
} from 'lucide-react';
import { EcosystemTool, IconVariant, PreviewBackground } from '../types';
import { EcosystemIcon } from './icons/EcosystemIcon';
import {
  getCleanSvgString,
  copySvgToClipboard,
  downloadSvgFile,
  downloadPngFile,
} from '../utils/exportSvg';

interface ToolDetailModalProps {
  tool: EcosystemTool | null;
  onClose: () => void;
}

export const ToolDetailModal: React.FC<ToolDetailModalProps> = ({ tool, onClose }) => {
  if (!tool) return null;

  const [activeVariant, setActiveVariant] = useState<IconVariant>('app');
  const [activeBg, setActiveBg] = useState<PreviewBackground>('cosmos');
  const [previewSize, setPreviewSize] = useState<number>(128);
  const [showWireframe, setShowWireframe] = useState<boolean>(false);
  const [copiedSvg, setCopiedSvg] = useState<boolean>(false);
  const [downloadingPng, setDownloadingPng] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'visual' | 'code' | 'specs'>('visual');

  const svgCode = getCleanSvgString(tool, activeVariant, 64);

  const handleCopySvg = async () => {
    try {
      await copySvgToClipboard(tool, activeVariant);
      setCopiedSvg(true);
      setTimeout(() => setCopiedSvg(false), 2000);
    } catch (err) {
      console.error('Failed to copy SVG:', err);
    }
  };

  const handleDownloadPng = async (res: number) => {
    try {
      setDownloadingPng(true);
      await downloadPngFile(tool, activeVariant, res);
    } catch (err) {
      console.error('Failed to export PNG:', err);
    } finally {
      setDownloadingPng(false);
    }
  };

  const getBgClass = () => {
    switch (activeBg) {
      case 'oled':
        return 'bg-black text-white';
      case 'slate':
        return 'bg-[#1e293b] text-slate-100';
      case 'paper':
        return 'bg-[#f8fafc] text-slate-900 shadow-inner';
      case 'matrix':
        return 'bg-[#04130c] text-emerald-300 border border-emerald-900/50';
      case 'cosmos':
      default:
        return 'bg-[#0a0f1d] text-slate-100';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-5xl rounded-2xl border border-slate-800 bg-[#0c1220] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-800/80 px-6 py-4 bg-[#090e18]">
          <div className="flex items-center gap-3">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: tool.colors.primary }}
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white font-display">{tool.name}</h3>
                <span className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-slate-700 bg-slate-800 text-slate-300">
                  {tool.roleTitle}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">{tool.tagline}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Top Inspector Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Stage: Live Interactive Preview */}
            <div className="lg:col-span-7 flex flex-col rounded-xl border border-slate-800/80 bg-[#080d16] p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/60 pb-3">
                {/* Variant Selector */}
                <div className="flex rounded-lg bg-slate-900/80 p-1 border border-slate-800 text-xs font-mono">
                  {(['app', 'line'] as IconVariant[]).map((v) => (
                    <button
                      key={v}
                      onClick={() => setActiveVariant(v)}
                      className={`px-3 py-1 rounded-md capitalize transition-all ${
                        activeVariant === v
                          ? 'bg-slate-800 text-white font-semibold shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {v === 'app' ? 'App Squircle' : 'Linha Minimal'}
                    </button>
                  ))}
                </div>

                {/* Background Selector */}
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-mono text-slate-400 mr-1 hidden sm:inline">
                    Fundo:
                  </span>
                  {[
                    { id: 'cosmos', label: 'Cosmos', icon: Moon },
                    { id: 'oled', label: 'OLED', icon: Moon },
                    { id: 'slate', label: 'Windows', icon: Layers },
                    { id: 'paper', label: 'Light', icon: Sun },
                  ].map((bg) => (
                    <button
                      key={bg.id}
                      onClick={() => setActiveBg(bg.id as PreviewBackground)}
                      className={`px-2 py-1 text-[11px] font-mono rounded border transition-colors ${
                        activeBg === bg.id
                          ? 'border-cyan-500/50 bg-cyan-950/40 text-cyan-300'
                          : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      {bg.label}
                    </button>
                  ))}
                </div>

                {/* Wireframe toggle */}
                <button
                  onClick={() => setShowWireframe(!showWireframe)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded border transition-colors ${
                    showWireframe
                      ? 'border-purple-500/50 bg-purple-950/40 text-purple-300 font-semibold'
                      : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-slate-300'
                  }`}
                >
                  <Grid className="h-3 w-3" />
                  <span>Grid / Wireframe</span>
                </button>
              </div>

              {/* Icon Canvas Area */}
              <div
                className={`relative my-4 flex min-h-[260px] flex-col items-center justify-center rounded-xl transition-colors duration-300 p-8 ${getBgClass()}`}
              >
                {/* Concentric subtle guidelines in canvas */}
                <div className="relative flex items-center justify-center">
                  <EcosystemIcon
                    id={tool.id}
                    variant={activeVariant}
                    size={previewSize}
                    showWireframe={showWireframe}
                    colorOverride={activeBg === 'paper' && activeVariant === 'line' ? '#0f172a' : undefined}
                    className="drop-shadow-lg"
                  />
                </div>

                <div className="mt-4 text-xs font-mono opacity-60">
                  {previewSize}x{previewSize}px · {tool.name} ({activeVariant})
                </div>
              </div>

              {/* Size Scaler Bar */}
              <div className="mt-auto border-t border-slate-800/60 pt-3 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Escala de Resolução:</span>
                <div className="flex items-center gap-1.5 font-mono text-xs">
                  {[24, 32, 48, 64, 96, 128, 192].map((s) => (
                    <button
                      key={s}
                      onClick={() => setPreviewSize(s)}
                      className={`px-2 py-0.5 rounded text-[11px] border transition-colors ${
                        previewSize === s
                          ? 'border-cyan-500 bg-cyan-950/60 text-cyan-300 font-bold'
                          : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {s}px
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Stage: Design Rationale & Color Anatomy */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              {/* Concept Card */}
              <div className="rounded-xl border border-slate-800/80 bg-[#080d16] p-5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                  Conceito & Racional Visual
                </span>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {tool.designRationale}
                </p>

                {/* Symbolism checklist */}
                <div className="mt-4 space-y-1.5 border-t border-slate-800/60 pt-3">
                  <span className="text-[11px] font-mono text-slate-400 font-semibold block mb-1">
                    Semiótica do Ícone:
                  </span>
                  {tool.symbolism.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: tool.colors.primary }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color System Box */}
              <div className="rounded-xl border border-slate-800/80 bg-[#080d16] p-5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                  Assinatura Cromática Única (Sem Repetição)
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5">
                    <div className="h-5 w-full rounded" style={{ backgroundColor: tool.colors.primary }} />
                    <div className="mt-1.5 text-[10px] font-mono text-slate-400 uppercase">Primária</div>
                    <div className="text-xs font-mono font-bold text-white">{tool.colors.primary}</div>
                  </div>

                  <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5">
                    <div className="h-5 w-full rounded" style={{ backgroundColor: tool.colors.secondary }} />
                    <div className="mt-1.5 text-[10px] font-mono text-slate-400 uppercase">Secundária</div>
                    <div className="text-xs font-mono font-bold text-white">{tool.colors.secondary}</div>
                  </div>

                  <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5">
                    <div className="h-5 w-full rounded" style={{ backgroundColor: tool.colors.accent }} />
                    <div className="mt-1.5 text-[10px] font-mono text-slate-400 uppercase">Acento / Glow</div>
                    <div className="text-xs font-mono font-bold text-white">{tool.colors.accent}</div>
                  </div>
                </div>
              </div>

              {/* Action Export Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopySvg}
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700/80 px-4 py-2.5 text-xs font-semibold text-white transition-all shadow-sm"
                >
                  {copiedSvg ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-300">SVG Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-slate-300" />
                      <span>Copiar SVG Limpo</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => downloadSvgFile(tool, activeVariant, 64)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700/80 px-4 py-2.5 text-xs font-semibold text-white transition-all shadow-sm"
                >
                  <Download className="h-4 w-4 text-slate-300" />
                  <span>Baixar .SVG</span>
                </button>
              </div>

              {/* PNG High Res Resolution row */}
              <div className="flex items-center justify-between rounded-lg border border-slate-800/80 bg-[#080d16] px-3.5 py-2">
                <span className="text-[11px] font-mono text-slate-400">Exportar PNG:</span>
                <div className="flex items-center gap-1.5 font-mono text-xs">
                  {[256, 512, 1024].map((res) => (
                    <button
                      key={res}
                      disabled={downloadingPng}
                      onClick={() => handleDownloadPng(res)}
                      className="px-2 py-1 rounded border border-slate-700/80 bg-slate-800/60 hover:bg-slate-700 text-slate-200 text-[11px] transition-colors"
                    >
                      {res}px
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tabs: SVG Code & Geometric Specifications */}
          <div className="rounded-xl border border-slate-800/80 bg-[#080d16] p-5">
            <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('visual')}
                  className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                    activeTab === 'visual'
                      ? 'bg-slate-800 text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Especificações Geométricas
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                    activeTab === 'code'
                      ? 'bg-slate-800 text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Código SVG
                </button>
              </div>

              {tool.repoUrl && (
                <a
                  href={tool.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline"
                >
                  <span>Ver Repositório</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>

            {activeTab === 'visual' ? (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="space-y-2">
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                    Diretrizes de Construção
                  </span>
                  {tool.geometricSpecs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                    Integração com Terminal / Windows 11
                  </span>
                  <div className="rounded-lg bg-[#050811] p-3 font-mono text-[11px] text-slate-300 border border-slate-800/80">
                    <div className="text-slate-500"># Configuração recomendada (Starship / CLAUDE.md)</div>
                    <div className="text-cyan-400 mt-1">[{tool.id}]</div>
                    <div>symbol = "{tool.name.charAt(0)} "</div>
                    <div>style = "{tool.colors.primary}"</div>
                    <div>format = "[$symbol($version )]($style)"</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-4 relative">
                <pre className="max-h-52 overflow-x-auto rounded-lg bg-[#050811] p-4 text-[11px] font-mono text-cyan-300 border border-slate-800">
                  {svgCode}
                </pre>
                <button
                  onClick={handleCopySvg}
                  className="absolute top-3 right-3 rounded bg-slate-800/90 border border-slate-700 px-2 py-1 text-[10px] font-mono text-slate-300 hover:text-white"
                >
                  {copiedSvg ? 'Copiado!' : 'Copiar'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
