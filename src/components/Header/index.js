import { Link, NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showSignin, showSignup, logout } from 'src/actions/user';

import Logo from 'src/assets/logo.gif';
import {
  FaBook,
  FaScroll,
  FaUserAlt,
  FaUserPlus,
  FaUserSlash,
} from 'react-icons/fa';

import './style.scss';

const Header = () => {
  const history = useHistory();
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
    history.replace('/');
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
              activeClassName="is-active"
            >
              <FaBook />
              Jouer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/regles"
              title="Règles du jeu"
              activeClassName="is-active"
            >
              <FaScroll />
              Règles du jeu
            </NavLink>
          </li>
        </ul>
        {isLogged && (
          <ul className="header__nav--settings">
            <li>
              <NavLink
                to="/profil"
                title="Profil"
                activeClassName="is-active"
                className="welcome-message"
              >
                <FaUserAlt />
                Bonjour {userPseudo}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profil"
                title="Profil"
                activeClassName="is-active"
              >
                <FaBook />
                Profil
              </NavLink>
            </li>
            <li>
              <a href="#" onClick={(event) => handleLogout(event)}>
                <FaUserSlash />
                Se déconnecter
              </a>
            </li>
          </ul>
        )}
        {!isLogged && (
          <ul className="header__nav--settings">
            <li>
              <a href="#" onClick={(event) => handleShowSignin(event)}>
                <FaUserAlt />
                Se connecter
              </a>
            </li>
            <li>
              <a href="#" onClick={(event) => handleShowSignup(event)}>
                <FaUserPlus />
                S'inscrire
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
