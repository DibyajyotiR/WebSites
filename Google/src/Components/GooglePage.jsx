import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { LuScanSearch } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";

const GooglePage = () => {
  return (
    <div className='bg-black text-white text-center'>
        <p className='font-bold text-8xl py-10.5'>Google</p>
       
        <div className='flex justify-center'>
            <div className="flex items-center w-[650px] h-11 rounded-3xl bg-[#4d5156] px-3">
                <IoSearch className="text-2xl mr-2" />
                <input type="text"
                   className="bg-[#4d5156] px-3 py-2 w-[400px] rounded-3xl focus:outline-none"/>
                <FaMicrophone className="text-xl m-3"/>
                <LuScanSearch className="text-2xl mr-3" /> 
                <button className='relative border-1 border-white p-1 rounded-3xl w-[130px] font-bold'>
                    <FaSearch className='absolute m-1 '/> 
                    AI Mode</button>
            </div>
        </div>


        <div className='mt-8.5 '>
            <button className='bg-[#303134] px-4 py-1 rounded-lg mr-4 hover:border-1 hover:border-white'>Google Search</button>
            <button className='bg-[#303134]  px-4 py-1 rounded-lg hover:border-1 hover:border-white'>I'm Feeling Lucky</button>
        </div>
        
        <p  className='mt-15'>Google offered in: <a className='text-blue-500 mr-2  hover:underline' href="">हिन्दी</a>
        <a className='text-blue-500 mr-2 hover:underline' href="">বাংলা</a>
        <a className='text-blue-500 mr-2 hover:underline' href="">తెలుగు</a>
        <a className='text-blue-500 mr-2 hover:underline' href="">मराठी</a>
        <a className='text-blue-500 mr-2 hover:underline' href="">தமிழ் </a>
        <a className='text-blue-500 mr-2 hover:underline' href="">ગુજરાતી</a>
        <a className='text-blue-500 mr-2 hover:underline' href="">ಕನ್ನಡ</a>
        <a className='text-blue-500 mr-2 hover:underline' href="">മലയാളം</a>
        <a className='text-blue-500 hover:underline' href="">ਪੰਜਾਬੀ</a>
        </p>
        
        
        
    </div>


  
  )
}

export default GooglePage