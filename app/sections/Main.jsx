import React from 'react'
import MuscleOptions from '../components/MuscleOptions'

function Main() {
    return (
        <div className="grow h-full w-full overflow-y-scroll [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-neutral-700
  [&::-webkit-scrollbar-thumb]:bg-neutral-500
  [&::-webkit-scrollbar-thumb]:rounded
  ">
            <MuscleOptions />
        </div>
    )
}

export default Main