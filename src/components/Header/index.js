import './style.scss';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = () => (
  <header className="header">
    <div className="header_desktop">
      <nav className="header__nav">
        <HeaderDesktop />
      </nav>
    </div>
    <div className="header_mobile">
      <nav className="header__nav">
        <HeaderMobile />
      </nav>
    </div>
  </header>
);

export default Header;
