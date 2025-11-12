import React from 'react'

const Home = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 md:p-10 lg:p-20 gap-4 md:gap-6 lg:gap-8 '>
        {/* //blog-card */}
      <div className='bg-[#D6FAED] p-4 lg:p-4 rounded-lg shadow-md'>
        <h2 className='text-lg md:text-xl lg:text-2xl font-bold mb-4'>Blog Post Title</h2>
        <p className='text-gray-700 text-sm md:text-base mb-2'>This is a brief summary of the blog post content.It provides an overview of what the post is about.</p>
       
        <div className='flex justify-between'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded active:scale-95 transition duration-200 active:bg-blue-600 hover:bg-blue-400'>Edit</button>
          <button className='bg-red-500 text-white px-4 py-2 rounded active:scale-95 transition duration-200 active:bg-red-600 hover:bg-red-400'>Delete</button>
        </div> 
        
      </div>

      
      
      
      
    </div>
  )
}

export default Home