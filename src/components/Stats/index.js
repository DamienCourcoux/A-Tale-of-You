import { useSelector } from 'react-redux';

import IllustrationGuerrier from 'src/assets/guerrier.png';
import IllustrationRoublard from 'src/assets/roublard.png';
import IllustrationMagicien from 'src/assets/magicien.png';
import IllustrationBarde from 'src/assets/barde.png';

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
      <div className="stats__grid">
        <div className="stats__illustration">
          {/* <img src={character.illustration} alt="img de votre personnage" /> */}
          {
            character.class === 'guerrier' && (
              <img src={IllustrationGuerrier} alt="img de votre personnage: Le Guerrier" />
            )
          }
          {
            character.class === 'roublard' && (
              <img src={IllustrationRoublard} alt="img de votre personnage: Le Roublard" />
            )
          }
          {
            character.class === 'magicien' && (
              <img src={IllustrationMagicien} alt="img de votre personnage: Le Magicien" />
            )
          }
          {
            character.class === 'barde' && (
              <img src={IllustrationBarde} alt="img de votre personnage: Le Barde" />
            )
          }
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
