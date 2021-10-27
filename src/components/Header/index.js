import Signup from 'src/components/Signup';
import Signin from 'src/components/Signin';

import Logo from 'src/assets/logo.gif';
import { FaBook, FaScroll } from 'react-icons/fa';

import './header.scss';

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__nav--games">
        <li>
          <a href="/" title="A Tale of You"><img src={Logo} alt="Logo du site" /></a>
        </li>
        <li>
          <a href="/" title="Jouer"><FaBook /> Jouer</a>
        </li>
        <li>
          <a href="/" title="Règles du jeu"><FaScroll /> Règles du jeu</a>
        </li>
      </ul>
      <ul className="header__nav--settings">
        <li>
          <Signup />
        </li>
        <li>
          <Signin />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
