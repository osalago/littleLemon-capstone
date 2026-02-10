import './Footer.css';

function Footer() {
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Menu', path: '/menu' },
    { label: 'Reservation', path: '/reservations' },
    { label: 'Order Online', path: '/order' },
    { label: 'Login', path: '/login' },
  ];

  const socialLinks = [
    { label: 'Facebook', url: 'https://facebook.com' },
    { label: 'Youtube', url: 'https://youtube.com' },
    { label: 'Instagram', url: 'https://instagram.com' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img
            src="assets/Logo.svg"
            alt="Little Lemon"
            className="footer__logo"
          />
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Doormat Navigation</h3>
          <nav aria-label="Footer navigation">
            <ul className="footer__list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <a href={link.path} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Contact Info</h3>
          <address className="footer__address">
            <p>1234 Lemon St, Citrus City, CA 90210</p>
            <p>Phone (123) 456-7890</p>
            <p>email littlelemon@abc.com</p>
          </address>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Find us on</h3>
          <ul className="footer__list">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
