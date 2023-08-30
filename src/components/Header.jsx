import React from 'react'
import logo from '../assets/logo/emi.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  function pathMatchRoute(route){
    if(route === location.pathname){
        return true
    }
  }
  return (
    <div className='bg-white border-b shadow-sm sticky 
    top-0 z-50'>
        <header className='flex justify-between items-center
        px-3 max-w-6xl mx-auto opacity-90'>
            <div>
                <img src={logo} alt="" className='cursor-pointer' onClick={()=>navigate("/")}/>
            </div>
            <div>
                <ul className='flex space-x-10 uppercase'>
                    <li  onClick={()=>navigate("/")} className={` cursor-pointer py-9 text-sm font-semibold 
                    text-gray-400 border-b-[3px] border-b-transparent hover:border-b-blue-500
                     ${pathMatchRoute("/") && "text-black border-b-blue-500"}`}>Home
                     </li>
                    <li  onClick={()=>navigate("/about")} className={`relative group cursor-pointer py-9 text-sm font-semibold 
                    text-gray-400 border-b-[3px] border-b-transparent 
                     ${pathMatchRoute("/about") && "text-black border-b-blue-500"}`}>About
                     <div className='absolute top-0 text-white -left-96 transition
                     group-hover:translate-y-5 translate-y-0 
                     invisible group-hover:opacity-60 group-hover:visible
                     duration-500 ease-in-out group-hover:transition
                     z-50 min-w-[700px] transform'>
                     <div className='relative top-[75px] p-6 bg-blue-600
                     shadow-xl w-full'>
                       <div className='w-10 h-10 bg-blue-600
                       transform rotate-45 absolute top-0 z-0
                       translate-x-0 transition-transform 
                       group-hover:translate-x-[23rem] duration-500
                       ease-in-out rounded-sm'>
                       
                       </div>
                       Hello World
                     </div>
                     </div></li>
                    <li  onClick={()=>navigate("/services")} className={`cursor-pointer py-9 text-sm font-semibold 
                    text-gray-400 border-b-[3px] border-b-transparent hover:border-b-blue-500
                     ${pathMatchRoute("/services") && "text-black border-b-blue-500"}`}>Service</li>
                    <li  onClick={()=>navigate("/news")} className={`cursor-pointer py-9 text-sm font-semibold 
                    text-gray-400 border-b-[3px] border-b-transparent hover:border-b-blue-500
                     ${pathMatchRoute("/news") && "text-black border-b-blue-500"}`}>News</li>
                    <li  onClick={()=>navigate("/contact")} className={`cursor-pointer py-9 text-sm font-semibold 
                    text-gray-400 border-b-[3px] border-b-transparent hover:border-b-blue-500
                     ${pathMatchRoute("/contact") && "text-black border-b-blue-500"}`}>Contact</li>
                    <li ><Link target={"_blank"} to="/admin">Sign In</Link></li>
                </ul>
            </div>
        </header>
    </div>
  )
}
