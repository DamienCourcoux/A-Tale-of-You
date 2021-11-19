// == Import
import { useSelector, useDispatch } from 'react-redux';

import {
  rollDice,
  showDice,
  updateFight,
  loadParagraph,
  endFight,
} from 'src/actions/game';
import Dice from 'src/assets/dice-sprite.png';

import './style.scss';

import Stats from 'src/components/Stats';

const IngameFightLeft = () => {
  const dispatch = useDispatch();

  const {
    weapon,
    armor,
    resultRoll,
    diceIsShowed,
    fightTextButton,
    choiceIndex,
    choices,
  } = useSelector((state) => ({
    weapon: state.game.weapon,
    armor: state.game.armor,
    resultRoll: state.game.resultRoll,
    diceIsShowed: state.game.diceIsShowed,
    fightTextButton: state.game.fightTextButton,
    choiceIndex: state.game.choiceIndex,
    choices: state.game.paragraph.choices,
  }));

  const choice = choices[choiceIndex];

  const handleRollDice = () => {
    dispatch(rollDice());
    if (!diceIsShowed) {
      dispatch(showDice());
    }
    if (fightTextButton === 'Vous avez gagné !') {
      const consequence = choice.consequences.find((target) => target.boolean === true);
      dispatch(loadParagraph(consequence));
      dispatch(endFight());
    }
    else if (fightTextButton === 'Vous avez perdu ...') {
      const consequence = choice.consequences.find((target) => target.boolean === false);
      dispatch(loadParagraph(consequence));
      dispatch(endFight());
    }
    else {
      dispatch(updateFight());
    }
  };

  return (
    <div className="page page_left shadow ingame_fight_left--content">
      <div>
        <h1>Héros</h1>
        <Stats />
        <div className="ingame_fight_left--bonus">
          <div className="bold">Bonus :</div>
          <div>Attaque +{weapon.bonus}</div>
          <div>Parade +{armor.bonus}</div>
        </div>
      </div>
      <div>
        <h1>Lancer de dés</h1>
        {diceIsShowed && (
          <div className="ingame_fight_left--dice_roller__container">
            <div
              className={`dice_roller--dice dice_roller--dice--${resultRoll[0]}`}
              style={{ backgroundImage: `url(${Dice})` }}
            />
            <div
              className={`dice_roller--dice dice_roller--dice--${resultRoll[1]}`}
              style={{ backgroundImage: `url(${Dice})` }}
            />
          </div>
        )}

        <button
          type="button"
          onClick={() => handleRollDice()}
        >
          {fightTextButton}
        </button>
      </div>
    </div>
  );
};
export default IngameFightLeft;
