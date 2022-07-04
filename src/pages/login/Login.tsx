import React, { useState } from "react";
import { Box } from "@mui/material";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
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
