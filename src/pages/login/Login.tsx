import React, { useContext, useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../../context/ChatContext";

const Login = () => {
  const { changeTheme } = useContext(ChatContext);
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const provider = new GoogleAuthProvider();
  let themeSaved = localStorage.getItem("theme");

  useEffect(() => {
    if (themeSaved === "light") changeTheme("dark");
    else changeTheme("light");
  }, []);

  const signInWithGoogle = async () => {
    setAuthing(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/home");
      })
      .catch((error) => {
        setAuthing(false);
      });
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      sx={{
        backgroundColor: "primary.main",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <Button
        color="secondary"
        variant="contained"
        size="small"
        onClick={() => signInWithGoogle()}
        disabled={authing}
      >
        Login
      </Button>
      <Button
        color="secondary"
        variant="contained"
        size="small"
        onClick={() => changeTheme()}
      >
        Change thema
      </Button>
    </Box>
  );
};

export default Login;
