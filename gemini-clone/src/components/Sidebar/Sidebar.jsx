import React, { useContext, useState } from 'react'
import { IoMenu, IoSettings } from "react-icons/io5";
import { FaPlus, FaRegMessage, FaQuestion } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { Context } from "../../context/Context.jsx"

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const {
    onSent,
    prevPrompts,
    setRecentPrompt,
    newChat
  } = useContext(Context);

  const loadPrompt = async (prompt) => {
    await onSent(prompt);
    setRecentPrompt(prompt);
  };

  return (
    <div className='min-h-screen bg-[#f0f4f9] flex flex-col justify-between pl-4 '>
      <div> 
        <IoMenu 
          className='w-5 ml-1.5 cursor-pointer block text-4xl mt-4 ' 
          onClick={() => setExtended((prev) => !prev)} 
        />

        <div 
          className='mt-12 inline-flex items-center gap-2 py-2.5 px-2 mr-2  bg-[#e6eaf1] rounded-full text-sm text-gray-500' 
          onClick={newChat}
        > 
          <FaPlus className='w-5' />
          {extended && <p className='mr-1 mb-0.5 '>New Chat</p>}
        </div>

        {extended && (
          <div className='flex flex-col' data-aos="fade-in" data-aos-duration="2000">
            <p className='mt-8 mb-5 ml-1 '>Recent</p>
            {prevPrompts.map((item, index) => (
              <div key={index} onClick={() => loadPrompt(item)} className='cursor-pointer flex gap-2'>
                <FaRegMessage className='w-5 mt-1.5' />
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='flex flex-col mb-8'>
        <div className='flex items-start gap-2.5 py-2 px-2.5 mr-2  mb-4 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] '>
          <FaQuestion className='w-2  mt-1  ' />
          {extended && <p>Help</p>}
        </div>

        <div className='cursor-pointer pr-2.5 flex mb-4'>
          <FaHistory className='w-5 mt-1 ml-1 mb-2' />
          {extended && <p className='ml-2'>Activity</p>}
        </div>

        <div className='cursor-pointer pr-2.5 flex'>
          <IoSettings className='w-5 mt-1 ml-1 mb-2' />
          {extended && <p className='ml-2'>Setting</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
