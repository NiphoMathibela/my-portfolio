import React from 'react'
import Processor from "../assets/Processor 1.png"

const DecorCard = () => {
  return (
    <div className='mt-10 m-auto bg-black max-w-[256px] max-h-[320px] shadow-4xl rounded-lg p-4 md:mr-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
      <h2 className='text-white text-lg font-bold text-center'>Back-End</h2>
      <img src={Processor} className="ml-auto mt-10" />
    </div>
  )
}

export default DecorCard