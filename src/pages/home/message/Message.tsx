import { Box } from "@mui/material";
import React, { useContext } from "react";
import { ChatContext } from "../../../context/ChatContext";
import NoMessage from "../NoMessage";
import ChatMessage from "./chatMessage/ChatMessage";
import HeaderMessage from "./headerMessage/HeaderMessage";

const Message = () => {
  const { conversations } = useContext(ChatContext);
  return (
    <Box
      width="70%"
      height="100%"
      sx={{ borderLeft: "thin solid", borderColor: "secondary.contrastText" }}
    >
      <HeaderMessage />

      {conversations.length === 0 ? <NoMessage></NoMessage> : <ChatMessage />}
    </Box>
  );
};

export default Message;
