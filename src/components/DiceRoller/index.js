// == Import
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  rollDice,
  loadParagraph,
} from 'src/actions/game';

import Dice from 'src/assets/dice-sprite.png';
import './diceRoller.scss';

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
  const rollTotal = resultRoll[0] + resultRoll[1] + character.dexterity + accessory.bonus;
  const successCondition = choice.success_condition;

  const handleSelectConsequence = () => {
    let consequence = {};
    if (rollTotal >= successCondition) {
      consequence = choice.consequences.find((target) => target.boolean === true);
    }
    else {
      consequence = choice.consequences.find((target) => target.boolean === false);
    }
    dispatch(loadParagraph(consequence));
  };

  // const isRoll = useSelector((state) => state.game.isRoll);
  // const numberDices = useSelector((state) => state.game.numberDices);
  // const id = useSelector((state) => state.game.paragraph);

  // const handleRollDice = () => {
  //   const dices = document.querySelectorAll('.dice');
  //   dices.forEach((dice) => {
  //     dice.classList.add('rolll');
  //     function getRandomNumber(min, max) {
  //       // eslint-disable-next-line no-mixed-operators
  //       const number = Math.round(Math.random() * (max - min) + min);
  //       if (number === 2) {
  //         dice.style.backgroundPositionX = '20%';
  //         dice.setAttribute('value', '2');
  //       }
  //       else if (number === 3) {
  //         dice.style.backgroundPositionX = '40%';
  //         dice.setAttribute('value', '3');
  //       }
  //       else if (number === 4) {
  //         dice.style.backgroundPositionX = '60%';
  //         dice.setAttribute('value', '4');
  //       }
  //       else if (number === 5) {
  //         dice.style.backgroundPositionX = '80%';
  //         dice.setAttribute('value', '5');
  //       }
  //       else if (number === 6) {
  //         dice.style.backgroundPositionX = '100%';
  //         dice.setAttribute('value', '6');
  //       }
  //       else {
  //         dice.style.backgroundPositionX = '0';
  //         dice.setAttribute('value', '1');
  //       }
  //       const diceOne = document.querySelector('.one');
  //       const diceTwo = document.querySelector('.two');
  //       const valueDiceOne = diceOne.getAttribute('value');
  //       const valueDiceTwo = diceTwo.getAttribute('value');
  //       const valueDices = parseInt(valueDiceOne, 10) + parseInt(valueDiceTwo, 10);
  //       dispatch(rollDice(valueDices));
  //     }
  //     getRandomNumber(1, 6);
  //   });
  // };

  // const handleContinueAventure = () => {
  //   // si réussite faire une action dans le middlewares pour aller chercher le suite de l'aventure
  //   if (numberDices + 25 >= 27) {
  //     console.log('réussite');
  //     console.log(id);
  //   }
  //   // sinon choix 2
  //   else {
  //     console.log('Défaite');
  //   }
  //   // il faudra surement faire une condition si "Réussite" continue le nouveau chemin,
  //   // si "Défaite" continue le premier chemin
  //   // console.log('continuer l\'aventure');
  // };

  return (
    <div className="diceRoller">
      {resultRoll && (
        <div className="diceRoller__content">
          <h1>Lancer de dés</h1>
          <div className="diceRoller__content--container">
            <div
              className={`dice dice--${resultRoll[0]}`}
              style={{ backgroundImage: `url(${Dice})` }}
            />
            <div
              className={`dice dice--${resultRoll[1]}`}
              style={{ backgroundImage: `url(${Dice})` }}
            />
          </div>
          <p>Bonus de dextérité: <span>+{character.dexterity}</span></p>
          <p>Bonus d'équipement: <span>+{accessory.bonus}</span></p>
          <p>
            Vous avez fait
            : {resultRoll[0] + resultRoll[1]} + {character.dexterity} + {accessory.bonus} =
            <span> {rollTotal}</span>
          </p>
          <h2>
            {
              rollTotal >= successCondition
                ? 'Succès'
                : 'Échec'
            }
          </h2>
          <button
            type="button"
            // j'ai commenter pour pas avoir d'erreur ^^
            onClick={() => handleSelectConsequence()}
          >
            Continuer
          </button>
          {/* <button
           type="button"
           onClick={handleRollDice}
           className={isRoll ? 'isRoll' : ''}
         >
           Lancer les dés
         </button>
         {
           isRoll && (
             <>
               Changer la valeur en dur par la caractéristique de dextériter du personnage
               
               <button
                 type="button"
                 // j'ai commenter pour pas avoir d'erreur ^^
                 // onClick={() =>
                 //   handleSelectConsequence(numberDices + 25,
                 //     paragraph.consequences,
                 //     paragraph.choices.consequences);}
                 // }
               >
                 Continuer
               </button>
             </>
           )
         } */}
        </div>
      )}
    </div>
  );
};

// == Export
export default DiceRoller;
