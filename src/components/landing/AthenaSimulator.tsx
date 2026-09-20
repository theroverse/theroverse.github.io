import React, { useState } from 'react';
import { Compass, Sparkles, Folder, FileCode, Play, CheckCircle2, Cpu } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface ScanNode {
  path: string;
  type: 'file' | 'folder' | 'root';
  level: number;
  status: 'pending' | 'scanning' | 'indexed' | 'cached';
  summary: string;
}

const INITIAL_NODES: ScanNode[] = [
  // Level 2: Leaves (Bottom)
  { path: 'src/auth/jwt.ts', type: 'file', level: 2, status: 'pending', summary: 'Assinatura e validação de tokens JWT RS256 com rotação de chaves' },
  { path: 'src/auth/session.ts', type: 'file', level: 2, status: 'pending', summary: 'Middleware de extração de cookie de sessão com rate-limiting' },
  { path: 'src/db/schema.ts', type: 'file', level: 2, status: 'pending', summary: 'Tabelas users, accounts e tokens com constraints de chave estrangeira' },
  { path: 'src/db/pool.ts', type: 'file', level: 2, status: 'pending', summary: 'Gerenciador de conexão PostgreSQL com timeout e fallback' },

  // Level 1: Subfolders
  { path: 'src/auth/ (Resumo de Pasta)', type: 'folder', level: 1, status: 'pending', summary: 'Submódulo de autenticação: gerencia JWT, cookies e sessões seguras' },
  { path: 'src/db/ (Resumo de Pasta)', type: 'folder', level: 1, status: 'pending', summary: 'Camada de persistência: schemas de banco e pooling relacional' },

  // Level 0: Root
  { path: '.athena/summary.md (Planta Baixa)', type: 'root', level: 0, status: 'pending', summary: 'Arquitetura Geral: Backend Node/TS com autenticação JWT e PostgreSQL' }
];

export const AthenaSimulator: React.FC = () => {
  const [nodes, setNodes] = useState<ScanNode[]>(INITIAL_NODES);
  const [isScanning, setIsScanning] = useState(false);
  const [activeStepText, setActiveStepText] = useState('Pronto para iniciar a varredura bottom-up.');

  const runBottomUpScan = () => {
    soundFx.playWarp();
    setIsScanning(true);
    setActiveStepText('Disparando radar neural bottom-up... Lendo folhas do projeto primeiro.');

    // Reset all nodes
    setNodes(prev => prev.map(n => ({ ...n, status: 'pending' })));

    // Step 1: Scan leaf files
    setTimeout(() => {
      soundFx.playChirp();
      setActiveStepText('[Passo 1 de 3] Resumindo arquivos folha (src/auth/*.ts e src/db/*.ts)...');
      setNodes(prev => prev.map(n => n.level === 2 ? { ...n, status: 'indexed' } : n));
    }, 700);

    // Step 2: Synthesize folder summaries
    setTimeout(() => {
      soundFx.playChirp();
      setActiveStepText('[Passo 2 de 3] Sintetizando resumos de pastas com base nos nós filhos...');
      setNodes(prev => prev.map(n => n.level === 1 ? { ...n, status: 'indexed' } : n));
    }, 1500);

    // Step 3: Consolidate root
    setTimeout(() => {
      soundFx.playChirp();
      setActiveStepText('✨ [Passo 3 de 3] Planta baixa estelar consolidada em .athena/summary.md!');
      setNodes(prev => prev.map(n => n.level === 0 ? { ...n, status: 'indexed' } : n));
      setIsScanning(false);
    }, 2300);
  };

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-[#071912]/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-500/20 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center p-1.5 rounded-md bg-emerald-500/20 text-emerald-300">
              <Compass className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
              Simulador do Radar Cartográfico
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">
            Varredura Piramidal Recursiva de Baixo para Cima
          </h3>
          <p className="text-sm text-slate-400">
            Veja a Athena resumir os arquivos folhas primeiro e consolidar a raiz sem ler 800 arquivos na mesma chamada.
          </p>
        </div>

        <button
          onClick={runBottomUpScan}
          disabled={isScanning}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium text-sm transition-all shadow-lg shadow-emerald-600/30 disabled:opacity-50"
        >
          {isScanning ? (
            <>
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Escaneando...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>Disparar Varredura</span>
            </>
          )}
        </button>
      </div>

      {/* Status banner */}
      <div className="mb-5 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 font-mono text-xs text-emerald-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>{activeStepText}</span>
        </div>
        <span className="text-[10px] text-slate-400 hidden sm:inline">Cache: SHA-256 habilitado</span>
      </div>

      {/* Interactive Tree View (Visualizing Bottom-Up) */}
      <div className="space-y-4">
        {/* Level 0: Root */}
        <div className="p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-950/20">
          <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mb-1">
            Ápice da Pirâmide · Resumo Geral Consolidado (Nível 0)
          </div>
          {nodes.filter(n => n.level === 0).map(node => (
            <div key={node.path} className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <Folder className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs text-white font-bold">{node.path}</span>
              </div>
              <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                node.status === 'indexed'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1'
                  : 'bg-slate-800 text-slate-500'
              }`}>
                {node.status === 'indexed' && <CheckCircle2 className="w-3 h-3" />}
                {node.status === 'indexed' ? 'Sintetizado' : 'Aguardando'}
              </span>
            </div>
          ))}
        </div>

        {/* Level 1: Subfolders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {nodes.filter(n => n.level === 1).map(node => (
            <div key={node.path} className="p-3 rounded-xl border border-white/10 bg-slate-900/60">
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-1.5 text-xs text-emerald-200 font-mono font-semibold">
                  <Folder className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="truncate">{node.path}</span>
                </div>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  node.status === 'indexed' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-500'
                }`}>
                  {node.status === 'indexed' ? 'OK' : 'Pendente'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">{node.summary}</p>
            </div>
          ))}
        </div>

        {/* Level 2: Leaves */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {nodes.filter(n => n.level === 2).map(node => (
            <div key={node.path} className="p-2.5 rounded-lg border border-white/5 bg-slate-950/40 flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-300 font-mono">
                  <FileCode className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">{node.path}</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5 leading-tight truncate">{node.summary}</p>
              </div>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0 ${
                node.status === 'indexed' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-500'
              }`}>
                {node.status === 'indexed' ? 'Lido' : 'Pendente'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
