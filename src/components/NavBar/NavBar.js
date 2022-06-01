import './NavBar.css'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LoginWidget from '../LoginWidget/LoginWidget';
import CartWidget from '../CartWidget/CartWidget'
import { Button } from '@mui/material';



const NavBar = () => {
    return(
        <AppBar position="static">
                <Toolbar className='navbar'>
                        <div container className='nav-logo'>
                            <a href='index.html'><img src='./assets/brand/logo.png' alt='Logo Panela & Papelon Market' ></img></a>
                            
                        </div>
                        <div container className='nav-links'>
                            <ul className='nav-ul'>
                                <li>
                                    <button>Inicio</button>
                                </li>
                                <li>
                                    <button>Tienda</button>
                                </li>
                                <li>
                                    <button>Acerca de</button>
                                </li>
                                <li>
                                    <button>Contacto</button>
                                </li>
                            </ul>
                        </div>
                        <div className='nav-login-cart'>
                            <Button> <LoginWidget /><span>Login</span> </Button>
                            <Button> <CartWidget /><span>Carrito</span> </Button>
                            
                        </div>
                </Toolbar>
        </AppBar>
        )
    }
    
    export default NavBar