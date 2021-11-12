// == Import
import { useSelector, useDispatch } from 'react-redux';
import { changeSelectedCharacter } from 'src/actions/game';
import { hideSelectCharacter } from 'src/actions/user';
import { useHistory } from 'react-router-dom';

import './style.scss';

import Stats from 'src/components/Stats';

// == Composant
const SelectCharacter = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { classList } = useSelector((state) => ({
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
        className="select_character--button"
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
        <div className="select_character--buttons">
          {jsxButtons}
        </div>
        <div className="step" />
        <h2> Choisis ta classe </h2>
        <div className="step" />
        <Stats />
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
