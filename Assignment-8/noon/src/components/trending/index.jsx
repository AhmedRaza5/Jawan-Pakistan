import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Product from '../product'
import SwiperSlider from '../swiperSlider'

const Trending = () => {
    const data = [
        "/img/banner13.avif",
        "/img/banner14.avif",
        "/img/banner15.avif",
        "/img/banner16.gif"
    ]
  return (
  <>
  
    <Box sx={{padding:'10px'}}>
        <Box sx={{marginBottom:'20px'}}>
        <Typography component='div' display='flex' justifyContent='space-between'>
        <Typography component='div' variant='h5' fontWeight={600} marginBottom='20px'>Trending deals in TV & accessories</Typography>
        <Typography component='div'>

            <Button variant="outlined" sx={{color:'#000', borderColor:'#000'}}>VIEW ALL</Button>
            </Typography>
            </Typography>
            <Product/>
        </Box>
        <Box>
            <Typography component='div' display='flex' justifyContent='space-between'>
        <Typography component='div' variant='h5' fontWeight={600} marginBottom='20px'>Clearance deals</Typography>
            <Typography component='div'>

            <Button variant="outlined" sx={{color:'#000', borderColor:'#000'}}>VIEW ALL</Button>
            </Typography>
            </Typography>
            <Product/>
        </Box>
    </Box>
    <Box sx={{marginTop:'20px'}}>

        <SwiperSlider data={data} loop={true} pagination={{
            clickable: true,
        }} autoplay={{
            delay: 2500,
        }} width='100%'/>
        </Box>
        </>
  )
}

export default Trending