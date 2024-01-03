import React from 'react'
import './productCard.css'

const ProductCard = (props) => {
  return (
    <div className='productCard'>
        <div className='productCard1'>
            <img src={props.img} alt="Image"/>
            <div className='sale' style={{display:props.display, left:props.left}}>
                <p>{props.sale}</p></div>
        </div>
        <div className='productCard2'>
            <p>{props.para}</p>
            <h3>{props.heading}</h3>
            <h2>{props.price}</h2>
        </div>
    </div>
  )
}

export default ProductCard