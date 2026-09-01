import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Compoentes/Header";
import Home from "./Compoentes/Home";
import CreateAccount from "./Compoentes/Login/CreateAccount";
import SendOtp from "./Compoentes/Login/SendOtp";
import Login from "./Compoentes/Login/Login";

function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Header />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/register" element={<CreateAccount />}/>

          <Route path="/otp" element={<SendOtp />} />

          <Route path="/login" element={<Login />} />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;