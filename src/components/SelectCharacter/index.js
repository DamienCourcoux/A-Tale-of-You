// == Import
import { useSelector, useDispatch } from 'react-redux';
import { changeSelectedCharacter } from 'src/actions/game';
import { hideSelectCharacter } from 'src/actions/user';
import { useHistory } from 'react-router-dom';

import './style.scss';

// == Composant
const SelectCharacter = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { character, classList } = useSelector((state) => ({
    character: state.game.character,
    classList: state.game.classList,
  }));

  const handleChangeSelectedCharacter = (selectedClass) => {
    dispatch(changeSelectedCharacter(selectedClass));
  };

  const handleStartGame = () => {
    dispatch(hideSelectCharacter());
    history.replace('/jouer');
  };

  let indexButton = 0;
  const jsxButtons = classList.map((button) => {
    indexButton += 1;
    return (
      <button
        key={indexButton}
        onClick={() => handleChangeSelectedCharacter(button.class)}
        type="button"
      >
        {button.class}
      </button>
    );
  });

  return (
    <div className="modal modal--close">
      <div className="modal__content select_character--modal__content">
        {jsxButtons}
        <div className="step" />
        <h2> choisis ta classe </h2>
        <div className="stats">
          <div
            className="stats__illustration"
          >
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
        <button
          onClick={() => handleStartGame()}
          type="button"
        >
          Jouer
        </button>
      </div>
    </div>
  );
};

export default SelectCharacter;
