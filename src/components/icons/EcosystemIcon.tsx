import React from 'react';
import { IconVariant } from '../../types';
import { ECOSYSTEM_TOOLS } from '../../data/ecosystem';

interface EcosystemIconProps {
  id: 'nexo' | 'thero' | 'athena' | 'zeus' | 'genesis';
  variant?: IconVariant;
  size?: number;
  className?: string;
  showWireframe?: boolean;
  colorOverride?: string;
}

export const EcosystemIcon: React.FC<EcosystemIconProps> = ({
  id,
  variant = 'app',
  size = 64,
  className = '',
  showWireframe = false,
  colorOverride,
}) => {
  const tool = ECOSYSTEM_TOOLS.find((t) => t.id === id) || ECOSYSTEM_TOOLS[0];
  const primaryColor = colorOverride || tool.colors.primary;
  const secondaryColor = tool.colors.secondary;
  const accentColor = tool.colors.accent;

  // Render the unique vector glyph paths for each tool
  const renderGlyph = () => {
    switch (id) {
      case 'nexo':
        return (
          <g id={`glyph-${id}`}>
            {/* Nexo: O Planeta / Hub de Dados Local */}
            {/* Soft orbital back arc */}
            <ellipse
              cx="32"
              cy="32"
              rx="25"
              ry="10.5"
              transform="rotate(-26 32 32)"
              fill="none"
              stroke={primaryColor}
              strokeWidth="2.5"
              strokeDasharray="4 2"
              strokeOpacity="0.45"
            />
            {/* Core Planet Sphere */}
            <circle
              cx="32"
              cy="32"
              r="12.5"
              fill={variant === 'line' ? 'none' : primaryColor}
              fillOpacity={variant === 'line' ? 0 : 0.16}
              stroke={primaryColor}
              strokeWidth="3.25"
            />
            {/* Internal data flow equator / core ring */}
            <path
              d="M21 32 C21 27 43 27 43 32 C43 37 21 37 21 32"
              fill="none"
              stroke={accentColor}
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeOpacity="0.85"
            />
            {/* Foreground Solid Orbit Section */}
            <path
              d="M10 39 C14 45 32 46 45 40"
              fill="none"
              stroke={primaryColor}
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Data nodes on orbit */}
            <circle cx="12" cy="24" r="2.5" fill={primaryColor} />
            <circle cx="51" cy="40" r="2.5" fill={accentColor} />
            <circle cx="47" cy="20" r="2" fill={secondaryColor} />
            <circle cx="17" cy="44" r="2" fill={secondaryColor} />
            {/* Cardinal calibration ticks */}
            <path
              d="M32 6 V10 M32 54 V58 M6 32 H10 M54 32 H58"
              stroke={primaryColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeOpacity="0.4"
            />
          </g>
        );

      case 'genesis':
        return (
          <g id={`glyph-${id}`}>
            {/* Genesis: O Berço / Planeta-Matriz / Big Bang */}
            {/* Outer Octahedron / Diamond Boundary */}
            <path
              d="M32 7 L57 32 L32 57 L7 32 Z"
              fill={variant === 'line' ? 'none' : primaryColor}
              fillOpacity={variant === 'line' ? 0 : 0.12}
              stroke={primaryColor}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            {/* Quadrant Partition Guides (The 4 setup pillars) */}
            <path
              d="M32 14 V50 M14 32 H50"
              stroke={accentColor}
              strokeWidth="1.5"
              strokeDasharray="3 3"
              strokeOpacity="0.55"
            />
            {/* The Primordial Creation Spark (4-point star) */}
            <path
              d="M32 18 Q32 32 46 32 Q32 32 32 46 Q32 32 18 32 Q32 32 32 18 Z"
              fill={variant === 'line' ? 'none' : primaryColor}
              fillOpacity={variant === 'line' ? 0 : 0.3}
              stroke={primaryColor}
              strokeWidth="2.75"
              strokeLinejoin="round"
            />
            {/* Corner Node Seeds */}
            <circle cx="32" cy="7" r="2.5" fill={primaryColor} />
            <circle cx="57" cy="32" r="2.5" fill={primaryColor} />
            <circle cx="32" cy="57" r="2.5" fill={primaryColor} />
            <circle cx="7" cy="32" r="2.5" fill={primaryColor} />
            {/* Central ignition spark dot */}
            <circle cx="32" cy="32" r="2.5" fill={accentColor} />
          </g>
        );

      case 'athena':
        return (
          <g id={`glyph-${id}`}>
            {/* Athena: A Nave Cartógrafa / Exploradora Neural */}
            {/* Forward Radar Pulse sweeping ahead */}
            <path
              d="M20 17 A 19 19 0 0 1 44 17"
              fill="none"
              stroke={accentColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 3"
              strokeOpacity="0.8"
            />
            {/* Scout Craft Chevron Body */}
            <path
              d="M32 9 L52 43 L32 35 L12 43 Z"
              fill={variant === 'line' ? 'none' : primaryColor}
              fillOpacity={variant === 'line' ? 0 : 0.16}
              stroke={primaryColor}
              strokeWidth="3.25"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* Center Spine Waveguide */}
            <path
              d="M32 16 V35"
              stroke={accentColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Recursive Tree Index Bottom Nodes */}
            <circle cx="20" cy="53" r="2.5" fill={secondaryColor} />
            <circle cx="32" cy="53" r="2.5" fill={primaryColor} />
            <circle cx="44" cy="53" r="2.5" fill={secondaryColor} />
            {/* Bottom-Up Synthesis Branch Lines */}
            <path
              d="M20 50 L28 41 M32 50 V41 M44 50 L36 41"
              stroke={primaryColor}
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />
          </g>
        );

      case 'zeus':
        return (
          <g id={`glyph-${id}`}>
            {/* Zeus: O Habitante Estrategista / Raio de Decisão */}
            {/* Tactical Coordinate Brackets (The precise targeting scope) */}
            <path
              d="M24 10 H20 A 4 4 0 0 0 16 14 V18"
              fill="none"
              stroke={primaryColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeOpacity="0.6"
            />
            <path
              d="M40 10 H44 A 4 4 0 0 1 48 14 V18"
              fill="none"
              stroke={primaryColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeOpacity="0.6"
            />
            <path
              d="M48 46 V50 A 4 4 0 0 1 44 54 H40"
              fill="none"
              stroke={primaryColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeOpacity="0.6"
            />
            <path
              d="M16 46 V50 A 4 4 0 0 0 20 54 H24"
              fill="none"
              stroke={primaryColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeOpacity="0.6"
            />
            {/* The Decisive Lightning Bolt / Z Glyph */}
            <path
              d="M37 11 L22 32 H33 L26 53 L45 28 H33 Z"
              fill={variant === 'line' ? 'none' : primaryColor}
              fillOpacity={variant === 'line' ? 0 : 0.22}
              stroke={primaryColor}
              strokeWidth="3.25"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* Precision Crosshair Center & Ticks */}
            <path
              d="M32 5 V8 M32 56 V59 M5 32 H8 M56 32 H59"
              stroke={accentColor}
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeOpacity="0.5"
            />
          </g>
        );

      case 'thero':
        return (
          <g id={`glyph-${id}`}>
            {/* Thero: O Habitante Comandante / Visor HUD & T Arquitetural */}
            {/* Commander Helmet & Headgear Silhouette */}
            <path
              d="M15 27 C15 16.5 22.6 8 32 8 C41.4 8 49 16.5 49 27 C49 37.5 42 49 32 56 C22 49 15 37.5 15 27 Z"
              fill={variant === 'line' ? 'none' : primaryColor}
              fillOpacity={variant === 'line' ? 0 : 0.12}
              stroke={primaryColor}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            {/* Architectural 'T' Visor Beam */}
            <path
              d="M20 26 H44"
              stroke={accentColor}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M32 26 V44"
              stroke={accentColor}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Central Pilot Calibrated Eye / Focus Core */}
            <circle
              cx="32"
              cy="26"
              r="3.5"
              fill="#0B0F17"
              stroke={primaryColor}
              strokeWidth="2.5"
            />
            {/* HUD Lateral Telemetry Ticks */}
            <path
              d="M22 36 H26 M38 36 H42"
              stroke={primaryColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />
          </g>
        );
    }
  };

  return (
    <svg
      id={`icon-${id}-${variant}`}
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`shrink-0 select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Subtle radial glow background for App Tile variant */}
        <radialGradient
          id={`bg-glow-${id}`}
          cx="50%"
          cy="35%"
          r="65%"
          fx="50%"
          fy="30%"
        >
          <stop offset="0%" stopColor={tool.colors.primary} stopOpacity="0.18" />
          <stop offset="70%" stopColor="#0f1422" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#080c14" stopOpacity="1" />
        </radialGradient>

        <linearGradient
          id={`border-grad-${id}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={tool.colors.accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={tool.colors.primary} stopOpacity="0.12" />
        </linearGradient>

        {/* Drop shadow filter for subtle elevation */}
        <filter id={`shadow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor={tool.colors.glow} floodOpacity="0.35" />
        </filter>
      </defs>

      {/* App Tile Squircle Plate */}
      {variant === 'app' && (
        <g id={`plate-${id}`}>
          {/* Base plate */}
          <rect
            x="2"
            y="2"
            width="60"
            height="60"
            rx="14"
            fill={`url(#bg-glow-${id})`}
            stroke={`url(#border-grad-${id})`}
            strokeWidth="1.25"
          />
          {/* Inner subtle rim highlight */}
          <rect
            x="3"
            y="3"
            width="58"
            height="58"
            rx="13"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        </g>
      )}

      {/* Wireframe construction grid & geometry overlay */}
      {showWireframe && (
        <g id={`wireframe-${id}`} opacity="0.45" stroke="#ffffff" strokeWidth="0.5">
          {/* Outer bounds & center axes */}
          <rect x="2" y="2" width="60" height="60" rx="14" fill="none" strokeDasharray="2 2" />
          <line x1="32" y1="0" x2="32" y2="64" stroke="#38bdf8" strokeDasharray="1 2" />
          <line x1="0" y1="32" x2="64" y2="32" stroke="#38bdf8" strokeDasharray="1 2" />
          {/* Concentric construction circles */}
          <circle cx="32" cy="32" r="14" fill="none" strokeDasharray="2 2" />
          <circle cx="32" cy="32" r="24" fill="none" strokeDasharray="2 2" />
          <circle cx="32" cy="32" r="29" fill="none" stroke="#e2e8f0" strokeDasharray="1 3" />
          {/* Diagonal 45° guides */}
          <line x1="4" y1="4" x2="60" y2="60" stroke="#a855f7" strokeDasharray="1 3" />
          <line x1="60" y1="4" x2="4" y2="60" stroke="#a855f7" strokeDasharray="1 3" />
        </g>
      )}

      {/* Render the core icon glyph */}
      {renderGlyph()}
    </svg>
  );
};
