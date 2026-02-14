import './Nav.css';

function Nav() {
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', Path: '/about' },
    { label: 'Menu', Path: '/menu' },
    { label: 'Reservations', Path: '/reservations' },
    { label: 'Order Online', Path: '/order-online' },
    { label: 'Login', Path: '/login' },
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
