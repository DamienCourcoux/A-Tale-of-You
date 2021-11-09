// == Import
import Error404Left from 'src/components/Error404/Error404Left/error404Left';
import Error404Right from 'src/components/Error404/Error404Right/error404Right';

import './error404.scss';

// == Composant
const Error404 = () => (
  <section className="error404">
    <div className="error404__border shadow">
      <div className="error404__pages">
        <Error404Left />
        <Error404Right />
      </div>
    </div>
  </section>
);

// == Export
export default Error404;
