// == Import
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';

import './style.scss';

import StatsEnemy from './StatsEnemy';

const IngameFightRight = () => {
  const { fightHistory } = useSelector((state) => ({
    fightHistory: state.game.fightHistory,
  }));

  let indexHistory = 0;
  const jsxList = fightHistory.map((item) => {
    indexHistory += 1;
    return (
      <li
        key={indexHistory}
      >
        {parse(item)}
      </li>
    );
  });

  return (
    <div className="page page_right shadow ingame_fight_right--content">
      <h1>Ennemi</h1>
      <StatsEnemy />

      <h1>Historique</h1>
      <div className="ingame_fight_right--history">
        <ul>
          {jsxList}
        </ul>
      </div>
    </div>
  );
};
export default IngameFightRight;
