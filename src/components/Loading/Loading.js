import { CircularProgress, Box } from "@mui/material"
import React from 'react';

const Loading = () => {
    return(
        <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
}
export default Loading