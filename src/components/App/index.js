// == Import
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  hideSignin,
  hideSignup,
  hideSelectCharacter,
} from 'src/actions/user';
import {
  hideDiceRoller,
} from 'src/actions/game';

import Header from 'src/components/Header';
import Index from 'src/components/Index';
import Footer from 'src/components/Footer';
import Story from 'src/components/Story';
import Rules from 'src/components/Rules';
import Profile from 'src/components/Profile';
import About from 'src/components/About';
import Signin from 'src/components/Signin';
import Signup from 'src/components/Signup';
import SelectCharacter from 'src/components/SelectCharacter';
import Ingame from 'src/components/Ingame';
import Error404 from 'src/components/Error404';
import DiceRoller from 'src/components/DiceRoller';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  const {
    signinIsOpen,
    signupIsOpen,
    selectCharacterIsOpen,
    isLogged,
    diceRollerIsOpen,
  } = useSelector((state) => ({
    signinIsOpen: state.user.signinIsOpen,
    signupIsOpen: state.user.signupIsOpen,
    selectCharacterIsOpen: state.user.selectCharacterIsOpen,
    isLogged: state.user.isLogged,
    diceRollerIsOpen: state.game.diceRollerIsOpen,
  }));

  const handleHideModals = (event) => {
    if (event.target.className === 'signin') dispatch(hideSignin());
    if (event.target.className === 'signup') dispatch(hideSignup());
    if (event.target.className === 'select_character') dispatch(hideSelectCharacter());
    if (event.target.className === 'diceRoller') dispatch(hideDiceRoller());
  };

  return (
    <div
      className="app"
      onMouseDown={(event) => handleHideModals(event)}
    >
      <Header />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/histoire">
          <Story />
        </Route>
        <Route exact path="/regles">
          <Rules />
        </Route>
        <Route exact path="/a-propos">
          <About />
        </Route>
        <Route exact path="/jouer">
          <Ingame />
        </Route>
        {
          isLogged && (
          <Route exact path="/profil">
            <Profile />
          </Route>
          )
        }
        <Route>
          <Error404 />
        </Route>
      </Switch>
      {signinIsOpen && (
        <Signin />
      )}
      {signupIsOpen && (
        <Signup />
      )}
      {selectCharacterIsOpen && (
        <SelectCharacter />
      )}
      {
        diceRollerIsOpen && (
          <DiceRoller />
        )
      }
      <Footer />
    </div>
  );
};

// == Export
export default App;
