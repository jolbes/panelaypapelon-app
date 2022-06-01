import "./App.css";
import React from "react";
import {Routes, Route, BrowserRouter, } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContianer/ItemListContianer"
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<h1>Hello</h1>} />
          </Routes>
        </BrowserRouter>
          <ItemCount/>

      </div>
    </>
  );
}

export default App;
