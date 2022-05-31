import {useState, useEfect} from "react"
import {Products} from "../../utils/productsMock"
import ItemList from "../ItemList/ItemList"
import {Spinner} from "../Loading/Loading"


const ItemListContainer2 = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    useEfect(() =>{
        Products()
        .then(result => 
            {setProducts(result); 
            setLoading(false)}
            )
        .catch(
            error => console.log(error)
            )
    })
    return(
        <div>
            <h1>{greeting}</h1>
            {loading && <Spinner />}
            {!loading && <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer2