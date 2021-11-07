import {
  GiBroadsword,
  GiShoulderArmor,
  GiPearlNecklace,
} from 'react-icons/gi';

import './ingameright.scss';

const InGameRight = ({characterMaxHp, characterCurrentHp, characterStrength, characterDexterity, characterIntelligence, characterCharism, weaponName, weaponBonus, armorName, armorBonus, accessoryName, accessoryBonus, characterPicture, inventoryName, characterPrimaryCharacteristic}) => {
  return (
          <div className="ingame__page ingame__page__right shadow">
            <h1 className="ingame__page__right__title">Fiche Personnage</h1>

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

            {/* character's equipments */}
            <h2 className="ingame__page__right__equipments__title">Equipements</h2>

            <div className="ingame__page__right__equipments">
              <div className="ingame__page__right__equipments__item">
                <div className="ingame__page__fake_image ingame__page__fake_image--50" title={weaponName}>
                  <GiBroadsword size={40} />
                </div>
                <div className="ingame__page__right__equipments__item__value">
                {weaponBonus}
                </div>
              </div>
              <div className="ingame__page__right__equipments__item">
                <div className="ingame__page__fake_image ingame__page__fake_image--50" title={armorName}>
                  <GiShoulderArmor size={40} />
                </div>
                <div className="ingame__page__right__equipments__item__value">
                {armorBonus}
                </div>
              </div>
              <div className="ingame__page__right__equipments__item">
                <div className="ingame__page__fake_image ingame__page__fake_image--50" title={accessoryName}>
                  <GiPearlNecklace size={40} />
                </div>
                <div className="ingame__page__right__equipments__item__value">
                {accessoryBonus}
                </div>
              </div>
            </div>

            {/* character's inventory */}
            <div className="ingame__page__right__inventory">
              <h2>Inventaire</h2>
              <div className="ingame__page__right__inventory__scroller">
                <ul>
                  {
                    inventoryName.map((item) => (
                      <li
                        key={item}
                        className="itemInventory"
                      >
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
  );
};

export default InGameRight;
