// == Import
import ImgHistoire from 'src/assets/histoire.jpg';

import './style.scss';

// == Composant
const StoryRight = () => (
  <div className="page_center page page_right shadow page--remove_mobile">
    <img
      className="page--remove_mobile"
      title="Dungeon of the Polignac Castle,
      Eugène Isabey, Metropolitan Museum of Art,
      New York, NY"
      src={ImgHistoire}
      alt="illustration de l'histoire
      (crédit: Dungeon of the Polignac Castle,
      Eugène Isabey, Metropolitan Museum of Art,
      New York, NY)"
    />
  </div>
);

// == Export
export default StoryRight;
