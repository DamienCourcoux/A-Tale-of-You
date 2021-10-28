import { Link, NavLink } from 'react-router-dom';

import Logo from 'src/assets/logo.gif';
import {
  FaBook,
  FaScroll,
  FaUserAlt,
  FaUserPlus,
} from 'react-icons/fa';

import './header.scss';

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__nav--games">
        <li>
          <Link
            to="/"
            title="A Tale of You"
          >
            <img src={Logo} alt="Logo du site" />
          </Link>
        </li>
        <li>
          <NavLink
            to="/histoire"
            title="Jouer"
          >
            <FaBook />
            Jouer
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/regles"
            title="Règles du jeu"
          >
            <FaScroll />
            Règles du jeu
          </NavLink>
        </li>
      </ul>
      <ul className="header__nav--settings">
        <li>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <FaUserAlt />
            Se connecter
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <FaUserPlus />
            S'inscrire
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
