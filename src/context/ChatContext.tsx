import { ThemeProvider } from "@mui/material";
import React, { createContext, useState } from "react";
import { DarkTheme } from "../themes/DarkTheme";
import { LightTheme } from "../themes/LightTheme";
import { IChatContext, IInitialValuesChat } from "./@types/IChat";

export const ChatContext = createContext<IChatContext>(
  {} as IInitialValuesChat
);

export const ChaStorage: React.FC<any> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  function changeTheme() {
    themeName === "dark" ? setThemeName("light") : setThemeName("dark");
  }

  return (
    <ChatContext.Provider value={{ themeName, setThemeName, changeTheme }}>
      <ThemeProvider theme={themeName === "light" ? LightTheme : DarkTheme}>
        {children}
      </ThemeProvider>
    </ChatContext.Provider>
  );
};
