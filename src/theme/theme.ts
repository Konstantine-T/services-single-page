import { createTheme, type ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}

const sharedConfig: Omit<ThemeOptions, "palette"> = {
  typography: {
    fontFamily: '"Noto Sans Georgian", system-ui, -apple-system, sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: "-0.04em",
      lineHeight: 1.0,
      textWrap: "balance" as const,
    },
    h2: {
      fontWeight: 900,
      letterSpacing: "-0.04em",
      lineHeight: 1.0,
      textWrap: "balance" as const,
    },
    h3: {
      fontWeight: 800,
      letterSpacing: "-0.025em",
      textWrap: "balance" as const,
    },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    body1: { fontSize: "0.9375rem", lineHeight: 1.7 },
    body2: { fontSize: "0.875rem", lineHeight: 1.6 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          borderRadius: 8,
          padding: "11px 28px",
          letterSpacing: "0.01em",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...sharedConfig,
  palette: {
    mode: "light",
    primary: {
      main: "#1B3DFF",
      light: "#4F6BFF",
      dark: "#0F25CC",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#4F6BFF",
      light: "#deebff",
      dark: "#1B3DFF",
      contrastText: "#ffffff",
    },
    accent: {
      main: "#4F6BFF",
      light: "#7B8EFF",
      dark: "#1B3DFF",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F0EFF9",
      paper: "#FAFAFA",
    },
    text: {
      primary: "#0D0D1A",
      secondary: "#5A5E7A",
    },
    divider: "#E0DFF8",
  },
});

export const darkTheme = createTheme({
  ...sharedConfig,
  palette: {
    mode: "dark",
    primary: {
      main: "#1B3DFF",
      light: "#4F6BFF",
      dark: "#0F25CC",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1B3DFF",
      light: "#292b3a",
      dark: "#0F25CC",
      contrastText: "#ffffff",
    },
    accent: {
      main: "#1B3DFF",
      light: "#4F6BFF",
      dark: "#0F25CC",
      contrastText: "#ffffff",
    },
    background: {
      default: "#1A1F35",
      paper: "#232840",
    },
    text: {
      primary: "#F5F6FF",
      secondary: "#A8AECF",
    },
    divider: "#272D4A",
  },
});

export default lightTheme;
