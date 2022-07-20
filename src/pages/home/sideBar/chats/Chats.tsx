import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import Conversation from "../../../../@types/Conversation";
import { ChatContext } from "../../../../context/ChatContext";
import TesteFoto from "../../../../teste.jpg";

function Chats() {
  const { clearName, userLogged, conversations, setConversations } =
    useContext(ChatContext);

  useEffect(() => {
    setConversations([]);
    function takeConversationsCurrentUser() {
      fetch(
        "https://chat-app-f3ec0-default-rtdb.firebaseio.com/Conversations.json"
      )
        .then((res) => res.json())
        .then((json) => {
          json.forEach((item: Conversation) => {
            if (
              item.sendBy === userLogged.id ||
              item.sendTo === userLogged.email
            ) {
              setConversations((prev) => [...prev, item]);
            }
          });
        });
    }
    takeConversationsCurrentUser();
  }, [userLogged.email, userLogged.id, setConversations]);

  return (
    <Box
      bgcolor="primary.main"
      sx={{ padding: "0 10px", width: "100%", height: "89.9%" }}
    >
      <List>
        <Divider />
        {conversations
          ? conversations.map((item) => (
              <ListItem
                sx={{
                  padding: ".5rem 0",
                  cursor: "pointer",
                  transition: ".3s",
                  "&:hover": {
                    background: "#0b141a",
                    transition: ".3s",
                  },
                }}
                key={item.sendByPhoto}
              >
                <Box
                  width="100%"
                  component="article"
                  display="flex"
                  sx={{ gap: "1rem" }}
                >
                  <ListItemAvatar
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar alt="Profile Picture" src={TesteFoto} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={clearName(item.sendTo)}
                    secondary="Last Message"
                    sx={{ color: "secondary.contrastText" }}
                  />

                  <Divider />
                </Box>
              </ListItem>
            ))
          : ""}
      </List>
    </Box>
  );
}

export default Chats;
