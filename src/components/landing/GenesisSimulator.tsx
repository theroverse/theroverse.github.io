import React, { useState } from 'react';
import { Terminal, Check, Sparkles, Play, ShieldAlert, Laptop, ArrowRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface SetupStepItem {
  id: string;
  name: string;
  category: 'terminal' | 'ia' | 'browsers' | 'games';
  checked: boolean;
  desc: string;
  winget: string;
}

const DEFAULT_ITEMS: SetupStepItem[] = [
  { id: 'starship', name: 'Windows Terminal + Starship Prompt + Nerd Fonts', category: 'terminal', checked: true, desc: 'Adeus terminal azul de 1995. Olá glyphs e status git.', winget: 'Microsoft.WindowsTerminal, Starship.Starship' },
  { id: 'powertoys', name: 'Microsoft PowerToys & Windhawk', category: 'terminal', checked: true, desc: 'Color picker, FancyZones e customizações de barra de tarefas.', winget: 'Microsoft.PowerToys, RamenSoftware.Windhawk' },
  { id: 'python', name: 'Python 3.12 (com pip no PATH do sistema)', category: 'ia', checked: true, desc: 'A espinha dorsal para rodar a suíte Thero, Athena e Zeus.', winget: 'Python.Python.3.12' },
  { id: 'claude_suite', name: 'Claude Code Suite (Thero + Athena + Zeus)', category: 'ia', checked: true, desc: 'Engenharia sênior pré-configurada no PowerShell.', winget: 'git clone thero athena zeus' },
  { id: 'brave', name: 'Brave Browser / Firefox Developer Edition', category: 'browsers', checked: true, desc: 'Navegação veloz sem telemetria agressiva.', winget: 'Brave.Brave' },
  { id: 'steam', name: 'Steam + Discord + DirectX Runtimes', category: 'games', checked: true, desc: 'Porque nem só de código vive o habitante estelar.', winget: 'Valve.Steam, Discord.Discord' },
  { id: 'nexo_client', name: 'Nexo Local Storage & Media Client', category: 'terminal', checked: true, desc: 'Organizador local pré-adicionado ao startup.', winget: 'avnt-sistemas.nexo' }
];

export const GenesisSimulator: React.FC = () => {
  const [items, setItems] = useState<SetupStepItem[]>(DEFAULT_ITEMS);
  const [activeTab, setActiveTab] = useState<'all' | 'terminal' | 'ia' | 'browsers' | 'games'>('all');
  const [isSimulating, setIsSimulating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentActionLog, setCurrentActionLog] = useState<string>('Pronto para iniciar a terraformação.');

  const toggleItem = (id: string) => {
    soundFx.playClick();
    setItems(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const selectedCount = items.filter(i => i.checked).length;

  const runSimulation = () => {
    soundFx.playWarp();
    setIsSimulating(true);
    setProgress(5);
    setCurrentActionLog('Inicializando setup.exe e checando privilégios de Administrador...');

    const checkedItems = items.filter(i => i.checked);
    let stepIndex = 0;

    const interval = setInterval(() => {
      stepIndex++;
      if (stepIndex <= checkedItems.length) {
        const item = checkedItems[stepIndex - 1];
        setProgress(Math.round((stepIndex / checkedItems.length) * 100));
        setCurrentActionLog(`[Etapa ${stepIndex}/${checkedItems.length}] Terraformando: ${item.name}...`);
        soundFx.playChirp();
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setProgress(100);
        setCurrentActionLog('✨ Terraformação 100% concluída! Seu Windows 11 acordou do coma.');
      }
    }, 650);
  };

  const filtered = activeTab === 'all' ? items : items.filter(i => i.category === activeTab);

  return (
    <div className="rounded-2xl border border-purple-500/20 bg-[#120a1f]/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-500/20 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center p-1.5 rounded-md bg-purple-500/20 text-purple-300">
              <Laptop className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold">
              Simulador do Assistente SETUP.EXE
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">
            Matriz de Terraformação Pós-Formatação
          </h3>
          <p className="text-sm text-slate-400">
            Experimente o assistente real de 17 etapas: marque seus módulos e veja o comando final.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs font-mono text-purple-400">Módulos Ativos</span>
            <p className="text-lg font-bold text-white">{selectedCount} de {items.length}</p>
          </div>
          <button
            onClick={runSimulation}
            disabled={isSimulating || selectedCount === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/30 disabled:opacity-50"
          >
            {isSimulating ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Terraformando ({progress}%)</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Simular Execução</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Category selector */}
      <div className="flex flex-wrap gap-2 mb-5">
        {[
          { id: 'all', label: 'Todos os Módulos' },
          { id: 'terminal', label: 'Terminal & Shell' },
          { id: 'ia', label: 'Claude Code Suite' },
          { id: 'browsers', label: 'Navegação Limpa' },
          { id: 'games', label: 'Gaming & Mídia' },
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => { soundFx.playClick(); setActiveTab(cat.id as any); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === cat.id
                ? 'bg-purple-500/30 text-purple-200 border border-purple-500/40'
                : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Items list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {filtered.map(item => (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
              item.checked
                ? 'bg-purple-950/40 border-purple-500/40 text-slate-200'
                : 'bg-slate-900/40 border-white/5 text-slate-500 opacity-60 hover:opacity-90'
            }`}
          >
            <div className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
              item.checked
                ? 'bg-purple-600 border-purple-400 text-white'
                : 'border-slate-600 bg-slate-800'
            }`}>
              {item.checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-white truncate">{item.name}</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Live Terminal Output / Progress */}
      <div className="rounded-xl border border-purple-500/30 bg-[#0a0512] p-4 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>telemetria-de-bordo.genesis.log</span>
          </div>
          <span className="text-[10px] text-purple-400 uppercase">PowerShell 7.4 Administrator</span>
        </div>

        {isSimulating && (
          <div className="w-full bg-slate-800 rounded-full h-1.5 mb-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-500 to-cyan-400 h-1.5 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        <div className="text-purple-300 flex items-center gap-2">
          <ArrowRight className="w-3 h-3 text-purple-400 shrink-0" />
          <span>{currentActionLog}</span>
        </div>

        <div className="mt-3 pt-3 border-t border-white/5 text-slate-500 text-[11px] flex flex-col md:flex-row md:items-center justify-between gap-2">
          <span>Comando desacompanhado equivalente:</span>
          <code className="bg-purple-950/60 text-purple-300 px-2 py-1 rounded border border-purple-500/30">
            .\setup.exe --unattended --preset developer
          </code>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-amber-300/80 bg-amber-500/10 border border-amber-500/20 px-3 py-2 rounded-lg">
        <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
        <span>Aviso Cômico: O Genesis não instala antivírus de brinde nem barras de ferramentas do Yahoo. Sentimos muito se você gostava delas.</span>
      </div>
    </div>
  );
};
