import './Header.css';
import Nav from './Nav';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img
          src="assets/Logo.svg"
          alt="Little Lemon Logo"
          className="header__logo"
        />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
