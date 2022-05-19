import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';


const CardItem = () => {
    return(
        <Card sx={{ minWidth: 275 }} className='cardcontent__custom'>
            <CardContent className='cardcontent__custom'>
                <div className='card__item'>
                    <div>
                        <img src='./assets/items/producto1.webp' alt='Producto1' />
                    </div>
                <p>Titulo</p>
                <span>$ 30000</span>
                <Button variant={'outlined'}>Detalle</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem