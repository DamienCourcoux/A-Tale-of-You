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

const HeaderDesktop = () => {
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
    <>
      <div className="header_desktop__left">
        <Link
          to="/"
          title="A Tale of You"
        >
          <img src={Logo} alt="Logo du site" />
        </Link>
        <NavLink
          to="/histoire"
          title="Jouer"
          activeClassName="is-active"
        >
          <FaBook />
          Jouer
        </NavLink>
        <NavLink
          to="/regles"
          title="Règles du jeu"
          activeClassName="is-active"
        >
          <FaScroll />
          Règles du jeu
        </NavLink>
      </div>
      {isLogged && (
        <div className="header_desktop__right">
          {/* <div className="user">
            <FaUserAlt />
            Bonjour {userPseudo}
          </div> */}
          <NavLink
            to="/profil"
            title={`Profil de ${userPseudo}`}
            activeClassName="is-active"
          >
            <FaBook />
            Profil
          </NavLink>
          <a href="#" onClick={(event) => handleLogout(event)}>
            <FaUserSlash />
            Se déconnecter
          </a>
        </div>
      )}
      {!isLogged && (
        <div className="header_desktop__right">
          <a href="#" onClick={(event) => handleShowSignin(event)}>
            <FaUserAlt />
            Se connecter
          </a>
          <a href="#" onClick={(event) => handleShowSignup(event)}>
            <FaUserPlus />
            S'inscrire
          </a>
        </div>
      )}
    </>
  );
};

export default HeaderDesktop;
