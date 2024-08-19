import { useContext } from 'react'
import DarkModeContext from '../contexts/DarkModeContext'

const DarkModeToggle = () => {
  const { currentMode, changeCurrentMode } = useContext(DarkModeContext)

  return (
      <label className="relative inline-flex items-center cursor-pointer">
            <input
              aria-label='dark mode toggle button'
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={() => changeCurrentMode(currentMode === 'light' ? 'dark' : 'light')}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-button-color"></div>
        </label>
  )
}

export default DarkModeToggle