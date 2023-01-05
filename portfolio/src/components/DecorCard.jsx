import React from 'react'
import Processor from "../assets/Processor 1.png"

const DecorCard = () => {
  return (
    <div className='mt-10 m-auto bg-black max-w-[256px] max-h-[320px] shadow-4xl rounded-lg p-4 md:mr-4'>
      <h2 className='text-white text-lg font-bold text-center'>Back-End</h2>
      <img src={Processor} className="ml-auto mt-10" />
    </div>
  )
}

export default DecorCard