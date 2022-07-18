import { Avatar, Box, Button } from "@mui/material";
import React, { useContext } from "react";
import MessageIcon from "@mui/icons-material/Message";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { ChatContext } from "../../../../context/ChatContext";
import * as EmailValidator from "email-validator";
import LogoutIcon from "@mui/icons-material/Logout";
import { getAuth, signOut } from "firebase/auth";

const SideBarHeader = () => {
  const { userLogged, handleNewConversetion } = useContext(ChatContext);
  const auth = getAuth();

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
        await handleNewConversetion(emailPrompt);
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
          <Button
            size="small"
            sx={{ minWidth: "auto" }}
            // onClick={handleNewConversetion}
          >
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
          <Button size="small" sx={{ minWidth: "auto" }}>
            <CropFreeIcon sx={{ color: "secondary.contrastText" }} />
          </Button>
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
