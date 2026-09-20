import React from 'react';
import { Palette, CheckCircle2, Shield, Sparkles, Layers, Sliders } from 'lucide-react';
import { ECOSYSTEM_TOOLS } from '../data/ecosystem';
import { EcosystemIcon } from './icons/EcosystemIcon';

export const ColorGuidelines: React.FC = () => {
  return (
    <div className="w-full space-y-8">
      {/* Introduction Card */}
      <div className="rounded-xl border border-slate-800/80 bg-[#0c1220] p-6">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
          <Palette className="h-4 w-4" />
          <span>Sistema Cromático Exclusivo</span>
        </div>
        <h3 className="mt-2 text-2xl font-bold text-white font-display">
          Identidade Coesa, Minimalista & Sem Repetição de Cores
        </h3>
        <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
          Para garantir que cada ferramenta do seu ecossistema tenha reconhecimento visual instantâneo na barra de tarefas, no terminal ou na doc, definimos 5 zonas espectrais independentes no círculo cromático, mantendo uma espessura geométrica unificada de 3px-3.5px e terminais arredondados.
        </p>
      </div>

      {/* Palette Distribution Table */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {ECOSYSTEM_TOOLS.map((tool) => (
          <div
            key={tool.id}
            className="rounded-xl border border-slate-800/80 bg-[#090e18] p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <EcosystemIcon id={tool.id} variant="app" size={40} />
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-slate-800 bg-slate-900 text-slate-400 capitalize">
                  {tool.role}
                </span>
              </div>

              <h4 className="mt-3 text-base font-bold text-white font-display">{tool.name}</h4>
              <p className="text-xs text-slate-400 font-mono mt-0.5">{tool.colors.name}</p>

              {/* Color swatch */}
              <div className="mt-4 space-y-2">
                <div
                  className="h-10 w-full rounded-lg shadow-inner flex items-center justify-end px-2"
                  style={{ backgroundColor: tool.colors.primary }}
                >
                  <span className="text-[11px] font-mono font-bold text-black/80 bg-white/70 px-1.5 py-0.5 rounded shadow-xs">
                    {tool.colors.primary}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono">
                  <div className="rounded bg-slate-900/80 p-1.5 border border-slate-800">
                    <span className="text-slate-500 block">Acento:</span>
                    <span className="text-slate-300">{tool.colors.accent}</span>
                  </div>
                  <div className="rounded bg-slate-900/80 p-1.5 border border-slate-800">
                    <span className="text-slate-500 block">Sombra:</span>
                    <span className="text-slate-300">{tool.colors.secondary}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
              {tool.tagline}
            </div>
          </div>
        ))}
      </div>

      {/* Geometric Design Rules */}
      <div className="rounded-xl border border-slate-800/80 bg-[#0c1220] p-6">
        <h4 className="text-base font-bold text-white font-display mb-4">
          Diretrizes de Consistência Vetorial
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-slate-300">
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 space-y-2">
            <div className="flex items-center gap-2 font-mono font-semibold text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>Grid & Proporções</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Todos os glifos foram construídos numa matriz ortogonal de 64x64 unidades com margem de segurança de 4 unidades. Círculos de referência concêntricos a 14px e 24px garantem peso óptico idêntico entre formas angulares (Zeus, Athena) e esféricas (Nexo, Thero).
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 space-y-2">
            <div className="flex items-center gap-2 font-mono font-semibold text-purple-300">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              <span>Espessuras de Traço (Strokes)</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Linhas mestras utilizam espessura fixa de 3.0px a 3.25px. Guias de telemetria e pulsos utilizam 1.5px a 2.0px. Todos os cantos usam <code>stroke-linejoin="round"</code> e terminais abertos usam <code>stroke-linecap="round"</code> para prevenir asperezas em resoluções pequenas.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 space-y-2">
            <div className="flex items-center gap-2 font-mono font-semibold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Compatibilidade Multi-Superfície</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Alta legibilidade comprovada tanto em superfícies ultra-escuras (Windows 11 Dark, Terminal OLED) quanto claras (documentações, GitHub README em light mode). A variante 'App Tile' inclui squircle com borda refinada de 1.25px.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
