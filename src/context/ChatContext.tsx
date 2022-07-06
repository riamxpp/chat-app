import React, { createContext, useState } from "react";
import { ChatContextType } from "./@types/IChat";

export const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider: React.FC<any> = ({ children }) => {
  return <ChatContext.Provider value={{}}>{children}</ChatContext.Provider>;
};
