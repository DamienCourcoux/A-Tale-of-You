// == Import
import IndexLeft from 'src/components/Index/IndexLeft';
import IndexRight from 'src/components/Index/IndexRight';

import './style.scss';

// == Composant
const Index = () => (
  <div className="border shadow">
    <div className="pages">
      <IndexLeft />
      <IndexRight />
    </div>
  </div>
);

// == Export
export default Index;
