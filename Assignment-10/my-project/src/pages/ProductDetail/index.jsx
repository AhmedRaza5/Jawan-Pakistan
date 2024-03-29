import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductData } from '../../utills/ProductData';

const ProductDetail = () => {
    const param = useParams();
    
    const filter = ProductData.filter((fil)=> fil.id == param.id)
  
  return (
    <>
    {filter.map((li,i)=>{
        return(
    <div key={i} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <img src={li.image} alt="ProductImage" width='500px'/>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{li.title}</h2>
        <p className="text-gray-500 text-sm mb-10">{li.category}</p>

        <div className="flex items-center space-x-4 my-4">
          <div>
            <div className="rounded-lg bg-gray-100 flex py-2 px-3 mb-4">
              <span className="text-indigo-400 mr-1 mt-1">$</span>
              <span className="font-bold text-indigo-600 text-3xl">{li.price}</span>
            </div>
          </div>
        
        </div>

        <p className="text-gray-500 mb-4">{li.description}</p>

        <div className="flex py-4 space-x-4">
          <div className="relative">
            <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
            <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <svg className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>

          <button type="button" className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
        )
    })}

    </>
  )
}

export default ProductDetail