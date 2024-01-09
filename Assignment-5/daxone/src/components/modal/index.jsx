import React from 'react';
import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCompare, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import ProductBanner from '../productBanner';

const Modal = ({ isOpen, onClose, product }) => {
  return (
    <>
      <ProductBanner/>
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <div className="modal-content">
          <div className="modal-content1">
            <img src={product.img} alt="Image" />
          </div>
          <div className="modal-content2">
            <p>{product.para}</p>
            <h3>{product.heading}</h3>
            <div className='star'>
              <div className='starin'>
            <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStarHalfStroke} style={{color: "#ff5151",}}/>
              </div>
            <span>40+ Reviews</span>
            </div>
            <div className='color'>
              <h2>Color:</h2>
              <div className='colorin'>
              <div className='round color1'></div>
              <div className='round color2'></div>
              <div className='round color3'></div>
              <div className='round color4'></div>
              </div>
            </div>
            <div className='size'>
              <h2>Size:</h2>
              <div className='sizes'>
                <p>S</p>
                <p>M</p>
                <p>XL</p>
                <p>XXL</p>
              </div>
            </div>
            <h1>${product.price}.00</h1>
            <div className='quantity'>
              <p>-</p>
              <p>02</p>
              <p>+</p>
            </div>
            <div className='compare'>
            <div className='compare1'>
            <FontAwesomeIcon icon={faCodeCompare} />
              <p>Compare</p>
            </div>
            <div className='compare1'>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
              <p>Add to wish list</p>
            </div>
            </div>
            <button onClick={onClose}>Add To Cart</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Modal;