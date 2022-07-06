import { Box, Divider, List, ListItem } from "@mui/material";
import React from "react";
import TesteFoto from "../../../../teste.jpg";

function Chats() {
  const teste = ["teste 1", "teste 2", "teste 3"];
  return (
    <Box sx={{ padding: "0 10px", width: "100%" }}>
      <List>
        <Divider />
        {teste.map((item) => (
          <>
            <ListItem sx={{ padding: ".5rem 0" }} key={item}>
              <Box
                component="article"
                display="flex"
                sx={{ justifyContent: "space-between", gap: "1rem" }}
              >
                <Box width="50px">
                  <img
                    style={{ width: "100%" }}
                    src={TesteFoto}
                    alt="Foto usuário"
                  />
                </Box>
                <Box>
                  <Box component="span" fontSize="small">
                    User name
                  </Box>
                  <Box component="p" fontSize="small">
                    Last message
                  </Box>
                </Box>
              </Box>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );
}

export default Chats;
