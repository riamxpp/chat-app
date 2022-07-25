import { ThemeProvider } from "@mui/material";
import { serverTimestamp } from "firebase/database";
import React, { createContext, useState } from "react";
import Conversation from "../@types/Conversation";
import Message from "../@types/Message";
import { DarkTheme } from "../themes/DarkTheme";
import { LightTheme } from "../themes/LightTheme";
import { IChatContext, IInitialValuesChat } from "./@types/IChat";

export const ChatContext = createContext<IChatContext>(IInitialValuesChat);

export const ChaStorage: React.FC<any> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");
  const [userLogged, setUserLogged] = useState({
    id: "",
    name: "",
    photoURL: "",
    email: "",
  });
  const [conversations, setConversations] = useState<Array<Conversation>>([]);
  const [dateConversations, setDateConversations] = useState<
    Array<Conversation>
  >([]);
  const [currentChat, setCurrentChat] = useState<Conversation>(
    {} as Conversation
  );

  function changeTheme() {
    themeName === "dark" ? setThemeName("light") : setThemeName("dark");
  }

  const handleNewConversetion = (email: string) => {
    if (dateConversations.length === 0) {
      dateConversations.push({
        sendBy: userLogged.id,
        sendByPhoto: userLogged.photoURL,
        sendTo: email,
        sendToPhoto: "",
        createdAt: serverTimestamp(),
        messages: [
          {
            text: "",
            sendBy: "",
            createdAt: serverTimestamp(),
          },
        ],
      });
    } else {
      dateConversations.push({
        sendBy: userLogged.id,
        sendByPhoto: userLogged.photoURL,
        sendTo: email,
        sendToPhoto: "",
        createdAt: serverTimestamp(),
        messages: [
          {
            text: "",
            sendBy: "",
            createdAt: serverTimestamp(),
          },
        ],
      });
    }
    fetchConversation(dateConversations);
  };

  function fetchConversation(date: Conversation[]) {
    fetch(
      "https://chat-app-f3ec0-default-rtdb.firebaseio.com/Conversations.json",
      {
        method: "PUT",
        body: JSON.stringify(date),
      }
    );
  }

  function clearName(name: string) {
    return name.substring(name.indexOf("@"), -1);
  }

  function takeConversationCurrentUser(conversation: Conversation) {
    setCurrentChat(conversation);
  }

  function sendMessage(message: Message) {
    // currentChat.messages.push(message);
    fetchMessage(message);
  }

  function fetchMessage(message: Message) {
    conversations.forEach((item, index) => {
      if (
        item.sendBy === currentChat.sendBy &&
        item.sendTo === currentChat.sendTo
      ) {
        item.messages.push(message);
      }
    });
    fetchConversation(conversations);
  }

  return (
    <ChatContext.Provider
      value={{
        themeName,
        setThemeName,
        changeTheme,
        userLogged,
        setUserLogged,
        conversations,
        setConversations,
        handleNewConversetion,
        dateConversations,
        setDateConversations,
        clearName,
        takeConversationCurrentUser,
        currentChat,
        setCurrentChat,
        sendMessage,
      }}
    >
      <ThemeProvider theme={themeName === "light" ? LightTheme : DarkTheme}>
        {children}
      </ThemeProvider>
    </ChatContext.Provider>
  );
};
