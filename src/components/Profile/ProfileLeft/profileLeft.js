// == Import
import Schema from 'src/assets/schema.png';

import './profileLeft.scss';

// == Composant
const ProfileLeft = () => (
  <div className="profile__page  shadow">
    <img className="illustration" src={Schema} alt="illustration" />
  </div>
);

// == Export
export default ProfileLeft;
