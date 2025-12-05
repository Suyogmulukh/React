import React from 'react'

const App = () => {
  return (
    <>
      <div className='h-screen w-full flex flex-col justify-center items-center bg-gray-300'>
        <div className='h-2/3 w-2/7 bg-gray-100 flex flex-col justify-between text-black py-4 px-10 rounded-4xl'>
        <div className='h-14 w-14 bg-white rounded-full mt-3'>
          <img className='object-cover' src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png" alt="" />
        </div>
          <div className='flex flex-col -mt-30'>
            <div>
              <h2 className='text-3xl font-medium'>Amazon <span className='text-gray-400 font-medium text-sm'>5 days ago</span></h2>
              <h2 className='text-3xl font-medium mt-1'>Senior UI/UX Designer</h2>
            </div>
          <div className='flex gap-3 mt-3'>
            <h3 className='bg-gray-200 rounded-lg px-4 py-0.5 text-gray-600 font-bold'>Part-Time</h3>
            <h3 className='bg-gray-200 rounded-lg px-4 py-0.5 text-gray-600 font-bold'>Senior Level</h3>
          </div>
        </div>
          <div className=' flex items-center justify-between mb-4'>
            <div className=''>
          <h3 className='text-2xl '>$120/hr</h3>
          <h4 className='text-gray-400'>Mumbai, India</h4>
            </div>
          <button className='bg-gray-800 py-2 px-4 rounded-2xl text-white font-medium'>Apply Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
