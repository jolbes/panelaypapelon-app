import "./ItemCount.css";
import { Alert, AlertTitle, Button } from "@mui/material";
import { useState } from "react";

const ItemCount = ({ initial, stock, title }) => {
  const [count, setCount] = useState(initial);
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
      <Button className="btn-buy"
        onClick={(onAdd) => {
          if (count !== 0) {
            console.log(`La cantidad de items a comprar es: ${count}`)
          }
        }}>
        Comprar
      </Button>
    </>
  );
};
export default ItemCount;
