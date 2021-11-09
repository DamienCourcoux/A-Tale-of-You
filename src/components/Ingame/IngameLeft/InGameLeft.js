import { useSelector, useDispatch } from 'react-redux';
import {
  selectChoice,
} from 'src/actions/game';

import parse from 'html-react-parser';

import './ingameleft.scss';

const InGameLeft = () => {
  const dispatch = useDispatch();

  const { paragraph } = useSelector((state) => ({
    paragraph: state.game.paragraph,
  }));

  const handleSelectChoice = (consequences) => {
    dispatch(selectChoice(consequences));
  };

  const jsxButtons = paragraph.choices.map((choice) => (
    <button
      key={choice.description}
      className="ingame__page__button"
      type="button"
      onClick={() => handleSelectChoice(choice.consequences)}
    >
      {choice.description}
    </button>
  ));

  return (
    <div className="ingame__page__left shadow">
      <div className="ingame__page--history">
        {parse(paragraph.description)}
      </div>
      <div className="ingame_page--options">
        <div className="hr" />
        {jsxButtons}
      </div>
    </div>
  );
};

export default InGameLeft;
