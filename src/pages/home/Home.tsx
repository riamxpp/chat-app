import React, { useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Box } from "@mui/material";
import SideBar from "./sideBar/SideBar";
import Message from "./message/Message";
import { ChatContext } from "../../context/ChatContext";

const Home = () => {
  const [userChat, setUserChat] = useState(null);
  const [logout, setLogout] = useState(false);
  const auth = getAuth();
  const { setUserLogged, userLogged } = useContext(ChatContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.uid && user.displayName && user.photoURL) {
          setUserLogged({
            id: user.uid,
            name: user.displayName,
            photoURL: user.photoURL,
          });
        }
      } else {
        console.log("Faça login");
      }
    });
  }, [auth]);

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
