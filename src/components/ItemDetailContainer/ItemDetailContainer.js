import React, { useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from '../../utils/productsMock'
import { useParams, useNavigate } from "react-router-dom"
import { doc, getDoc } from 'firebase/firestore'
import db from '../../utils/FirebaseConfig'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product , setProduct] = useState({})

    useEffect(() => {
        
        getProduct()
        .then( (prod) => {
            console.log("Respuesta GetItem: ", prod)
            setProduct(prod)
        })
        // console.log("productFilter: ", productFilter)
        // if(productFilter === undefined){
        //     navigate('/notFound')
        // }else {
        //     setProduct(productFilter)
        // }
    }, [id])

    const getProduct = async() => {
        const docRef = doc(db, "productos", id)
        const docSnaptshop = await getDoc(docRef)
        console.log("docSnaptshop: ", docSnaptshop)
        let product = docSnaptshop.data()
        product.id = docSnaptshop.id
        console.log("producto unico: ", product)
        return product
    }

     const productFilter = productos.find( (product) => {
         return product.id == id
     })

    return(
        <>
            <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer