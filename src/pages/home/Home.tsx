import React from "react";
import { getAuth, signOut } from "firebase/auth";

const Home = () => {
  const auth = getAuth();

  return (
    <div>
      <p>Home</p>
      <button onClick={() => signOut(auth)}>Sign out</button>
    </div>
  );
};

export default Home;
