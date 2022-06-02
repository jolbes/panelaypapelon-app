import { CircularProgress, Box } from "@mui/material"
import React from 'react';
const Spinner = () => {
    return(
        <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
}
export default Spinner