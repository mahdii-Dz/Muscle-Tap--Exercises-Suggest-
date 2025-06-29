'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context'

function ProgressBtn() {
    const { setPageNum, muscles, pageNum } = useContext(GlobalContext)

    function handlePageNum(direction) {
        if (muscles?.length === 0) return
        setPageNum(prev => {
            if (direction === 'next') {
                return prev === 4 ? 4 : prev + 1
            } else {
                return prev === 1 ? 1 : prev - 1
            }
        })
    }
    return (
        <div className='flex justify-between rounded-full overflow-clip z-50 gap-4 p-2 border border-slate-500/50 items-center w-full max-w-[calc(100%-2rem)] sm:max-w-[calc(45%-2rem)] fixed sm:bottom-20 bottom-8 sm:right-1/5 right-1/2 translate-1/2 sm:translate-0 bg-gray-900'>
            <button onClick={() => handlePageNum('prev')} className='w-1/2 h-12 flex justify-center gap-2 items-center font-semibold rounded-full hover:scale-[98%] transition duration-200 cursor-pointer hover:bg-white/10 bg-transparent text-white'>
                <Image src={'LeftArrow.svg'} alt='left arrow' width={20} height={20} className='invert' />
                <span>Previous</span>
            </button>
            <button onClick={() => handlePageNum('next')} className={`w-1/2 h-12 flex justify-center gap-2 items-center font-semibold rounded-full hover:scale-[98%] transition duration-200 hover:bg-primary-hover-1 cursor-pointer bg-primary-1 text-white ${muscles?.length === 0 ? '!cursor-not-allowed opacity-50' : ''}`}>
                <span>
                    {pageNum >= 3 ? 'Finish' : 'Continue'}
                </span>
                <Image src={'RightArrow.svg'} alt='right arrow' width={20} height={20} className='invert' />
            </button>
        </div>
    )
}

export default ProgressBtn