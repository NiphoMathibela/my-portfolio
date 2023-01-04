import React from 'react'
import iMac from "../assets/iMac.png"

const FrontEndCard = () => {
  return (
    <div className='mt-10 m-auto bg-green max-w-[256px] max-h-[320px] shadow-4xl rounded-lg p-4 md:mt-40 md:ml-4'>
        <h2 className='text-black text-lg font-bold text-center'>Front-End</h2>
        <img src= {iMac} className= "ml-auto mt-10"/>
    </div>
  )
}

export default FrontEndCard