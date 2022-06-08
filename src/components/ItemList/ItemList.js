import React from "react";
import Item from "../Item/Item";


const ItemList = ({ products }) => {
  return (
    <>
    <div className="item__list">
      {products.map((product) => (
        <Item className='item__list__card' product={product} />
        ))}
        
    </div>
    </>
  );
};
export default ItemList;
