import React from 'react';
import { IconVariant } from '../../types';

interface TheroverseIconProps {
  size?: number;
  variant?: IconVariant;
  className?: string;
  showWireframe?: boolean;
}

export const TheroverseIcon: React.FC<TheroverseIconProps> = ({
  size = 64,
  variant = 'app',
  className = '',
  showWireframe = false,
}) => {
  // Color palette: Fusion of stellar sun (gold/amber) and spiral galaxy (cyan/neon magenta/purple)
  const sunCore = '#f59e0b'; // Amber sun
  const solarRay = '#fbbf24'; // Golden corona
  const galaxyArm1 = '#06b6d4'; // Cyan spiral arm
  const galaxyArm2 = '#a855f7'; // Purple galaxy dust
  const solarPulse = '#f43f5e'; // Rose flare

  const renderGlyph = () => (
    <g id="theroverse-galaxy-sun-glyph">
      {/* 1. Celestial Outer Calibration Ring / Orbit Horizon */}
      <circle
        cx="32"
        cy="32"
        r="27"
        fill="none"
        stroke={galaxyArm1}
        strokeWidth="1.2"
        strokeDasharray="2 4"
        strokeOpacity="0.4"
      />

      {/* 2. Tilted Elliptical Galactic Disk Plane */}
      <ellipse
        cx="32"
        cy="32"
        rx="25"
        ry="11"
        transform="rotate(-28 32 32)"
        fill="none"
        stroke={galaxyArm2}
        strokeWidth="1.5"
        strokeOpacity="0.35"
      />

      {/* 3. Solar Corona Radiant Rays (Sun / Pulsar Spikes) */}
      {/* Cardinal vertical & horizontal rays */}
      <line x1="32" y1="6" x2="32" y2="12" stroke={solarRay} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="52" x2="32" y2="58" stroke={solarRay} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6" y1="32" x2="12" y2="32" stroke={solarRay} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="52" y1="32" x2="58" y2="32" stroke={solarRay} strokeWidth="2.5" strokeLinecap="round" />

      {/* Diagonal solar rays */}
      <line x1="14" y1="14" x2="18" y2="18" stroke={sunCore} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.75" />
      <line x1="50" y1="14" x2="46" y2="18" stroke={solarPulse} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.75" />
      <line x1="14" y1="50" x2="18" y2="46" stroke={galaxyArm1} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.75" />
      <line x1="50" y1="50" x2="46" y2="46" stroke={galaxyArm2} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.75" />

      {/* 4. Spiral Galaxy Swirling Arms (Logarithmic swirls radiating from core) */}
      {/* Arm 1: Top-Right clockwise outward swirl */}
      <path
        d="M32 25 C39 24 47 28 49 36 C50 42 45 49 37 50 C29 51 21 46 19 38"
        fill="none"
        stroke="url(#theroverse-arm-cyan)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Arm 2: Bottom-Left counter-swirl */}
      <path
        d="M32 39 C25 40 17 36 15 28 C14 22 19 15 27 14 C35 13 43 18 45 26"
        fill="none"
        stroke="url(#theroverse-arm-purple)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Arm 3: Coronal Flare Arc (Rose/Gold accent) */}
      <path
        d="M24 32 C23 23 33 19 39 21 C45 23 48 30 45 36"
        fill="none"
        stroke={solarPulse}
        strokeWidth="1.8"
        strokeDasharray="4 2"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />

      {/* 5. Central Sun & Singularity Core */}
      {/* Sun Outer Radiant Atmosphere */}
      <circle
        cx="32"
        cy="32"
        r="11"
        fill="url(#theroverse-sun-glow)"
        fillOpacity={variant === 'line' ? 0 : 0.85}
        stroke={sunCore}
        strokeWidth="2.2"
      />

      {/* Sun Inner Burning Core (Golden Star) */}
      <circle
        cx="32"
        cy="32"
        r="5.5"
        fill={variant === 'line' ? 'none' : '#ffffff'}
        stroke={solarRay}
        strokeWidth="2"
      />

      {/* Singularity focal center point */}
      <circle cx="32" cy="32" r="2" fill={solarPulse} />

      {/* 6. Orbital Star Clusters & Constellation Sparks */}
      <circle cx="49" cy="20" r="1.8" fill={solarRay} />
      <circle cx="15" cy="44" r="1.8" fill={galaxyArm1} />
      <circle cx="48" cy="44" r="2.2" fill={galaxyArm2} />
      <circle cx="16" cy="20" r="2.2" fill={solarPulse} />
      <circle cx="32" cy="18" r="1.4" fill="#ffffff" />
      <circle cx="32" cy="46" r="1.4" fill="#ffffff" />
    </g>
  );

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Gradients for galaxy arms & central sun */}
          <linearGradient id="theroverse-arm-cyan" x1="20" y1="20" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          <linearGradient id="theroverse-arm-purple" x1="45" y1="15" x2="15" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          <radialGradient id="theroverse-sun-glow" cx="32" cy="32" r="11" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#fbbf24" />
            <stop offset="85%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#e11d48" stopOpacity="0.8" />
          </radialGradient>

          <radialGradient id="theroverse-bg-radial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#0b0f19" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#050811" />
          </radialGradient>

          <linearGradient id="theroverse-bg-border" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Squircle container background for 'app' variant */}
        {variant === 'app' && (
          <>
            <rect
              x="2"
              y="2"
              width="60"
              height="60"
              rx="15"
              fill="url(#theroverse-bg-radial)"
              stroke="url(#theroverse-bg-border)"
              strokeWidth="1.5"
            />
            {/* Subtle internal atmospheric galaxy dust */}
            <circle cx="32" cy="32" r="22" fill="#a855f7" fillOpacity="0.08" filter="blur(4px)" />
            <circle cx="32" cy="32" r="12" fill="#f59e0b" fillOpacity="0.15" filter="blur(2px)" />
          </>
        )}

        {/* Wireframe helper overlay if requested */}
        {showWireframe && (
          <g opacity="0.3">
            <rect x="2" y="2" width="60" height="60" stroke="#00d2ff" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
            <line x1="32" y1="0" x2="32" y2="64" stroke="#00d2ff" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="0" y1="32" x2="64" y2="32" stroke="#00d2ff" strokeWidth="0.5" strokeDasharray="1 1" />
            <circle cx="32" cy="32" r="24" stroke="#00d2ff" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
          </g>
        )}

        {renderGlyph()}
      </svg>
    </div>
  );
};
