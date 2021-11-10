// == Import
import InGameRight from './IngameRight';
import InGameLeft from './IngameLeft';

import './style.scss';

const Ingame = () => (
  <div className="book__border shadow">
    <InGameLeft />
    <InGameRight />
  </div>
);

export default Ingame;
