export type CosmicRole = 'planeta' | 'nave' | 'habitante';
export type ToolId = 'nexo' | 'thero' | 'athena' | 'zeus' | 'genesis';

export interface ToolColors {
  primary: string;       // Main brand hex
  secondary: string;     // Complementary highlight
  accent: string;        // Accent / glow
  glow: string;          // Drop shadow glow rgba
  bgDark: string;        // Surface dark tone
  gradient: string;      // CSS gradient
  name: string;          // Color name in Portuguese
}

export interface Connection {
  toId: ToolId;
  relationship: string;
  roleDescription: string;
  direction: 'to' | 'from' | 'bidirectional';
}

export interface AcidFaqItem {
  question: string;
  answer: string;
  nerdFootnote?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  badge?: string;
  technicalDetail: string;
  iconName: string;
}

export interface LandingPageData {
  id: ToolId;
  heroBadge: string;
  heroHeadline: string;
  heroSubheadline: string;
  punchline: string;
  licenseType: 'MIT License · Open-Source' | '100% Gratuito · Closed-Source (Privacidade Total)';
  licenseNote: string;
  comicProblem: {
    title: string;
    lead: string;
    agonyBullets: string[];
    cosmicWarning: string;
  };
  solutionSummary: {
    title: string;
    description: string;
    stats: { label: string; value: string; hint: string }[];
  };
  features: FeatureItem[];
  cliSnippet: {
    command: string;
    description: string;
    outputSample: string;
  };
  acidFaq: AcidFaqItem[];
  portalPitch: Record<ToolId, string>;
}

export interface EcosystemTool {
  id: ToolId;
  name: string;
  tagline: string;
  role: CosmicRole;
  roleTitle: string;
  roleDescription: string;
  colors: ToolColors;
  siteUrl?: string;
  repoUrl?: string;
  description: string;
  designRationale: string;
  symbolism: string[];
  geometricSpecs: string[];
  connections: Connection[];
  cliUsage?: string;
  landing: LandingPageData;
}

export type IconVariant = 'app' | 'line' | 'duotone' | 'symbol';
export type PreviewBackground = 'cosmos' | 'oled' | 'slate' | 'paper' | 'matrix';
export type ActiveView = 'portal-hub' | ToolId | 'icons-vault';
