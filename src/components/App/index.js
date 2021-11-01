// == Import
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { hideSignin, hideSignup } from 'src/actions/user';

import Header from 'src/components/Header';
import Index from 'src/components/Index';
import Footer from 'src/components/Footer';
import Story from 'src/components/Story';
import Rules from 'src/components/Rules';
import Profile from 'src/components/Profile';
import About from 'src/components/About';
import Signin from 'src/components/Signin';
import Signup from 'src/components/Signup';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  const { signinIsOpen, signupIsOpen } = useSelector((state) => ({
    signinIsOpen: state.user.signinIsOpen,
    signupIsOpen: state.user.signupIsOpen,
  }));

  const handleHideModals = (event) => {
    if (event.target.className === 'signin') dispatch(hideSignin());
    if (event.target.className === 'signup') dispatch(hideSignup());
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
          Jouer
        </Route>
        <Route exact path="/profil">
          <Profile />
        </Route>
        <Route>
          error404
        </Route>
      </Switch>
      {signinIsOpen && (
        <Signin />
      )}
      {signupIsOpen && (
        <Signup />
      )}
      <Footer />
    </div>
  );
};

// == Export
export default App;
