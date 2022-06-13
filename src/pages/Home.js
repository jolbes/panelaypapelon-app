import ItemList from "../components/ItemList/ItemList"
import React, { useEffect, useState } from "react"

const Home = () => {
    return(
        <div className='general-container'>
            <ItemList className='gcIlTitle' title={'Gran Ofertón'}/>
            <ItemList className='gcIlTitle' title={'Productos Recomendados'}/>
            <ItemList className='gcIlTitle' title={'Descuentos especiales'}/>
        </div>
    )
}

export default Home
