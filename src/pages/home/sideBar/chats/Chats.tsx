import { Box, Divider, List, ListItem } from "@mui/material";
import React from "react";
import TesteFoto from "../../../../teste.jpg";

function Chats() {
  const teste = ["teste 1", "teste 2", "teste 3"];
  return (
    <Box
      bgcolor="primary.main"
      sx={{ padding: "0 10px", width: "100%", height: "89%" }}
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
              <Box
                width="63px"
                display="flex"
                sx={{
                  height: "50px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundImage: `url(${TesteFoto})`,
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                }}
              ></Box>
              <Box
                width="100%"
                display="flex"
                sx={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  component="span"
                  fontSize="small"
                  color="secondary.contrastText"
                >
                  User name
                </Box>
                <Box
                  component="p"
                  fontSize="small"
                  color="secondary.contrastText"
                >
                  Last message
                </Box>
                <Divider />
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Chats;
