import React, { useState } from "react";
import { getAuth, deleteUser, signOut } from "firebase/auth";
import { Box, Button } from "@mui/material";
import SideBar from "./sideBar/SideBar";
import Message from "./message/Message";

const Home = () => {
  const [userChat, setUserChat] = useState(null);
  const [logout, setLogout] = useState(false);
  const auth = getAuth();

  const logoutWithGoogle = () => {
    setLogout(true);
    signOut(auth)
      .then((resolver) => {
        setLogout(true);
      })
      .catch((error) => {
        setLogout(false);
        console.log("error: ", error);
      });
  };

  return (
    <Box display="flex" width="100vw" color="primary" component="section">
      <SideBar userChat={userChat} setUserChat={setUserChat}></SideBar>
      <Message></Message>
      {/* <Button onClick={() => logoutWithGoogle()} disabled={logout}>
        Sign out
      </Button> */}
    </Box>
  );
};

export default Home;
