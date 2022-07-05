import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const provider = new GoogleAuthProvider();

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
    <Box>
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
    </Box>
  );
};

export default Login;
