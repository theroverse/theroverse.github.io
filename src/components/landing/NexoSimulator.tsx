import React, { useState } from 'react';
import { HardDrive, Tv, ScanFace, FileText, CheckCircle2, ShieldCheck, Play, Radio } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const NexoSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'media' | 'faces' | 'docs'>('media');
  const [isPlaying, setIsPlaying] = useState(false);
  const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'done'>('idle');

  const triggerScan = () => {
    soundFx.playChirp();
    setScanStatus('scanning');
    setTimeout(() => {
      setScanStatus('done');
      soundFx.playClick();
    }, 900);
  };

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#08121f]/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-cyan-500/20 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center p-1.5 rounded-md bg-cyan-500/20 text-cyan-300">
              <HardDrive className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              Simulador do Núcleo Nexo
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">
            Biosfera de Mídia & Dados Sem Nuvem Externa
          </h3>
          <p className="text-sm text-slate-400">
            Veja como o Nexo serve mídia para Smart TVs e agrupa rostos sem mandar 1 byte para a internet.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1.5 rounded-xl">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono text-cyan-300">System Tray: Ativo (42MB RAM)</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => { soundFx.playClick(); setActiveTab('media'); }}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'media'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
          }`}
        >
          <Tv className="w-3.5 h-3.5" />
          <span>Media Server Embutido</span>
        </button>

        <button
          onClick={() => { soundFx.playClick(); setActiveTab('faces'); }}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'faces'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
          }`}
        >
          <ScanFace className="w-3.5 h-3.5" />
          <span>Reconhecimento Facial Offline</span>
        </button>

        <button
          onClick={() => { soundFx.playClick(); setActiveTab('docs'); }}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'docs'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Triagem de Boletos & PDFs</span>
        </button>
      </div>

      {/* Active Tab Content */}
      {activeTab === 'media' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono">
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>Stream Local: http://192.168.1.15:4321/live/sala</span>
              </div>
              <h4 className="text-white font-semibold text-base mt-1">Interstellar (2014) · 4K HDR Atmos</h4>
              <p className="text-xs text-slate-400">Metadados oficiais baixados automaticamente · Sem precisar de Plex ou Jellyfin</p>
            </div>

            <button
              onClick={() => { soundFx.playChirp(); setIsPlaying(!isPlaying); }}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/30"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isPlaying ? 'Pausar Transmissão' : 'Testar Streaming na TV'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { label: 'Smart TVs conectadas', val: '2 dispositivos' },
              { label: 'Formato de áudio', val: 'Direct Play 5.1' },
              { label: 'Uso de CPU', val: '< 3%' },
              { label: 'Nuvem utilizada', val: '0% (Local Puro)' }
            ].map((stat, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-[10px] uppercase font-mono text-slate-400">{stat.label}</span>
                <p className="text-sm font-semibold text-cyan-200 mt-0.5">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'faces' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold text-sm">Cluster de Faces Detectadas Localmente</h4>
              <p className="text-xs text-slate-400 mt-0.5">Nenhum pixel é enviado para o Google ou Apple. O modelo roda na sua GPU/CPU.</p>
            </div>
            <button
              onClick={triggerScan}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-medium transition-all"
            >
              {scanStatus === 'scanning' ? 'Processando embeddings...' : 'Escanear Nova Pasta'}
            </button>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {[
              { name: 'Você (Pai)', photos: 412, color: 'border-cyan-400' },
              { name: 'Helena (Filha)', photos: 289, color: 'border-emerald-400' },
              { name: 'Lucas (Irmão)', photos: 154, color: 'border-purple-400' },
              { name: 'Rex (Pet)', photos: 98, color: 'border-amber-400' },
              { name: 'Mãe', photos: 320, color: 'border-pink-400' },
              { name: 'Amigos Viagem', photos: 215, color: 'border-blue-400' },
            ].map((person, i) => (
              <div key={i} className={`p-3 rounded-xl bg-slate-900/70 border ${person.color}/40 text-center flex flex-col items-center`}>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white mb-2">
                  {person.name[0]}
                </div>
                <span className="text-xs font-semibold text-white truncate max-w-full">{person.name}</span>
                <span className="text-[10px] text-slate-400 mt-0.5 font-mono">{person.photos} fotos</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'docs' && (
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
            {[
              { doc: 'boleto_condominio_outubro.pdf', cat: 'Financeiro / Moradia', action: 'Renomeado para 2026-10_Condominio_Pago.pdf' },
              { doc: 'nota_fiscal_placa_de_video.xml', cat: 'Fiscal / Garantias', action: 'Indexado com data de validade de 2 anos' },
              { doc: 'contrato_locacao_assinado.pdf', cat: 'Jurídico', action: 'Movido para ~/Documentos/Contratos/' }
            ].map((file, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-black/20 text-xs gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-mono text-slate-200">{file.doc}</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[10px] font-medium">{file.cat}</span>
                </div>
                <span className="text-[11px] text-slate-400">{file.action}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-5 pt-4 border-t border-cyan-500/20 flex items-center justify-between text-xs text-cyan-300/80 font-mono">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Soberania Absoluta: 0 solicitações HTTP externas efetuadas.</span>
        </div>
        <span className="text-slate-400 text-[11px]">Download .exe / .zip disponível</span>
      </div>
    </div>
  );
};
