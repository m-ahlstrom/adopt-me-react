import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="content-left mx-auto flex w-full content-center items-center bg-background-color pb-10 pl-10 pr-10 pt-10">
      <nav className="justify-between">
        <Link to="/">
          Adopt Me
        </Link>
      </nav>
      <div className="ml-auto mr-24">Placeholder</div>
    </header>
  )
}

export default Navbar
