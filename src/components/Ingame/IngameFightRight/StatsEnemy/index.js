import { useSelector } from 'react-redux';

import './style.scss';

const StatsEnemy = () => {
  const {
    enemy,
    enemyCurrentHp,
  } = useSelector((state) => ({
    enemy: state.game.enemy,
    enemyCurrentHp: state.game.enemyCurrentHp,
  }));

  return (
    <div className="stats_enemy">
      {enemy && (
        <div className="stats_enemy__grid">
          <div className="stats_enemy__illustration">
            <img src={enemy.illustration} alt="img de votre personnage" />
          </div>

          <h2 className="stats_enemy__title">Caractéristiques</h2>

          <ul className="stats_enemy__name">
            <li>Points de vie</li>
            <li
              className={
                enemy.primaryCharacteristic === 'strength'
                  ? 'bold'
                  : ''
              }
            >
              Force
            </li>
            <li
              className={
                enemy.primaryCharacteristic === 'dexterity'
                  ? 'bold'
                  : ''
              }
            >
              Dextérité
            </li>
            <li
              className={
                enemy.primaryCharacteristic === 'intelligence'
                  ? 'bold'
                  : ''
              }
            >
              Intelligence
            </li>
            <li
              className={
                enemy.primaryCharacteristic === 'charism'
                  ? 'bold'
                  : ''
              }
            >
              Charisme
            </li>
          </ul>

          <ul className="stats_enemy__value">
            <li>{enemyCurrentHp}/{enemy.maxHp}</li>
            <li
              className={
                enemy.primaryCharacteristic === 'strength'
                  ? 'bold'
                  : ''
              }
            >
              {enemy.strength}
            </li>
            <li
              className={
                enemy.primaryCharacteristic === 'dexterity'
                  ? 'bold'
                  : ''
              }
            >
              {enemy.dexterity}
            </li>
            <li
              className={
                enemy.primaryCharacteristic === 'intelligence'
                  ? 'bold'
                  : ''
              }
            >
              {enemy.intelligence}
            </li>
            <li
              className={
                enemy.primaryCharacteristic === 'charism'
                  ? 'bold'
                  : ''
              }
            >
              {enemy.charism}
            </li>
          </ul>

        </div>
      )}
    </div>
  );
};

export default StatsEnemy;
