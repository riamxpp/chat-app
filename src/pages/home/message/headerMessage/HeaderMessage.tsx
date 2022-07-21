import { Avatar, Box, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ChatContext } from "../../../../context/ChatContext";

const HeaderMessage = () => {
  const { currentChat, clearName, conversations, setCurrentChat } =
    useContext(ChatContext);

  useEffect(() => {
    if (conversations.length !== 0) setCurrentChat(conversations[0]);
  }, [setCurrentChat, conversations]);

  return (
    <Box
      component="header"
      display="flex"
      width="100%"
      height="65px"
      sx={{
        padding: "10px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      bgcolor="secondary.main"
    >
      <Box display="flex" sx={{ gap: "1rem" }}>
        <Avatar alt="Your picture profile" src={currentChat.sendToPhoto} />
        <Box
          display="flex"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Typography
            height="auto"
            sx={{ color: "secondary.contrastText" }}
            component="span"
          >
            {currentChat.sendTo ? clearName(currentChat.sendTo) : ""}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderMessage;
