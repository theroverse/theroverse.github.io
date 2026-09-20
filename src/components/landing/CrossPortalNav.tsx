import React from 'react';
import { ArrowRight, Globe, Navigation, UserCheck } from 'lucide-react';
import { ToolId, EcosystemTool } from '../../types';
import { ECOSYSTEM_TOOLS } from '../../data/ecosystem';
import { AppIcon } from '../icons/AppIcon';
import { soundFx } from '../../utils/audio';
import { useLanguage } from '../../context/LanguageContext';

interface CrossPortalNavProps {
  currentToolId: ToolId;
  onJumpToTool: (toolId: ToolId) => void;
}

export const CrossPortalNav: React.FC<CrossPortalNavProps> = ({
  currentToolId,
  onJumpToTool
}) => {
  const { language, t } = useLanguage();
  const currentTool = ECOSYSTEM_TOOLS.find(t => t.id === currentToolId);
  const otherTools = ECOSYSTEM_TOOLS.filter(t => t.id !== currentToolId);

  const getRoleIcon = (role: EcosystemTool['role']) => {
    switch (role) {
      case 'planeta': return <Globe className="w-3.5 h-3.5" />;
      case 'nave': return <Navigation className="w-3.5 h-3.5" />;
      case 'habitante': return <UserCheck className="w-3.5 h-3.5" />;
    }
  };

  const isPt = language === 'pt';

  return (
    <section className="mt-20 pt-16 border-t border-white/10 relative">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{isPt ? 'Rede Estelar Conectada · THEROVERSE' : 'Connected Stellar Network · THEROVERSE'}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {isPt ? 'Portais de Viagem para o Restante do Ecossistema' : 'Travel Portals to the Rest of the Ecosystem'}
        </h2>
        <p className="text-sm text-slate-400 mt-2 font-light">
          {isPt
            ? 'Nenhuma ferramenta vive isolada no vácuo. Escolha o próximo planeta ou habitante e salte pelo portal.'
            : 'No tool lives in an isolated vacuum. Select the next planet or resident and jump through the portal.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {otherTools.map(tool => {
          const localized = t.toolData[tool.id];
          const relationshipPitch = currentTool?.landing.portalPitch[tool.id] || localized?.tagline || tool.tagline;

          return (
            <div
              key={tool.id}
              onClick={() => {
                soundFx.playWarp();
                onJumpToTool(tool.id);
              }}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/80 flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl p-1 bg-black/50 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <AppIcon toolId={tool.id} size={30} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/5 text-slate-300 border border-white/10">
                    {getRoleIcon(tool.role)}
                    <span>{t.hub.roles[tool.role]}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.2 rounded bg-black/40">
                    {tool.id === 'nexo' ? 'Freeware' : 'Open-Source'}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {localized?.tagline || tool.tagline}
                </p>

                <div className="mt-3 p-2.5 rounded-lg bg-black/30 border border-white/5 text-[11px] text-slate-300 leading-snug">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase font-mono mb-0.5">
                    {isPt ? 'Conexão Cósmica:' : 'Cosmic Link:'}
                  </span>
                  {relationshipPitch}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
                <span>{isPt ? 'Salto Hiperespaço' : 'Hyperspace Jump'}</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
