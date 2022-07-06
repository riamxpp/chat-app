import { SetStateAction } from "react";

export interface IChatContext {
  themeName: "light" | "dark";
  setThemeName: React.Dispatch<SetStateAction<"light" | "dark">>;
  changeTheme: () => void;
}

export interface IInitialValuesChat {
  themeName: "light";
  setThemeName: () => {};
  changeTheme: () => {};
}
