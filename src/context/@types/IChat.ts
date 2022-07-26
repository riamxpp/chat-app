import { User } from "../../@types/User";
import React, { SetStateAction } from "react";
import Conversation from "../../@types/Conversation";
import { serverTimestamp } from "firebase/database";
import Message from "../../@types/Message";

export interface IChatContext {
  themeName: "light" | "dark";
  setThemeName: React.Dispatch<SetStateAction<"light" | "dark">>;
  changeTheme: (theme?: "light" | "dark") => void;
  userLogged: User;
  setUserLogged: React.Dispatch<SetStateAction<User>>;
  conversations: Array<Conversation>;
  setConversations: React.Dispatch<SetStateAction<Array<Conversation>>>;
  handleNewConversetion: (email: string) => void;
  dateConversations: Array<Conversation>;
  setDateConversations: React.Dispatch<any>;
  clearName: (name: string) => string;
  takeConversationCurrentUser: (conversation: Conversation) => void;
  currentChat: Conversation;
  setCurrentChat: React.Dispatch<React.SetStateAction<Conversation>>;
  fetchMessage: (message: Message) => void;
  messages: Array<Message>;
  setMessages: React.Dispatch<React.SetStateAction<Array<Message>>>;
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
  clearName: () => "",
  takeConversationCurrentUser: () => {},
  currentChat: {
    createdAt: serverTimestamp(),
    messages: [],
    sendBy: "",
    sendByPhoto: "",
    sendTo: "",
    sendToPhoto: "",
    lastMessage: "",
  },
  setCurrentChat: () => {},
  fetchMessage: () => {},
  messages: [],
  setMessages: () => {},
};
