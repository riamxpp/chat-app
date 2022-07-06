import React, { useContext, useState } from "react";
import { Box, Button } from "@mui/material";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../../context/ChatContext";

const Login = () => {
  const { changeTheme, themeName } = useContext(ChatContext);
  const auth = getAuth();
  // const user = auth.currentUser;
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const provider = new GoogleAuthProvider();
  console.log("login: ", themeName);
  const signInWithGoogle = async () => {
    setAuthing(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log("result: ", result.user.uid);
        // const token = result
        navigate("/home");
      })
      .catch((error) => {
        setAuthing(false);
      });
  };

  return (
    <Box sx={{ background: "primary.main" }}>
      <p>Login page </p>
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
