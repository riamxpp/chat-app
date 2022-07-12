import React, { useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Box } from "@mui/material";
import SideBar from "./sideBar/SideBar";
import Message from "./message/Message";
import { ChatContext } from "../../context/ChatContext";

const Home = () => {
  const [userChat, setUserChat] = useState(null);
  const auth = getAuth();
  const { setUserLogged } = useContext(ChatContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.uid && user.displayName && user.photoURL && user.email) {
          setUserLogged({
            id: user.uid,
            name: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
          });
        }
      } else {
        alert("Faça login");
      }
    });
  }, [auth, setUserLogged]);

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
    </Box>
  );
};

export default Home;
