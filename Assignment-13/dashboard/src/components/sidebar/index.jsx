import React from 'react'
import { CiHome, CiFileOn,CiChat1, CiWallet   } from "react-icons/ci";
import { IoMdList,IoIosPaper  } from "react-icons/io";
import { IoPeopleOutline, IoFastFoodOutline, IoPersonOutline   } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const items = [
    {
      name: 'Dashboard',
      link: '',
      icon: <CiHome />
    },
    {
      name: 'Order List',
      link: 'orderlist',
      icon: <IoMdList />
    },
    {
      name: 'Order Detail',
      link: 'orderdetail',
      icon: <CiFileOn />
    },
    {
      name: 'Customer',
      link: 'customer',
      icon: <IoPeopleOutline />
    },
    {
      name: 'Analytics',
      link: 'analytics',
      icon: <MdOutlineAnalytics />
    },
    {
      name: 'Reviews',
      link: 'reviews',
      icon: <FaPen />
    },
    {
      name: 'Foods',
      link: 'foods',
      icon: <IoFastFoodOutline />
    },
    {
      name: 'Food Detail',
      link: 'fooddetail',
      icon: <IoIosPaper />
    },
    {
      name: 'Customer Detail',
      link: 'customerdetail',
      icon: <IoPersonOutline />
    },
    {
      name: 'Calender',
      link: 'calender',
      icon: <SlCalender />
    },
    {
      name: 'Chat',
      link: 'chat',
      icon: <CiChat1 />
    },
    {
      name: 'Wallet',
      link: 'wallet',
      icon: <CiWallet />
    }
  ]
  return (
    <div>
      <div className='pl-4 pt-4 mb-8'>
        <h1 className='font-bold text-2xl'>Sedap.</h1>
        <p className='text-[12px] text-gray-400'>Modern Admin Dashboard</p>
      </div>
      <div className='pl-4'>
        <ul>
          {items.map((li, i) => {
            return (

              <li key={i} className='flex'>
                <NavLink
                  to= {li.link}
                  className={({ isActive }) =>
                    isActive ? "text-green-700 bg-green-200 font-semibold w-[80%] rounded-md" : ""
                  }
                ><span className='flex gap-4 items-center p-2 w-full'>{li.icon}{li.name}</span></NavLink>
                
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar