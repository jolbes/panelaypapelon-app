import './NavBar.css'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';




const NavBar = () => {
    return(
        <AppBar position="static">
                <Toolbar className='navbar'>
                        <div container className='nav-logo'>
                            <img src='./assets/brand/logo.png' alt='Logo Panela & Papelon Market' ></img>
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
                        <LoginIcon container className='btnLogin' fontSize='large' />
                        <ShoppingCartIcon container className="btnCart" fontSize='large' />
                        </div>
                </Toolbar>
        </AppBar>
        )
    }
    
    export default NavBar