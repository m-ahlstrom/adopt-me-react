import { useContext } from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext'

const DarkModeToggle = () => {
  const { currentMode, changeCurrentMode } = useContext(DarkModeContext)

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        aria-label="dark mode toggle button"
        type="checkbox"
        value=""
        className="peer sr-only"
        onClick={() =>
          changeCurrentMode(currentMode === 'light' ? 'dark' : 'light')
        }
      />
      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-button-color peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 dark:border-gray-600 dark:bg-gray-700"></div>
    </label>
  )
}

export default DarkModeToggle
