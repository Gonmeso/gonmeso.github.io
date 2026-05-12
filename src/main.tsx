import { StrictMode, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { PaletteMode } from '@mui/material/styles';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { createAppTheme } from './theme';
import './styles.css';

function Root() {
  const [mode, setMode] = useState<PaletteMode>(() => {
    const stored = window.localStorage.getItem('theme-mode');
    return stored === 'dark' || stored === 'light' ? stored : 'light';
  });
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((current) => {
      const next = current === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('theme-mode', next);
      return next;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <App mode={mode} onToggleMode={toggleMode} />
      </HashRouter>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
