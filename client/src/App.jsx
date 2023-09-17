import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Indexpage from "./pages/Indexpage";
import Accountpage from "./pages/accountpage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";

axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Indexpage />} />
            <Route path={"/login"} element={<Loginpage />} />
            <Route path={"/Register"} element={<Registerpage />} />
            <Route path={"/account/:subpage?"} element={<Accountpage />} />
            <Route
              path={"/account/:subpage/:action"}
              element={<Accountpage />}
            />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
