'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context'
import StepsBar from './StepsBar'
import Main from './Main'


function Welcome() {
  const { startApp, setStartApp } = useContext(GlobalContext)
  console.log(startApp);

  return (
    <>
      {
        startApp === false ?
          (
            <div className='w-full h-full flex flex-col gap-16 justify-center items-center bg-secondary-1'>
              <div className='flex flex-col items-center font-semibold justify-center'>
                <Image src={'/Logo.svg'} alt='logo image' width={100} height={100} />
                <h1 className='text-xl font-bold mt-4 mb-6'>Muscle Tap</h1>
              </div>
              <div className='flex flex-col justify-center items-center gap-4'>
                <p>Ready To Start Your Workout?</p>
                <button onClick={() => { setStartApp(true) }} className='bg-primary-1 text-lg font-bold px-4 py-2 rounded-md cursor-pointer'>Get Started</button>
              </div>
            </div>
          )
          : (
            <>
              <StepsBar />
              <Main />
            </>
          )
      }

    </>

  )
}

export default Welcome