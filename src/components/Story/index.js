import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadStory } from 'src/actions/game';
import parse from 'html-react-parser';

import './styles.scss';

import { showSelectCharacter } from 'src/actions/user';

// == Composant
const Story = () => {
  const dispatch = useDispatch();

  const handleShowSelectCharacter = () => {
    dispatch(showSelectCharacter());
  };

  useEffect(() => {
    dispatch(loadStory());
  }, []);

  const { storyTitle, storyDescription } = useSelector((state) => ({
    storyTitle: state.game.storyTitle,
    storyDescription: state.game.storyDescription,
  }));

  return (
    <section className="story">
      <div className="story__border shadow">
        <div className="story__pages shadow">
          <div className="story__page shadow">
            <h1>{storyTitle}</h1>
            <div className="hr" />
            {parse(storyDescription)}
            <div className="hr" />
          </div>
          <div className="story__page story__page__right shadow">
            <button
              className="story__page__right__button"
              type="button"
              onClick={() => handleShowSelectCharacter()}
            >
              Jouer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// == Export
export default Story;
