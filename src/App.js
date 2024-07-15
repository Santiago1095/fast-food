
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import TitleTwho from "./components/TitleTwo";
import TitleOne from "./components/TitleOne";
import Search from "./components/Search";
import ElBuenGusto from "./components/Restaurants/ElBuenGusto";
import Restaurants from "./components/Restaurants/Restaurants";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <TitleOne />
      <Search />
      
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="/restaurants/el-buen-gusto" element={<ElBuenGusto/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
