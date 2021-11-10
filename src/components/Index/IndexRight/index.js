// == Import
import { Link } from 'react-router-dom';

import './style.scss';

// == Composant
const IndexRight = () => (
  <div className="indexRight__page shadow">
    <h1>Bienvenue sur <span>A Tale of You</span></h1>
    <div className="hr" />
    <p>
      Ici, vous vivrez des aventures incroyables
      en incarnant différents héros dans des histoires
      épiques avec du loot, du gobelin et des
      princesses à sauver !
    </p>
    <p>
      Apprenez en plus sur les montres dans leBestiaire,
      choisissez votre Héro et
    </p>
    <p>
      Aventurez-vous !
    </p>
    <div className="hr" />
    <Link to="/histoire">Jouer</Link>
  </div>
);

// == Export
export default IndexRight;
