import React, { useState } from 'react'
import './productList2.css'
import ProductCard from '../productCard'
import Modal from '../modal';

const ProductList2 = () => {
  const [cardData, setCardData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
    const data =[
        {
          id: 1,
          img: '/img/tab-1.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210'
        },
        {
          id: 2,
          img: '/img/tab-2.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210',
          sale: '-30%'
        },
        {
          id: 3,
          img: '/img/tab-3.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210',
        },
        {
          id: 4,
          img: '/img/tab-4.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210',
          sale: 'New'
        },
        {
          id: 5,
          img: '/img/tab-5.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210',
          sale: 'Stock Out'
        },
        {
          id: 6,
          img: '/img/tab-6.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210',
        },
        {
          id: 7,
          img: '/img/tab-7.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210',
          sale: 'New'
        },
        {
          id: 8,
          img: '/img/tab-8.webp',
          para: 'Chair',
          heading: 'Golden Easy Spot Chair',
          price: '210',
        }
      ]
      const handleCardClick = (productId)=>{
        const find = data.find(product => product.id === productId);
        setCardData(find);
        setIsModalOpen(true);
      };
      
      const closeModal = () => {
        setIsModalOpen(false);
      };
      console.log(cardData);
  return (
    <div className='productList2'>
    <div className='heading'>
    <h1>All Product</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text</p>
    </div>
    <div className='row2'>
      {data.map((li,i)=>{
        return(
          <div key={li.id} className='card'  onClick={() => handleCardClick(li.id)}>
          <ProductCard img={li.img} para={li.para} heading={li.heading} price={li.price} sale={li.sale} display={li.sale ? 'flex' : 'none'} left={li.sale == 'New' ? '10px' : ''}/>
          </div>
        )
      })}
    </div>
    <Modal
    isOpen={isModalOpen}
    onClose={closeModal}
    product={cardData}/>
    </div>
  )
}

export default ProductList2