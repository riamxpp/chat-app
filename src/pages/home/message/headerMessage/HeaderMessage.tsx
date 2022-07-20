import { Avatar, Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ChatContext } from "../../../../context/ChatContext";
import Teste from "../../../../teste.jpg";

const HeaderMessage = () => {
  const { currentChat, clearName } = useContext(ChatContext);

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
            {currentChat ? clearName(currentChat.sendTo) : ""}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderMessage;
