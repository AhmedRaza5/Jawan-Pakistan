import React from 'react'
import './productCard.css'

const ProductCard = (props) => {
  return (
    <div className='productCard'>
        <div className='productCard1'>
          <a href="#/">
            <img src={props.img} alt="Image"/>
          </a>
            <div className='sale' style={{display:props.display, left:props.left}}>
                <p>{props.sale}</p></div>
        </div>
        <div className='productCard2'>
            <p>{props.para}</p>
            <h3>{props.heading}</h3>
            <div className='price'>
            <h2>$ {props.price}.00</h2>
            <a href="#"><p className='priceP'>+ Add To Cart</p></a>
            </div>
        </div>
    </div>
  )
}

export default ProductCard