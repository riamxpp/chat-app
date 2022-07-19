import { ThemeProvider } from "@mui/material";
import { serverTimestamp } from "firebase/database";
import React, { createContext, useState } from "react";
import Conversation from "../@types/Conversation";
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
  const [conversations, setConversations] = useState<Array<any>>([]);
  const [dateConversations, setDateConversations] = useState<
    Array<Conversation>
  >([]);

  function changeTheme() {
    themeName === "dark" ? setThemeName("light") : setThemeName("dark");
  }

  const handleNewConversetion = (email: string, datePrev: Conversation[]) => {
    const conversation: Array<Conversation> = [
      ...datePrev,
      {
        sendBy: userLogged.id,
        sendTo: email,
        createdAt: serverTimestamp(),
        messages: [
          {
            text: "",
            sendBy: "",
            createdAt: serverTimestamp(),
          },
        ],
      },
    ];

    fetch(
      "https://chat-app-f3ec0-default-rtdb.firebaseio.com/Conversations.json",
      {
        method: "PUT",
        body: JSON.stringify(conversation),
      }
    );
  };

  function clearName(name: string) {
    return name.substring(name.indexOf("@"), -1);
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
      }}
    >
      <ThemeProvider theme={themeName === "light" ? LightTheme : DarkTheme}>
        {children}
      </ThemeProvider>
    </ChatContext.Provider>
  );
};
