import { useSelector } from 'react-redux';
import InGameRight from './IngameRight/InGameRight';
import InGameLeft from './IngameLeft/InGameLeft';

import './ingame.scss';

const Ingame = () => {
  const {
    characterMaxHp,
    characterCurrentHp,
    characterStrength,
    characterDexterity,
    characterIntelligence,
    characterCharism,
    weaponName,
    weaponBonus,
    armorName,
    armorBonus,
    accessoryName,
    accessoryBonus,
    characterPicture,
    inventoryName,
    characterPrimaryCharacteristic,
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
          <InGameLeft />
          <InGameRight />
        </div>
      </div>
    </section>
  );
};

export default Ingame;
