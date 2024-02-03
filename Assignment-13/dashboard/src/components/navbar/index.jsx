import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { CiGift, CiSettings  } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='flex items-center mb-4 justify-between'>
            <div className='w-full'>
                    <div className="relative">
                   
                        <input type="text" id="default-search" className="block w-full p-3 ps-10 text-sm   rounded-lg    dark:placeholder-gray-400  focus:border-none outline-none" placeholder="Search here" />
                        <button className=" absolute end-2.5 bottom-2.5   font-medium rounded-lg text-sm px-4 py-2 ">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                    </div>
            </div>

            <div className='flex items-center w-full'>
            <div className="relative block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black rounded-md bg-blue-300">
  
            <IoIosNotificationsOutline color='blue' size={30}/>
      <span className="absolute left-6 top-[-10px] rounded-full bg-blue-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">5
    </span>
  
</div>
            <div className="relative block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black rounded-md bg-blue-300">
  
            <RiMessage2Line color='blue' size={30}/>
      <span className="absolute left-6 top-[-10px] rounded-full bg-blue-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">2
    </span>
  
</div>
            <div className="relative block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black rounded-md bg-purple-300">
  
            <CiGift color='purple' size={30}/>
      <span className="absolute left-6 top-[-10px] rounded-full bg-purple-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">31
    </span>
  
</div>
            <div className="relative block mt-4 mr-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black rounded-md bg-red-300 ">
  
            <CiSettings  color='red' size={30}/>
      <span className="absolute left-6 top-[-10px] rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">10
    </span>
  
</div>
            <div className='ml-4 flex items-center gap-2'>
                <p className='flex'>Hello, <span> Samantha</span></p>
                <img src="/review-1.webp" alt="Image" className='w-10 h-10'/>
            </div>
            </div>


        </div>
    )
}

export default Navbar