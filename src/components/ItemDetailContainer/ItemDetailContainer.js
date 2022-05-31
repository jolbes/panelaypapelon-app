import { useEffect, useState } from "react"
import Item from "../Item/Item"
import ItemDetail from "../ItemDetail/ItemDetail";
import { product } from "../../utils/productsMock"

const ItemDetailContainer = ({greeting}) => {
    const [item, setProduct] = useState()
    const getItem = () => {
        return new Promise ( (resolve, reject)  => {
            setTimeout( () => {
                resolve(product)
                
            }, 2000 )
            
        })
    }
    useEffect ( () => {
        getItem()
        .then( (res) => {
            setProduct(res)
        })
    },[])



    return(
        <>
        <div>
            <h1>Detalles del producto</h1>
        </div>
            <ItemDetail data={product} />
            
        </>
        
    )
}
export default ItemDetailContainer