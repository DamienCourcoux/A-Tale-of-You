import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  loadParagraph,
  showDiceRoller,
  endGame,
} from 'src/actions/game';

import parse from 'html-react-parser';

import './style.scss';

const InGameLeft = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { paragraph } = useSelector((state) => ({
    paragraph: state.game.paragraph,
  }));

  const handleSelectChoice = (successCondition, consequences, description, choiceIndex) => {
    if (successCondition) {
      dispatch(showDiceRoller(choiceIndex));
    }
    else {
      dispatch(loadParagraph(consequences[0]));
    }

    if (description === 'Retour au site') {
      history.replace('/');
      dispatch(endGame());
    }
  };

  const jsxButtons = paragraph.choices.map((choice, index) => (
    <button
      key={choice.description}
      type="button"
      onClick={() => handleSelectChoice(
        choice.success_condition_value,
        choice.consequences,
        choice.description,
        index,
      )}
    >
      {choice.description}
    </button>
  ));

  return (
    <div className="page page_left shadow ingame_left">
      <div>
        {parse(paragraph.description)}
      </div>
      <div>
        <div className="hr" />
        {jsxButtons}
      </div>
    </div>
  );
};

export default InGameLeft;
