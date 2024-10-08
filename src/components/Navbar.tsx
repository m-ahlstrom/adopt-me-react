import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import imgUrl from '../assets/images/image-logo.png'

const Navbar = () => {
  return (
    <header className="mx-auto flex w-full content-start items-center bg-background-color pb-10 pl-10 pr-10 pt-10 dark:bg-zinc-700 dark:text-white">
      <nav className="ml-9 justify-between pl-2 md:ml-16">
        <Link to="/">
          <img
            className="w-2/3"
            alt="Adopt Me Pet Adoption Site Logo"
            src={imgUrl}
          />
        </Link>
      </nav>
      <div className="ml-auto mr-10 md:mr-16">
        <DarkModeToggle />
      </div>
    </header>
  )
}

export default Navbar
