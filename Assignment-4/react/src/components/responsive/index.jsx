import React from 'react'
import './responsive.css'

const Responsive = () => {
  return (
    
    <div className='responsive'>
        <div className='res1'>
            <h1>Fully Responsive Design</h1>
            <p>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
        </div>
        <div className='res2'>
            <img src="/src/assets/img/bg-showcase-1.jpg" alt="Image"/>
        </div>
    </div>
  )
};


const Coding = () => {
  return (
    <div className='responsive'>
        <div className='res2'>
            <img src="/src/assets/img/bg-showcase-2.jpg" alt="Image"/>
        </div>
        <div className='res1'>
            <h1>Updated For Bootstrap 5</h1>
            <p>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
        </div>
    </div>
  )
};


const Easy = () => {
  return (
    <div className='responsive'>
        <div className='res1'>
            <h1>Easy to Use & Customize</h1>
            <p>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
        </div>
        <div className='res2'>
            <img src="/src/assets/img/bg-showcase-3.jpg" alt="Image"/>
        </div>
    </div>
  )
};

export {Responsive, Coding, Easy}