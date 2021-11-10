// == Import
import { useSelector, useDispatch } from 'react-redux';
import parse from 'html-react-parser';

import { showSelectCharacter } from 'src/actions/user';
import { loadParagraph } from 'src/actions/game';

import './style.scss';

// == Composant
const StoryLeft = () => {
  const dispatch = useDispatch();

  const { storyTitle, storyDescription, paragraph } = useSelector((state) => ({
    storyTitle: state.game.storyTitle,
    storyDescription: state.game.storyDescription,
    paragraph: state.game.paragraph,
  }));

  const handleShowSelectCharacter = () => {
    dispatch(showSelectCharacter());
    dispatch(loadParagraph(paragraph.choices[0].consequences[0]));
  };

  return (
    <div className="story__page__left shadow">
      <h1>{storyTitle}</h1>
      <div className="hr" />
      {parse(storyDescription)}
      <div className="hr" />
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
export default StoryLeft;
