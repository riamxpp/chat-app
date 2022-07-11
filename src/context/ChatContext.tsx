import { ThemeProvider } from "@mui/material";
import { User } from "firebase/auth";
import React, { createContext, useState } from "react";
import { DarkTheme } from "../themes/DarkTheme";
import { LightTheme } from "../themes/LightTheme";
import { IChatContext, IInitialValuesChat } from "./@types/IChat";

export const ChatContext = createContext<IChatContext>(
  {} as IInitialValuesChat
);

export const ChaStorage: React.FC<any> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");
  const [user, setUser] = useState({} as User);

  function changeTheme() {
    themeName === "dark" ? setThemeName("light") : setThemeName("dark");
  }

  return (
    <ChatContext.Provider
      value={{ themeName, setThemeName, changeTheme, user, setUser }}
    >
      <ThemeProvider theme={themeName === "light" ? LightTheme : DarkTheme}>
        {children}
      </ThemeProvider>
    </ChatContext.Provider>
  );
};
