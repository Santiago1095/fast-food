import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import TitleOne from "./components/TitleOne";
import Search from "./components/Search";
import Restaurants from "./components/Restaurants/Restaurants";
import Footer from "./components/Footer";
import GurmetYSazon from "./components/Restaurants/GurmetYSazon";
import LaPerradaDeYei from "./components/Restaurants/LaPerradaDeYei";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <TitleOne />
      <Search />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/gourmet-y-sazon" element={<GurmetYSazon />} />
        <Route path="/restaurants/la-perrada-de-yei" element={<LaPerradaDeYei />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
