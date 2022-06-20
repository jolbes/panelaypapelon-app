import React, { useState } from "react"
import { Button } from '@mui/material';

const ItemCount = ({stock, cantidad, setCantidad, setShowButton}) => {

    const addProduct = () => { 
        if(cantidad < stock){
        setCantidad(cantidad + 1)
        }
    }

    return(
        <>
        <label>Selecciona cantidad</label>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px 0'}}>
            <button >-</button>
            <p>{cantidad}</p>
            <button onClick={addProduct}>+</button>
        </div>
        <Button className="btn__Add_Producto" 
        variant='contained' 
        onClick={() => setShowButton(true)}>Agregar producto</Button>
        </>
    )
}

export default ItemCount
