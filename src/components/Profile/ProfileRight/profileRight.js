// == Import
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  createMenuDropdownIsOpenAction,
  createEditProfilAction,
  changeField,
  createSubmitEditFormAction,
  createVisibilityPasswordAction,
  createDeleteProfilAction,
} from 'src/actions/user';

import {
  FaEllipsisH,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import Field from '../Field';

import './profileRight.scss';

// == Composant
const ProfileRight = () => {
  const menuDropdownIsOpen = useSelector((state) => state.user.menuDropdownIsOpen);
  const isEdit = useSelector((state) => state.user.isEdit);
  const password = useSelector((state) => state.user.password);
  const isVisibilyPassword = useSelector((state) => state.user.isVisibilyPassword);
  const userPseudo = useSelector((state) => state.user.userPseudo);
  const userMail = useSelector((state) => state.user.userMail);
  const userAvatar = useSelector((state) => state.user.userAvatar);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleMenuDropdown = () => {
    dispatch(createMenuDropdownIsOpenAction());
  };

  const handleEdit = () => {
    dispatch(createEditProfilAction());
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

  const handleDelete = () => {
    dispatch(createDeleteProfilAction());
    history.replace('/');
  };

  return (
    <div className="profile__page right shadow">
      <div className="profile__page right--title">
        <h1>Profil</h1>
        <button
          type="button"
          onClick={handleMenuDropdown}
        >
          <FaEllipsisH />
        </button>
        <ul className={menuDropdownIsOpen ? 'right--title--menu' : 'right--title--menu menuDropdownIsOpen'}>
          <li onClick={handleEdit}>Modifier mon profil</li>
          <li onClick={handleDelete}>Supprimer mon profil</li>
        </ul>
      </div>
      <span className="hr"> </span>
      <div className="right--myProfile">
        <div className="right--myProfile--image">
          <img src={userAvatar} alt="Votre img de profil" />
        </div>
        <form
          onSubmit={handleSubmitEditForm}
          className="right--myProfile--data"
        >
          <div className="right--myProfile--data--title">
            {
              isEdit
                ? (
                  <Field
                    value={userPseudo}
                    onChange={handleChangeField}
                    type="text"
                    className="field-input"
                    placeholder="Pseudo"
                    name="userPseudo"
                    minLength="3"
                    pattern="[a-zA-Z0-9\s]+"
                    title="Doit contenir un magnifique pseudo"
                  />
                )
                : <h2>{userPseudo}</h2>
            }
          </div>
          <div className="right--myProfile--data--mail">
            {
              isEdit
                ? (
                  <Field
                    value={userMail}
                    onChange={handleChangeField}
                    type="email"
                    className="field-input"
                    placeholder="Email"
                    name="userMail"
                    minLength="1"
                    pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
                    title="Doit contenir une adresse email valide"
                  />
                )
                : <p><span>Mail:</span> {userMail}</p>
            }
          </div>
          <div className="right--myProfile--data--password">
            {
              isEdit
                ? (
                  <>
                    <Field
                      value={password}
                      onChange={handleChangeField}
                      type={isVisibilyPassword ? 'text' : 'password'}
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
                        isVisibilyPassword
                          ? <FaEyeSlash />
                          : <FaEye />
                      }
                    </span>
                  </>
                )
                : (
                  <>
                    <p>Mot de passe:</p>
                    **********
                  </>
                )
            }
          </div>
          {
            isEdit
              ? <button type="submit">Valider</button>
              : ''
          }
        </form>
      </div>
      <span className="hr"> </span>
    </div>
  );
};

// == Export
export default ProfileRight;
