import "./NavBar.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LoginWidget from "../LoginWidget/LoginWidget";
import CartWidget from "../CartWidget/CartWidget";
import { Button } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <AppBar position="static header-primary">
      <Toolbar className="navbar">
        <div container className="nav-logo">
          <a href="/">
            <img
              src="./assets/brand/logo.png"
              alt="Logo Panela & Papelon Market"
            ></img>
          </a>
        </div>
        <div container className="nav-links">
          <ul className="nav-ul">
          <li>
              <Button disableRipple style={{color: 'orange'}} variant="text" className="btn-links" href="/">Inicio</Button>
            </li>
            <li>
              <Button disableRipple style={{color: 'orange'}} variant="text" className="btn-links" href="/tienda">Tienda</Button>
            </li>
            <li>
              <Button disableRipple style={{color: 'orange'}} variant="text" className="btn-links" href="/acerca">Acerca de</Button>
            </li>
            <li>
              <Button disableRipple style={{color: 'orange'}} variant="text" className="btn-links" href="/contacto">Contacto</Button>
            </li>
          </ul>
        </div>
        <div className="nav-login-cart">
          <Button>
            {" "}
            <LoginWidget />
            <span>Login</span>{" "}
          </Button>
          <Button>
            {" "}
            <CartWidget />
            <span>Carrito</span>{" "}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
