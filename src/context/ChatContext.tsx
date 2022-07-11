import { ThemeProvider } from "@mui/material";
import React, { createContext, useState } from "react";
import { DarkTheme } from "../themes/DarkTheme";
import { LightTheme } from "../themes/LightTheme";
import { IChatContext, IInitialValuesChat } from "./@types/IChat";

// const initialValues: IInitialValuesChat = {
//   themeName: "light",
//   setThemeName: () => {},
//   changeTheme: () => {},
//   user: { id },
// };

export const ChatContext = createContext<IChatContext>(IInitialValuesChat);

export const ChaStorage: React.FC<any> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");
  const [userLogged, setUserLogged] = useState({
    id: "",
    name: "",
    photoURL: "",
  });

  function changeTheme() {
    themeName === "dark" ? setThemeName("light") : setThemeName("dark");
  }

  return (
    <ChatContext.Provider
      value={{
        themeName,
        setThemeName,
        changeTheme,
        userLogged,
        setUserLogged,
      }}
    >
      <ThemeProvider theme={themeName === "light" ? LightTheme : DarkTheme}>
        {children}
      </ThemeProvider>
    </ChatContext.Provider>
  );
};
