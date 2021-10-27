import { Link } from 'react-router-dom';

import Schema from 'src/assets/schema.png';
import './index.scss';

const Index = () => (
  <section className="index">
    <div className="index__book">
      <div className="index__book--pageLeft">
        <h1>Bienvenue sur <span>A Tale of You</span></h1>
        <span className="hr"> </span>
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
        <span className="hr"> </span>
        <Link to="/histoire">Jouer</Link>
      </div>
      <div className="index__book--pageRight">
        <img src={Schema} alt="illustration" />
      </div>
    </div>
  </section>
);
export default Index;
