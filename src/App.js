import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Compoentes/Header";
import Home from "./Compoentes/Home";
import CreateAccount from "./Compoentes/Login/CreateAccount";
import SendOtp from "./Compoentes/Login/SendOtp";
import Login from "./Compoentes/Login/Login";
import User from "./Compoentes/Role Navigation/User";
import Admin from "./Compoentes/Role Navigation/Admin";
import ForgotPassword from "./Compoentes/Login/Forgotpassword";

function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Header />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/register" element={<CreateAccount />} />

          <Route path="/otp" element={<SendOtp />} />

          <Route path="/login" element={<Login />} />

          <Route path="/forgot-password" element ={<ForgotPassword />} />

          <Route path="/user" element={<User />} />

          <Route path="/admin" element={ <Admin />} />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;