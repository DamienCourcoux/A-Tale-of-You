// == Import
import StoryLeft from 'src/components/Story/StoryLeft';
import StoryRight from 'src/components/Story/StoryRight';

import './style.scss';

// == Composant
const Story = () => (
  <div className="book__border shadow">
    <StoryLeft />
    <StoryRight />
  </div>
);

// == Export
export default Story;
