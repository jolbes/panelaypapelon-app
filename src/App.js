import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'


function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<h1>Hello World</h1>} />
          </Routes>
        </BrowserRouter>
        <ItemDetailContainer />
  
      </div>
    </>
  );
}

export default App;
