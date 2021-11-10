// == Import
import RulesLeft from 'src/components/Rules/RulesLeft';
import RulesRight from 'src/components/Rules/RulesRight';

import './style.scss';

// == Composant
const Rules = () => (
  <div className="border shadow">
    <RulesLeft />
    <RulesRight />
  </div>
);

// == Export
export default Rules;
