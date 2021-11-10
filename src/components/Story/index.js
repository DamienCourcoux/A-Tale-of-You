// == Import
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadStory } from 'src/actions/game';

import StoryLeft from 'src/components/Story/StoryLeft';
import StoryRight from 'src/components/Story/StoryRight';

import './style.scss';

// == Composant
const Story = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStory());
  }, []);

  return (
    <div className="border shadow">
      <div className="pages shadow">
        <StoryLeft />
        <StoryRight />
      </div>
    </div>
  );
};

// == Export
export default Story;
