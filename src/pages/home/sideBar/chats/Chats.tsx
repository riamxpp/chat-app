import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useContext } from "react";
import { ChatContext } from "../../../../context/ChatContext";
import TesteFoto from "../../../../teste.jpg";

function Chats() {
  const { dateConversations, clearName } = useContext(ChatContext);

  return (
    <Box
      bgcolor="primary.main"
      sx={{ padding: "0 10px", width: "100%", height: "89.9%" }}
    >
      <List>
        <Divider />
        {dateConversations.length !== 0 &&
          dateConversations.map((item) => (
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
              key={item.sendTo}
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
          ))}
      </List>
    </Box>
  );
}

export default Chats;
