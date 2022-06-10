import ItemList from "../components/ItemList/ItemList"
import React, { useEffect, useState } from "react"

const Home = () => {
    return(
        <div className='general-container'>
            <ItemList title={'Gran Ofertón'}/>
            <ItemList title={'Productos Recomendados'}/>
            <ItemList title={'Descuentos especiales'}/>
        </div>
    )
}

export default Home
