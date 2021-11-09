// == Import
import StoryLeft from 'src/components/Story/StoryLeft/storyLeft';
import StoryRight from 'src/components/Story/StoryRight/storyRight';

import './styles.scss';

// == Composant
const Story = () => (
  <section className="story">
    <div className="story__border shadow">
      <div className="story__pages shadow">
        <StoryLeft />
        <StoryRight />
      </div>
    </div>
  </section>
);

// == Export
export default Story;
