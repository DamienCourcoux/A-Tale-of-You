// == Import
import IndexLeft from 'src/components/Index/IndexLeft';
import IndexRight from 'src/components/Index/IndexRight';

import './style.scss';

// == Composant
const Index = () => (
  <div className="book__border shadow">
    <IndexLeft />
    <IndexRight />
  </div>
);

// == Export
export default Index;
