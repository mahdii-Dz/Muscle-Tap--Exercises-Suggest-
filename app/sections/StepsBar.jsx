'use client'
import React from 'react'

function StepsBar() {




  return (
    <div className='sm:w-2/6 w-full sm:h-full h-2/4 pt-16 bg-gray-800 flex flex-col justify-start items-center'>
      <div className="wrapper">
        <div className='First-step flex items-center w-full gap-4'>
          <div className='number w-12 h-12 bg-primary text-white text-lg rounded-full flex justify-center items-center'>
            <span>1</span>
          </div>
          <div className='flex flex-col items-start justify-center'>
            <span className='text-lg font-bold'>Muscles</span>
            <span className='text-gray-500'>Choose your training</span>
          </div>
        </div>
        <div className='w-0.5 h-24 ml-6 my-4 bg-gray-500'></div>
        <div className='second-step flex items-center w-full gap-4'>
          <div className='number w-12 h-12 bg-primary text-white text-lg rounded-full flex justify-center items-center'>
            <span>2</span>
          </div>
          <div className='flex flex-col items-start justify-center'>
            <span className='text-lg font-bold'>Exercises</span>
            <span className='text-gray-500'>Customize your workout</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepsBar