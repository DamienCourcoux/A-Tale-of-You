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
            {/* 
              character's statistics
              grid
              stats_illustration stats_title stats_title
              stats_illustration stats_name  stats_value
             */}
            <div className="ingame__page__right__stats">
              <div className="ingame__page__right__stats__illustration ingame__page__fake_image ingame__page__fake_image--150">
                <FaImages size={100} />
              </div>

              <h2 className="ingame__page__right__stats__title">Caractéristiques</h2>

              <ul className="ingame__page__right__stats__name">
                <li>Points de vie</li>
                <li>Force</li>
                <li>Dextérité</li>
                <li>Intelligence</li>
                <li>Charisme</li>
              </ul>

              <ul className="ingame__page__right__stats__value">
                <li>50</li>
                <li>25</li>
                <li>20</li>
                <li>20</li>
                <li>20</li>
              </ul>
            </div>

            {/* character's equipments */}
            <h2 className="ingame__page__right__equipments__title">Equipements</h2>

            <div className="ingame__page__right__equipments">
              <div className="ingame__page__right__equipments__item">
                <div className="ingame__page__fake_image ingame__page__fake_image--50">
                  <FaImages size={40} />
                </div>
                <div className="ingame__page__right__equipments__item__value">
                  +1
                </div>
              </div>
              <div className="ingame__page__right__equipments__item">
                <div className="ingame__page__fake_image ingame__page__fake_image--50">
                  <FaImages size={40} />
                </div>
                <div className="ingame__page__right__equipments__item__value">
                  +2
                </div>
              </div>
              <div className="ingame__page__right__equipments__item">
                <div className="ingame__page__fake_image ingame__page__fake_image--50">
                  <FaImages size={40} />
                </div>
                <div className="ingame__page__right__equipments__item__value">
                  +0
                </div>
              </div>
            </div>

            {/* character's inventory */}
            <div className="ingame__page__right__inventory">
              <h2>Inventaire</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingame;
