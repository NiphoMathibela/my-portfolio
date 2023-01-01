import React from 'react'
import iMac from "../assets/iMac.png"

const FrontEndCard = () => {
  return (
    <div className='mt-48 ml-12 bg-green w-64 h-80 shadow-4xl rounded-lg p-4'>
        <h2 className='text-black text-lg font-bold text-center'>Front-End</h2>
        <img src= {iMac} className= "ml-auto mt-10"/>
    </div>
  )
}

export default FrontEndCard