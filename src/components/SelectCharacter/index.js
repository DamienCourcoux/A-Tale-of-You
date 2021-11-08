// == Import
import { FaImages } from 'react-icons/fa';
import './styles.scss';
import { useEffect, useState } from 'react';
import { selectCharacters } from 'src/actions/game';
import { useDispatch, useSelector } from 'react-redux';

// == Composant
const SelectCharacter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectCharacters());
    // console.log(selectCharacters);
  }, []);

  const { character } = useSelector((state) => ({
    character: state.game.character,
  }));

  return (
    <div className="select_character">
      <div className="select_character__content">
        <p> choisis ta classe </p>
        <div className="select_character__list">
          {/* <button type="button" onClick={() => setSelectedChar(...selectedChar, ...selectWarrior)}>Guerrier</button>
          <button type="button" onClick={() => selectThief}>Roublard</button>
          <button type="button" onClick={() => selectWizard}>Magicien</button>
          <button type="button" onClick={() => selectBard}>Barde</button> */}
          <div className="ingame__page__right__stats__illustration ingame__page__fake_image
          ingame__page__fake_image--100">
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
            <li>{character.maxHp}</li>
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
    </div>
  );
};

export default SelectCharacter;
