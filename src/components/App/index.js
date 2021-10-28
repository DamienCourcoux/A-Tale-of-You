// == Import
import { Switch, Route } from 'react-router-dom';

import Header from 'src/components/Header';
import Index from 'src/components/Index';
import Footer from 'src/components/Footer';
import Rules from 'src/components/Rules';
import About from 'src/components/About';

// == Composant
const App = () => (
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
        <About />
      </Route>
      <Route exact path="/jouer">
        Jouer
      </Route>
      <Route exact path="/profil">
        Profil
      </Route>
      <Route>
        error 404
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
