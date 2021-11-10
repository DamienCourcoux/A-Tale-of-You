// == Import
import Schema from 'src/assets/schema.png';

import './style.scss';

// == Composant
const ProfileLeft = () => (
  <div className="page page_left shadow">
    <div className="page_img">
      <img className="illustration" src={Schema} alt="illustration" />
    </div>
  </div>
);

// == Export
export default ProfileLeft;
