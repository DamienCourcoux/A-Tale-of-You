import './style.scss';

import Stats from 'src/components/Stats';
import Equipments from './Equipments';
import Inventory from './Inventory';

const InGameRight = () => (
  <div className="page page_right shadow">
    <h1>Fiche Personnage</h1>

    <div className="step" />

    <Stats />

    {/* character's equipments */}
    <h2 className="ingame_right--h2">Equipements</h2>
    <Equipments />

    <div className="step" />

    {/* character's inventory */}
    <h2 className="ingame_right--h2">Inventaire</h2>
    <Inventory />
  </div>
);

export default InGameRight;
