import React from 'react'

const CreatePost = () => {
  return (
    <div className='p-5 md:p-10 lg:p-20 flex justify-center items-center h-[90vh]'>
      <form className='bg-[#11224E] p-5 lg:p-8 rounded-xl shadow-lg flex flex-col gap-4 w-xl'>
        <h2 className='text-2xl font-bold mb-5 text-white text-center'>Create New Post</h2>
        <input type="text" placeholder='Enter the Blog Title'className='bg-white rounded outline-none border-none' />
        <textarea placeholder='Enter the Blog Description' className='bg-white rounded outline-none border-none'></textarea>
        <button className='px-3 py-1 md:px-4 lg:py-2 bg-green-500 ronded-lg cursor-pointer active:scale-95 transition duration-200 active:bg-green-600 hover:bg-green-400 rounded-md text-white'>Create Post</button>
      </form>
    </div>
  )
}

export default CreatePost