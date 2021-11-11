import { useSelector } from 'react-redux';
import {
  GiBroadsword,
  GiShoulderArmor,
  GiPearlNecklace,
} from 'react-icons/gi';

import './style.scss';

import Stats from 'src/components/Stats';

const InGameRight = () => {
  const {
    weapon,
    armor,
    accessory,
    inventory,
  } = useSelector((state) => ({
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
      <h1>Fiche Personnage</h1>

      <Stats />

      {/* character's equipments */}
      <h2 className="ingame_right--h2">Equipements</h2>

      <div className="ingame_right--equipments">
        <div className="ingame_right--equipments__item">
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
