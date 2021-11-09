// == Import
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';

import './storyLeft.scss';

// == Composant
const StoryLeft = () => {
  const { storyTitle, storyDescription } = useSelector((state) => ({
    storyTitle: state.game.storyTitle,
    storyDescription: state.game.storyDescription,
  }));

  return (
    <div className="story__page__left shadow">
      <h1>{storyTitle}</h1>
      <div className="hr" />
      {parse(storyDescription)}
      <div className="hr" />
    </div>
  );
};

// == Export
export default StoryLeft;
