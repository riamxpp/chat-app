import { Box } from "@mui/material";
import React from "react";
import ChatMessage from "./chatMessage/ChatMessage";
import HeaderMessage from "./headerMessage/HeaderMessage";

const Message = () => {
  return (
    <Box width="70%" height="100%">
      <HeaderMessage />
      <ChatMessage />
    </Box>
  );
};

export default Message;
