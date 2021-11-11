import { useSelector } from 'react-redux';
import {
  GiBroadsword,
  GiShoulderArmor,
  GiPearlNecklace,
} from 'react-icons/gi';

import './style.scss';

const Equipments = () => {
  const {
    weapon,
    armor,
    accessory,
  } = useSelector((state) => ({
    weapon: state.game.weapon,
    armor: state.game.armor,
    accessory: state.game.accessory,
  }));

  return (
    <div className="equipments">
      <div className="equipments__item">
        <div className="equipments__item__img" title={weapon.name}>
          <GiBroadsword size={40} />
        </div>
        <p className="equipments__item__value">
          +{weapon.bonus}
        </p>
      </div>
      <div className="equipments__item">
        <div className="equipments__item__img" title={armor.name}>
          <GiShoulderArmor size={40} />
        </div>
        <p className="equipments__item__value">
          +{armor.bonus}
        </p>
      </div>
      <div className="equipments__item">
        <div className="equipments__item__img" title={accessory.name}>
          <GiPearlNecklace size={40} />
        </div>
        <p className="equipments__item__value">
          +{accessory.bonus}
        </p>
      </div>
    </div>
  );
};

export default Equipments;
