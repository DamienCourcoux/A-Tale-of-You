// == Import
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadStory, selectChoice } from 'src/actions/game';

import './storyRight.scss';

import { showSelectCharacter } from 'src/actions/user';

// == Composant
const StoryRight = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStory());
  }, []);

  const { paragraph } = useSelector((state) => ({
    paragraph: state.game.paragraph,
  }));

  const handleShowSelectCharacter = () => {
    dispatch(showSelectCharacter());
    dispatch(selectChoice(paragraph.choices[0].consequences));
  };
  return (
    <div className="story__page__right shadow">
      <button
        className="story__page__right__button"
        type="button"
        onClick={() => handleShowSelectCharacter()}
      >
        Jouer
      </button>
    </div>
  );
};

// == Export
export default StoryRight;
