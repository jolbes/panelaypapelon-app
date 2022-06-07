import React, { useEffect, useState } from "react"
import Item from "../Item/Item"
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../../utils/productsMock"

const ItemDetailContainer = ({greeting}) => {
    const [item, setProduct] = useState({})
    const getItem = () => {
        return new Promise ( (resolve, reject)  => {
            setTimeout( () => {
                resolve(products)
                
            }, 2000 )
        })
    }
    useEffect ( () => {
        getItem().then( (res) => {

            setProduct(res)
        })
    },[])

    return(
    <>
        <div>
            <h1>Detalles del producto</h1>
        </div>
        {Object.keys(products).length > 0 && <ItemDetail data={products} />}
        </>)

}

export default ItemDetailContainer