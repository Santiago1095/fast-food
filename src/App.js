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
import TazBurguer from "./components/Restaurants/TazBurguer";
import ArrozChinoYopalE from "./components/Restaurants/ArrozChinoYopalE";
import LaLlamarada from "./components/Restaurants/LaLlamarada";
import RapiRoy from "./components/Restaurants/RapiRoy";
import PizzeriaLa19Con30 from "./components/Restaurants/PizzeriaLa19Con30";
import ElCarriel from "./components/Restaurants/ElCarriel";
import HamburguesasElCalvo from "./components/Restaurants/HamburguesasElCalvo";
import MoryFresas from "./components/Restaurants/MoryFresas";
import ArepasArepas from "./components/Restaurants/ArepasArepas";

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
        <Route path="/restaurants/arroz-chino-express" element={<ArrozChinoYopalE />} />
        <Route path="/restaurants/la-llamarada" element={<LaLlamarada />} />
        <Route path="/restaurants/taz-burguer" element={<TazBurguer />} />
        <Route path="/restaurants/rapi-roy" element={<RapiRoy />} />
        <Route path="/restaurants/la-perrada-de-yei" element={<LaPerradaDeYei />} />
        <Route path="/restaurants/pizzeria-la-19-con-30" element={<PizzeriaLa19Con30 />} />
        <Route path="/restaurants/el-carriel" element={<ElCarriel />} />
        <Route path="/restaurants/hamburguesas-el-calvo" element={<HamburguesasElCalvo />} />
        <Route path="/restaurants/mory-fresas" element={<MoryFresas />} />
        <Route path="/restaurants/arepas-arepas" element={<ArepasArepas />} />







      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
