import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div className='div__cart__custom'>
            <LocalMallOutlinedIcon fontSize="large" className='cart__custom' />
        </div>
    )
}
export default CartWidget