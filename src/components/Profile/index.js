// == Import
import { useSelector, useDispatch } from 'react-redux';
import {
  createMenuDropdownIsOpenAction,
  createEditProfilAction,
  changeField,
} from 'src/actions/user';

import profileData from 'src/data/profile';

import { FaEllipsisH } from 'react-icons/fa';
import Schema from 'src/assets/schema.png';
import Field from './Field';

import './profile.scss';

// == Composant
const Profile = () => {
  const menuDropdownIsOpen = useSelector((state) => state.user.menuDropdownIsOpen);
  const isEdit = useSelector((state) => state.user.isEdit);
  const pseudo = useSelector((state) => state.user.pseudo);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

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

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  const handleDelete = () => {
    console.log('supprimer');
  };

  return (
    profileData.map((data) => (
      <section key={data.id} className="profile">
        <div className="profile__book">
          <div className="profile__book--pageLeft">
            <img src={Schema} alt="illustration" />
          </div>
          <div className="profile__book--pageRight">
            <div className="profile__book--pageRight__title">
              <h1>Profil</h1>
              <button
                type="button"
                className="profile__book--pageRight__title--button"
                onClick={handleMenuDropdown}
              >
                <FaEllipsisH />
              </button>
              <ul className={menuDropdownIsOpen ? 'profile__book--pageRight__title--menu' : 'profile__book--pageRight__title--menu menuDropdownIsOpen'}>
                <li onClick={handleEdit}>Modifier mon profil</li>
                <li onClick={handleDelete}>Supprimer mon profil</li>
              </ul>
            </div>
            <span className="hr"> </span>
            <div className="profile__book--pageRight__myProfile">
              <div className="profile__book--pageRight__myProfile--image">
                <img src={data.image} alt="Votre img de profil" />
              </div>
              <form
                onSubmit={handleSubmitEdit}
                className="profile__book--pageRight__myProfile--data"
              >
                <div className="profile__book--pageRight__myProfile--data--title">
                  {
                    isEdit
                      ? (
                        <Field
                          value={pseudo}
                          onChange={handleChangeField}
                          type="text"
                          className="field-input"
                          placeholder="Pseudo"
                          name="pseudo"
                        />
                      )
                      : <h2>{data.pseudo}</h2>
                  }
                </div>
                <div className="profile__book--pageRight__myProfile--data--mail">
                  {
                    isEdit
                      ? (
                        <Field
                          value={email}
                          onChange={handleChangeField}
                          type="email"
                          className="field-input"
                          placeholder="Email"
                          name="email"
                        />
                      )
                      : <p><span>Mail:</span> {data.email}</p>
                  }
                </div>
                <div className="profile__book--pageRight__myProfile--data--password">
                  {
                    isEdit
                      ? (
                        <Field
                          value={password}
                          onChange={handleChangeField}
                          type="password"
                          className="field-input"
                          placeholder="Mot de passe"
                          name="password"
                        />
                      )
                      : <p><span>Mot de passe:</span> {data.password}</p>
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
        </div>
      </section>
    ))
  );
};

// == Export
export default Profile;
