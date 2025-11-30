import React, { useContext } from 'react'
import { FaUser,FaCompass,FaLightbulb,FaCode,FaMicrophone } from "react-icons/fa";
import { SiGooglegemini } from "react-icons/si";
import { GrGallery } from "react-icons/gr";
import { IoSendSharp } from "react-icons/io5";
import {Context } from "../../context/Context"

const Main = () => {
  const{onSent,
        recentPrompt,
        showresult,
        loading,
        resultData,
        setInput,
        input,}=useContext(Context)
  return (
    <div className='min-h-screen flex-1 pb-[15vh] relative'>
      {/* Nav */}
      <div className='flex items-center justify-between text-xl p-5 text-[#585858]'>
        <p>Gemini</p>
        <FaUser />
      </div>

      <div className='m-auto max-w-4xl'>
        {/* Loadind Part */}
       {showresult?( <div className='px-[5%] py-0 max-h-[70vh] hide-scrollbar overflow-y-scroll '>
          <div className='my-10 mx-0 flex items-center gap-5'>
            <FaUser className='w-10 rounded-full ' />
            <p>{recentPrompt}</p>
          </div>
          <div className='flex items-start gap-5'>
            <SiGooglegemini className='text-blue-600 text-2xl' />
            {loading ?(
            <div className='w-full flex flex-col gap-2.5'>
              <hr className='rounded  bg-[linear-gradient(to_right,#9ed7ff,#ffffff,#9ed7ff)] bg-[#f6f7f8]  h-5 '/>
              <hr className='rounded  bg-[linear-gradient(to_right,#9ed7ff,#ffffff,#9ed7ff)] bg-[#f6f7f8]  h-5'/>
              <hr className='rounded  bg-[linear-gradient(to_right,#9ed7ff,#ffffff,#9ed7ff)] bg-[#f6f7f8]  h-5 '/>
            </div>
            ):(
            <p className='text-lg font-light leading-loose'dangerouslySetInnerHTML={{__html:resultData}}></p>
            )}
          </div>
        </div> 
       ):(
      
        
        <div className='my-12 mx-0 text-6xl font-semibold p-5'>
          <p> <span className='bg-clip-text text-transparent bg-[linear-gradient(56deg,#4b90ff,#ff5546)]'>Hello,Dibya...</span></p>
          <p className='text-gray-400'>How can I help you today ?</p>
        </div>

        
        <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-7 p-8 ml-8  '>
          <div className=' h-40 p-6 w-55 bg-gray-200 relative cursor-pointer rounded-xl hover:bg-[#d9e8fb] ' >
            <p className='text-[#585858] text-base'>Suggest beautiful places to see on an upcoming road trip</p>
            <div className='bg-white rounded-full relative h-6 w-6 top-3 left-38 '>
              <FaCompass className='h-5  absolute left-1 top-0.5 ' />
            </div>
            
          </div>
          <div className='h-40 p-6  w-55 bg-gray-200 relative cursor-pointer rounded-xl hover:bg-[#d9e8fb]'>
            <p className='text-[#585858] text-base'>Briefly summarize this concept: urban planning (Processing) </p>
            <div className='bg-white rounded-full relative h-6 w-6 top-3 left-38 '>
               <FaLightbulb className='h-5  absolute left-1 top-0.5 '/>
            </div>
          </div>
          <div className='h-40 p-6 w-55 bg-gray-200 relative cursor-pointer rounded-xl hover:bg-[#d9e8fb]'>
            <p className='text-[#585858] text-base'> How to improve  the  readability of the following code ? </p>
            <div className='bg-white rounded-full relative h-6 w-6 top-3 left-38 '>
               <FaCode className='h-5  absolute left-1 top-0.5 '/>
            </div>
            
          </div>
        </div>
        )}

        {/* Type Query Prompt */}
        <div className='absolute bottom-0 w-full max-w-4xl px-5 m-auto'>
          <div className='flex items-center justify-between gap-5 bg-[#f0f4f9] py-2 px-5 rounded-full'>
            <input type="text" 
                   value={input}
                   onChange={(e)=>setInput(e.target.value)}
                   placeholder='Enter a prompt here' 
                   className='bg-transparent border-none outline-none p-2 text-lg'
                   />
            <div className='flex gap-5'>
              <GrGallery className='w-6 cursor-pointer'/>
              <FaMicrophone className='w-6 cursor-pointer'/>
              {input?(
                 <IoSendSharp className='w-6 cursor-pointer'
                              onClick={()=>onSent()}/>
              ):null} 
            </div>
          </div>
          {/* Fixed Text */}
          <p className='text-base my-4 mx-auto text-center font-semibold'>Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps</p>
        </div>

      </div>

    </div>
  )
}

export default Main