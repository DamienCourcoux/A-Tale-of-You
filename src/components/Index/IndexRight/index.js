// == Import
import { Link } from 'react-router-dom';

import './style.scss';

// == Composant
const IndexRight = () => (
  <div className="page page_right shadow">
    <h1>Bienvenue sur <span>A Tale of You</span></h1>
    <div className="hr" />
    <p>
      Ici, vous vivrez des aventures incroyables en incarnant un héros dans des quêtes épiques.
    </p>
    <p>
      Au programme :
    </p>
    <ul className="ul_description">
      <li>Différents personnages jouables,</li>
      <li>Différentes quêtes,</li>
      <li>Des choix ayant un impact direct sur votre aventure,</li>
      <li>Des lancers de dés,</li>
      <li>Du butin,</li>
      <li>Des ennemis!</li>
    </ul>
    <p>
      Rejoignez-nous et aventurez-vous dans votre première aventure!
    </p>
    <div className="hr" />
    <Link className="button" to="/histoire">Jouer</Link>
  </div>
);

// == Export
export default IndexRight;
