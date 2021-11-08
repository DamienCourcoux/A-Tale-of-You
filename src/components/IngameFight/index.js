import { useSelector } from 'react-redux';
import {
  GiBroadsword,
  GiShoulderArmor,
  GiPearlNecklace,
} from 'react-icons/gi';


import './ingamefight.scss';

const IngameFight = () => {
  const {
    characterMaxHp,
    characterCurrentHp,
    characterStrength,
    characterDexterity,
    characterIntelligence,
    characterCharism,
    weaponBonus,
    armorBonus,
    characterPicture,
    characterPrimaryCharacteristic
  } = useSelector((state) => ({
    characterMaxHp: state.game.characterMaxHp,
    characterCurrentHp: state.game.characterCurrentHp,
    characterStrength: state.game.characterStrength,
    characterDexterity: state.game.characterDexterity,
    characterIntelligence: state.game.characterIntelligence,
    characterCharism: state.game.characterCharism,
    weaponName: state.game.weaponName,
    weaponBonus: state.game.weaponBonus,
    armorName: state.game.armorName,
    armorBonus: state.game.armorBonus,
    accessoryName: state.game.accessoryName,
    accessoryBonus: state.game.accessoryBonus,
    characterPicture: state.game.characterPicture,
    inventoryName: state.game.inventoryName,
    characterPrimaryCharacteristic: state.game.characterPrimaryCharacteristic,
  }));
  return (
    <section className="ingame">
      <div className="ingame__border shadow">
        <div className="ingame__pages shadow">
         <div className="ingame__page ingame__page__left shadow">
            <h1 className="ingame__page__left__title">Héros</h1>

            <div className="ingame__page__left__stats">
              <div className="ingame__page__left__stats__illustration ingame__page__fake_image ingame__page__fake_image--150">
                <img className="fit-picture" src={characterPicture} alt="img de votre personnage" />
              </div>

              <h2 className="ingame__page__left__stats__title">Caractéristiques</h2>

              <ul className="ingame__page__left__stats__name">
                <li>Points de vie</li>
                <li
                  className={
                    characterPrimaryCharacteristic === 'strength'
                      ? 'bold'
                      : ''
                  }
                >
                  Force
                </li>
                <li
                  className={
                    characterPrimaryCharacteristic === 'dexterity'
                      ? 'bold'
                      : ''
                  }
                >
                  Dextérité
                </li>
                <li
                  className={
                    characterPrimaryCharacteristic === 'intelligence'
                      ? 'bold'
                      : ''
                  }
                >
                  Intelligence
                </li>
                <li
                  className={
                    characterPrimaryCharacteristic === 'charism'
                      ? 'bold'
                      : ''
                  }
                >
                  Charisme
                </li>
              </ul>

              <ul className="ingame__page__left__stats__value">
                <li>{characterCurrentHp}/{characterMaxHp}</li>
                <li>{characterStrength}</li>
                <li>{characterDexterity}</li>
                <li>{characterIntelligence}</li>
                <li>{characterCharism}</li>
              </ul>
            </div>

            {/* character's equipments */}
            

            <div className="ingame__page__left__equipments">
            <h2 className="ingame__page__left__equipments__title">Bonus</h2>
              <div className="ingame__page__left__equipments__item">
                <div className="ingame__page__left__equipments__item__value">
                Attaque {weaponBonus}
                </div>
              
              
                <div className="ingame__page__left__equipments__item__value">Parade
                 {armorBonus}
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
                <img className="fit-picture" src={characterPicture} alt="img de votre personnage" />
              </div>

              <h2 className="ingame__page__right__stats__title">Caractéristiques</h2>

              <ul className="ingame__page__right__stats__name">
                <li>Points de vie</li>
                <li
                  className={
                    characterPrimaryCharacteristic === 'strength'
                      ? 'bold'
                      : ''
                  }
                >
                  Force
                </li>
                <li
                  className={
                    characterPrimaryCharacteristic === 'dexterity'
                      ? 'bold'
                      : ''
                  }
                >
                  Dextérité
                </li>
                <li
                  className={
                    characterPrimaryCharacteristic === 'intelligence'
                      ? 'bold'
                      : ''
                  }
                >
                  Intelligence
                </li>
                <li
                  className={
                    characterPrimaryCharacteristic === 'charism'
                      ? 'bold'
                      : ''
                  }
                >
                  Charisme
                </li>
              </ul>

              <ul className="ingame__page__right__stats__value">
                <li>{characterCurrentHp}/{characterMaxHp}</li>
                <li>{characterStrength}</li>
                <li>{characterDexterity}</li>
                <li>{characterIntelligence}</li>
                <li>{characterCharism}</li>
              </ul>
            </div>



            {/* character's inventory */}
            <div className="ingame__page__right__fight">
              <h2>Phase de combat</h2>
              <div className="ingame__page__right__fight__scroller">

              </div>              

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngameFight;
