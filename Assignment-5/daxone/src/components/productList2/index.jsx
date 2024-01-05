import React from 'react'
import './productList2.css'
import ProductCard from '../productCard'

const ProductList2 = () => {
    const data =[
        {
          img: '/img/tab-1.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210'
        },
        {
          img: '/img/tab-2.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210',
          sale: '-30%'
        },
        {
          img: '/img/tab-3.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210',
        },
        {
          img: '/img/tab-4.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210',
          sale: 'New'
        },
        {
          img: '/img/tab-5.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210',
          sale: 'Stock Out'
        },
        {
          img: '/img/tab-6.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210',
        },
        {
          img: '/img/tab-7.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210',
          sale: 'New'
        },
        {
          img: '/img/tab-8.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210',
        }
      ]
  return (
    <div className='productList2'>
    <div className='heading'>
    <h1>All Product</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text</p>
    </div>
    <div className='row2'>
      {data.map((li,i)=>{
        return(
          <div key={i} className='card'>
          <ProductCard img={li.img} para={li.para} heading={li.heading} price={li.price} sale={li.sale} display={li.sale ? 'flex' : 'none'} left={li.sale == 'New' ? '10px' : ''}/>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default ProductList2