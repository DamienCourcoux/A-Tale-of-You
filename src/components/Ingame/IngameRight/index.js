import { useSelector } from 'react-redux';
import {
  GiBroadsword,
  GiShoulderArmor,
  GiPearlNecklace,
} from 'react-icons/gi';

import './style.scss';

const InGameRight = () => {
  const {
    character,
    characterCurrentHp,
    weapon,
    armor,
    accessory,
    inventory,
  } = useSelector((state) => ({
    character: state.game.character,
    characterCurrentHp: state.game.characterCurrentHp,
    weapon: state.game.weapon,
    armor: state.game.armor,
    accessory: state.game.accessory,
    inventory: state.game.inventory,
  }));

  const jsxList = inventory.map((item) => (
    <li
      key={item}
      className="itemInventory"
    >
      {item}
    </li>
  ));

  return (
    <div className="page page_right shadow">
      <h1 className="ingame__page__right__title">Fiche Personnage</h1>

      <div className="ingame__page__right__stats">
        <div className="ingame__page__right__stats__illustration ingame__page__fake_image--150">
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

      {/* character's equipments */}
      <h2 className="ingame__page__right__equipments__title">Equipements</h2>

      <div className="ingame__page__right__equipments">
        <div className="ingame__page__right__equipments__item">
          <div className="ingame__page__right__equipments__item--img" title={weapon.name}>
            <GiBroadsword size={40} />
          </div>
          <p className="ingame__page__right__equipments__item__value">
            +{weapon.bonus}
          </p>
        </div>
        <div className="ingame__page__right__equipments__item">
          <div className="ingame__page__right__equipments__item--img" title={armor.name}>
            <GiShoulderArmor size={40} />
          </div>
          <p className="ingame__page__right__equipments__item__value">
            +{armor.bonus}
          </p>
        </div>
        <div className="ingame__page__right__equipments__item">
          <div className="ingame__page__right__equipments__item--img" title={accessory.name}>
            <GiPearlNecklace size={40} />
          </div>
          <p className="ingame__page__right__equipments__item__value">
            +{accessory.bonus}
          </p>
        </div>
      </div>

      {/* character's inventory */}
      <div className="ingame__page__right__inventory">
        <h2>Inventaire</h2>
        <div className="ingame__page__right__inventory__scroller">
          <ul>
            {jsxList}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InGameRight;
