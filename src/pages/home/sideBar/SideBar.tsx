import { Box, CardHeader, Icon, List, ListItem, Toolbar } from "@mui/material";
import React from "react";

const SideBar = () => {
  const teste = ["teste 1", "teste 2", "teste 3"];
  return (
    <Box width="500px">
      <CardHeader>
        <Icon></Icon>
      </CardHeader>
      <Toolbar>
        <List>
          {teste.map((item) => (
            <ListItem key="item">{item}</ListItem>
          ))}
        </List>
      </Toolbar>
    </Box>
  );
};

export default SideBar;
