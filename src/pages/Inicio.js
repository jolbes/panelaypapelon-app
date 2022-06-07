import React, { useState, Fragment } from "react";
import { Box, Container, SvgIcon } from "@mui/material";


import "./Inicio.css";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
const Inicio = () => {
  return (
    <>
      <div className="indexDivContainer container-fluid mx-auto bg-fixed flex flex-col flex-wrap">
        <h1 className="hero flex-wrap self-center">
          Alimentación sana, vida sana!
        </h1>
        <p className="heroSub">
          Queremos ser complices en una buena alimentación
        </p>
      </div>
      <Container className="flex">

        <div className="bar1 flex align-middle m-4 justify-center">
          <p className="m-3">Cuidamos de tu alimentación</p>
        
        
          <p className="m-3">Apoyamos una vída saludable</p>
        
        
          <p className="m-3">Cuidamos de tu alimentación</p>
        </div>
        
      </Container>
    </>
  );
};

export default Inicio;
