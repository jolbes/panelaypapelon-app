import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const ItemDetail = ({data}) => {
    const {title, image, description, price, stock} = data
    console.log(data)
    
    return(
        <>
        <div className="itemDetail">
            <h2>{title}</h2>
            <img src={image} alt="Producto"/>
            <p>Descripcion: {description}</p>
            <span>Precio: ${price}</span>
            <span>En stock: {stock}</span>
            <ItemCount initial={1} stock={stock}/>
        </div>

        </>
    )
}

export default ItemDetail