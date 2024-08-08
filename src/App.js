import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import TitleOne from "./components/TitleOne";
import Search from "./components/Search";
import ElBuenGusto from "./components/Restaurants/ElBuenGusto";
import Restaurants from "./components/Restaurants/Restaurants";
import Footer from "./components/Footer";
import GurmetYSazon from "./components/Restaurants/GurmetYSazon";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <TitleOne />
      <Search />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/el-buen-gusto" element={<ElBuenGusto />} />
        <Route path="/restaurants/gurmet-y-sazon" element={<GurmetYSazon />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
