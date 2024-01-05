import React from 'react'
import './winter.css'
import banner from '../../assets/img/banner-2.webp'
import Button from '../button'

const Winter = () => {
    return (
        <div className='winter'>
            <div className='innerWinter'>

                <div className='winter1'>
                    <img src={banner} alt="banner" />
                </div>
                <div className='winter2'>
                    <p>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.</p>
                    <h1>Winter Discount
                        Up to 30%</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Button text='SHOP NOW'/>
                </div>
            </div>
        </div>
    )
}

export default Winter