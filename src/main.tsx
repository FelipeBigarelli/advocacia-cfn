import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, type DefaultTheme } from 'styled-components';
import { defaultTheme } from './styles/theme';
import { GlobalStyle } from './styles/global';

// import './styles/fonts.css';

import App from './App.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme as DefaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
