import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="mx-auto flex w-full content-start items-center bg-background-color pb-10 pl-10 pr-10 pt-10">
      <nav className="ml-9 justify-between pl-2 md:ml-16">
        <Link to="/"><img className='w-2/3' alt='Adopt Me Pet Adoption Site Logo' src="../assets/images/image-logo.png" /></Link>
      </nav>
      <div className="ml-auto mr-10 md:mr-16">Placeholder</div>
    </header>
  )
}

export default Navbar
