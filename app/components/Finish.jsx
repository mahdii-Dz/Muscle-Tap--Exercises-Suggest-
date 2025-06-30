import Image from 'next/image'
import React from 'react'

function Finish({customClassName}) {
  return (
    <div className={`w-full h-full flex justify-center items-center ${customClassName}`}>
        <div className='w-2/3 h-7/12 bg-white rounded-lg flex flex-col justify-center items-center'> 
            <Image loading='lazy' src={'/Congrates.gif'} alt='congratulations gif' width={200} height={200}  />
            <h3 className='text-black text-2xl font-bold'>Congratulations🎉</h3>
        </div>
    </div>
  )
}

export default Finish