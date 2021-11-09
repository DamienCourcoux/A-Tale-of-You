// == Import
import ProfileLeft from 'src/components/Profile/ProfileLeft/profileLeft';
import ProfileRight from 'src/components/Profile/ProfileRight/profileRight';

import './profile.scss';

// == Composant
const Profile = () => (
  <section className="profile">
    <div className="profile__border shadow">
      <div className="profile__pages shadow">
        <ProfileLeft />
        <ProfileRight />
      </div>
    </div>
  </section>
);

// == Export
export default Profile;
