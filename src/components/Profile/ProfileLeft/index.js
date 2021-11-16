// == Import
import ImgProfile from 'src/assets/profile.png';

import './style.scss';

// == Composant
const ProfileLeft = () => (
  <div className="page_center page page--remove_mobile page_left shadow">
    <img
      className="page--remove_mobile"
      title="Img de Dženis Hasanica sur Pexels"
      src={ImgProfile}
      alt="Illustration du profil
      (crédit: Img de Dženis Hasanica sur Pexels)"
    />
  </div>
);

// == Export
export default ProfileLeft;
