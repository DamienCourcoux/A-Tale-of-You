// == Import
import ProfileLeft from 'src/components/Profile/ProfileLeft';
import ProfileRight from 'src/components/Profile/ProfileRight';

import './style.scss';

// == Composant
const Profile = () => (
  <div className="border shadow">
    <div className="pages">
      <ProfileLeft />
      <ProfileRight />
    </div>
  </div>
);

// == Export
export default Profile;
