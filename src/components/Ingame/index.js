// == Import
import { useSelector } from 'react-redux';

import InGameRight from './IngameRight';
import InGameLeft from './IngameLeft';
import IngameFightLeft from './IngameFightLeft';
import IngameFightRight from './IngameFightRight';

import './style.scss';

const Ingame = () => {
  const { fightStarted } = useSelector((state) => ({
    fightStarted: state.game.fightStarted,
  }));

  return (
    <div className="border shadow">
      <div className="pages">
        {!fightStarted && (
          <>
            <InGameLeft />
            <InGameRight />
          </>
        )}
        {fightStarted && (
          <>
            <IngameFightLeft />
            <IngameFightRight />
          </>
        )}
      </div>
    </div>
  );
};

export default Ingame;
