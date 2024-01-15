import { Link, NavLink } from "react-router-dom";

import logo from '../../assets/logo-movie.png'
import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <NavLink to="/">Movies</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
