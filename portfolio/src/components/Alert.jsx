import React from 'react'

const Alert = (props) => {
  return (
    <div className='w-64 h-28 rounded-md bg-green z-10 mx-auto p-4 absolute bottom-80'>
        <h3 className='text-black font-bold text-xl'>{props.message}</h3>
        <button className="w-24 h-10 rounded-xl p-2 bg-black text-white m-4 font-bold animation-pulse">
            Okay
      </button>
    </div>
  )
}

export default Alert