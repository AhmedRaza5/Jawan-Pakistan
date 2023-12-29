import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='parent'>
        <nav className='navbar'>
            <div>
              <h1>Logo</h1>
              </div>
            <div className='btn'>
                <button>Sign Up</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar