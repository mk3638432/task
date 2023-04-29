import React from 'react'

const Hero = () => {
  return (
    <div className='h-[550px] max-w-[1200px] m-auto'>
           <div className='flex py-20  relative  bg-center bg-cover custom-img mb-5 '>
           <div className='absolute top-0 left-0 right-0 bottom-0 bg-blue-200/30'/>

        <div className='font-bold pl-10 py-10 z-10'>
            <button className='rounded-xl p-2 bg-yellow-200 border cursor-pointer'>Health Come First</button>
            <h1 className='text-5xl'>Find the best solutions <br/>
for your Healthcare</h1>
<p className='text-left py-5'> We are dedicated to providing you with the most <br/>
accurate and up-to-date information about various    <br/>
medical conditions and treatments.</p>
<button className='py-2 px-8 bg-blue-700 rounded-xl cursor-pointer'>Fill Form</button>
        </div>
    </div>
    </div>
    

  )
}

export default Hero