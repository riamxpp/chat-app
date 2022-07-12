import { User } from "../../@types/User";
import { SetStateAction } from "react";

export interface IChatContext {
  themeName: "light" | "dark";
  setThemeName: React.Dispatch<SetStateAction<"light" | "dark">>;
  changeTheme: () => void;
  userLogged: User;
  setUserLogged: React.Dispatch<SetStateAction<User>>;
}

export const IInitialValuesChat: IChatContext = {
  themeName: "light",
  setThemeName: () => {},
  changeTheme: () => {},
  userLogged: { id: "", name: "", photoURL: "", email: "" },
  setUserLogged: () => {},
};
