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

import profileData from 'src/data/profile';

import {
  FaEllipsisH,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import Schema from 'src/assets/schema.png';
import Field from './Field';

import './profile.scss';

// == Composant
const Profile = () => {
  const menuDropdownIsOpen = useSelector((state) => state.user.menuDropdownIsOpen);
  const isEdit = useSelector((state) => state.user.isEdit);
  // TODO changer le pseudo, email, password pars ce de l'utilisateur une fois connecté
  const pseudo = useSelector((state) => state.user.pseudo);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const isVisibilyPassword = useSelector((state) => state.user.isVisibilyPassword);

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
    profileData.map((data) => (
      <section key={data.id} className="profile">
        <div className="profile__border shadow">
          <div className="profile__pages shadow">
            <div className="profile__page  shadow">
              <img className="illustration" src={Schema} alt="illustration" />
              {/* <div className="profile__page__right__fake_image">
                <FaImages size={400} />
              </div> */}
            </div>
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
                  <img src={data.image} alt="Votre img de profil" />
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
                        )
                      // TODO changer le pseudo pars celui de l'utilisateur une fois connecté
                        : <h2>{pseudo}</h2>
                    }
                  </div>
                  <div className="right--myProfile--data--mail">
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
                            minLength="1"
                            pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
                            title="Doit contenir une adresse email valide"
                          />
                        )
                        // TODO changer l'email, pars celui de l'utilisateur une fois connecté
                        : <p><span>Mail:</span> {email}</p>
                    }
                  </div>
                  <div className="right--myProfile--data--password">
                    {
                      isEdit
                        ? (
                          <>
                            <Field
                          // TODO changer le password pars celui de l'utilisateur une fois connecté
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
                            {/* <input type="password" name="password"
                            id="passwordProfile" value={password} readOnly /> */}
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
          </div>
        </div>
      </section>
      //---------------------------------------
    ))
  );
};

// == Export
export default Profile;
