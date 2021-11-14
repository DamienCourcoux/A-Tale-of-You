// == Import
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { startFight } from 'src/actions/game';

import InGameRight from './IngameRight';
import InGameLeft from './IngameLeft';
import IngameFightLeft from './IngameFightLeft';
import IngameFightRight from './IngameFightRight';

import './style.scss';

const Ingame = () => {
  const { fightStarted } = useSelector((state) => ({
    fightStarted: state.game.fightStarted,
  }));

  if (fightStarted) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(startFight());
    }, []);
  }

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
