import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text text-white px-5 pb-3 pt-3'>

        <div className=' flex justify-between '>
        <div >

          <ul className='flex gap-4'>
            <li><a className='hover:underline' href="">Advertising</a></li>
            <li><a className='hover:underline' href="">Business</a></li>
            <li><a className='hover:underline' href="">How Search Work</a></li>
          </ul>
            
        </div>
        <div className='flex'>
            <ul className='flex gap-4'>
            <li><a className='hover:underline' href="">Privacy</a></li>
            <li><a className='hover:underline' href="">Terms</a></li>
            <li><a className='hover:underline' href="">Settings</a></li>
           </ul>
            
           
            
        </div>
        </div>    
    </div>
  )
}

export default Footer