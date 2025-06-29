'use client'
import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context'

function StepsBar() {
  const { pageNum } = useContext(GlobalContext)


  return (
    <aside className='sm:w-2/6 w-full sm:h-full h-2/4 pt-16 bg-gray-800 flex flex-col justify-start items-center'>
      <div className="wrapper">
        <div className='First-step flex items-center w-full gap-4'>
          <div className={`number w-12 h-12 ${pageNum === 1 ? 'bg-primary-1' : 'bg-green-400'} text-white text-lg rounded-full flex justify-center items-center`}>
            {
              pageNum === 1 ? <span>1</span> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(255, 255, 255, 1)' }}><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
            }
          </div>
          <div className='flex flex-col items-start justify-center'>
            <span className={`text-lg font-bold ${pageNum === 1 ? 'text-white' : 'text-green-400'}`}>Muscles</span>
            <span className='text-gray-500'>Choose your training</span>
          </div>
        </div>
        <div className={`w-0.5 h-24 ml-6 my-4  ${pageNum === 1 ? 'bg-gray-500' : 'bg-green-400'}`}></div>
        <div className='second-step flex items-center w-full gap-4'>
          <div className={`number w-12 h-12 ${pageNum <= 2 ? 'bg-primary-1' : 'bg-green-400'} text-white text-lg rounded-full flex justify-center items-center`}>
            {
              pageNum <= 2 ? <span>2</span> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(255, 255, 255, 1)' }}><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
            }
          </div>
          <div className='flex flex-col items-start justify-center'>
            <span className='text-lg font-bold'>Exercises</span>
            <span className='text-gray-500'>Customize your workout</span>
          </div>
        </div>

        <div className={`w-0.5 h-24 ml-6 my-4  ${pageNum <= 2 ? 'bg-gray-500' : 'bg-green-400'}`}></div>
        <div className='second-step flex items-center w-full gap-4'>
          <div className={`number w-12 h-12 ${pageNum <= 3 ? 'bg-primary-1' : 'bg-green-400'} text-white text-lg rounded-full flex justify-center items-center`}>
            {
              pageNum <= 3 ? <span>3</span> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(255, 255, 255, 1)' }}><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
            }
          </div>
          <div className='flex flex-col items-start justify-center'>
            <span className='text-lg font-bold'>Finish</span>
            <span className='text-gray-500'>Start Your WorkOut</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default StepsBar