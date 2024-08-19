import { createContext } from 'react'

const defaultValue = {
  currentMode: 'light',
  changeCurrentMode: (newMode = 'light' | 'dark') => {},
}

const DarkModeContext = createContext(defaultValue)

export default DarkModeContext
