import { FaImages } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './styles.scss';

import { showSelectCharacter } from 'src/actions/user';

// == Composant
const Story = () => {
  const dispatch = useDispatch();

  const handleShowSelectCharacter = () => {
    dispatch(showSelectCharacter());
  };

  useEffect(() => {
    console.log('test');
  }, []);

  return (
    <section className="story">
      <div className="story__border shadow">
        <div className="story__pages shadow">
          <div className="story__page shadow">
            <h1>Le Chevalier Noir</h1>
            <div className="hr" />
            <p>Il y a bien longtemps, un petit mais puissant royaume humanoïde existait là où maintenant se trouve une étendue sauvage. Des guerriers gobelours et ogres firent une brutale guerre d’expansion, gagnant en renommée et amassant une considérable fortune de leurs prédations. Ceux qui mourraient au combat étaient enterrés dans de larges complexes tombaux creusés aux flancs des collines, et honorés par leur peuple comme des exemples à suivre. Parmi ces tombes ce trouvait le large pic connu sous le nom de Haute-Tour. Bien qu’il ne s’agissait ni de la plus grande ni du plus connue des tombes du royaume, Haute-Tour représente un exemple type de ces structures</p>
            <div className="hr" />
          </div>
          <div className="story__page story__page__right shadow">
            <h2 className="story__page__right__recommended">Personnage recommandé</h2>
            <div className="story__page__right__fake_image">
              <FaImages size={50} />
            </div>
            <p className="story__page__right__description">
              Le guerrier, parce que taper c’est toujours
              la solution la plus simple.
            </p>
            <button
              className="story__page__right__button"
              type="button"
              onClick={() => handleShowSelectCharacter()}
            >
              Jouer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// == Export
export default Story;
