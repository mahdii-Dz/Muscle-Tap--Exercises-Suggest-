'use client'
import React, { useContext } from 'react'
import MuscleOptions from '../components/MuscleOptions'
import ProgressBtn from '../components/ProgressBtn'
import { GlobalContext } from '../context/Context'
import SuggestedExercises from '../components/SuggestedExercises'
import FinalExercises from '../components/FinalExercises'
import Finish from '../components/Finish'

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