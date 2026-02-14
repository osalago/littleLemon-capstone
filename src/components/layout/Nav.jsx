import './Nav.css';

function Nav() {
  const navLinks = [
    // use path (minuscule) for being functional, and Path (majuscule) for being un-functional.
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Menu', path: '/menu' },
    { label: 'Reservation', path: '/reservations' },
    { label: 'Order Online', path: '/order-online' },
    { label: 'Login', path: '/login' },
  ];

  return (
    <nav aria-label="Main Navigation" className="nav">
      <ul className="nav__list">
        {navLinks.map((link) => (
          <li key={link.path} className="nav__item">
            <a href={link.path} className="nav__link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
