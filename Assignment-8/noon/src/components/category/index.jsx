import React from 'react'
import SwiperSlider from '../swiperSlider'
import { Box } from '@mui/material'



const Category = () => {
    const data = [
        "/img/category/cat (1).png",
        "/img/category/cat (2).png",
        "/img/category/cat (3).png",
        "/img/category/cat (5).png",
        "/img/category/cat (6).png",
        "/img/category/cat (7).png",
        "/img/category/cat (8).png",
        "/img/category/cat (9).png",
        "/img/category/cat (10).png",
        "/img/category/cat (11).png",
        "/img/category/cat (12).png",
        "/img/category/cat (13).png",
        "/img/category/cat (14).png",
        "/img/category/cat (15).png",
        "/img/category/cat (16).png",
        "/img/category/cat (17).png",
        "/img/category/cat (18).png",
        "/img/category/cat (19).png",
        "/img/category/cat (20).png"
        
    ]
  return (
  <div style={{margin:'10px 15px'}}>

    <SwiperSlider data={data} breakpoints={{
        640: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 8,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 10,
            spaceBetween: 20,
        },
    }} width='100%'/>
    </div>
    

  )
}

export default Category