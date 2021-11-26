// == Import
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { openMenuBurger } from 'src/actions/menu';

import Logo from 'src/assets/logo.gif';

import {
  FaBars,
} from 'react-icons/fa';

import MenuBurger from './MenuBurger';

import './style.scss';

// == Composant
const HeaderMobile = () => {
  const isOpen = useSelector((state) => state.menu.isOpen);

  const dispatch = useDispatch();

  const handleOpenMenuBurger = () => {
    dispatch(openMenuBurger());
  };

  return (
    <>
      <div className="header_mobile__left">
        <Link
          to="/"
          title="A Tale of You"
        >
          <img src={Logo} alt="Logo du site" />
        </Link>
      </div>
      <div className="header_mobile__right">
        <FaBars
          className="FaBars"
          onClick={handleOpenMenuBurger}
        />
      </div>
      {
        isOpen && (
          <MenuBurger />
        )
      }
    </>
  );
};

// == Export
export default HeaderMobile;
