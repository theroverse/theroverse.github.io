import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ToolId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ECOSYSTEM_TOOLS } from '../data/ecosystem';

interface CosmicWarpTransitionProps {
  isWarping: boolean;
  targetToolId: ToolId | 'portal-hub' | 'icons-vault' | null;
  targetName?: string;
}

export const CosmicWarpTransition: React.FC<CosmicWarpTransitionProps> = ({
  isWarping,
  targetToolId,
  targetName
}) => {
  const { t } = useLanguage();
  const [stars, setStars] = useState<{ id: number; angle: number; speed: number; length: number }[]>([]);

  useEffect(() => {
    if (isWarping) {
      // Generate radial hyperspace streaks
      const newStars = Array.from({ length: 48 }, (_, i) => ({
        id: i,
        angle: (i / 48) * 360,
        speed: 0.3 + Math.random() * 0.4,
        length: 40 + Math.random() * 120
      }));
      setStars(newStars);
    }
  }, [isWarping]);

  let destination = targetName;
  if (targetToolId === 'portal-hub') {
    destination = t.warp.portalHub;
  } else if (targetToolId === 'icons-vault') {
    destination = t.warp.iconsVault;
  } else if (targetToolId) {
    const found = ECOSYSTEM_TOOLS.find(tl => tl.id === targetToolId);
    if (found) destination = found.name;
  }
  if (!destination) {
    destination = targetName || t.warp.portalHub;
  }

  return (
    <AnimatePresence>
      {isWarping && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-[#070b14]/90 backdrop-blur-md overflow-hidden"
        >
          {/* Radial light streaks */}
          <div className="absolute inset-0 flex items-center justify-center">
            {stars.map(star => (
              <motion.div
                key={star.id}
                initial={{ scaleX: 0.1, opacity: 0.2, translateX: 0 }}
                animate={{
                  scaleX: [0.1, 4, 8],
                  opacity: [0.2, 1, 0],
                  translateX: [0, 400, 900]
                }}
                transition={{ duration: 0.7, ease: 'easeIn' }}
                style={{
                  transformOrigin: 'left center',
                  transform: `rotate(${star.angle}deg)`
                }}
                className="absolute w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-white rounded-full blur-[0.5px]"
              />
            ))}
          </div>

          {/* Central Warp Pulse Ring */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0.8 }}
            animate={{ scale: [0.2, 2.5, 6], opacity: [0.9, 0.4, 0] }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="w-48 h-48 rounded-full border-2 border-cyan-400/80 shadow-[0_0_80px_rgba(0,210,255,0.6)]"
          />

          {/* Telemetry text */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 text-center px-6 py-4 rounded-2xl bg-black/60 border border-cyan-500/30 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex items-center justify-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>{t.warp.thrusters}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-tight text-white">
              {t.warp.jumpingTo} {destination.toUpperCase()}
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-1">
              {t.warp.syncing}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
