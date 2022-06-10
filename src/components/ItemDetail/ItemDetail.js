import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@mui/material';


const ItemDetail = ({data}) => {
    const [size, setSize] = useState('');
    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)

    const handleChange = (event) => {
        setSize(event.target.value);
    };
    const addProductToCart = () => {
        console.log("PRODUCTO A AGREGAR: ", data)
        console.log("CANTIDAD:", cantidad )
    }

    console.log("Data desde ItemDetail: ", data)
    return (
        <div className='detail-product-container'>
            <div className="detail-product-image">
                <img src={`/${data.image}`} alt="imgProduct"/>
            </div>
            <div className="detail-product-info">
                <div className='detail-product-info__title'>
                    <h2>{data.title}</h2>
                    <FavoriteBorderIcon  />
                </div>
                <p>{data.price}</p>
                <span>3 Cuotas sin interés de $ {data.price / 3}</span>
                
                <label>Selecciona el peso</label>
                <Select
                    className='select-custom'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    placeholder="Selecciona tu talle"
                    onChange={handleChange}
                    >
                    <MenuItem value={'s'}>250 gr/ml</MenuItem>
                    <MenuItem value={'m'}>500 gr/ml</MenuItem>
                    <MenuItem value={'l'}>1 Kg/Lt</MenuItem>
                </Select>
                {!showButton ?
                <ItemCount 
                    cantidad={cantidad}
                    setShowButton={setShowButton}
                    setCantidad={setCantidad}
                />
                :
                <Button variant='outlined'><Link to='/cart'>Termina mi compra</Link></Button>
                }
                
            </div>
        </div>
    )
}

export default ItemDetail