import React, { useState } from 'react';
import { Target, Zap, FileCode2, Copy, Check, AlertTriangle, ArrowRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

const SAMPLE_TASKS = [
  { id: 'auth', label: 'Adicionar Login com Google OAuth e persistir no Postgres' },
  { id: 'query', label: 'Otimizar consulta N+1 na listagem de pedidos' },
  { id: 'leak', label: 'Corrigir memory leak no WebSocket de notificações' }
];

const PLANS_BY_TASK: Record<string, string> = {
  auth: `# Plano Tático do Zeus: Login com Google OAuth
Data: 2026-09-19 · Status: AGUARDANDO_APROVACAO_HUMANA

## 1. Objetivo
Implementar fluxo de autenticação OAuth 2.0 via Google Identity Services, criando usuário caso não exista e gerando sessão via cookie HTTP-only assinado.

## 2. Arquivos Selecionados (Cirúrgico · 3 arquivos)
- \`src/auth/oauth.ts\` (Novo: troca de authorization code por tokens com Google API)
- \`src/routes/auth.routes.ts\` (Adicionar endpoints \`/api/auth/google\` e \`/api/auth/google/callback\`)
- \`src/db/schema.ts\` (Adicionar coluna \`google_id\` nullable com índice único na tabela \`users\`)

## 3. Passo a Passo
1. Executar migração incremental no schema sem quebrar logins de e-mail/senha legados.
2. Criar client seguro em \`src/auth/oauth.ts\` consumindo variáveis GOOGLE_CLIENT_ID e SECRET.
3. Testar rota de callback garantindo redirecionamento com cookie SameSite=Lax.
4. Escrever teste automatizado mockando a resposta do Google.

## 4. Riscos Mapeados
- ALERTA: Se o usuário já tiver conta com mesmo e-mail, vincular \`google_id\` sem sobrescrever o hash de senha.
- NÃO ALTERAR o middleware de sessão existente (\`src/auth/session.ts\`).`,

  query: `# Plano Tático do Zeus: Otimizar Consulta N+1 em Pedidos
Data: 2026-09-19 · Status: AGUARDANDO_APROVACAO_HUMANA

## 1. Objetivo
Eliminar a cascata de 1 + N queries SQL disparadas ao listar pedidos com seus respectivos itens e clientes associados.

## 2. Arquivos Selecionados (Cirúrgico · 2 arquivos)
- \`src/repositories/orders.repository.ts\` (Substituir loop de busca por \`JOIN\` ou \`DataLoader\`)
- \`src/controllers/orders.controller.ts\` (Ajustar tipagem do DTO retornado)

## 3. Passo a Passo
1. Criar consulta com \`json_agg\` ou eager loading estruturado na única chamada ao banco.
2. Medir tempo de resposta antes e depois em benchmark local.
3. Manter o contrato de payload JSON da API 100% idêntico para não quebrar o frontend.

## 4. Riscos Mapeados
- Atenção para paginação: queries com \`JOIN\` e \`LIMIT\` podem truncar contagem incorreta se houver muitos itens por pedido. Use subselect indexado.`,

  leak: `# Plano Tático do Zeus: Corrigir Memory Leak no WebSocket
Data: 2026-09-19 · Status: AGUARDANDO_APROVACAO_HUMANA

## 1. Objetivo
Garantir que desconexões de clientes limpem os event listeners registrados no EventEmitter central, impedindo acúmulo contínuo de RAM no servidor.

## 2. Arquivos Selecionados (Cirúrgico · 1 arquivo)
- \`src/realtime/socketManager.ts\` (Gerenciamento de conexões e cleanup no evento 'close')

## 3. Passo a Passo
1. Mapear cada socket ID para seu handler de evento específico.
2. No evento \`socket.on('close')\`, chamar explicitamente \`emitter.removeListener(handler)\`.
3. Injetar healthcheck expondo \`process.memoryUsage().heapUsed\`.

## 4. Riscos Mapeados
- Garantir que mensagens pendentes na fila sejam descartadas ou salvas sem travar o event loop.`
};

export const ZeusSimulator: React.FC = () => {
  const [selectedTaskKey, setSelectedTaskKey] = useState<string>('auth');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSelectTask = (key: string) => {
    soundFx.playClick();
    setIsGenerating(true);
    setSelectedTaskKey(key);
    setTimeout(() => {
      soundFx.playChirp();
      setIsGenerating(false);
    }, 450);
  };

  const copyPlan = () => {
    soundFx.playChirp();
    navigator.clipboard.writeText(PLANS_BY_TASK[selectedTaskKey] || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-yellow-500/20 bg-[#1c1505]/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-yellow-600/10 blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-yellow-500/20 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center p-1.5 rounded-md bg-yellow-500/20 text-yellow-300">
              <Zap className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono tracking-widest text-yellow-400 uppercase font-semibold">
              Simulador do Oráculo Estrategista
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">
            Geração Tática de Plano (.claude/zeus-plan.md)
          </h3>
          <p className="text-sm text-slate-400">
            Escolha uma tarefa e veja o Zeus isolar cirurgicamente os arquivos e riscos antes do código.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyPlan}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 border border-yellow-500/30 text-xs font-mono transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Plano Copiado!' : 'Copiar Plano'}</span>
          </button>
        </div>
      </div>

      {/* Preset task buttons */}
      <div className="flex flex-col sm:flex-row gap-2 mb-5">
        {SAMPLE_TASKS.map(task => (
          <button
            key={task.id}
            onClick={() => handleSelectTask(task.id)}
            className={`flex-1 p-2.5 rounded-xl text-xs font-medium text-left transition-all border ${
              selectedTaskKey === task.id
                ? 'bg-yellow-500/20 text-yellow-200 border-yellow-500/50 shadow-md shadow-yellow-500/10'
                : 'bg-white/5 text-slate-400 hover:text-white border-transparent'
            }`}
          >
            <div className="flex items-center gap-2">
              <Target className={`w-3.5 h-3.5 shrink-0 ${selectedTaskKey === task.id ? 'text-yellow-400' : 'text-slate-500'}`} />
              <span className="truncate">{task.label}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Generated Markdown Preview */}
      <div className="rounded-xl border border-yellow-500/30 bg-[#0c0902] p-4 md:p-5 font-mono text-xs shadow-inner">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400 text-[11px]">
          <div className="flex items-center gap-2">
            <FileCode2 className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-yellow-200 font-semibold">.claude/zeus-plan.md</span>
          </div>
          <span className="text-[10px] text-yellow-400 uppercase">
            {isGenerating ? 'Calculando Coordenadas...' : 'Plano Pronto para Auditoria'}
          </span>
        </div>

        <pre className="text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-72 overflow-y-auto pr-2 custom-scrollbar">
          {PLANS_BY_TASK[selectedTaskKey]}
        </pre>

        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5 text-amber-300">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Nenhum código é modificado até você aprovar o plano explicitamente.</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-yellow-400 font-mono text-[10px]">
            <span>Oráculo alimentado pela Athena</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
