import Login from "./pages/login/Login";
import "./App.css";
import { initializeApp } from "firebase/app";
import { config } from "./config";
import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./pages/AuthRoutes";
import Home from "./pages/home/Home";

initializeApp(config.firebaseConfig);

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
