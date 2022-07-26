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
  const [messages, setMessages] = useState<Array<Message>>([]);

  function changeTheme(theme?: "light" | "dark") {
    if (theme) {
      setThemeName(theme);
      localStorage.setItem("theme", themeName);
    } else {
      localStorage.setItem("theme", themeName);
      themeName === "dark" ? setThemeName("light") : setThemeName("dark");
    }
  }

  const handleNewConversetion = (email: string) => {
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
      lastMessage: "",
    });
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

  function fetchMessage(message: Message) {
    conversations.forEach((item) => {
      if (
        item.sendBy === currentChat.sendBy &&
        item.sendTo === currentChat.sendTo
      ) {
        item.messages.push(message);
        item.lastMessage = message.text;
        setCurrentChat(item);
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
        fetchMessage,
        setMessages,
        messages,
      }}
    >
      <ThemeProvider theme={themeName === "light" ? LightTheme : DarkTheme}>
        {children}
      </ThemeProvider>
    </ChatContext.Provider>
  );
};
