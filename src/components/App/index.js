// == Import
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  hideSignin,
  hideSignup,
  hideSelectCharacter,
} from 'src/actions/user';

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
import DeleteProfil from 'src/components/Profile/ProfileRight/ShowProfile/DeleteProfile';

import './style.scss';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  const {
    signinIsOpen,
    signupIsOpen,
    selectCharacterIsOpen,
    isLogged,
    diceRollerIsOpen,
    sureToDeleteIsOpen,
  } = useSelector((state) => ({
    signinIsOpen: state.user.signinIsOpen,
    signupIsOpen: state.user.signupIsOpen,
    selectCharacterIsOpen: state.user.selectCharacterIsOpen,
    isLogged: state.user.isLogged,
    diceRollerIsOpen: state.game.diceRollerIsOpen,
    sureToDeleteIsOpen: state.user.sureToDeleteIsOpen,
  }));

  const handleHideModals = (event) => {
    if (event.target.className === 'modal modal--close') {
      dispatch(hideSignin());
      dispatch(hideSignup());
      dispatch(hideSelectCharacter());
    }
  };

  return (
    <div className="app" onMouseDown={(event) => handleHideModals(event)}>
      <Header />
      <Switch>
        <Route exact path="/">
          <section className="main">
            <Index />
          </section>
        </Route>
        <Route exact path="/histoire">
          <section className="main">
            <Story />
          </section>
        </Route>
        <Route exact path="/regles">
          <section className="main">
            <Rules />
          </section>
        </Route>
        <Route exact path="/jouer">
          <section className="main">
            <Ingame />
          </section>
        </Route>
        <Route exact path="/a-propos">
          <section className="main--about">
            <About />
          </section>
        </Route>
        {
          isLogged && (
            <Route exact path="/profil">
              <section className="main">
                <Profile />
              </section>
            </Route>
          )
        }
        <Route>
          <section className="main">
            <Error404 />
          </section>
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
      {
        sureToDeleteIsOpen && (
          <DeleteProfil />
        )
      }
      <Footer />
    </div>
  );
};

// == Export
export default App;
