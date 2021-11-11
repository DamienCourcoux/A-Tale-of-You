import { useSelector } from 'react-redux';

import './style.scss';

const IngameFight = () => {
  const {
    character,
    characterCurrentHp,
    weapon,
    armor,
  } = useSelector((state) => ({
    character: state.game.character,
    characterCurrentHp: state.game.characterCurrentHp,
    weapon: state.game.weapon,
    armor: state.game.armor,
    accessory: state.game.accessory,
    inventory: state.game.inventory,
  }));
  return (
    <section className="ingame">
      <div className="ingame__border shadow">
        <div className="ingame__pages shadow">
          <div className="ingame__page ingame__page__left shadow">
            <h1 className="ingame__page__left__title">Héros</h1>

            <div className="ingame__page__left__stats">
              <div className="ingame__page__left__stats__illustration ingame__page__fake_image ingame__page__fake_image--150">
                <img className="fit-picture" src={character.illustration} alt="img de votre personnage" />
              </div>

              <h2 className="ingame__page__left__stats__title">Caractéristiques</h2>

              <ul className="ingame__page__left__stats__name">
                <li>Points de vie</li>
                <li
                  className={
                    character.primaryCharacteristic === 'strength'
                      ? 'bold'
                      : ''
                  }
                >
                  Force
                </li>
                <li
                  className={
                    character.primaryCharacteristic === 'dexterity'
                      ? 'bold'
                      : ''
                  }
                >
                  Dextérité
                </li>
                <li
                  className={
                    character.primaryCharacteristic === 'intelligence'
                      ? 'bold'
                      : ''
                  }
                >
                  Intelligence
                </li>
                <li
                  className={
                    character.primaryCharacteristic === 'charism'
                      ? 'bold'
                      : ''
                  }
                >
                  Charisme
                </li>
              </ul>

              <ul className="ingame__page__right__stats__value">
                <li>{characterCurrentHp}/{character.maxHp}</li>
                <li
                  className={
                    character.primaryCharacteristic === 'strength'
                      ? 'bold'
                      : ''
                  }
                >
                  {character.strength}
                </li>
                <li
                  className={
                    character.primaryCharacteristic === 'dexterity'
                      ? 'bold'
                      : ''
                  }
                >
                  {character.dexterity}
                </li>
                <li
                  className={
                    character.primaryCharacteristic === 'intelligence'
                      ? 'bold'
                      : ''
                  }
                >
                  {character.intelligence}
                </li>
                <li
                  className={
                    character.primaryCharacteristic === 'charism'
                      ? 'bold'
                      : ''
                  }
                >
                  {character.charism}
                </li>
              </ul>
            </div>

            {/* character's equipments */}

            <div className="ingame__page__left__equipments">

              <div className="ingame__page__left__equipments__item">

                <div className="ingame__page__left__equipments__item__value">
                  Attaque + {weapon.bonus}
                </div>

                <div className="ingame__page__left__equipments__item__value">Parade + {armor.bonus}
                </div>
              </div>
            </div>

            {/* character's inventory */}
            <div className="ingame__page__left__diceroll">
              <h2>Lancer de dés</h2>
              <button
                className="ingame__page__button"
                type="button"
              >
                Continuer
              </button>
            </div>
          </div>
          <div className="ingame__page ingame__page__right shadow">
            <h1 className="ingame__page__right__title">Ennemi</h1>
            <div className="ingame__page__right__stats">
              <div className="ingame__page__right__stats__illustration ingame__page__fake_image ingame__page__fake_image--150">
                <img className="fit-picture" src={character.illustration} alt="img de votre personnage" />
              </div>
              <h2 className="ingame__page__right__stats__title">Caractéristiques</h2>

              <ul className="ingame__page__right__stats__name">
                <li>Points de vie</li>
                <li
                  className={
                    character.primaryCharacteristic === 'strength'
                      ? 'bold'
                      : ''
                  }
                >
                  Force
                </li>
                <li
                  className={
                    character.primaryCharacteristic === 'dexterity'
                      ? 'bold'
                      : ''
                  }
                >
                  Dextérité
                </li>
                <li
                  className={
                    character.primaryCharacteristic === 'intelligence'
                      ? 'bold'
                      : ''
                  }
                >
                  Intelligence
                </li>
                <li
                  className={
                    character.primaryCharacteristic === 'charism'
                      ? 'bold'
                      : ''
                  }
                >
                  Charisme
                </li>
              </ul>

              <ul className="ingame__page__right__stats__value">
                <li>{characterCurrentHp}/{character.maxHp}</li>
                <li
                  className={
                    character.primaryCharacteristic === 'strength'
                      ? 'bold'
                      : ''
                  }
                >
                  {character.strength}
                </li>
                <li
                  className={
                    character.primaryCharacteristic === 'dexterity'
                      ? 'bold'
                      : ''
                  }
                >
                  {character.dexterity}
                </li>
                <li
                  className={
                    character.primaryCharacteristic === 'intelligence'
                      ? 'bold'
                      : ''
                  }
                >
                  {character.intelligence}
                </li>
                <li
                  className={
                    character.primaryCharacteristic === 'charism'
                      ? 'bold'
                      : ''
                  }
                >
                  {character.charism}
                </li>
              </ul>
            </div>

            {/* character's inventory */}
            <div className="ingame__page__right__fight">
              <h2>Phase de combat</h2>
              <div className="ingame__page__right__fight__scroller"> </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngameFight;
