'use client'
import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context'
import useExercises from './useExercises'
import Loading from './Loading'

function SuggestedExercises() {
    const {muscles} = useContext(GlobalContext)

    const {data:exercises,isLoading} = useExercises(muscles)

    if(isLoading){
        return (
            <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
                <Loading/>
                <div>Loading...</div>
            </div>
        )
    }

  return (
    <section>

    </section>
  )
}

export default SuggestedExercises