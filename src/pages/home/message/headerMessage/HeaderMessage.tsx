import { Box } from "@mui/material";
import React from "react";
import Teste from "../../../../teste.jpg";

const HeaderMessage = () => {
  return (
    <Box
      component="header"
      display="flex"
      width="100%"
      sx={{ padding: "10px" }}
      bgcolor="secondary.dark"
    >
      <Box
        width="50px"
        height="50px"
        sx={{ backgroundImg: `url(${Teste})` }}
      ></Box>
      <Box></Box>
    </Box>
  );
};

export default HeaderMessage;
