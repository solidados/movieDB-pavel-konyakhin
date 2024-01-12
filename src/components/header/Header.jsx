import logo from '../../assets/logo-movie.png'
import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="logo" />
        <nav>
          <a href="#">Movies</a>
          <a href="#">Favorites</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
