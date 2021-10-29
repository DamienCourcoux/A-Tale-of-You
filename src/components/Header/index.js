import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showSignin, showSignup } from 'src/actions/user';

import Logo from 'src/assets/logo.gif';
import {
  FaBook,
  FaScroll,
  FaUserAlt,
  FaUserPlus,
} from 'react-icons/fa';

import './header.scss';

const Header = () => {
  const dispatch = useDispatch();

  const handleShowSignin = (event) => {
    event.preventDefault();
    dispatch(showSignin());
  };

  const handleShowSignup = (event) => {
    event.preventDefault();
    dispatch(showSignup());
  };

  return (
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
              onClick={(event) => handleShowSignin(event)}
            >
              <FaUserAlt />
              Se connecter
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => handleShowSignup(event)}
            >
              <FaUserPlus />
              S'inscrire
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
