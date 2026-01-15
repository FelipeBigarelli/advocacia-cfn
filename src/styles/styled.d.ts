// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // Base
      primary: string;
      goldDark: string;
      secondary: string;

      // Texto em componentes específicos
      secondaryForeground: string;
      primaryForeground: string;

      // Superfícies / layout geral
      background: string;
      surface: string;
      border: string;

      // Textos gerais
      textPrimary: string;
      textSecondary: string;

      // Feedback (opcional)
      success: string;
      warning: string;
      error: string;
      info: string;

      // Interação
      focus: string;

      // Sombras
      shadow: string;
      shadowStrong: string;

      // Extras
      black: string;
      gradientPrimary: string;
    };

    fonts: {
      body: string;
      heading: string;
    };

    layout: {
      containerNarrowWidth: string;
    };

    radius: {
      sm: string;
      md: string;
      lg: string;
      pill: string;
    };

    breakpoints: {
      lg: string;
    };
  }
}
