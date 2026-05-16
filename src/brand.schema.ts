export const fintechLawyerBrand = {
  name: 'Fintech Lawyer',
  sourceRoute: '/tailwindtoolbox-landing-page',
  colors: {
    brandNavy: '#1D4771',
    brandBlue: '#0365B2',
    brandNavyDark: '#0D3D7C',
    ink: '#2E2E2E',
    textSecondary: '#57534E',
    textMuted: '#78716C',
    borderSubtle: '#D1D5DB',
    surface: '#FFFFFF',
    surfaceSoft: '#FAFAF9',
    softBlueTint: '#DDEAF6',
  },
  gradients: {
    brand: 'linear-gradient(90deg, #1D4771 0%, #0365B2 100%)',
  },
  astrowindTokenMap: {
    primary: 'brandNavy',
    secondary: 'brandBlue',
    accent: 'brandNavyDark',
    heading: 'ink',
    defaultText: 'ink',
    mutedText: 'textSecondary',
    subtleText: 'textMuted',
    border: 'borderSubtle',
    pageBackground: 'surface',
    softBackground: 'surfaceSoft',
  },
} as const;

export type FintechLawyerBrand = typeof fintechLawyerBrand;
