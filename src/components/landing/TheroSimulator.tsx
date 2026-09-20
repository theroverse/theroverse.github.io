import React, { useState } from 'react';
import { Terminal, ShieldCheck, Flame, Skull, CheckCircle, Copy, Check } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const TheroSimulator: React.FC = () => {
  const [viewMode, setViewMode] = useState<'after' | 'before'>('after');
  const [copied, setCopied] = useState(false);

  const copyCommand = (cmd: string) => {
    soundFx.playChirp();
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-orange-500/20 bg-[#170c06]/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-orange-600/10 blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-orange-500/20 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center p-1.5 rounded-md bg-orange-500/20 text-orange-300">
              <Terminal className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono tracking-widest text-orange-400 uppercase font-semibold">
              Comparador de Inteligência de Engenharia
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">
            Claude Code: Estagiário Alucinado vs. Engenheiro Sênior
          </h3>
          <p className="text-sm text-slate-400">
            Veja a diferença brutal de comportamento quando o Engineering OS do Thero está ativo.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => { soundFx.playClick(); setViewMode('before'); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'before'
                ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Skull className="w-3.5 h-3.5" />
            <span>Sem Thero (Caos)</span>
          </button>

          <button
            onClick={() => { soundFx.playClick(); setViewMode('after'); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'after'
                ? 'bg-orange-500 text-slate-950 font-bold shadow-lg shadow-orange-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Com Thero (Sênior)</span>
          </button>
        </div>
      </div>

      {/* Terminal Mockup */}
      <div className="rounded-xl border border-orange-500/30 bg-[#090502] p-4 md:p-5 font-mono text-xs shadow-inner">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400 text-[11px]">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${viewMode === 'before' ? 'bg-red-500 animate-pulse' : 'bg-orange-400'}`} />
            <span className="text-slate-200">Terminal Claude Code · Tarefa: &quot;Adicionar validação de CPF&quot;</span>
          </div>
          <span className="text-[10px] text-orange-400">
            {viewMode === 'before' ? 'Modo: Sem Guardrails (Perigo)' : 'Modo: Engineering OS Ativo'}
          </span>
        </div>

        {viewMode === 'before' ? (
          <div className="space-y-3 text-red-200/90 leading-relaxed animate-in fade-in duration-300">
            <div className="text-slate-400">
              <span className="text-red-400 font-bold">Humano:</span> Claude, adiciona validação de CPF no formulário de cadastro.
            </div>
            <div className="text-red-300 bg-red-950/30 p-3 rounded-lg border border-red-500/30 space-y-2">
              <p className="font-semibold flex items-center gap-2 text-red-400">
                <Flame className="w-4 h-4 text-red-500" />
                Claude (Alucinado às 03:47 da manhã):
              </p>
              <p>&quot;Com certeza! Notei que seu formulário usava React Hook Form, então decidi reescrever todo o seu frontend usando uma biblioteca experimental de formulários em Rust WebAssembly que vi num tweet ontem.&quot;</p>
              <p className="text-red-400/80">&quot;Também apaguei seus 24 testes unitários porque eles estavam com erros de tipagem na biblioteca nova. Deletei a tabela de usuários do Postgres e criei uma no DynamoDB. Espero que tenha gostado! 🚀&quot;</p>
              <div className="text-[11px] text-red-400 font-bold pt-1 border-t border-red-500/20">
                Resultado: 14 arquivos alterados sem permissão · Build quebrado · Git status em chamas.
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3 text-slate-200 leading-relaxed animate-in fade-in duration-300">
            <div className="text-slate-400">
              <span className="text-orange-400 font-bold">Humano:</span> Claude, adiciona validação de CPF no formulário de cadastro.
            </div>
            <div className="text-orange-200/90 bg-orange-950/30 p-3 rounded-lg border border-orange-500/30 space-y-2">
              <p className="font-semibold flex items-center gap-2 text-orange-400">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                Claude (Sob os guardrails do Thero):
              </p>
              <p>&quot;Entendido. Seguindo as diretrizes do Thero Engineering OS:&quot;</p>
              <div className="pl-3 border-l-2 border-orange-500/40 space-y-1 text-slate-300 text-xs">
                <p>1. Localizado arquivo específico: <code className="text-orange-300">src/utils/validators.ts</code></p>
                <p>2. Adicionada função pura de checagem de dígitos verificadores sem novas dependências.</p>
                <p>3. Adicionados 4 testes unitários cobrindo casos válidos, inválidos e máscara.</p>
                <p>4. Preservada 100% da arquitetura existente sem quebrar outros inputs.</p>
              </div>
              <div className="text-[11px] text-emerald-400 font-semibold pt-1 border-t border-orange-500/20">
                Resultado: 1 arquivo editado · 1 teste novo · Build 100% verde · 0 tokens desperdiçados.
              </div>
            </div>
          </div>
        )}

        {/* Quick Command Box */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-slate-400 text-[11px]">Instale as regras com um único comando:</span>
          <div className="flex items-center gap-2">
            <code className="bg-black/60 text-orange-300 px-2.5 py-1 rounded border border-orange-500/30 text-xs">
              python thero.py
            </code>
            <button
              onClick={() => copyCommand('python thero.py')}
              className="p-1.5 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 border border-orange-500/30 transition-all"
              title="Copiar comando"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
