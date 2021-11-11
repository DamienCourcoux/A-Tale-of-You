// == Import
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  createMenuDropdownIsOpenAction,
  createEditProfilAction,
  createSubmitEditFormAction,
  createDeleteProfilAction,
} from 'src/actions/user';

import {
  FaEllipsisH,
} from 'react-icons/fa';

import './style.scss';

// == Composant
const ShowProfile = () => {
  const menuDropdownIsOpen = useSelector((state) => state.user.menuDropdownIsOpen);
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

  const handleSubmitEditForm = (event) => {
    event.preventDefault();
    dispatch(createSubmitEditFormAction());
  };

  const handleDelete = () => {
    dispatch(createDeleteProfilAction());
    history.replace('/');
  };

  return (
    <>
      <div className="profile_right--action">
        <button
          type="button"
          onClick={handleMenuDropdown}
          className="profile_right--action--button"
        >
          <FaEllipsisH />
        </button>
        <ul className={menuDropdownIsOpen ? 'profile_right--action--menu' : 'profile_right--action--menu menuDropdownIsOpen'}>
          <li onClick={handleEdit}>Modifier mon profil</li>
          <li onClick={handleDelete}>Supprimer mon profil</li>
        </ul>
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
            <h2 title="Pseudo">{userPseudo}</h2>
          </div>
          <div className="profile_right--myProfile--data--mail">
            <p title="Email" className="field-label">Mail:</p>
            {userMail}
          </div>
          <div className="profile_right--myProfile--data--password">
            <p title="Mot de passe" className="field-label">Mot de passe:</p>
            **********
          </div>
          ''
        </form>
      </div>
    </>
  );
};

// == Export
export default ShowProfile;
