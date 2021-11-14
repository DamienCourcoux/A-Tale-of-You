// == Import
import { useSelector, useDispatch } from 'react-redux';

import {
  rollDice,
  showDice,
  updateFight,
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
  } = useSelector((state) => ({
    weapon: state.game.weapon,
    armor: state.game.armor,
    resultRoll: state.game.resultRoll,
    diceIsShowed: state.game.diceIsShowed,
    fightTextButton: state.game.fightTextButton,
  }));

  const handleRollDice = () => {
    dispatch(rollDice());
    if (!diceIsShowed) {
      dispatch(showDice());
    }
    if (fightTextButton === 'Vous avez gagné !' || fightTextButton === 'Vous avez perdu ...') {
      console.log('fin du combat');
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
