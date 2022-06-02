import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'


function App() {
  return (
    <>
      
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
        
    </>
  );
}

export default App;
