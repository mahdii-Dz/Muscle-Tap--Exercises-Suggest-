'use client'
import Image from 'next/image'
import React, { Suspense, useContext } from 'react'
import { GlobalContext } from '../context/Context'
import Loading from '../components/Loading'
import dynamic from 'next/dynamic'

const StepsBar = dynamic(() => import('./StepsBar'))
const Main = dynamic(() => import('./Main'))

function Welcome() {
  const { startApp, setStartApp } = useContext(GlobalContext)

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
            <Suspense fallback={<Loading></Loading>}>
              <StepsBar />
              <Main />
            </Suspense>
          )
      }

    </>

  )
}

export default Welcome