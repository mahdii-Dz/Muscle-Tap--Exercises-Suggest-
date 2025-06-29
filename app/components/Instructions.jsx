'use client'
import React, { useContext, useRef } from 'react'
import { GlobalContext } from '../context/Context'
import { useClickOutside } from 'react-haiku'

function Instructions({ exercise }) {
    const { setShowInfo } = useContext(GlobalContext)
    const { name, type, muscle, equipment, difficulty, instructions, url } = exercise

    console.log(exercise);

    const infoRef = useRef(null)
    useClickOutside(infoRef, () => setShowInfo(false))
    return (
        <div ref={infoRef} className='absolute overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-thumb]:rounded z-50 rounded bg-secondary-1 border border-slate-600 w-11/12 h-11/12  top-1/2 left-1/2 -translate-1/2 p-4'>
            <div className='CloseBtn flex justify-between items-center w-full h-auto'>
                <div className='text-2xl font-bold'>
                    {name}
                </div>
                <div onClick={() => setShowInfo(false)} className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style={{ fill: 'rgba(128, 128, 128, 1)' }}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                </div>
            </div>
            <div className='flex items-center w-full h-auto mt-4 gap-3 font-semibold'>
                <span className='bg-orange-600 rounded-sm px-2.5 py-1 text-xs text-white'>{type}</span>
                <span className='bg-blue-800 rounded-sm px-2.5 py-1 text-xs text-white'>{muscle}</span>
                <span className='bg-purple-800 rounded-sm px-2.5 py-1 text-xs text-white'>{equipment}</span>
                <span className='bg-green-800 rounded-sm px-2.5 py-1 text-xs text-white'>{difficulty}</span>
            </div>
            <div className='info w-full h-auto mt-6'>
                <h1 className='text-lg font-bold'>Instructions:</h1>
                <div className='mt-2 text-gray-200'>
                    <p>{instructions}</p>
                </div>
            </div>
            <div className='w-full h-auto mt-6'>
                <iframe
                    width='100%'
                    height='365'
                    src={url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    
                    title="YouTube video player"
                ></iframe>
            </div>
        </div>
    )
}

export default Instructions