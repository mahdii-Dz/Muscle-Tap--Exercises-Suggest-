'use client'
import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context'
import dynamic from 'next/dynamic'
const MuscleOptions = dynamic(() => import('../components/MuscleOptions'))
const ProgressBtn = dynamic(() => import('../components/ProgressBtn'))
const SuggestedExercises = dynamic(() => import('../components/SuggestedExercises'))
const FinalExercises = dynamic(() => import('../components/FinalExercises'))
const Finish = dynamic(() => import('../components/Finish'))

function Main() {
    const { pageNum, startApp } = useContext(GlobalContext)
    return (
        <>
            {
                startApp && (
                    <div className="grow relative h-full w-full overflow-x-clip overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-thumb]:rounded">
                        <ProgressBtn />
                        <MuscleOptions customClassName={pageNum === 1 ? '' : 'hidden'} />
                        <SuggestedExercises customClassName={pageNum === 2 ? '' : 'hidden'} />
                        <FinalExercises customClassName={pageNum === 3 ? '' : 'hidden'}/>
                        <Finish customClassName={pageNum === 4 ? '' : 'hidden'}/>
                    </div>
                )
            }

        </>
    )
}

export default Main