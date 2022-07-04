import React, { useState } from "react";
import { Box } from "@mui/material";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    setAuthing(true);
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <Box>
      <p>Login page </p>
      <button onClick={() => signInWithGoogle()} disabled={authing}>
        Login
      </button>
    </Box>
  );
};

export default Login;
