import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Header = () => {
  return (
    <div className='h-[80px] max-w-[1200px] m-auto mt-2'>
     <div >
        <nav className='md:flex items-center justify-between flex '>
            <div>
            <img  className='w-[100px] h-[40px] bg-white hidden md:block' src='https://images.pexels.com/photos/7722856/pexels-photo-7722856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
            </div>
            <div className=''>
                <ul className='flex gap-10 font-bold'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className='flex items-center gap-2'>
                <AiOutlineSearch size={30}/>
            <input className='p-2 md:w-[250px] w-[150px] border-10 rounded-md' type='text' placeholder='Search Here'/>
            </div>
        </nav>
     </div>
    </div>
  )
}

export default Header