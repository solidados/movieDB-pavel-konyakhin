import logo from '../../assets/logo-movie.png'
import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <a href="#">Movies</a>
          <a href="#">Favorites</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
