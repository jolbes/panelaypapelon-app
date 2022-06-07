import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import getProducts from "../../utils/productsMock";
import "./ItemListContianer.css";

const ItemListContianer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        //console.log("Then: Respuesta Promesa: ", response)
        setProducts(response);
      })
      .catch((err) => {
        //console.log("Catch: Fallo la llamada.", err)
      })
      .finally(() => {
        //console.log("Finally: Termina la promesa")
      });
  }, []);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContianer;
