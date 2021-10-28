import { Link, NavLink } from 'react-router-dom';

import Logo from 'src/assets/logo.gif';
import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <Link
      className="footer__logo"
      to="/"
    >
      <img src={Logo} alt="Logo du site" />
    </Link>
    <div className="footer__links">
      <ul className="footer__links--reseaux">
        <li>
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Link>
        </li>
      </ul>
      <NavLink
        className="footer__links--aboutUs"
        to="/a-propos"
      >
        A propos de nous
      </NavLink>
      <p className="footer__links--copyright">© 2021 <span>A Tale of You</span>. Tous droits réservés.</p>
    </div>
  </footer>
);
export default Footer
