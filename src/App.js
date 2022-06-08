import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Tienda from "./pages/Tienda";
import Contacto from "./pages/Contacto";
import ItemListContianer from "./components/ItemListContainer/ItemListContianer";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContianer/>} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/AboutUs" element={<AboutUs />} /> 
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
