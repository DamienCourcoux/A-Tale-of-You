import Logo from 'src/assets/logo.gif';
import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <a className="footer__logo" href="/"><img src={Logo} alt="Logo du site" /></a>
    <div className="footer__links">
      <ul className="footer__links--reseaux">
        <li><a href="/" target="_blank" rel="noopener noreferrer"><FaGithub /> </a></li>
        <li><a href="/" target="_blank" rel="noopener noreferrer"><FaTwitter /> </a></li>
        <li><a href="/" target="_blank" rel="noopener noreferrer"><FaFacebook /> </a></li>
      </ul>
      <a className="footer__links--aboutUs" href="/">A propos de nous</a>
      <p className="footer__links--copyright">© 2021 <span>A Tale of You</span>. Tous droits réservés.</p>
    </div>
  </footer>
);
export default Footer;
