// == Import
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { startFight } from 'src/actions/game';

import IngameFightLeft from './IngameFightLeft';
import IngameFightRight from './IngameFightRight';

import './style.scss';

const IngameFight = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFight());
  }, []);

  return (
    <div className="border shadow">
      <div className="pages">
        <IngameFightLeft />
        <IngameFightRight />
      </div>
    </div>
  );
}
export default IngameFight;
