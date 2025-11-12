import React from 'react'
import { MdOutlineScience } from "react-icons/md";
import { IoApps } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


const TopNavbar = () => {
  return (
    <div className='bg-black text-white text-sm  flex justify-between p-5 '>
        <div className='flex gap-15 '>
            <p className='hover:underline p-1.5'> About</p>
            <p className='hover:underline p-1.5'> Strore</p>
        </div>
        <ul className='flex justify-between gap-10 '>
            <li className='hover:underline p-1.5'>Gmail</li>
            <li className='hover:underline p-1.5'>Image</li>
            <li className='text-2xl p-1.5 hover:rounded-full hover:bg-[#303134] cursor-pointer'><MdOutlineScience /></li>
            <li className='text-2xl p-1.5 hover:rounded-full hover:bg-[#303134] cursor-pointer'><IoApps /></li>
            <li className='text-2xl p-1.5 hover:rounded-full hover:bg-[#303134] cursor-pointer'><CgProfile /></li>
        </ul>
    </div>
  )
}

export default TopNavbar