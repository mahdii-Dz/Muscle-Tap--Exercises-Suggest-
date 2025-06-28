'use client'
import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

function Context({children}) {
    const [pageNum,setPageNum] = useState(1)
    const [muscles,setMuscles] = useState([])

    console.log(muscles);
    
  return (
    <GlobalContext.Provider value={{pageNum,setPageNum,muscles,setMuscles}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default Context