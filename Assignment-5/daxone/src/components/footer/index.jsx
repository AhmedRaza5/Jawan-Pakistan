import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
    <div className='footer'>

    <div className='footer1'>
        <img src="/src/assets/img/logo.webp" alt="Logo" />
        <p>Follow us:</p>
    </div>

    <div>
        <h2>USEFUL LINK</h2>
        <ul>
            <li>Shopping Cat</li>
            <li>WIshlist</li>
            <li>Chekout</li>
            <li>Support</li>
        </ul>
    </div>

    <div>
        <h2>ABOUT US</h2>
        <ul>
            <li>About</li>
            <li>Products</li>
            <li>Terms and conditions</li>
            <li>Help Center</li>
        </ul>
    </div>

    <div className='footer4'>
    <h2>NEWSLETTER</h2>
        <p>Subscribe to get all new updates</p>
        <div className='footerinput'>
        <input type="text" placeholder='Enter Your Email'/>
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#737373" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
    </div>

    </div>

    <div className='copyRight'>
    <p>Copyright © Daxone. All Right Reserved</p>
    </div>
    </footer>
  )
}

export default Footer