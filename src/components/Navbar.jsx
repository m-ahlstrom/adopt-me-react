import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="nav-home">
          Adopt Me
        </Link>
      </nav>
      <div className="dark-mode-toggle-button">Placeholder</div>
    </header>
  );
};

export default Navbar;
