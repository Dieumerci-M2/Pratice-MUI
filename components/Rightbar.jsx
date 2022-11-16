import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
      <Box sx={{backgroundColor:'blue', display : {xs:'none', sm:'block' }}} flex={4} p={2}>
          Rightbar
      </Box>
  )
}

export default Rightbar