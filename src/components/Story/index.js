import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadStory, selectChoice } from 'src/actions/game';
import parse from 'html-react-parser';

import './styles.scss';

import { showSelectCharacter } from 'src/actions/user';

// == Composant
const Story = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStory());
  }, []);

  const { storyTitle, storyDescription, paragraph } = useSelector((state) => ({
    storyTitle: state.game.storyTitle,
    storyDescription: state.game.storyDescription,
    paragraph: state.game.paragraph,
  }));

  const handleShowSelectCharacter = () => {
    dispatch(showSelectCharacter());
    dispatch(selectChoice(paragraph.choices[0].consequences));
  };
  return (
    <section className="story">
      <div className="story__border shadow">
        <div className="story__pages shadow">
          <div className="story__page__left shadow">
            <h1>{storyTitle}</h1>
            <div className="hr" />
            {parse(storyDescription)}
            <div className="hr" />
          </div>
          <div className="story__page__right shadow">
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
