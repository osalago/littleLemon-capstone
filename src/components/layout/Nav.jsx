import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#menu" className="nav__link">
            Menu
          </a>
        </li>
        <li className="nav__item">
          <a href="#reservations" className="nav__link">
            Reservations
          </a>
        </li>
        <li className="nav__item">
          <a href="#order-online" className="nav__link">
            Order Online
          </a>
        </li>
        <li className="nav__item">
          <a href="#login" className="nav__link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
