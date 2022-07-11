import { Box } from "@mui/material";
import React from "react";
import ChatMessage from "./chatMessage/ChatMessage";
import HeaderMessage from "./headerMessage/HeaderMessage";

const Message = () => {
  return (
    <Box
      width="70%"
      height="100%"
      sx={{ borderLeft: "thin solid", borderColor: "secondary.contrastText" }}
    >
      <HeaderMessage />
      <ChatMessage />
    </Box>
  );
};

export default Message;
