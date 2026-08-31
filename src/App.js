import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Compoentes/Header";
import Home from "./Compoentes/Home";
import CreateAccount from "./Compoentes/Login/CreateAccount";
import OTP from "./Compoentes/Login/OTP";
import SendOtp from "../src/Compoentes/Login/SendOtp"

function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Header />

       
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/register" element={<CreateAccount />} />

          <Route path="/otp" element={<SendOtp />} /> </Routes>

      </div>
       <OTP />

    </BrowserRouter>
  );
}

export default App;