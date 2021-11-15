// == Import
import { useDispatch } from 'react-redux';

import ProfileLeft from 'src/components/Profile/ProfileLeft';
import ProfileRight from 'src/components/Profile/ProfileRight';

import { useEffect } from 'react';

import {
  createCloseEditProfilAction,
} from 'src/actions/user';

import './style.scss';

// == Composant
const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createCloseEditProfilAction());
  }, []);

  return (
    <div className="border shadow">
      <div className="pages">
        <ProfileLeft />
        <ProfileRight />
      </div>
    </div>
  );
};

// == Export
export default Profile;
