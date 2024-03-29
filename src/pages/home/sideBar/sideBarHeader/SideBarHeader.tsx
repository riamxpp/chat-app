import { Avatar, Box, Button, Switch } from "@mui/material";
import React, { useContext, useEffect } from "react";
import MessageIcon from "@mui/icons-material/Message";
import { ChatContext } from "../../../../context/ChatContext";
import * as EmailValidator from "email-validator";
import LogoutIcon from "@mui/icons-material/Logout";
import { getAuth, signOut } from "firebase/auth";

const SideBarHeader = () => {
  const {
    userLogged,
    handleNewConversetion,
    setDateConversations,
    changeTheme,
  } = useContext(ChatContext);
  const auth = getAuth();

  useEffect(() => {
    const takeAllConversetions = () => {
      fetch(
        "https://chat-app-f3ec0-default-rtdb.firebaseio.com/Conversations.json"
      )
        .then((res) => res.json())
        .then((json) => {
          setDateConversations(json);
        })
        .catch((error) => console.log(error));
    };
    takeAllConversetions();
  }, [setDateConversations]);

  const startNewConversation = async () => {
    const emailPrompt = prompt("Insira o endereço de email!");
    if (!emailPrompt) {
      alert("Email inválido");
    } else {
      if (!EmailValidator.validate(emailPrompt)) {
        alert("Email inválido");
      } else if (emailPrompt === userLogged.email) {
        alert("Insira um email diferente do seu!");
      } else {
        handleNewConversetion(emailPrompt);
      }
    }
  };
  const handleLogout = () => {
    signOut(auth);
  };

  if (!userLogged) return <div>ERROR</div>;
  return (
    <Box
      bgcolor="secondary.main"
      component="header"
      display="flex"
      sx={{
        width: "100%",
        height: "65px",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Box>
        <Avatar alt="Your picture profile" src={userLogged.photoURL} />
      </Box>
      <Box display="flex" sx={{ flexDirection: "row", gap: "1rem" }}>
        <Box
          display="flex"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Button size="small" sx={{ minWidth: "auto" }}>
            <MessageIcon
              onClick={startNewConversation}
              sx={{ color: "secondary.contrastText" }}
            />
          </Button>
        </Box>
        <Box
          display="flex"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Switch
            aria-label="Trocar tema"
            onClick={() => changeTheme()}
            color="default"
          ></Switch>
        </Box>
        <Box
          display="flex"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Button size="small" sx={{ minWidth: "auto" }} onClick={handleLogout}>
            <LogoutIcon sx={{ color: "secondary.contrastText" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBarHeader;
