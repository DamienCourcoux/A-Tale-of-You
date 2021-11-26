// == Import
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import InGameRight from './IngameRight';
import InGameLeft from './IngameLeft';
import IngameFightLeft from './IngameFightLeft';
import IngameFightRight from './IngameFightRight';

import './style.scss';

const Ingame = () => {
  const { fightStarted, storyTitle } = useSelector((state) => ({
    fightStarted: state.game.fightStarted,
    storyTitle: state.game.storyTitle,
  }));

  const history = useHistory();

  useEffect(() => {
    if (!storyTitle) {
      history.replace('/histoire');
    }
  }, []);

  return (
    <div className="border shadow">
      <div className="pages pages--ingame">
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
