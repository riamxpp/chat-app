import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  typography: {
    fontFamily: "Arial",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#F0F2F5",
    },
  },
});
