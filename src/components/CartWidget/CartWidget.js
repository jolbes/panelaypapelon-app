import React, { useState, useContext } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () =>  {
    const { cartListItems, deleteProduct } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className='cart-container-icon'>
            <div className='divCartListItems'>
            <ShoppingBasketIcon className='icon-cart'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                fontSize="large"
            />
            <p className='cartListItems'>{cartListItems.length}</p>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-item-list-cart'>
                    {cartListItems.length === 0 && (
                        <>
                            <p>No hay productos agregados al carrito</p>
                            <Link to="/" >Empezar a comprar</Link>
                        </>
                    )}
                    {cartListItems.map( (item) => {
                        return(
                        <div className='item-cart-prod' key={item.id}>
                            <div className='cart-prod__image'>
                                <img src={`/${item.image}`} alt="prod carrito" />
                            </div>
                            <div className='cart-prod__info'>
                                <p>{item.title}</p>
                                <span>$ {item.price}</span>
                            </div>
                            <div className='cart-prod__action'>
                                <button onClick={() => deleteProduct(item)}>
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                        )
                    })}
                    <div className='cart-checkout-details'>
                        <Link to="/cart">
                            <button style={{cursor: 'pointer'}} onClick={handleClose}>Terminar compra</button>
                        </Link>
                    </div>
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget