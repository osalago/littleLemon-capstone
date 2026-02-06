import './Header.css';
import Nav from './Nav';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img
          src="/src/assets/Logo.svg"
          alt="Little Lemon Logo"
          className="header__logo"
        />
        <h1 className="header__title">Little Lemon</h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
