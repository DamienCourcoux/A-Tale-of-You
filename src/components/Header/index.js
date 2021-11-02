import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showSignin, showSignup, logout } from 'src/actions/user';

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

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  const { isLogged, userPseudo } = useSelector((state) => ({
    isLogged: state.user.isLogged,
    userPseudo: state.user.userPseudo,
  }));

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
        {isLogged && (
          <ul className="header__nav--settings">
            <li>
              <FaUserAlt />
              <p>Bonjour {userPseudo}</p>
            </li>
            <li>
              <a href="#" onClick={(event) => handleShowSignup(event)}>
                <FaUserPlus />
                <p>profil</p>
              </a>
            </li>
            <li>
              <a href="#" onClick={(event) => handleLogout(event)}>
                <FaUserPlus />
                <p>se déconnecter</p>
              </a>
            </li>
          </ul>
        )}
        {!isLogged && (
          <ul className="header__nav--settings">
            <li>
              <a href="#" onClick={(event) => handleShowSignin(event)}>
                <FaUserAlt />
                <p>se connecter</p>
              </a>
            </li>
            <li>
              <a href="#" onClick={(event) => handleShowSignup(event)}>
                <FaUserPlus />
                <p>S'inscrire</p>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
