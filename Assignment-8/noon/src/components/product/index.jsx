import React from 'react'
import ProductCard from '../productCard'
import { Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../swiperSlider/swiperSlider.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

const Product = () => {
    const data = [
        {
            img: '/img/product/prd1.avif',
            name: 'Apple iPhone 14 Pro Max',
            desc: '256GB Deep Purple 5G W...',
            price: '4,633',
            cutPrice: '5,099',
            stock: 'only 9 left in stock',
            market: '/img/product/prdmark.png',
            rating: '4.6',
            lrating: '(3.8K)'
        },
        {
            img: '/img/product/prd2.avif',
            name: 'Sony PlayStation 5 Console',
            desc: '(Disc Version) With Contro...',
            price: '1,872',
            cutPrice: '3,999',
            stock: 'only 1 left in stock',
            market: '/img/product/prdmark.png',
            rating: '4.5',
            lrating: '(7.7K)'
        },
        {
            img: '/img/product/prd3.avif',
            name: 'Apple iPhone 14 Pro Max',
            desc: '256GB Deep Purple 5G W...',
            price: '4,633',
            cutPrice: '5,099',
            stock: 'only 9 left in stock',
            market: '/img/product/prdmark.png',
            rating: '4.6',
            lrating: '(3.8K)'
        },
        {
            img: '/img/product/prd4.avif',
            name: 'Apple iPhone 14 Pro Max',
            desc: '256GB Deep Purple 5G W...',
            price: '4,633',
            cutPrice: '5,099',
            stock: 'only 9 left in stock',
            market: '/img/product/prdmark.png',
            rating: '4.6',
            lrating: '(3.8K)'
        },
        {
            img: '/img/product/prd5.avif',
            name: 'Apple iPhone 14 Pro Max',
            desc: '256GB Deep Purple 5G W...',
            price: '4,633',
            cutPrice: '5,099',
            stock: 'only 9 left in stock',
            market: '/img/product/prdmark.png',
            rating: '4.6',
            lrating: '(3.8K)'
        },
        {
            img: '/img/product/prd6.avif',
            name: 'Apple iPhone 14 Pro Max',
            desc: '256GB Deep Purple 5G W...',
            price: '4,633',
            cutPrice: '5,099',
            stock: 'only 9 left in stock',
            market: '/img/product/prdmark.png',
            rating: '4.6',
            lrating: '(3.8K)'
        },
        {
            img: '/img/product/prd7.avif',
            name: 'Apple iPhone 14 Pro Max',
            desc: '256GB Deep Purple 5G W...',
            price: '4,633',
            cutPrice: '5,099',
            stock: 'only 9 left in stock',
            market: '/img/product/prdmark.png',
            rating: '4.6',
            lrating: '(3.8K)'
        },
        {
            img: '/img/product/prd8.avif',
            name: 'Apple iPhone 14 Pro Max',
            desc: '256GB Deep Purple 5G W...',
            price: '4,633',
            cutPrice: '5,099',
            stock: 'only 9 left in stock',
            market: '/img/product/prdmark.png',
            rating: '4.6',
            lrating: '(3.8K)'
        },
        {
            img: '/img/product/prd9.avif',
            name: 'Apple iPhone 14 Pro Max',
            desc: '256GB Deep Purple 5G W...',
            price: '4,633',
            cutPrice: '5,099',
            stock: 'only 9 left in stock',
            market: '/img/product/prdmark.png',
            rating: '4.6',
            lrating: '(3.8K)'
        },
        {
            img: '/img/product/prd10.avif',
            name: 'Apple iPhone 14 Pro Max',
            desc: '256GB Deep Purple 5G W...',
            price: '4,633',
            cutPrice: '5,099',
            stock: 'only 9 left in stock',
            market: '/img/product/prdmark.png',
            rating: '4.6',
            lrating: '(3.8K)'
        },
        {
            img: '/img/product/prd11.avif',
            name: 'Apple iPhone 14 Pro Max',
            desc: '256GB Deep Purple 5G W...',
            price: '4,633',
            cutPrice: '5,099',
            stock: 'only 9 left in stock',
            market: '/img/product/prdmark.png',
            rating: '4.6',
            lrating: '(3.8K)'
        },
        {
            img: '/img/product/prd12.avif',
            name: 'Apple iPhone 14 Pro Max',
            desc: '256GB Deep Purple 5G W...',
            price: '4,633',
            cutPrice: '5,099',
            stock: 'only 9 left in stock',
            market: '/img/product/prdmark.png',
            rating: '4.6',
            lrating: '(3.8K)'
        },
    ]

    return (
        <Box>
              <Swiper 
        slidesPerView={1}
        spaceBetween={10}
       
        breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 10,
            },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         
            {data.map((li, i) => {
                return (
                    <SwiperSlide key={i}>
                    <ProductCard img={li.img} name={li.name} desc={li.desc} price={li.price} cutPrice={li.cutPrice} sell={li.stock} market={li.market} rating={li.rating} lrating={li.lrating}/>
            </SwiperSlide>
                )
            })}

                    </Swiper>

        </Box>
    )
}

export default Product