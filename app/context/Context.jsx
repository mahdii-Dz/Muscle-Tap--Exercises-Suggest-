'use client'
import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

function Context({ children }) {
  const [startApp, setStartApp] = useState(false)
  const [pageNum, setPageNum] = useState(1)
  const [muscles, setMuscles] = useState([])
  const [showInfo, setShowInfo] = useState(false)
  const [infoExercise, setInfoExercise] = useState(null)
  const [exercises, setExercises] = useState([])


  return (
    <GlobalContext.Provider
      value={{
        pageNum,
        setPageNum,
        muscles,
        setMuscles,
        showInfo,
        setShowInfo,
        infoExercise,
        setInfoExercise,
        startApp,
        setStartApp,
        exercises,
        setExercises
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default Context