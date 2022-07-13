import React from "react";
import Login from "./pages/login/Login";
import "./App.css";
import { initializeApp } from "firebase/app";
import { config } from "./config";
import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./pages/AuthRoutes";
import Home from "./pages/home/Home";
import { ChaStorage } from "./context/ChatContext";
import { getFirestore } from "firebase/firestore";

export const index = initializeApp(config.firebaseConfig);
export const db = getFirestore(index);

function App() {
  return (
    <>
      <ChaStorage>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <AuthRoutes>
                <Home />
              </AuthRoutes>
            }
          />
        </Routes>
      </ChaStorage>
    </>
  );
}

export default App;
