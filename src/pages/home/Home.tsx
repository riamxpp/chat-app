import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";

const Home = () => {
  const [logout, setLogout] = useState(false);
  const auth = getAuth();
  console.log(auth);

  const logoutWithGoogle = () => {
    setLogout(true);
    signOut(auth)
      .then((resolver) => {
        setLogout(true);
        console.log("resolver: ", resolver);
      })
      .catch((error) => {
        setLogout(false);
        console.log("error: ", error);
      });
  };

  return (
    <div>
      <p>Home</p>
      <button onClick={() => logoutWithGoogle()} disabled={logout}>
        Sign out
      </button>
    </div>
  );
};

export default Home;
