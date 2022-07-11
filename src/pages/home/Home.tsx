import React, { useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Box } from "@mui/material";
import SideBar from "./sideBar/SideBar";
import Message from "./message/Message";

const Home = () => {
  const [userChat, setUserChat] = useState(null);
  const [logout, setLogout] = useState(false);
  const auth = getAuth();
  const user = {};
  onAuthStateChanged(auth, (user) => {
    if (user) console.log(user.photoURL);
  });

  // const logoutWithGoogle = () => {
  //   setLogout(true);
  //   signOut(auth)
  //     .then((resolver) => {
  //       setLogout(true);
  //     })
  //     .catch((error) => {
  //       setLogout(false);
  //       console.log("error: ", error);
  //     });
  // };

  return (
    <Box
      display="flex"
      width="100%"
      height="99.7vh"
      component="section"
      sx={{ flexShrink: "0" }}
    >
      <SideBar userChat={userChat} setUserChat={setUserChat}></SideBar>
      <Message></Message>
      {/* <Button onClick={() => logoutWithGoogle()} disabled={logout}>
        Sign out
      </Button> */}
    </Box>
  );
};

export default Home;
