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
    <div className="diceRoller">
      {resultRoll && (
        <div className="diceRoller__content">
          <h1>Lancer de dés</h1>
          <div className="diceRoller__content--container">
            <div
              className={`rolll dice dice--${resultRoll[0]}`}
              style={{ backgroundImage: `url(${Dice})` }}
            />
            <div
              className={`rolll dice dice--${resultRoll[1]}`}
              style={{ backgroundImage: `url(${Dice})` }}
            />
          </div>
          {choice.success_condition_characteristic === 'strength' && (
            <p>Bonus de force: <span>+{characterCharacteristic}</span></p>
          )}
          {choice.success_condition_characteristic === 'dexterity' && (
            <p>Bonus de dextérité: <span>+{characterCharacteristic}</span></p>
          )}
          {choice.success_condition_characteristic === 'intelligence' && (
            <p>Bonus d'intelligence: <span>+{characterCharacteristic}</span></p>
          )}
          {choice.success_condition_characteristic === 'charism' && (
            <p>Bonus de charisme: <span>+{characterCharacteristic}</span></p>
          )}
          <p>Bonus d'équipement: <span>+{accessory.bonus}</span></p>
          <p>
            Vous avez fait
            : {resultRoll[0] + resultRoll[1]} + {characterCharacteristic} + {accessory.bonus} =
            <span> {rollTotal}</span>
          </p>
          <h2>
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
