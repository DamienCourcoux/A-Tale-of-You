// == Import
import { useSelector, useDispatch } from 'react-redux';
import {
  rollDice,
} from 'src/actions/game';

import Dice from 'src/assets/dice-sprite.png';
import './diceRoller.scss';

// == Composant
const DiceRoller = () => {
  const isRoll = useSelector((state) => state.game.isRoll);
  const numberDices = useSelector((state) => state.game.numberDices);

  const dispatch = useDispatch();

  const handleRollDice = () => {
    const dices = document.querySelectorAll('.dice');
    dices.forEach((dice) => {
      dice.classList.add('rolll');
      function getRandomNumber(min, max) {
        // eslint-disable-next-line no-mixed-operators
        const number = Math.round(Math.random() * (max - min) + min);
        if (number === 2) {
          dice.style.backgroundPositionX = '20%';
          dice.setAttribute('value', '2');
        }
        else if (number === 3) {
          dice.style.backgroundPositionX = '40%';
          dice.setAttribute('value', '3');
        }
        else if (number === 4) {
          dice.style.backgroundPositionX = '60%';
          dice.setAttribute('value', '4');
        }
        else if (number === 5) {
          dice.style.backgroundPositionX = '80%';
          dice.setAttribute('value', '5');
        }
        else if (number === 6) {
          dice.style.backgroundPositionX = '100%';
          dice.setAttribute('value', '6');
        }
        else {
          dice.style.backgroundPositionX = '0';
          dice.setAttribute('value', '1');
        }
        const diceOne = document.querySelector('.one');
        const diceTwo = document.querySelector('.two');
        const valueDiceOne = diceOne.getAttribute('value');
        const valueDiceTwo = diceTwo.getAttribute('value');
        const valueDices = parseInt(valueDiceOne, 10) + parseInt(valueDiceTwo, 10);
        dispatch(rollDice(valueDices));
      }
      getRandomNumber(1, 6);
    });
  };

  const handleContinueAventure = () => {
    // il faudra surement faire une condition si "Réussite" continue le nouveau chemin,
    // si "Défaite" continue le premier chemin
    console.log('continuer l\'aventure');
  };

  return (
    <div className="diceRoller">
      <div className="diceRoller__content">
        <h1>Lancer de dés</h1>
        <div className="diceRoller__content--container">
          <div
            className="dice one"
            style={{ backgroundImage: `url(${Dice})` }}
          />
          <div
            className="dice two"
            style={{ backgroundImage: `url(${Dice})` }}
          />
        </div>
        <button
          type="button"
          onClick={handleRollDice}
          className={isRoll ? 'isRoll' : ''}
        >
          Lancer les dés
        </button>
        {
          isRoll && (
            <>
              {/* Changer la valeur en dur par la caractéristique de dextériter du personnage */}
              <p>Bonus de Dextérité: <span>+ 25</span></p>
              <p>Vous avez fait: {numberDices} + 25 =
                <span> {parseInt(numberDices, 10) + 25}</span>
              </p>
              <h2>
                {
                  numberDices + 25 >= 27
                    ? 'Réussite'
                    : 'Défaite'
                }
              </h2>
              <button
                type="button"
                onClick={handleContinueAventure}
              >
                Continuer
              </button>
            </>
          )
        }
      </div>
    </div>
  );
};

// == Export
export default DiceRoller;
