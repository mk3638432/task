import React from 'react'

const Section = () => {
  return (
    <div id='service' className='max-w-[1200px] m-auto md:h-[600px] h-[800px] bg-white py-[70px]'>
        <div className=' justify-between m-auto md:grid grid-cols-2 '>
        <div className=''>
            <h1 className='font-bold text-3xl text-blue-500'> <span className='underline underline-offset-4'>What </span> is Hernia?</h1>
            <p className='py-4 '>Hernias are very common. Each year roughly 5 million Americans
experience a hernia, and over one million hernia repair surgeries are
performed.1,2 Understanding what is actually happening in the body
and your treatment options can help you make decisions for your
hernia care.</p>
<p>A hernia occurs when internal organs or tissue break through a layer
of muscle or tissues that are meant to contain them. This occurs as a
result of a weak spot forming in the containing muscle or tissue, which
can be caused by a number of common factors.</p>
        </div>
        <div>
            <img className='h-[300px] m-auto my-8 w-[400px] object-cover' src='https://images.pexels.com/photos/9317204/pexels-photo-9317204.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
        </div>
    </div>
    </div>
  )
}

export default Section