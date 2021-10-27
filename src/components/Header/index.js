import Signup from "src/components/Signup";
import Signin from "src/components/Signin";

const Header = () => (
  <nav className="Header">
    <div>Index</div>
    <div>Règles du jeu</div>
    <div>Jouer</div>
    <Signup />
    <Signin />
  </nav>
)

export default Header;
