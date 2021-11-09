// == Import
import { Link } from 'react-router-dom';

import Dragon from 'src/assets/dragon.gif';
import './error404Left.scss';

// == Composant
const Error404Left = () => (
  <div className="error404Left__page shadow">
    <h1>Error 404</h1>
    <div className="hr" />
    <img src={Dragon} alt="gif error404Left" />
    <p>"C'est pas bien d'essayer de venir à la fin du livre...</p>
    <p>Heureusement que le dragon ne te remarque pas !"</p>
    <div className="hr" />
    <Link to="/">Revenir dans l'aventure</Link>
  </div>
);

// == Export
export default Error404Left;
