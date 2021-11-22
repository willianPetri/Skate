import React from 'react'
import avatar1 from '../../img/avatar-1.png'

const Navbar = () => {
  return (
    <div className='flex item-center justify-between'>
      <div className='relative flex flex-1 max-w-xl'>
        <input 
          type="text" 
          className="items-center w-full h-10 px-4 text-sm font-normal tracking-wider text-white placeholder-gray-600 bg-gray-500 rounded-xl focus:outline-none" 
          placeholder='Search'
        />
        <div className='absolute inset-y-0 right-0 flex items-center pr-6'>
          <i className='fas fa-search text-gray-600 stroke-current' />
        </div>
      </div>
      <div className='flex items-center'>
        <img src={avatar1} alt="" className='w-8 h-8 rounded-full' />
        <a href="/" className='inline-flex items-center pl-4'>
          <span className='text-xs font-normal tracking-widest mr-2'>Thomas</span>
          <i className='fas fa-chevron-down text-gray-500 fill-current' />
          <button className="pl-8 p-0.5 relative">
            <i className='fas fa-bell text-gray-500 fill-current' />
            <span className='absolute top-0 w-2 h-2 bg-red-500 border border-gray-900 rounded-full right-1'></span>
          </button>
        </a>
      </div>
    </div>
  )
}

export default Navbar
