// == Import
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  createCloseEditProfilAction,
  changeField,
  createSubmitEditFormAction,
  createVisibilityPasswordAction,
} from 'src/actions/user';

import {
  FaEye,
  FaEyeSlash,
  FaTimes,
} from 'react-icons/fa';
import Field from './Field';

import './style.scss';

// == Composant
const ProfileRight = () => {
  const password = useSelector((state) => state.user.password);
  const isVisiblePassword = useSelector((state) => state.user.isVisiblePassword);
  const userPseudo = useSelector((state) => state.user.userPseudo);
  const userMail = useSelector((state) => state.user.userMail);
  const userAvatar = useSelector((state) => state.user.userAvatar);
  const pseudo = useSelector((state) => state.user.pseudo);
  const email = useSelector((state) => state.user.email);

  const dispatch = useDispatch();

  const handleCloseEditProfil = () => {
    dispatch(createCloseEditProfilAction());
  };

  const handleChangeField = (value, name) => {
    dispatch(changeField(value, name));
  };

  const handleSubmitEditForm = (event) => {
    event.preventDefault();
    dispatch(createSubmitEditFormAction());
  };

  const handleVisibilityPassword = () => {
    dispatch(createVisibilityPasswordAction());
  };

  useEffect(() => {
    dispatch(changeField(userPseudo, 'pseudo'));
    dispatch(changeField(userMail, 'email'));
    dispatch(changeField('', 'password'));
  }, []);

  return (
    <>
      <div className="profile_right--action">
        <button
          type="button"
          onClick={handleCloseEditProfil}
          className="profile_right--action--button close"
        >
          <FaTimes />
        </button>
      </div>
      <div className="hr" />
      <div className="profile_right--myProfile">
        <div className="profile_right--myProfile--image">
          <img title="Avatar" src={userAvatar} alt="Votre img de profil" />
        </div>
        <form
          onSubmit={handleSubmitEditForm}
          className="profile_right--myProfile--data"
        >
          <div className="profile_right--myProfile--data--title">
            <Field
              value={pseudo}
              onChange={handleChangeField}
              type="text"
              className="field-input"
              placeholder="Pseudo"
              name="pseudo"
              minLength="3"
              pattern="[a-zA-Z0-9\s]+"
              title="Doit contenir un magnifique pseudo"
            />
          </div>
          <div className="profile_right--myProfile--data--mail"><Field
            value={email}
            onChange={handleChangeField}
            type="email"
            className="field-input"
            placeholder="Email"
            name="email"
            minLength="1"
            pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
            title="Doit contenir une adresse email valide"
          />
          </div>
          <div className="profile_right--myProfile--data--password">
            <Field
              value={password}
              onChange={handleChangeField}
              type={isVisiblePassword ? 'text' : 'password'}
              className="field-input"
              placeholder="Mot de passe"
              name="password"
              minLength="7"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Doit contenir au moins un chiffre,
                une lettre majuscule ainsi qu'une minuscule,
                pour une taille de 7 caractères minimum"
            />
            <span id="visibilityPassword" onClick={handleVisibilityPassword}>
              {
                isVisiblePassword
                  ? <FaEyeSlash />
                  : <FaEye />
              }
            </span>
          </div>
          <button type="submit">Valider</button>
        </form>
      </div>
    </>
  );
};

// == Export
export default ProfileRight;
