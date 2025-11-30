import React, { useContext, useState } from 'react'
import { IoMenu,IoSettings } from "react-icons/io5";
import { FaPlus,FaRegMessage,FaQuestion  } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";

const Sidebar = () => {
  const[extended,setExtended]=useState(false)
  const{onSent,
        prevPromts,
        setRecentPrompt,
        newChat}=useContext(useContext)
  const loadPrompt=async (prompt)=>{
    await onSent(prompt)
    setRecentPrompt(prompt)
  }
  return (
    <div className=' min-h-screen bg-[#f0f4f9] flex flex-col justify-between py-20 px-15'>
      <div>
        <IoMenu className='w-5 ml-2.5 cursor-pointer block text-4xl' onClick={()=>setRecentPrompt((prev)=>!prev)} />
        <div className='mt-12 inline-flex items-center gap-2 py-2.5 px-4 bg-[#e6eaf1] rounded-full text-sm text-gray-500 ' onClick={()=>newChat}>
           <FaPlus className='w-5' />
           {extended ? <p>New Chat</p> : null}
        </div>


        {extended ? (
        <div className='flex flex-col 'data-aos="fade-in" data-aos-duration="2000">
          <p className='mt-8 mb-5'>Recent</p>
          {prevPromts.map((item,index)=>(
          <div onClick={()=>loadPrompt(item)}>
             <FaRegMessage className='w-5'/>
             <p>{item.slice(0,18)}{"..."}</p>
          </div>
          ))}
        </div>
      ):null}
      </div>
      
      
      <div className='flex flex-col'>
        <div className='flex items-start gap-2.5 p-2.5 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
            <FaQuestion className='w-5 mt-1'/>
            {extended?<p>Help</p>:null} 
        </div>
        <div className='cursor-pointer pr-2.5  flex'>
          <FaHistory className='w-5 mt-1'/>
          {extended?<p>Activity</p>:null}
        </div>
        <div className='cursor-pointer pr-2.5  flex'>
          <IoSettings className='w-5 mt-1'/>
          {extended?<p>Setting</p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar