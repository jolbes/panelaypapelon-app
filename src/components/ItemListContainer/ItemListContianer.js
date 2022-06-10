import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import getProductos from "../../utils/productsMock";
import "./ItemListContianer.css";


const ItemListContianer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((response) => {
        setProductos(response);
      })
      .catch((err) => {
      })
      .finally(() => {
      });
  }, []);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContianer;
