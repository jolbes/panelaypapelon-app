import "./ItemCount.css";
import { Button } from "@mui/material";
import React, { useState} from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);
  const [showButton, setShowButton] = useState(false)
  const addCount = () => {
    if (count < stock) 
      setCount(count + 1);

  };
  const removeCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="item-count">
        <Button onClick={removeCount} disabled={count === 0}>
          -
        </Button>
        <p>{count}</p>
        <Button onClick={addCount}>+</Button>
      </div>
      
        <Button onClick={() => {
            setShowButton(true)
          }}
          > Agregar Producto
        </Button>
        {showButton == true && <Button variant="outlined"><Link to='/cart'>Terminar Compra</Link></Button> }
      
    </>
  );
};
export default ItemCount;
