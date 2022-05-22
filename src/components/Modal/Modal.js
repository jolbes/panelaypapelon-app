import * as React from 'react'
import { Dialog, DialogContent } from '@mui/material'
import './Modal.css'



const ModalWindows = ({handleColse, open, children}) => {

    
    return(
        <Dialog onClose={handleColse} open={open}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>

        
    )
}

export default ModalWindows