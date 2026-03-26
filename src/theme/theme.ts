import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4F46E5',    // Indigo
      light: '#6366F1',
      dark: '#3730A3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6366F1',    // Light Indigo
      light: '#818CF8',
      dark: '#4338CA',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#6366F1',    // Light Indigo
      light: '#818CF8',
      dark: '#4338CA',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F3F4F6',   // Cool Grey
      paper: '#FFFFFF',     // Pure White
    },
    text: {
      primary: '#111827',   // Rich Obsidian
      secondary: '#6B7280', // gray-500
    },
    divider: '#E5E7EB',
  },
  typography: {
    fontFamily: '"Noto Sans Georgian", system-ui, -apple-system, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.025em' },
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h3: { fontWeight: 700, letterSpacing: '-0.015em' },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { fontSize: '0.9375rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.5 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 10,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 4px rgba(26,10,5,0.07), 0 1px 2px rgba(26,10,5,0.05)',
        },
      },
    },
  },
});

export default theme;
