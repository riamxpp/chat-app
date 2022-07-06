import React, { useContext, useEffect, useState } from "react";
import Login from "./pages/login/Login";
import "./App.css";
import { initializeApp } from "firebase/app";
import { config } from "./config";
import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./pages/AuthRoutes";
import Home from "./pages/home/Home";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./themes/LightTheme";
import { currentTheme } from "./themes";
import { ChatContext } from "./context/ChatContext";

initializeApp(config.firebaseConfig);

function App() {
  const [curentThemePage, setCurentThemePage] = useState(LightTheme);
  const { themeName, setThemeName } = useContext(ChatContext);

  useEffect(() => {
    setCurentThemePage(currentTheme(themeName));
  }, [themeName]);

  return (
    <>
      <ThemeProvider theme={curentThemePage}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
