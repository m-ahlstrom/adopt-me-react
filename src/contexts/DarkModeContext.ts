import { createContext } from 'react'

export type NewMode = 'light' | 'dark'

const defaultValue = {
  currentMode: 'light',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeCurrentMode: (newMode: NewMode) => {},
}

export const DarkModeContext = createContext(defaultValue)
