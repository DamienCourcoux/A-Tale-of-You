import './ingame.scss';
import { FaImages } from 'react-icons/fa';


const Ingame = () => {
  const handleSelectChoice = () => {
    console.log('SELECT_Choice');
  };

  return (
    <section className="ingame">
      <div className="ingame__border shadow">
        <div className="ingame__pages shadow">
          <div className="ingame__page shadow">
            <h1>Le Chevalier Noir</h1>
            <div className="hr" />
            <p>
              Il y a bien longtemps, un petit mais puissant royaume humanoïde existait
              là où maintenant se trouve une étendue sauvage. Des guerriers gobelours
              et ogres firent une brutale guerre d’expansion, gagnant en renommée et
              amassant une considérable fortune de leurs prédations. Ceux qui
              mourraient au combat étaient enterrés dans de larges complexes
              tombaux creusés aux flancs des collines, et honorés par leur peuple
              comme des exemples à suivre. Parmi ces tombes ce trouvait le large
              pic connu sous le nom de Haute-Tour. Bien qu’il ne s’agissait ni
              de la plus grande ni du plus connue des tombes du royaume,
              Haute-Tour représente un exemple type de ces structures
            </p>
            <div className="hr" />
            <button
              className="ingame__page__button"
              type="button"
              onClick={() => handleSelectChoice()}
            >
              Fuir
            </button>
            <div className="hr" />
            <button
              className="ingame__page__button"
              type="button"
              onClick={() => handleSelectChoice()}
            >
              Discuter
            </button>
          </div>
          <div className="ingame__page ingame__page__right shadow">
          <h1 className="ingame__page__right__title">Fiche Personnage</h1>
          
            <div className="ingame__page__right__stats">

            <h2>Caractéristiques</h2>
              <ul>
              <li>Points de vie</li>
              <li>Force</li>
              <li>Dextérité</li>
              <li>Intelligence</li>
              <li>Charisme</li>
              </ul>
            </div>


            <div className="ingame__page__right__items"></div>
              <h2>Equipements</h2>
              <div className="ingame__page__right__fake_image">
                <FaImages size={50} />
              </div>
              <div className="ingame__page__right__fake_image">
                <FaImages size={50} />
              </div>
              <div className="ingame__page__right__fake_image">
                <FaImages size={50} />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};


export default Ingame;
