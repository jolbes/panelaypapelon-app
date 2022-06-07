import { useState, useEfect } from "react";
import { products } from "../../utils/productsMock";
import ItemList from "../ItemList/ItemList";
import React from "react";

const ItemListContainer2 = ({ data }) => {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer2;
