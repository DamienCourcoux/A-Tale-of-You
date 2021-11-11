// == Import
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  rollDice,
  loadParagraph,
  hideDiceRoller,
} from 'src/actions/game';

import Dice from 'src/assets/dice-sprite.png';
import './style.scss';

// == Composant
const DiceRoller = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rollDice());
  }, []);

  const {
    character,
    resultRoll,
    accessory,
    choiceIndex,
    choices,
  } = useSelector((state) => ({
    character: state.game.character,
    resultRoll: state.game.resultRoll,
    accessory: state.game.accessory,
    choiceIndex: state.game.choiceIndex,
    choices: state.game.paragraph.choices,
  }));

  const choice = choices[choiceIndex];
  const characterCharacteristic = character[choice.success_condition_characteristic];
  const rollTotal = resultRoll[0] + resultRoll[1] + characterCharacteristic + accessory.bonus;
  const successConditionValue = choice.success_condition_value;

  const handleSelectConsequence = () => {
    let consequence = {};
    if (rollTotal >= successConditionValue) {
      consequence = choice.consequences.find((target) => target.boolean === true);
    }
    else {
      consequence = choice.consequences.find((target) => target.boolean === false);
    }
    dispatch(hideDiceRoller());
    dispatch(loadParagraph(consequence));
  };

  return (
    <div className="modal">
      {resultRoll && (
        <div className="modal__content">
          <h1>Lancer de dés</h1>
          <div className="dice_roller--container">
            <div
              className={`dice_roller--animation dice_roller--dice dice_roller--dice--${resultRoll[0]}`}
              style={{ backgroundImage: `url(${Dice})` }}
            />
            <div
              className={`dice_roller--animation dice_roller--dice dice_roller--dice--${resultRoll[1]}`}
              style={{ backgroundImage: `url(${Dice})` }}
            />
          </div>
          {choice.success_condition_characteristic === 'strength' && (
            <p>Bonus de force: <span className="bold">+{characterCharacteristic}</span></p>
          )}
          {choice.success_condition_characteristic === 'dexterity' && (
            <p>Bonus de dextérité: <span className="bold">+{characterCharacteristic}</span></p>
          )}
          {choice.success_condition_characteristic === 'intelligence' && (
            <p>Bonus d'intelligence: <span className="bold">+{characterCharacteristic}</span></p>
          )}
          {choice.success_condition_characteristic === 'charism' && (
            <p>Bonus de charisme: <span className="bold">+{characterCharacteristic}</span></p>
          )}
          <p>Bonus d'équipement: <span className="bold">+{accessory.bonus}</span></p>
          <p>
            Vous avez fait
            : {resultRoll[0] + resultRoll[1]} + {characterCharacteristic} + {accessory.bonus} =
            <span className="bold"> {rollTotal}</span>
          </p>
          <h2 className="dice_roller--h2">
            {
              rollTotal >= successConditionValue
                ? 'Succès'
                : 'Échec'
            }
          </h2>
          <button
            type="button"
            onClick={() => handleSelectConsequence()}
          >
            Continuer
          </button>
        </div>
      )}
    </div>
  );
};

// == Export
export default DiceRoller;
