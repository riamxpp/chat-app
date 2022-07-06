import { Box } from "@mui/material";
import React from "react";
import SideBarHeader from "./sideBarHeader/SideBarHeader";
import Chats from "./chats/Chats";

interface ISideBar {
  userChat: any;
  setUserChat: any;
}

const SideBar = (props: ISideBar) => {
  return (
    <Box width="350px">
      <SideBarHeader></SideBarHeader>
      <Chats></Chats>
    </Box>
  );
};

export default SideBar;
