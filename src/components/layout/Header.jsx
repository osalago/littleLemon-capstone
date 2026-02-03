import Nav from './Nav';

function Header() {
  return (
    <header className="header">
      <div>
        <img
          src="/src/assets/Logo.svg"
          alt="Little Lemon Logo"
          className="header__logo"
        />
      </div>
      <h1 className="header__title">Little Lemon</h1>
      <Nav />
    </header>
  );
}

export default Header;
