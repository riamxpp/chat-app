import { Theme } from "@mui/material";

import { DarkTheme } from "./DarkTheme";
import { LightTheme } from "./LightTheme";

export function currentTheme(theme: string): Theme {
  if (theme === "dark") return DarkTheme;
  return LightTheme;
}
