import './ItemListContianer.css'
import {Card, Button, CardContent } from '@mui/material';
import ModalWindows from '../Modal/Modal';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemListContianer = ({title, price, image}) => {
    const [open, setOpen] = useState(false)
    

    const handleColse = () =>{
      setOpen(false)
    }

    //console.log("Propiedades de ItemList", props)
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent className='card__content'>
                <div className="card__item">
                    <div className='card__item__inside'>
                        <img src={`./assets/items/${image}`} alt='Imagen de producto' />
                    <Button variant={'outlined'} onClick={() => setOpen(true)}>Detalle</Button> 
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <ItemCount />
                </div>
            </CardContent>
            <ModalWindows handleColse={handleColse} open={open}>
                <h2>Detalle del Producto</h2>
                <div className='imgDivModal'>
                    <img src={`./assets/items/${image}`} alt='Imagen de producto' />
                </div>
                <div>Nombre: {title}</div>
                <span>Precio: $ {price}</span>
                <Button onClick={()=> setOpen(false)}>Cerrar</Button>

            </ModalWindows>
        </Card>
    )
}

export default ItemListContianer