import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  typography: {
    fontFamily: "Arial",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#111b21",
      dark: "#0b141a",
    },
    secondary: {
      light: "#2a3942",
      main: "#2A3942",
      contrastText: "#F0F2F5",
    },
  },
});
