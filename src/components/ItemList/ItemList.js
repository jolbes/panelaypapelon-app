import React, { useState, useEffect } from 'react';
import Item from '../Item/Item'
import { Grid } from '@mui/material';
import productos from "../../utils/productsMock"
import { useParams } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
//import "swiper/css";
//import "swiper/css/pagination";
//import "swiper/css/navigation";

//Firesotre
import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/FirebaseConfig'

const ItemList = ({title}) => {
    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect( () => {
        setProducts([])
        getProducts()
            .then((productos)=>{
            console.log("Productos: ", productos)
            category ? filterByCategory(productos, category) : setProducts(productos)
        })
    }, [category])

    const getProducts = async () =>{
        const productSnapshot = await getDocs(collection(db, "productos"));
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            //console.log("Product:", product)
            return product
        })
        return productList
        
    }

    const filterByCategory = (array, category) => {
        return array.map( (item) => {
            if(item.category === category) {
                return setProducts(products => [...products, item])
            }
        })
    }
    return(
        <>
        <h2>{title}</h2>
        <Grid container spacing={2}>

            {
                products.map( ({title, price, image, id, stock}) => {
                    return(
                        <SwiperSlide key={id}>
                            <Item 
                                title={title} 
                                price={price} 
                                image={image} 
                                stock={stock} 
                                id={id}
                            />
                        </SwiperSlide>
                    )
                })
            }
        

        </Grid>
        </>
    )
}

export default ItemList