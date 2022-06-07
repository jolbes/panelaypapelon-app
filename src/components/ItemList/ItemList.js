import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material"
import ItemCount from "../ItemCount/ItemCount"



const ItemList = ({title}) => {
    const [productos, setProducts] = useState ([])
    const products = [
        {
        id: 1,
        title:"Producto 1",
        price: 10000,
        stock: 5,
        description: '',
        image: "producto1.webp"
        },
        {
        id: 2,
        title:"Producto 2",
        price: 20000,
        stock: 5,
        description: '',
        image: "producto2.webp"
        },
        {
        id: 3,
        title:"Producto 3",
        price: 30000,
        stock: 5,
        description: '',
        image: "producto3.webp"
        },
        {
        id: 4,
        title:"Producto 4",
        price: 40000,
        stock: 5,
        description: '',
        image: "producto4.webp"
        },
        {
        id: 5,
        title:"Producto 5",
        price: 50000,
        stock: 5,
        description: '',
        image: "producto5.webp"
        },
    ]

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(products)
            }, 2000)
        })
    }
    useEffect( () => {
        getProducts()
        .then( (response) => {
            //console.log("Then: Respuesta Promesa: ", response)
            setProducts(response)
        })
        .catch( (err) => {
            //console.log("Catch: Fallo la llamada.", err)
        })
        .finally( () => {
            //console.log("Finally: Termina la promesa")
        })
    },[])

    return(
        <>
        <h2>{title}</h2>

        <Grid container spacing={1}>
            {
                products.map( (productos) => {
                    const {id, title, price, description, image} = productos
                    return(
                        <div key={id}>
                            <img src="./assets/items/producto1.webp" />
                            <h2>{title}</h2>
                            <p>El precio es de : {price}</p>
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