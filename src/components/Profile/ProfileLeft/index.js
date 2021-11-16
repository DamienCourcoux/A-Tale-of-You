// == Import
import ImgRegles from 'src/assets/regles.png';

import './style.scss';

// == Composant
const ProfileLeft = () => (
  <div className="page_center page page--remove_mobile page_left shadow">
    <img
      className="page--remove_mobile"
      title="Img de Dženis Hasanica sur Pexels"
      src={ImgRegles}
      alt="Illustration des règles
      (crédit: Img de Dženis Hasanica sur Pexels)"
    />
  </div>
);

// == Export
export default ProfileLeft;
