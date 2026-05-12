import { PaletteMode, createTheme } from '@mui/material/styles';

export function createAppTheme(mode: PaletteMode) {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? '#8ab4f8' : '#123c69',
        dark: isDark ? '#5f8fd4' : '#0b253f',
        light: isDark ? '#d9e8f6' : '#d9e8f6',
      },
      secondary: {
        main: isDark ? '#5eead4' : '#0f766e',
        dark: isDark ? '#2dd4bf' : '#0b4f4a',
        light: isDark ? '#134e4a' : '#d2f1ee',
      },
      warning: {
        main: '#d97706',
      },
      background: {
        default: isDark ? '#0d1117' : '#f7f8fa',
        paper: isDark ? '#151b23' : '#ffffff',
      },
      text: {
        primary: isDark ? '#e6edf3' : '#17202a',
        secondary: isDark ? '#9aa7b5' : '#526170',
      },
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: {
        fontWeight: 800,
        letterSpacing: 0,
        lineHeight: 1.04,
      },
      h2: {
        fontWeight: 760,
        letterSpacing: 0,
      },
      h3: {
        fontWeight: 720,
        letterSpacing: 0,
      },
      h4: {
        fontWeight: 700,
        letterSpacing: 0,
      },
      button: {
        textTransform: 'none',
        fontWeight: 700,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            border: isDark ? '1px solid rgba(154, 167, 181, 0.16)' : '1px solid rgba(18, 60, 105, 0.10)',
            boxShadow: isDark ? '0 16px 40px rgba(0, 0, 0, 0.24)' : '0 16px 40px rgba(17, 32, 46, 0.07)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 650,
          },
        },
      },
    },
  });
}
