
import React from 'react'
import { ProductData } from '../../utills/ProductData'
import ProductCard from '../productCard'

const ProductList = () => {
  return (

    <div className='flex flex-wrap max-w-[1240px] justify-center gap-10 mx-auto my-10'>
        {ProductData.map((li,i)=>{
            return(
                <ProductCard key={i} link={li.id} img={li.image} title={li.title} rating={li.rating.rate} price={li.price}/>
            )
        })}
    </div>

  )
}

export default ProductList