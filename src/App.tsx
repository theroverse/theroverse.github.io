/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CosmicNavbar } from './components/CosmicNavbar';
import { CosmicWarpTransition } from './components/CosmicWarpTransition';
import { CosmicPortalHub } from './components/CosmicPortalHub';
import { LandingPageLayout } from './components/landing/LandingPageLayout';
import { Header } from './components/Header';
import { IconGrid } from './components/IconGrid';
import { UniverseMap } from './components/UniverseMap';
import { ContextShowcase } from './components/ContextShowcase';
import { ColorGuidelines } from './components/ColorGuidelines';
import { ToolDetailModal } from './components/ToolDetailModal';
import { ActiveView, ToolId, EcosystemTool, IconVariant } from './types';
import { ECOSYSTEM_TOOLS } from './data/ecosystem';
import { soundFx } from './utils/audio';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <TheroverseAppContent />
    </LanguageProvider>
  );
}

function TheroverseAppContent() {
  const { t } = useLanguage();
  const [activeView, setActiveView] = useState<ActiveView>('portal-hub');
  const [isWarping, setIsWarping] = useState(false);
  const [warpTargetView, setWarpTargetView] = useState<ActiveView>('portal-hub');

  // Sub-tabs for the icons vault mode
  const [iconTab, setIconTab] = useState<'grid' | 'universe' | 'contexts' | 'guidelines'>('grid');
  const [variant, setVariant] = useState<IconVariant>('app');
  const [showWireframe, setShowWireframe] = useState<boolean>(false);
  const [selectedTool, setSelectedTool] = useState<EcosystemTool | null>(null);

  const handleNavigate = (nextView: ActiveView) => {
    if (nextView === activeView) return;

    setWarpTargetView(nextView);
    setIsWarping(true);
    soundFx.playWarp();

    setTimeout(() => {
      setActiveView(nextView);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 380);

    setTimeout(() => {
      setIsWarping(false);
    }, 750);
  };

  const handleSelectToolFromPortal = (toolId: ToolId) => {
    handleNavigate(toolId);
  };

  const currentTool = ECOSYSTEM_TOOLS.find(t => t.id === activeView);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300 font-sans">
      {/* Hyperspace / Warp Tunnel Overlay */}
      <CosmicWarpTransition
        isWarping={isWarping}
        targetToolId={warpTargetView}
      />

      {/* Top Cosmic Navigation HUD */}
      <CosmicNavbar
        activeView={activeView}
        onNavigate={handleNavigate}
      />

      {/* VIEW 1: Main Cosmic Portal Hub */}
      {activeView === 'portal-hub' && (
        <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <CosmicPortalHub
            onSelectTool={handleSelectToolFromPortal}
            onGoToIcons={() => handleNavigate('icons-vault')}
          />
        </main>
      )}

      {/* VIEW 2-6: Individual Planetary Landing Pages */}
      {currentTool && (
        <main className="flex-1 w-full">
          <LandingPageLayout
            tool={currentTool}
            onNavigateToTool={(nextId) => handleNavigate(nextId)}
          />
        </main>
      )}

      {/* VIEW 7: Icons Vault & Visual Specs (Preserving Full Prior Functionality) */}
      {activeView === 'icons-vault' && (
        <div className="flex-1 flex flex-col">
          <Header
            activeTab={iconTab}
            setActiveTab={setIconTab}
            variant={variant}
            setVariant={setVariant}
            showWireframe={showWireframe}
            setShowWireframe={setShowWireframe}
          />

          <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
            {iconTab === 'grid' && (
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      Acervo de Ícones Vetoriais do Ecossistema
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      Clique em qualquer cartão para inspecionar a geometria, alternar fundos ou exportar em SVG/PNG
                    </p>
                  </div>
                </div>

                <IconGrid
                  variant={variant}
                  showWireframe={showWireframe}
                  onSelectTool={setSelectedTool}
                />
              </section>
            )}

            {iconTab === 'universe' && (
              <section className="space-y-6">
                <UniverseMap onSelectTool={setSelectedTool} />
              </section>
            )}

            {iconTab === 'contexts' && (
              <section className="space-y-6">
                <ContextShowcase />
              </section>
            )}

            {iconTab === 'guidelines' && (
              <section className="space-y-6">
                <ColorGuidelines />
              </section>
            )}
          </main>

          {/* Modal Inspector for Icons */}
          <ToolDetailModal
            tool={selectedTool}
            onClose={() => setSelectedTool(null)}
          />
        </div>
      )}
    </div>
  );
}
