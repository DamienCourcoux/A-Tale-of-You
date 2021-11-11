// == Import
import InGameRight from './IngameRight';
import InGameLeft from './IngameLeft';

import './style.scss';

const Ingame = () => (
  <div className="border shadow">
    <div className="pages">
      <InGameLeft />
      <InGameRight />
    </div>
  </div>
);

export default Ingame;
