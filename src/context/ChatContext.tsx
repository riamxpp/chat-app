import React, { createContext, useState } from "react";
import { IChatContext, IInitialValuesChat } from "./@types/IChat";

export const ChatContext = createContext<IChatContext>(
  {} as IInitialValuesChat
);

export const ChatProvider: React.FC<any> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("dark");

  return (
    <ChatContext.Provider value={{ themeName, setThemeName }}>
      {children}
    </ChatContext.Provider>
  );
};
