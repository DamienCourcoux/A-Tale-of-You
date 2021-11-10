// == Import
import ProfileLeft from 'src/components/Profile/ProfileLeft';
import ProfileRight from 'src/components/Profile/ProfileRight';

import './style.scss';

// == Composant
const Profile = () => (
  <div className="border shadow">
    <ProfileLeft />
    <ProfileRight />
  </div>
);

// == Export
export default Profile;
