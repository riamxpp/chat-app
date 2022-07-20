import { User } from "../../@types/User";
import { SetStateAction } from "react";
import Conversation from "../../@types/Conversation";

export interface IChatContext {
  themeName: "light" | "dark";
  setThemeName: React.Dispatch<SetStateAction<"light" | "dark">>;
  changeTheme: () => void;
  userLogged: User;
  setUserLogged: React.Dispatch<SetStateAction<User>>;
  conversations: Array<Conversation>;
  setConversations: React.Dispatch<SetStateAction<Array<Conversation>>>;
  handleNewConversetion: (email: string) => void;
  dateConversations: Array<Conversation>;
  setDateConversations: React.Dispatch<any>;
  clearName: (name: string) => string;
  takeConversationCurrentUser: (uid: string) => void;
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
  takeConversationCurrentUser: () => {},
};
