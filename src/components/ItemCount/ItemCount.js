import React, { useState } from "react"
import { Button } from '@mui/material';

const ItemCount = ({stock, initial, onAdd, setShowState}) => {

    const [count, setCount] = useState(initial)
    const handleClick = (e) =>{
        e.preventDefault();
        setShowState(true)
        onAdd(count)
    }


    return(
        <>
        <label>Selecciona cantidad</label>
        <Button 
        variant="outlined" 
        onClick={() => setCount(count - 1)} 
        disabled={count < 1}>
            -
        </Button>
        <p>{count}</p>
        <Button 
        variant="outlined" 
        onClick={() => setCount(count + 1)} 
        disabled={count >=  stock}>
            +
        </Button>

        <div className="container-btn">
                <Button
                variant="contained" 
                onClick={handleClick} 
                disabled={stock===0 || count===0} 
                className="btn-carrito">
                    AGREGAR AL CARRITO
                </Button>
        </div>

         </>
    )
    }

export default ItemCount
