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

const ItemList = ({title}) => {
    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect( () => {
        setProducts([])
            category ? filterByCategory(productos, category) : setProducts(productos)
    }, [category])


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