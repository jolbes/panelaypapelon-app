import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer2 from "./components/ItemDetailContainer/ItemDetailContainer";
import Index from "./pages/Index";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'



function App() {
  return (
    <>
      
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/products/' element={<ItemListContainer2 />} />
          </Routes>
        </BrowserRouter>
        
    </>
  );
}

export default App;
