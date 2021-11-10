// == Import
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadStory, loadParagraph } from 'src/actions/game';

import './style.scss';

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
    dispatch(loadParagraph(paragraph.choices[0].consequences[0]));
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
