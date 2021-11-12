import { useSelector } from 'react-redux';

import './style.scss';

const Stats = () => {
  const {
    character,
    characterCurrentHp,
  } = useSelector((state) => ({
    character: state.game.character,
    characterCurrentHp: state.game.characterCurrentHp,
  }));

  return (
    <div className="stats">
      <div className="stats__class_name">
        <h2>{character.class.charAt(0).toUpperCase() + character.class.slice(1)}</h2>
      </div>
      <div className="stats__grid">
        <div className="stats__illustration">
          <img src={character.illustration} alt="img de votre personnage" />
        </div>

        <h2 className="stats__title">Caractéristiques</h2>

        <ul className="stats__name">
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

        <ul className="stats__value">
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
    </div>
  );
};

export default Stats;
