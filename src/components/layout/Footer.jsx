function Footer() {
  return (
    <footer className="footer">
      <figure>
        <img
          src="/src/assets/Logo.svg"
          alt="Little Lemon Logo"
          className="footer__logo"
        />
      </figure>
      <p>
        Dormant Navigation
        <ul>
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#menu" className="footer__link">
              Menu
            </a>
          </li>
          <li>
            <a href="#reservations" className="footer__link">
              Reservations
            </a>
          </li>
          <li>
            <a href="#order-online" className="footer__link">
              Order Online
            </a>
          </li>
          <li>
            <a href="#login" className="footer__link">
              Login
            </a>
          </li>
        </ul>
      </p>
      <p>
        Contact Info
        <dl>
          <dt>Address:</dt>
          <dd>1234 Lemon St, Citrus City, CA 90210</dd>
          <dt>Phone:</dt>
          <dd>(123) 456-7890</dd>
          <dt>Email:</dt>
          <dd>littlelemon@abc.com</dd>
        </dl>
      </p>
      <p>
        Find us on
        <ul>
          <li>
            <a href="#facebook" className="footer__link">
              Facebook
            </a>
          </li>
          <li>
            <a href="#instagram" className="footer__link">
              Instagram
            </a>
          </li>
          <li>
            <a href="#youtube" className="footer__link">
              Youtube
            </a>
          </li>
        </ul>
      </p>
      <p>© Little Lemon</p>
    </footer>
  );
}

export default Footer;
