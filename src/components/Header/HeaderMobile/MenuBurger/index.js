// == Import
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { showSignin, showSignup, logout } from 'src/actions/user';
import { closeMenuBurger } from 'src/actions/menu';

import {
  FaTimes,
  FaHome,
  FaBook,
  FaScroll,
  FaUserAlt,
  FaUserSlash,
  FaUserPlus,
} from 'react-icons/fa';

import './style.scss';

// == Composant
const MenuBurger = () => {
  const { isLogged, userPseudo } = useSelector((state) => ({
    isLogged: state.user.isLogged,
    userPseudo: state.user.userPseudo,
  }));

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
    dispatch(closeMenuBurger());
    history.replace('/');
  };

  const handleCloseMenuBurger = () => {
    dispatch(closeMenuBurger());
  };

  return (
    <section className="menuBurger">
      <FaTimes
        className="close"
        onClick={handleCloseMenuBurger}
      />
      <ul className="menuBurger--list">
        <li>
          <Link
            to="/"
            title="Retour à l'accueil"
            onClick={handleCloseMenuBurger}
          >
            <FaHome />
            Accueil
          </Link>
        </li>
        <li>
          <NavLink
            to="/histoire"
            title="Jouer"
            activeClassName="is-active"
            onClick={handleCloseMenuBurger}
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
            onClick={handleCloseMenuBurger}
          >
            <FaScroll />
            Règles du jeu
          </NavLink>
        </li>
        <div className="hr" />
        {
          isLogged && (
            <>
              <li>
                <p className="user">
                  <FaUserAlt />
                  Bonjour {userPseudo}
                </p>
              </li>
              <li>
                <NavLink
                  to="/profil"
                  title="Profil"
                  activeClassName="is-active"
                  onClick={handleCloseMenuBurger}
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
            </>
          )
        }
        {
          !isLogged && (
            <>
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
            </>
          )
        }
      </ul>
    </section>
  );
};

// == Export
export default MenuBurger;
