import React from "react";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/profile" Component={Profile} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
