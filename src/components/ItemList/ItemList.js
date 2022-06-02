import { useEffect, useState } from "react"
import { Grid } from "@mui/material"
import ItemCount from "../ItemCount/ItemCount"
import './ItemList.css'
import products from "../../utils/productsMock"
import React from 'react';


const ItemList = ({products}) => {
    const [products, setProducts] = useState ([])
useEffect( () => {

    getProducts()
    .then( result => setProducts(result))
    .catch(error => console.log(error)) 
},[])

        

    return(
        <>
        <h2>{title}</h2>
        <Grid container spacing={1}>
            {
                products.map( (productos) => {
                    const {id, title, price, description, image} = productos
                    return(
                        <div key={id} className='imgMapProducts' >
                            <img src={image} />
                            
                            <h2>{title}</h2>
                            <p>El precio es de : {price}</p>
                            <p>{description}</p>
                            <ItemCount />
                        </div>
                    )
                })
            }
        </Grid>
        </>
    )
}
export default ItemList





