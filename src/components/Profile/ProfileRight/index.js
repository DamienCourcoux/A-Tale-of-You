// == Import
import { useSelector } from 'react-redux';

import './style.scss';

import EditProfile from './EditProfile';
import ShowProfile from './ShowProfile';

// == Composant
const ProfileRight = () => {
  const isEdit = useSelector((state) => state.user.isEdit);

  return (
    <div className="page page_right shadow">
      <h1>Profil</h1>
      { isEdit ? <EditProfile /> : <ShowProfile /> }
    </div>
  );
};

// == Export
export default ProfileRight;
