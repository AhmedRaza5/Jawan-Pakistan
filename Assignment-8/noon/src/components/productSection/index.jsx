import { Box, Typography } from '@mui/material'
import React from 'react'
import Product from '../product'

const ProductSection = () => {
  return (
    <>
   <Box sx={{ backgroundColor: '#f7f7fa', padding: '20px 10px' }}>
    <Typography component='div' variant='h5' fontWeight={600} marginBottom='20px'>Recommended for you</Typography>
    <Product/>
   </Box>
    <Typography component="div" sx={{backgroundColor:'#ccc',padding:'15px', paddingBottom:'10px', marginBottom:'10px'}}>
      <img src="/img/banner12.avif" alt="BannerImage" width='100%'/>
    </Typography>
    <Box sx={{ padding: '20px 10px 0 10px' }}>
    <Typography component='div' variant='h5' fontWeight={600} marginBottom='20px'>Best deals for you</Typography>
    <Product/>
    </Box>
    </>
  )
}

export default ProductSection