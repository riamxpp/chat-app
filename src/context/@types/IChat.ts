import { User } from "firebase/auth";
import { SetStateAction } from "react";

export interface IChatContext {
  themeName: "light" | "dark";
  setThemeName: React.Dispatch<SetStateAction<"light" | "dark">>;
  changeTheme: () => void;
  user: User;
  setUser: React.Dispatch<SetStateAction<User>>;
}

export interface IInitialValuesChat {
  themeName: "light";
  setThemeName: () => {};
  changeTheme: () => {};
  user: User;
  setUser: () => {};
}
