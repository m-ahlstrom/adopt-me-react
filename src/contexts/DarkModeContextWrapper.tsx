import { useState, useEffect, ReactElement } from 'react'
import { NewMode, DarkModeContext } from './DarkModeContext'

const DarkModeContextWrapper = ({ children }: { children: ReactElement }) => {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light')

  const changeCurrentMode = (newMode: NewMode) => {
    setMode(newMode)
    localStorage.setItem('mode', newMode)
  }

  useEffect(() => {
    if (mode === 'light') document.body.classList.remove('dark')
    else document.body.classList.add('dark')
  }, [mode])

  return (
    <DarkModeContext.Provider value={{ currentMode: mode, changeCurrentMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeContextWrapper
