import { useDispatch } from 'react-redux';
import {
  requestParagraph,
  showDiceRoller,
} from 'src/actions/game';

import parse from 'html-react-parser';

import './ingameleft.scss';

const InGameLeft = ({paragraphDescription,
  paragraphOption1Id,
  paragraphOption1Text,
  paragraphOption2Id,
  paragraphOption2Text,
  paragraphRollsId,
  paragraphRollsText}) => {

  const dispatch = useDispatch();

  const handleSelectChoice = (choice) => {
    dispatch(requestParagraph(choice));
  };

  const handleShowDiceRoller = () => {
    dispatch(showDiceRoller());
  };

  return (
      <div className="ingame__page shadow">
        <div className="ingame__page--history">
          <h1>Le Chevalier Noir</h1>
          <div className="hr" />
          {parse(paragraphDescription)}
        </div>
        <div className="ingame_page--options">
          <div className="hr" />
          {
            paragraphOption1Id && (
              <button
                className="ingame__page__button"
                type="button"
                onClick={() => handleSelectChoice(paragraphOption1Id)}
              >
                {paragraphOption1Text}
              </button>
            )
          }
          {
            paragraphOption2Id && (
              <button
                className="ingame__page__button"
                type="button"
                onClick={() => handleSelectChoice(paragraphOption2Id)}
              >
                {paragraphOption2Text}
              </button>
            )
          }
          {
            paragraphRollsId && (
              <button
                className="ingame__page__button"
                type="button"
                onClick={handleShowDiceRoller}
              >
                {paragraphRollsText}
              </button>
            )
          }
        </div>
      </div>
  );
};

export default InGameLeft;
