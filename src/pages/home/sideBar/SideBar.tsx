import { Box } from "@mui/material";
import React from "react";
import SideBarHeader from "./sideBarHeader/SideBarHeader";
import Chats from "./chats/Chats";

const SideBar = () => {
  return (
    <Box width="30%" sx={{ flexShrink: "0" }}>
      <SideBarHeader></SideBarHeader>
      <Chats></Chats>
    </Box>
  );
};

export default SideBar;
