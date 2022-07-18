import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useMemo } from "react";
import { db } from "../../../../App";
import { ChatContext } from "../../../../context/ChatContext";
import TesteFoto from "../../../../teste.jpg";

function Chats() {
  const { userLogged, conversations, setConversations } =
    useContext(ChatContext);

  useEffect(() => {
    if (conversations.length === 0) {
      onSnapshot(collection(db, "Conversations"), (snap) => {
        snap.docs.map((item) => {
          if (item.data().sendBy === userLogged.id) {
            return setConversations((prev) => [...prev, item.data()]);
          }
        });
      });
    }
  }, [conversations, userLogged, setConversations]);
  console.log(conversations);

  return (
    <Box
      bgcolor="primary.main"
      sx={{ padding: "0 10px", width: "100%", height: "89.9%" }}
    >
      {/* <List>
        <Divider />
        {conversations.length !== 0 &&
          conversations.map((item) => (
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
              key={item}
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
                  primary={item}
                  secondary="Last Message"
                  sx={{ color: "secondary.contrastText" }}
                />

                <Divider />
              </Box>
            </ListItem>
          ))}
      </List> */}
    </Box>
  );
}

export default Chats;
