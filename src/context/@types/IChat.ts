import { User } from "../../@types/User";
import { SetStateAction } from "react";
import Conversation from "../../@types/Conversation";

export interface IChatContext {
  themeName: "light" | "dark";
  setThemeName: React.Dispatch<SetStateAction<"light" | "dark">>;
  changeTheme: () => void;
  userLogged: User;
  setUserLogged: React.Dispatch<SetStateAction<User>>;
  conversations: Array<any>;
  setConversations: React.Dispatch<SetStateAction<Array<any>>>;
  handleNewConversetion: (email: string, datePrev: Conversation[]) => void;
  dateConversations: Array<Conversation>;
  setDateConversations: React.Dispatch<any>;
  clearName: (name: string) => string;
}

export const IInitialValuesChat: IChatContext = {
  themeName: "light",
  setThemeName: () => {},
  changeTheme: () => {},
  userLogged: { id: "", name: "", photoURL: "", email: "" },
  setUserLogged: () => {},
  conversations: [],
  setConversations: () => {},
  handleNewConversetion: () => {},
  dateConversations: [],
  setDateConversations: () => {},
  clearName: (name = "") => "",
};
