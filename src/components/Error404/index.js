// == Import
import Error404Left from 'src/components/Error404/Error404Left';
import Error404Right from 'src/components/Error404/Error404Right';

import './style.scss';

// == Composant
const Error404 = () => (
  <div className="border shadow">
    <div className="pages">
      <Error404Left />
      <Error404Right />
    </div>
  </div>
);

// == Export
export default Error404;
