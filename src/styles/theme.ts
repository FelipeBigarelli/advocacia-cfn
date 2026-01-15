// theme.ts
export const defaultTheme = {
  colors: {
    // Base
    primary: '#C9A227', // dourado (CTA/realces)
    goldDark: '#B18A1E', // hover do dourado
    secondary: '#0F172A', // fundo do header (azul bem escuro)

    // Texto sobre fundos escuros/claros
    secondaryForeground: '#F8FAFC', // texto no header
    primaryForeground: '#0B1220', // texto em cima do dourado (alto contraste)

    // Superfícies do site (se precisar nas seções)
    background: '#0B1220', // fundo geral (dark elegante)
    surface: '#111B2E', // cards/sections
    border: 'rgba(248, 250, 252, 0.10)',

    // Textos gerais (fora do header)
    textPrimary: '#F8FAFC',
    textSecondary: 'rgba(248, 250, 252, 0.75)',

    // Feedback (opcional)
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#38BDF8',

    // Interação
    focus: 'rgba(201, 162, 39, 0.35)',

    // Sombras
    shadow: 'rgba(0, 0, 0, 0.35)',
    shadowStrong: 'rgba(0, 0, 0, 0.55)',

    black: '#000000',

    // Gradientes (opcional)
    gradientPrimary: 'linear-gradient(90deg, #C9A227 0%, #E3C35A 100%)',
  },

  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
  },

  layout: {
    containerNarrowWidth: '1180px',
  },

  radius: {
    sm: '10px',
    md: '14px',
    lg: '18px',
    pill: '999px',
  },

  breakpoints: {
    lg: '1024px',
  },
};
