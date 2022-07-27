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

function Chats() {
  const {
    clearName,
    userLogged,
    conversations,
    setConversations,
    takeConversationCurrentUser,
    currentChat,
  } = useContext(ChatContext);

  useEffect(() => {
    setConversations([]);
    function takeConversationsCurrentUser() {
      fetch(
        "https://chat-app-f3ec0-default-rtdb.firebaseio.com/Conversations.json"
      )
        .then((res) => res.json())
        .then((json) => {
          json.forEach((item: Conversation) => {
            if (!item) {
              return;
            } else if (
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

  if (!currentChat.sendBy)
    return (
      <Box sx={{ width: "100%", height: "89.9%" }} bgcolor="primary.main"></Box>
    );
  return (
    <Box
      bgcolor="primary.main"
      sx={{ padding: "0 10px", width: "100%", height: "89.9%" }}
    >
      <List>
        <Divider />
        {conversations
          ? conversations.map((item, index) => (
              <ListItem
                sx={[
                  (theme) => ({
                    padding: ".5rem 0",
                    cursor: "pointer",
                    transition: ".3s",
                    overflow: "hidden",
                    backgroundColor: `${
                      currentChat.sendTo === item.sendTo
                        ? theme.palette.primary.dark
                        : "initial"
                    }`,
                    "&:hover": {
                      background: theme.palette.primary.dark,
                      transition: ".3s",
                    },
                  }),
                ]}
                key={index}
                onClick={() => takeConversationCurrentUser(item)}
              >
                <Box
                  width="100%"
                  component="article"
                  display="flex"
                  sx={{ gap: "1rem", position: "relative", height: "50px" }}
                >
                  <ListItemAvatar
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar alt="Profile Picture" src={item.sendToPhoto} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={clearName(item.sendTo)}
                    secondary={item.lastMessage}
                    sx={[
                      (theme) => ({
                        color: "secondary.contrastText",
                        whiteSpace: "nowrap",
                        "&::before": {
                          content: `${
                            currentChat.messages[
                              currentChat.messages.length - 1
                            ].text.length > 23
                              ? '"..."'
                              : '""'
                          }`,
                          right: "11px",
                          top: "31px",
                          zIndex: "1",
                          position: "absolute",
                        },
                        "&::after": {
                          content: '""',
                          width: "27px",
                          height: "15px",
                          backgroundColor: `${
                            currentChat.sendTo === item.sendTo
                              ? theme.palette.primary.dark
                              : "initial"
                          }`,
                          position: "absolute",
                          top: "35px",
                          right: "0px",
                        },
                      }),
                    ]}
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
