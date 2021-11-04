// == Import
import { Link } from 'react-router-dom';

import Dragon from 'src/assets/dragon.gif';
import './error404.scss';

// == Composant
const Error404 = () => (
  <section className="error404">
    <div className="error404__border shadow">
      <div className="error404__pages">
        <div className="error404__page shadow">
          <h1>Error 404</h1>
          <div className="hr" />
          <img src={Dragon} alt="gif error404" />
          <p>"C'est pas bien d'essayer de finir à la fin du livre...</p>
          <p>Heureusement que le dragon ne te remarque pas !"</p>
          <div className="hr" />
          <Link to="/">Revenir dans l'aventure</Link>
        </div>
        {/* <div className="error404__page  shadow">
        </div> */}
      </div>
    </div>
  </section>
);

// == Export
export default Error404;
