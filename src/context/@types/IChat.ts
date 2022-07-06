import { SetStateAction } from "react";

export interface IChatContext {
  themeName: "light" | "dark";
  setThemeName: React.Dispatch<SetStateAction<"light" | "dark">>;
}

export interface IInitialValuesChat {
  themeName: "light";
  setThemeName: () => {};
}
