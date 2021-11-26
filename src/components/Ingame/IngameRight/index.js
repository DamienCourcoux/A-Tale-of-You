import { useSelector, useDispatch } from 'react-redux';
import { FaAngleUp } from 'react-icons/fa';

import { toggleStats } from 'src/actions/game';

import './style.scss';

import Stats from 'src/components/Stats';
import Equipments from './Equipments';
import Inventory from './Inventory';

const InGameRight = () => {
  const dispatch = useDispatch();

  const { character, statsIsOpen } = useSelector((state) => ({
    character: state.game.character,
    statsIsOpen: state.game.statsIsOpen,
  }));

  const handleToggleStats = (value) => {
    dispatch(toggleStats(value));
  };

  const classNameToggler = statsIsOpen ? 'toggler toggler--open' : 'toggler';
  const classNameContent = statsIsOpen ? 'ingame_right--content ingame_right--content--open' : 'ingame_right--content';

  return (
    <div className="page page_right shadow page--mobile_order1 ingame_right">
      <h1 className="ingame_right--remove_mobile">Fiche Personnage</h1>
      <div className="ingame_right--header ingame_right--remove_desktop">
        <FaAngleUp
          className={classNameToggler}
          onClick={() => handleToggleStats(statsIsOpen)}
        />
        <div className="ingame_right--class_name">
          <h2>{character.class.charAt(0).toUpperCase() + character.class.slice(1)}</h2>
        </div>
        <FaAngleUp className="ingame_right--transparent" />
      </div>
      <div className={classNameContent}>

        <Stats />

        {/* character's equipments */}
        <h2 className="ingame_right--h2">Equipements</h2>
        <Equipments />

        <div className="step" />

        {/* character's inventory */}
        <h2 className="ingame_right--h2">Inventaire</h2>
        <Inventory />
        <div className="ingame_right--padding-bottom" />
      </div>
    </div>
  );
};

export default InGameRight;
