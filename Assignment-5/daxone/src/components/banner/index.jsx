import React from 'react'
import './banner.css'
import Button from '../button'
import Navbar from '../navbar'

const Banner = () => {
  return (
    <div className='parent'>
    <div className='banner'>
      <Navbar/>
    <div className='bannerinner'>

    <div className='banner1'>
        <img src="/src/assets/img/banner-1.webp" alt="Image" />
    </div>
    <div className='banner2'>
        <h3>30% off</h3>
        <h1>Comfort Chair</h1>
        <p>Collect from Daxone & get 30% Discount.</p>
        <Button text="SHOP NOW"/>
    </div>

    </div>
    </div>
    </div>
  )
}

export default Banner