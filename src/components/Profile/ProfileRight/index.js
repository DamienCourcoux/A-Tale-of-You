// == Import
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  createCloseEditProfilAction,
} from 'src/actions/user';

import './style.scss';

import EditProfile from './EditProfile';
import ShowProfile from './ShowProfile';

// == Composant
const ProfileRight = () => {
  const dispatch = useDispatch();
  const isEdit = useSelector((state) => state.user.isEdit);

  useEffect(() => {
    dispatch(createCloseEditProfilAction());
  }, []);

  return (
    <div className="page page_right shadow">
      <h1>Profil</h1>
      { isEdit ? <EditProfile /> : <ShowProfile /> }
    </div>
  );
};

// == Export
export default ProfileRight;
