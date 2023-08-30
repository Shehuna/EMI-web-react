import React from 'react'


export default function Home() {
  const slides =[
    {
      url: 'https://images.unsplash.com/photo-1682695798256-28a674122872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1682686580003-22d3d65399a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80'  
    } 
  ];
 
  return (
    <>
    <div className='w-full h-[400px] relative'>
      <div style={{background: `url(${slides[0].url})`}} className='h-full bg-center bg-contain duration-500'>

      </div>

    </div>
    <div className='items-center w-full font-bold'>
      <h2>Your partner in organizational transformation</h2>
    </div>
    </>
  )
}
