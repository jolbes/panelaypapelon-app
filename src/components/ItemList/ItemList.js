import { useEffect, useState } from "react"
import { Grid } from "@mui/material"
import { Card } from "@mui/material"
import ItemListContianer from "../ItemListContianer/ItemListContianer"
import ItemCount from "../ItemCount/ItemCount"
import './ItemList.css'



const ItemList = ({title}) => {
    const [productos, setProducts] = useState ([])
    const products = [
        {
        id: 1,
        title:"Producto 1",
        price: 10000,
        stock: 1,
        description: 'Descripcion 1',
        image: "./assets/items/producto1.webp"
        },
        {
        id: 2,
        title:"Producto 2",
        price: 20000,
        stock: 2,
        description: 'Descripcion 2',
        image: "./assets/items/producto2.webp"
        },
        {
        id: 3,
        title:"Producto 3",
        price: 30000,
        stock: 3,
        description: 'Descripcion 3',
        image: "./assets/items/producto3.webp"
        },
        {
        id: 4,
        title:"Producto 4",
        price: 40000,
        stock: 4,
        description: 'Descripcion 4',
        image: "./assets/items/producto4.webp"
        },
        {
        id: 5,
        title:"Producto 5",
        price: 50000,
        stock: 5,
        description: 'Descripcion 5',
        image: "./assets/items/producto5.webp"
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





