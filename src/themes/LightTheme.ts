import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  typography: {
    fontFamily: "Arial",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
      dark: "#efeae2",
    },
    secondary: {
      light: "#FFFFFF",
      dark: "#FFFFFF",
      main: "#F0F2F5",
      contrastText: "#2A3942",
    },
  },
});
