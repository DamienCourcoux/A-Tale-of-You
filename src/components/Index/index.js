// == Import
import IndexLeft from 'src/components/Index/IndexLeft/indexLeft';
import IndexRight from 'src/components/Index/IndexRight/indexRight';

import './index.scss';

// == Composant
const Index = () => (
  <section className="index">
    <div className="index__border shadow">
      <div className="index__pages">
        <IndexLeft />
        <IndexRight />
      </div>
    </div>
  </section>
);

// == Export
export default Index;
