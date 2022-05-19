import './ItemListContianer.css'
import {Card, Button, CardContent} from '@mui/material';

const ItemListContianer = ({title, price, image}) => {
    
    //console.log("Propiedades de ItemList", props)
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent className='card__content'>
                <div className="card__item">
                    <div>
                        <img src={`./assets/items/${image}`} alt='Imagen de producto' />
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <Button variant={'outlined'}>Detalle</Button> 
                </div>
            </CardContent>
        </Card>
    )
}

export default ItemListContianer