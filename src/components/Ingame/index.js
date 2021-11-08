import { useSelector } from 'react-redux';
import InGameRight from './IngameRight/InGameRight';
import InGameLeft from './IngameLeft/InGameLeft';

import './ingame.scss';

const Ingame = () => {
  const {
    paragraphDescription,
    paragraphOption1Id,
    paragraphOption1Text,
    paragraphOption2Id,
    paragraphOption2Text,
    paragraphRollsId,
    paragraphRollsText,
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
    characterPrimaryCharacteristic
  } = useSelector((state) => ({
    paragraphDescription: state.game.paragraphDescription,
    paragraphOption1Id: state.game.paragraphOption1Id,
    paragraphOption1Text: state.game.paragraphOption1Text,
    paragraphOption2Id: state.game.paragraphOption2Id,
    paragraphOption2Text: state.game.paragraphOption2Text,
    paragraphRollsId: state.game.paragraphRollsId,
    paragraphRollsText: state.game.paragraphRollsText,
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
          <InGameLeft
            paragraphDescription={paragraphDescription}
            paragraphOption1Id={paragraphOption1Id}
            paragraphOption1Text={paragraphOption1Text}
            paragraphOption2Id={paragraphOption2Id}
            paragraphOption2Text={paragraphOption2Text}
            paragraphRollsId={paragraphRollsId}
            paragraphRollsText={paragraphRollsText} />
          <InGameRight
            characterMaxHp={characterMaxHp}
            characterCurrentHp={characterCurrentHp}
            characterPicture={characterPicture}
            characterStrength={characterStrength}
            characterDexterity={characterDexterity}
            characterIntelligence={characterIntelligence}
            characterCharism={characterCharism}
            weaponName={weaponName}
            weaponBonus={weaponBonus}
            armorName={armorName}
            armorBonus={armorBonus}
            accessoryName={accessoryName}
            accessoryBonus={accessoryBonus}
            inventoryName={inventoryName}
            characterPrimaryCharacteristic={characterPrimaryCharacteristic}
          />
        </div>
      </div>
    </section>
  );
};

export default Ingame;
