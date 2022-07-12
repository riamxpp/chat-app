import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import TesteFoto from "../../../../teste.jpg";

function Chats() {
  const teste = ["teste 1", "teste 2", "teste 3"];

  return (
    <Box
      bgcolor="primary.main"
      sx={{ padding: "0 10px", width: "100%", height: "89.9%" }}
    >
      <List>
        <Divider />
        {teste.map((item) => (
          <ListItem sx={{ padding: ".5rem 0" }} key={item}>
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
                primary="User Name"
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
