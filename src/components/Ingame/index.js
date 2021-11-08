import { useSelector } from 'react-redux';
import InGameRight from './IngameRight/InGameRight';
import InGameLeft from './IngameLeft/InGameLeft';

import './ingame.scss';

const Ingame = () => (
  <section className="ingame">
    <div className="ingame__border shadow">
      <div className="ingame__pages shadow">
        <InGameLeft />
        <InGameRight />
      </div>
    </div>
  </section>
);

export default Ingame;
