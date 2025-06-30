'use client'
import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import Image from 'next/image'
import Instructions from './Instructions'

function FinalExercises({customClassName}) {
    const { exercises, showInfo, setShowInfo, infoExercise, setInfoExercise, } = useContext(GlobalContext)


    return (
        <section className={`w-full h-auto py-12 px-8 mb-16 ${customClassName}`}>
            <h1 className='text-xl font-semibold mb-8'>Final Exercises</h1>
            {
                exercises
                    ? exercises.map((exo, index) => (
                        <div key={index} className='item w-full h-16 flex bg-gray-800 px-4 mb-2 select-none rounded-lg justify-between items-center'>
                            <div className="dragIcon flex gap-2 items-center ">
                                <span className='bg-primary-1 text-white text-sm font-semibold rounded-sm px-2 py-1'>{exo.muscle}</span>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div onClick={() => {
                                            setShowInfo(true)
                                            setInfoExercise(exo)
                                        }}>
                                            <Image src={'/info.svg'} alt='info icon' width={20} height={20} className='cursor-pointer' />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>instructions</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                            <div>
                                <span>{exo.name}</span>
                            </div>
                            <div >

                            </div>
                        </div>
                    ))
                    : <span>No Exercises found</span>
            }
            {
                showInfo && infoExercise && <Instructions exercise={infoExercise} />
            }
        </section>
    )
}

export default FinalExercises