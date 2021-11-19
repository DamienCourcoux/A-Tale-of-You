import { useSelector } from 'react-redux';

import './style.scss';

const Inventory = () => {
  const {
    inventory,
  } = useSelector((state) => ({
    inventory: state.game.inventory,
  }));

  const jsxList = inventory.map((item) => (
    <li
      key={item}
      className="inventory__item"
    >
      {item}
    </li>
  ));

  return (
    <div className="inventory">
      <ul className="inventory--ul">
        {jsxList}
      </ul>
    </div>
  );
};

export default Inventory;
