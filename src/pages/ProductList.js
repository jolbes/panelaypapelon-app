import React, { useEffect, useState } from "react"
import ItemList from "../components/ItemList/ItemList"
import Filters from '../components/Filters/Filter'

const ProductList = () => {
    return(
        <div className='general-container list-product-container'>
            <Filters />
            <div>
                <ItemList title={'LISTADO DE PRODUCTOS'}/>
            </div>
        </div>
    )
}

export default ProductList