import React, { useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Box } from "@mui/material";
import SideBar from "./sideBar/SideBar";
import Message from "./message/Message";
import { ChatContext } from "../../context/ChatContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const auth = getAuth();
  const { setUserLogged } = useContext(ChatContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/home");
      }
      return () => unsubscribe();
    });
  }, [auth, setUserLogged, navigate]);
  return (
    <Box
      display="flex"
      width="100%"
      height="99.7vh"
      component="section"
      sx={{ flexShrink: "0" }}
    >
      <SideBar></SideBar>
      <Message></Message>
    </Box>
  );
};

export default Home;
