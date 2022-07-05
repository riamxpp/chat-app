import { List, ListItem, Toolbar } from "@mui/material";
import React from "react";

function Chats() {
  const teste = ["teste 1", "teste 2", "teste 3"];
  return (
    <Toolbar>
      <List>
        {teste.map((item) => (
          <ListItem key="item">{item}</ListItem>
        ))}
      </List>
    </Toolbar>
  );
}

export default Chats;
