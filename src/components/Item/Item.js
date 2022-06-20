import './Item.css'
import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext'
import CartContext from '../../context/CartContext'


const Item = ({ image, title, price, stock, id}) => {
    const { darkTheme } = useContext(ThemeContext)
    const { addProductToCart } = useContext(CartContext)
    return(
        <Card sx={{ minWidth: 275 }} className={`card-item-container ${darkTheme ? 'dark-mode' : ''}`}>
            <CardContent>
                <div className="card-item">
                    <div className="card-item__img-box">
                        <img src={`/${image}`} alt={"producto"}/> 
                    </div>
                    <div className='card-item__data-box'>
                        <div className='card-info-data'>
                            <p>{title}</p>
                            <span>Precio: $ {price}</span>
                        </div>
                    </div>
                        <Button variant={'contained'} className="card-btn-details">
                            <Link to={`/item/${id}`}>Ver Detalle</Link>
                        </Button>
                        <Button 
                            variant={'contained'} 
                            className="card-item-button"
                            onClick={() => addProductToCart({ image, title, price, stock, id})}
                        >
                                Agregar al carrito
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Item
