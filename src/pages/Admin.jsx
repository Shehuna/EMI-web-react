import React from 'react'
import emiLogo from '../assets/logo/emiLogo1.png'


export default function Admin() {
  return (
   <main className='max-w-md px-2 mx-auto'>
    <div className='ml-32 mt-10 mb-10'>
    <img src={emiLogo} alt="" />
    </div>
      <form>
       <input type="text" placeholder='User Name'
            required className='w-full px-4 py-2 
            text-xl text-gray-700 bg-white border 
            border-gray-300 rounded transition ease-in-out
            duration-150 focus:text-gray-700 focus:bg-white
            focus:border-blue-300 mb-6'/>
       <input type="text" placeholder='Password'
            required className='w-full px-4 py-2 
            text-xl text-gray-700 bg-white border 
            border-gray-300 rounded transition ease-in-out
            duration-150 focus:text-gray-700 focus:bg-white
            focus:border-blue-500 mb-6'/>
       <button type='submit' className='mb-6 w-full
        px-7 py-3 bg-blue-600 text-white font-medium
        text-sm uppercase rounded-lg shadow-md hover:bg-blue-700
        hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
        active:bg-blue-800 active:shadow-lg transition duration-150
        ease-in-out'
        >Sign In</button>
      </form>
   </main>
  )
}
