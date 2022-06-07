import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ItemList from "./components/ItemList/ItemList";
import Inicio from "./pages/Inicio";
import Tienda from "./pages/Tienda";
import Contacto from "./pages/Contacto";
import ItemListContianer from "./components/ItemListContainer/ItemListContianer";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContianer />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
