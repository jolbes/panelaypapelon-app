import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import './Modal.css'

const Modal = ({handleClose, open, children}) => {
    const [count, setCount] = useState(0)


    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogContent className='checkout-modal'>
                <h1>Check Out</h1>
                <p>{count}</p>
            <button onClick={() => setCount( count + 1)}>+</button>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal