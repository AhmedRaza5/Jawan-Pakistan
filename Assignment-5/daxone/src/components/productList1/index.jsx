import React, { useState } from 'react'
import './productList.css';
import ProductCard from '../productCard';

const ProductList1 = ({sendData,setOpen}) => {
  const [cardData, setCardData] = useState();

  const data =[
    {
      id:1,
      img: '/img/tab-1.webp',
      para: 'Chair',
      heading: 'Golden Easy Spot Chair',
      price: '210'
    },
    {
      id:2,
      img: '/img/tab-2.webp',
      para: 'Chair',
      heading: 'Golden Easy Spot Chair',
      price: '210',
      sale: '-30%'
    },
    {
      id:3,
      img: '/img/tab-3.webp',
      para: 'Chair',
      heading: 'Golden Easy Spot Chair',
      price: '210',
      sale: 'Stoct Out'
    },
    {
      id:4,
      img: '/img/tab-4.webp',
      para: 'Chair',
      heading: 'Golden Easy Spot Chair',
      price: '210',
      sale: 'New'
    }
  ];
  const handleCardClick = (productId)=>{
    const find = data.find(product => product.id === productId);
    setCardData(find);
    sendData(find);
    setOpen(true);
  };
  
 
  console.log(cardData, "ahmed");
  return (
    <div className='productList1'>
      <div className='heading'>
      <h1>Best Sell</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text</p>
      </div>
      <div className='row'>
        {data.map((li,i)=>{
          return(
            <div key={i} onClick={() => handleCardClick(li.id)}>
            <ProductCard img={li.img} para={li.para} heading={li.heading} price={li.price} sale={li.sale} display={li.sale ? 'flex' : 'none'} left={li.sale == 'New' ? '10px' : ''}/>
            </div>
          )
        })}
      </div>
      </div>
  )
}

export default ProductList1