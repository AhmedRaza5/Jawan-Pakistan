import React, { useState } from 'react'
import './productDetailsTabs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const ProductDetailsTabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  return (
    <div className='tabParent'>
      <div className="tabs">
        <div
          className={`tab ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Description
        </div>
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Specification
        </div>
        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
         Reviews
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <p className='tab-content1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>}
        {activeTab === 1 && 
        <div className='tab-content2'>
            <table>
                <tbody>
                    <tr>
                        <td className='width'>Name / Model</td>
                        <td>LaaVista Depro, FX 829 v1</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>Categories</td>
                    </tr>
                    <tr>
                        <td>Models</td>
                        <td>FX 829 v1</td>
                    </tr>
                    <tr>
                        <td>Categories</td>
                        <td>Product Type</td>
                    </tr>
                    <tr>
                        <td>Size</td>
                        <td>60’’ x 40’’</td>
                    </tr>
                    <tr>
                        <td>Display Port</td>
                        <td>Multi</td>
                    </tr>
                    <tr>
                        <td>Media</td>
                        <td>Brightside</td>
                    </tr>
                    <tr>
                        <td>Color</td>
                        <td>Black, White</td>
                    </tr>
                </tbody>
            </table>
        </div>
        }
        {activeTab === 2 && 
        <div className='tab-content3'>
        <div className='review'>
            <div className='review1'>
                <img src="/img/review-1.webp" alt="review" />
                <div>
                <p>Jonathon Doe</p>
                <div className='stars'>
                <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStarHalfStroke} style={{color: "#ff5151",}}/>
                </div>
                </div>
            </div>
            <div className='review2'>
                <p className='review2Para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                <div className='date'>
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ff5151" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg> 24 Likes</p>
                    <p>25 Jun 2019</p>
                </div>
            </div>
        </div>
        <div className='review'>
            <div className='review1'>
                <img src="/img/review-2.webp" alt="review" />
                <div>
                <p>Jonathon Doe</p>
                <div className='stars'>
                <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStarHalfStroke} style={{color: "#ff5151",}}/>
                </div>
                </div>
            </div>
            <div className='review2'>
                <p className='review2Para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                <div className='date'>
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ff5151" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg> 24 Likes</p>
                    <p>25 Jun 2019</p>
                </div>
            </div>
        </div>
        <div className='review'>
            <div className='review1'>
                <img src="/img/review-3.webp" alt="review" />
                <div>
                <p>Jonathon Doe</p>
                <div className='stars'>
                <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ff5151",}} />
            <FontAwesomeIcon icon={faStarHalfStroke} style={{color: "#ff5151",}}/>
                </div>
                </div>
            </div>
            <div className='review2'>
                <p className='review2Para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                <div className='date'>
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ff5151" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg> 24 Likes</p>
                    <p>25 Jun 2019</p>
                </div>
            </div>
        </div>
        </div>
        }
      </div>
    </div>
  )
}

export default ProductDetailsTabs