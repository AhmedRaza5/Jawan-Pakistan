import React from 'react'
import Sidebar from '../sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar'

const Layout = () => {
  return (
    <div className='flex'>
      <div className='w-full max-w-[20%]'>
        <Sidebar/>
      </div>
      <div className='w-full max-w-[80%] bg-gray-200 h-[100vh] px-4 pt-4'>
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout