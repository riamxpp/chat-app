import { Avatar, Box, Button, Typography } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import Teste from "../../../../teste.jpg";

const HeaderMessage = () => {
  const auth = getAuth();
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <Box
      component="header"
      display="flex"
      width="100%"
      height="65px"
      sx={{
        padding: "10px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      bgcolor="secondary.main"
    >
      <Box display="flex" sx={{ gap: "1rem" }}>
        <Avatar alt="Your picture profile" src={Teste} />
        <Box
          display="flex"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Typography
            height="auto"
            sx={{ color: "secondary.contrastText" }}
            component="span"
          >
            User
          </Typography>
        </Box>
      </Box>
      <Box>
        <Button
          onClick={handleLogout}
          variant="contained"
          size="small"
          sx={{
            justifySelf: "flex-end",
            textTransform: "initial",
            height: "30px",
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderMessage;
