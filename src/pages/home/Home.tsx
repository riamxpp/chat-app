import React, { useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Box } from "@mui/material";
import SideBar from "./sideBar/SideBar";
import Message from "./message/Message";
import { ChatContext } from "../../context/ChatContext";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../App";

const Home = () => {
  const [userChat, setUserChat] = useState(null);
  const [logout, setLogout] = useState(false);
  const auth = getAuth();
  const { setUserLogged, userLogged } = useContext(ChatContext);

  // const makeUser = doc(db, "chat-app-12-07-2022/3242423");

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

      // async function saveDate() {
      //   try {
      //     const docRef = await addDoc(collection(db, "users"), {
      //       id: userLogged.id,
      //       chats: [],
      //     });
      //     setDoc(makeUser, docRef);
      //   } catch (e) {
      //     console.log(e);
      //   }
      // }
      // console.log("a");
      // saveDate();
    });
  }, []);

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
