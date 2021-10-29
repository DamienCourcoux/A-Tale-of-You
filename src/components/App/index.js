// == Import
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { hideSignin } from 'src/actions/user';

import Header from 'src/components/Header';
import Index from 'src/components/Index';
import Footer from 'src/components/Footer';
import Rules from 'src/components/Rules';
import Profile from 'src/components/Profile';
import About from 'src/components/About';
import Signin from 'src/components/Signin';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  const { signinIsOpen } = useSelector((state) => ({
    signinIsOpen: state.user.signinIsOpen,
  }));

  const handleHideModals = (event) => {
    if (event.target.className === 'signin') dispatch(hideSignin());
  };

  return (
    <div
      className="app"
      onClick={(event) => handleHideModals(event)}
    >
      <Header />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/histoire">
          Histoire
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
      <Footer />
    </div>
  );
};

// == Export
export default App;
