import React, { useState } from 'react';
import { Download, Copy, Check, ExternalLink, Eye, Terminal, Sparkles, Sliders } from 'lucide-react';
import { ECOSYSTEM_TOOLS } from '../data/ecosystem';
import { EcosystemTool, IconVariant } from '../types';
import { EcosystemIcon } from './icons/EcosystemIcon';
import { copySvgToClipboard, downloadSvgFile, downloadPngFile } from '../utils/exportSvg';

interface IconGridProps {
  variant: IconVariant;
  showWireframe: boolean;
  onSelectTool: (tool: EcosystemTool) => void;
}

export const IconGrid: React.FC<IconGridProps> = ({
  variant,
  showWireframe,
  onSelectTool,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleCopy = async (e: React.MouseEvent, tool: EcosystemTool) => {
    e.stopPropagation();
    try {
      await copySvgToClipboard(tool, variant);
      setCopiedId(tool.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy SVG:', err);
    }
  };

  const handleDownloadSvg = (e: React.MouseEvent, tool: EcosystemTool) => {
    e.stopPropagation();
    downloadSvgFile(tool, variant, 64);
  };

  const handleDownloadPng = async (e: React.MouseEvent, tool: EcosystemTool) => {
    e.stopPropagation();
    try {
      setDownloadingId(tool.id);
      await downloadPngFile(tool, variant, 512);
    } catch (err) {
      console.error('Failed to export PNG:', err);
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {ECOSYSTEM_TOOLS.map((tool) => {
          const isCopied = copiedId === tool.id;
          const isDownloading = downloadingId === tool.id;

          const roleBorder =
            tool.role === 'planeta'
              ? 'border-cyan-500/20 hover:border-cyan-500/50'
              : tool.role === 'nave'
              ? 'border-emerald-500/20 hover:border-emerald-500/50'
              : 'border-amber-500/20 hover:border-amber-500/50';

          const roleBadgeBg =
            tool.role === 'planeta'
              ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
              : tool.role === 'nave'
              ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
              : 'bg-amber-500/10 text-amber-300 border-amber-500/30';

          return (
            <div
              key={tool.id}
              onClick={() => onSelectTool(tool)}
              className={`group relative flex flex-col justify-between rounded-xl border bg-[#0e1422] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${roleBorder}`}
            >
              {/* Top Bar: Role badge & Color chip */}
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] font-mono capitalize tracking-wide font-medium ${roleBadgeBg}`}
                >
                  {tool.role}
                </span>

                <div className="flex items-center gap-1.5" title={`Cor: ${tool.colors.name}`}>
                  <span
                    className="h-3 w-3 rounded-full border border-white/20 shadow-sm"
                    style={{ backgroundColor: tool.colors.primary }}
                  />
                  <span className="text-[11px] font-mono text-slate-400">
                    {tool.colors.primary}
                  </span>
                </div>
              </div>

              {/* Main Icon Visual Presentation */}
              <div className="my-6 flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center p-4">
                  {/* Subtle hover background bloom */}
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ backgroundColor: tool.colors.primary }}
                  />
                  <div className="relative">
                    <EcosystemIcon
                      id={tool.id}
                      variant={variant}
                      size={80}
                      showWireframe={showWireframe}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Name & Tagline */}
                <h3 className="mt-2 text-lg font-bold tracking-tight text-white font-display group-hover:text-cyan-300 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-center text-xs text-slate-400 font-mono line-clamp-1 mt-0.5">
                  {tool.tagline}
                </p>
              </div>

              {/* Functional Brief & CLI */}
              <div className="border-t border-slate-800/80 pt-3">
                <p className="text-[12px] text-slate-300 line-clamp-2 leading-relaxed h-9">
                  {tool.description}
                </p>

                {tool.cliUsage && (
                  <div className="mt-2.5 flex items-center gap-1.5 rounded-md bg-[#080c14] px-2.5 py-1 text-[11px] font-mono text-slate-400 border border-slate-800/80">
                    <Terminal className="h-3 w-3 text-slate-500 shrink-0" />
                    <span className="truncate">{tool.cliUsage}</span>
                  </div>
                )}
              </div>

              {/* Action Toolbar */}
              <div className="mt-4 flex items-center gap-1.5 pt-3 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={(e) => handleCopy(e, tool)}
                  className="flex-1 flex items-center justify-center gap-1 rounded-lg border border-slate-700/80 bg-slate-800/50 hover:bg-slate-700/60 py-1.5 text-xs font-medium text-slate-200 transition-colors"
                  title="Copiar código SVG limpo"
                >
                  {isCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-slate-400" />
                      <span className="text-[11px]">SVG</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={(e) => handleDownloadSvg(e, tool)}
                  className="flex items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/50 hover:bg-slate-700/60 px-2 py-1.5 text-slate-300 hover:text-white transition-colors"
                  title="Baixar arquivo SVG vetorial"
                >
                  <Download className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => handleDownloadPng(e, tool)}
                  disabled={isDownloading}
                  className="flex items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/50 hover:bg-slate-700/60 px-2.5 py-1.5 text-[11px] font-mono font-medium text-slate-300 hover:text-white transition-colors"
                  title="Baixar PNG em alta resolução (512x512)"
                >
                  {isDownloading ? '...' : 'PNG'}
                </button>

                <button
                  type="button"
                  onClick={() => onSelectTool(tool)}
                  className="flex items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 px-2 py-1.5 text-cyan-300 transition-colors"
                  title="Inspecionar anatomia geométrica e detalhes"
                >
                  <Eye className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
