import { Link } from 'react-router-dom';

import Logo from 'src/assets/logo.gif';
import {
  FaBars,
} from 'react-icons/fa';

import './style.scss';

const HeaderMobile = () => (
  <>
    <ul className="header_mobile__left">
      <li>
        <Link
          to="/"
          title="A Tale of You"
        >
          <img src={Logo} alt="Logo du site" />
        </Link>
      </li>
    </ul>
    <ul className="header_mobile__right">
      <FaBars className="FaBars" />
    </ul>
  </>
);

export default HeaderMobile;
