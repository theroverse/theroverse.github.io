import { EcosystemTool, IconVariant } from '../types';

export function getCleanSvgString(tool: EcosystemTool, variant: IconVariant = 'app', size: number = 64): string {
  const primary = tool.colors.primary;
  const secondary = tool.colors.secondary;
  const accent = tool.colors.accent;

  let glyphContent = '';
  switch (tool.id) {
    case 'nexo':
      glyphContent = `
    <!-- Nexo: O Planeta dos Dados & Hub de Mídia Local -->
    <ellipse cx="32" cy="32" rx="25" ry="10.5" transform="rotate(-26 32 32)" fill="none" stroke="${primary}" stroke-width="2.5" stroke-dasharray="4 2" stroke-opacity="0.45" />
    <circle cx="32" cy="32" r="12.5" fill="${variant === 'line' ? 'none' : primary}" fill-opacity="${variant === 'line' ? 0 : 0.16}" stroke="${primary}" stroke-width="3.25" />
    <path d="M21 32 C21 27 43 27 43 32 C43 37 21 37 21 32" fill="none" stroke="${accent}" stroke-width="1.75" stroke-linecap="round" stroke-opacity="0.85" />
    <path d="M10 39 C14 45 32 46 45 40" fill="none" stroke="${primary}" stroke-width="3" stroke-linecap="round" />
    <circle cx="12" cy="24" r="2.5" fill="${primary}" />
    <circle cx="51" cy="40" r="2.5" fill="${accent}" />
    <circle cx="47" cy="20" r="2" fill="${secondary}" />
    <circle cx="17" cy="44" r="2" fill="${secondary}" />
    <path d="M32 6 V10 M32 54 V58 M6 32 H10 M54 32 H58" stroke="${primary}" stroke-width="1.5" stroke-linecap="round" stroke-opacity="0.4" />`;
      break;

    case 'genesis':
      glyphContent = `
    <!-- Genesis: O Berço da Criação & Matriz do Universo -->
    <path d="M32 7 L57 32 L32 57 L7 32 Z" fill="${variant === 'line' ? 'none' : primary}" fill-opacity="${variant === 'line' ? 0 : 0.12}" stroke="${primary}" stroke-width="3" stroke-linejoin="round" />
    <path d="M32 14 V50 M14 32 H50" stroke="${accent}" stroke-width="1.5" stroke-dasharray="3 3" stroke-opacity="0.55" />
    <path d="M32 18 Q32 32 46 32 Q32 32 32 46 Q32 32 18 32 Q32 32 32 18 Z" fill="${variant === 'line' ? 'none' : primary}" fill-opacity="${variant === 'line' ? 0 : 0.3}" stroke="${primary}" stroke-width="2.75" stroke-linejoin="round" />
    <circle cx="32" cy="7" r="2.5" fill="${primary}" />
    <circle cx="57" cy="32" r="2.5" fill="${primary}" />
    <circle cx="32" cy="57" r="2.5" fill="${primary}" />
    <circle cx="7" cy="32" r="2.5" fill="${primary}" />
    <circle cx="32" cy="32" r="2.5" fill="${accent}" />`;
      break;

    case 'athena':
      glyphContent = `
    <!-- Athena: A Nave Cartógrafa & Radar de Código -->
    <path d="M20 17 A 19 19 0 0 1 44 17" fill="none" stroke="${accent}" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 3" stroke-opacity="0.8" />
    <path d="M32 9 L52 43 L32 35 L12 43 Z" fill="${variant === 'line' ? 'none' : primary}" fill-opacity="${variant === 'line' ? 0 : 0.16}" stroke="${primary}" stroke-width="3.25" stroke-linejoin="round" stroke-linecap="round" />
    <path d="M32 16 V35" stroke="${accent}" stroke-width="2" stroke-linecap="round" />
    <circle cx="20" cy="53" r="2.5" fill="${secondary}" />
    <circle cx="32" cy="53" r="2.5" fill="${primary}" />
    <circle cx="44" cy="53" r="2.5" fill="${secondary}" />
    <path d="M20 50 L28 41 M32 50 V41 M44 50 L36 41" stroke="${primary}" stroke-width="1.75" stroke-linecap="round" stroke-opacity="0.8" />`;
      break;

    case 'zeus':
      glyphContent = `
    <!-- Zeus: O Habitante Estrategista & Raio de Decisão -->
    <path d="M24 10 H20 A 4 4 0 0 0 16 14 V18" fill="none" stroke="${primary}" stroke-width="2" stroke-linecap="round" stroke-opacity="0.6" />
    <path d="M40 10 H44 A 4 4 0 0 1 48 14 V18" fill="none" stroke="${primary}" stroke-width="2" stroke-linecap="round" stroke-opacity="0.6" />
    <path d="M48 46 V50 A 4 4 0 0 1 44 54 H40" fill="none" stroke="${primary}" stroke-width="2" stroke-linecap="round" stroke-opacity="0.6" />
    <path d="M16 46 V50 A 4 4 0 0 0 20 54 H24" fill="none" stroke="${primary}" stroke-width="2" stroke-linecap="round" stroke-opacity="0.6" />
    <path d="M37 11 L22 32 H33 L26 53 L45 28 H33 Z" fill="${variant === 'line' ? 'none' : primary}" fill-opacity="${variant === 'line' ? 0 : 0.22}" stroke="${primary}" stroke-width="3.25" stroke-linejoin="round" stroke-linecap="round" />
    <path d="M32 5 V8 M32 56 V59 M5 32 H8 M56 32 H59" stroke="${accent}" stroke-width="1.75" stroke-linecap="round" stroke-opacity="0.5" />`;
      break;

    case 'thero':
      glyphContent = `
    <!-- Thero: O Habitante Comandante / Visor HUD & T Arquitetural -->
    <path d="M15 27 C15 16.5 22.6 8 32 8 C41.4 8 49 16.5 49 27 C49 37.5 42 49 32 56 C22 49 15 37.5 15 27 Z" fill="${variant === 'line' ? 'none' : primary}" fill-opacity="${variant === 'line' ? 0 : 0.12}" stroke="${primary}" stroke-width="3" stroke-linejoin="round" />
    <path d="M20 26 H44" stroke="${accent}" stroke-width="3.5" stroke-linecap="round" />
    <path d="M32 26 V44" stroke="${accent}" stroke-width="3.5" stroke-linecap="round" />
    <circle cx="32" cy="26" r="3.5" fill="#0B0F17" stroke="${primary}" stroke-width="2.5" />
    <path d="M22 36 H26 M38 36 H42" stroke="${primary}" stroke-width="2" stroke-linecap="round" stroke-opacity="0.8" />`;
      break;
  }

  let plateContent = '';
  if (variant === 'app') {
    plateContent = `
    <defs>
      <radialGradient id="bg-${tool.id}" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="${tool.colors.primary}" stop-opacity="0.2" />
        <stop offset="65%" stop-color="#0e1422" stop-opacity="0.95" />
        <stop offset="100%" stop-color="#080c14" stop-opacity="1" />
      </radialGradient>
      <linearGradient id="border-${tool.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${tool.colors.accent}" stop-opacity="0.6" />
        <stop offset="100%" stop-color="${tool.colors.primary}" stop-opacity="0.15" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#bg-${tool.id})" stroke="url(#border-${tool.id})" stroke-width="1.25" />
    <rect x="3" y="3" width="58" height="58" rx="13" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1" />`;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">
${plateContent}
${glyphContent}
</svg>`.trim();
}

export function downloadSvgFile(tool: EcosystemTool, variant: IconVariant = 'app', size: number = 64) {
  const svgString = getCleanSvgString(tool, variant, size);
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${tool.id}-icon-${variant}.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadPngFile(
  tool: EcosystemTool,
  variant: IconVariant = 'app',
  resolution: number = 512
): Promise<void> {
  return new Promise((resolve, reject) => {
    const svgString = getCleanSvgString(tool, variant, 64);
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = resolution;
      canvas.height = resolution;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        URL.revokeObjectURL(url);
        reject(new Error('Canvas context not available'));
        return;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, resolution, resolution);

      canvas.toBlob((pngBlob) => {
        URL.revokeObjectURL(url);
        if (!pngBlob) {
          reject(new Error('Failed to create PNG blob'));
          return;
        }
        const pngUrl = URL.createObjectURL(pngBlob);
        const a = document.createElement('a');
        a.href = pngUrl;
        a.download = `${tool.id}-icon-${variant}-${resolution}x${resolution}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(pngUrl);
        resolve();
      }, 'image/png');
    };

    img.onerror = (e) => {
      URL.revokeObjectURL(url);
      reject(e);
    };

    img.src = url;
  });
}

export async function copySvgToClipboard(tool: EcosystemTool, variant: IconVariant = 'app'): Promise<void> {
  const svg = getCleanSvgString(tool, variant, 64);
  await navigator.clipboard.writeText(svg);
}
