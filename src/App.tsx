import React, { useEffect, useState } from "react";
import Login from "./pages/login/Login";
import "./App.css";
import { initializeApp } from "firebase/app";
import { config } from "./config";
import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./pages/AuthRoutes";
import Home from "./pages/home/Home";
import { ThemeProvider, makeStyles } from "@mui/material";
import { LightTheme } from "./themes/LightTheme";
import { currentTheme } from "./themes";

initializeApp(config.firebaseConfig);

const useStyles = makeStyles({
  root: () => {},
});

let curentThemePage = LightTheme;

function App() {
  const [themeName, setThemeName] = useState("light");
  const classes = useStyles;

  useEffect(() => {
    currentTheme(themeName);
  }, [themeName]);

  return (
    <>
      <ThemeProvider theme={curentThemePage}>
        <div className={classes}>
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
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
