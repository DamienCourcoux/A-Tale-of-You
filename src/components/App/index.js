// == Import
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from 'src/components/Header';
import Index from 'src/components/Index';
import Footer from 'src/components/Footer';
import Rules from 'src/components/Rules';
import Signin from 'src/components/Signin';

// == Composant
const App = () => {
  const { signinIsOpen } = useSelector(state => ({
    signinIsOpen: state.user.signinIsOpen
  }));

  return (
    <div className="app">
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
          A Propos de Nous
        </Route>
        <Route exact path="/jouer">
          Jouer
        </Route>
        <Route exact path="/profil">
          Profil
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
