'use client'
import React, { useContext } from 'react'
import MuscleOptions from '../components/MuscleOptions'
import ProgressBtn from '../components/ProgressBtn'
import { GlobalContext } from '../context/Context'
import SuggestedExercises from '../components/SuggestedExercises'

function Main() {
    const { pageNum } = useContext(GlobalContext)
    return (
        <div className="grow relative h-full w-full overflow-x-clip overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-thumb]:rounded">
            <ProgressBtn />
            <MuscleOptions customClassName={pageNum === 1 ? '' : 'hidden'} />
            {
                pageNum === 2 && <SuggestedExercises />
            }
        </div>
    )
}

export default Main