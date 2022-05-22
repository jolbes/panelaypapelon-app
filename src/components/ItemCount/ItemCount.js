import './ItemCount.css'
import { Button } from '@mui/material'
import { useState } from 'react'

const ItemCount = () => {
    const [count, setCount] = useState(0)
    const addCount = () => {
        setCount (count + 1)
    }
    const removeCount = () => {
        if (count > 0){
            setCount (count - 1)
        }
    }
    return(
        <div className='item-count'>
        <Button onClick={removeCount} disabled={count === 0}>-</Button>
        <p>{count}</p>
        <Button onClick={addCount}>+</Button>
        </div>
    )

}
export default ItemCount