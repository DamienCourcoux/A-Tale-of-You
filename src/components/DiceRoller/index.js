// == Import
import { FaDiceFour, FaDiceThree } from 'react-icons/fa';
import './diceRoller.scss';

// == Composant
const DiceRoller = () => {
  const handleContinueAventure = () => {
    // il faudra surement faire une condition si "Réussite" continue le nouveau chemin,
    // si "Défaite" continue le premier chemin
    console.log('continuer l\'aventure');
  };

  return (
    <div className="diceRoller">
      <div className="diceRoller__content">
        <h1>Lancer de dé</h1>
        <FaDiceFour />
        <FaDiceThree />
        <p>Bonus d'accessoires: <span>+1</span></p>
        <p>Vous avez fait: 8 + 1 = <span>9</span></p>
        <h2>Réussite</h2>
        <button
          type="button"
          onClick={handleContinueAventure}
        >
          Continuer
        </button>
      </div>
    </div>
  );
};

// == Export
export default DiceRoller;
