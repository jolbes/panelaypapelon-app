import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import React from 'react';
import { product } from "../../utils/productsMock";

const ItemDetail = ({product}) => {
    const {title, image, description, price, stock} = product
    console.log(product)
    return(
        <div className="itemDetail">
            <h2>
                {title}
            </h2>
            <img src={image} />
            <p>Descripcion: {description}</p>
            <span>Precio: ${price}</span>
            <span>En stock: {stock}</span>
            <ItemCount initial={1} stock={stock}/>

        </div>
    )
}

export default ItemDetail