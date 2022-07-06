import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  typography: {
    fontFamily: "Arial",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#111b21",
    },
    secondary: {
      main: "#2A3942",
    },
  },
});
