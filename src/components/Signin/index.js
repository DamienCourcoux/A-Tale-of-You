import { useSelector, useDispatch } from 'react-redux';
import {
  changeField,
  handleSignin,
  hideSignin,
  showSignup,
} from 'src/actions/user';

import { FaTimes } from 'react-icons/fa';

import './style.scss';

import Field from './Field';

const Signin = () => {
  const dispatch = useDispatch();

  const { email, password, error } = useSelector((state) => ({
    email: state.user.email,
    password: state.user.password,
    signinIsOpen: state.user.signinIsOpen,
    error: state.user.error,
  }));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(handleSignin());
  };

  const handleChangeField = (value, name) => {
    dispatch(changeField(value, name));
  };

  const handleHideSignin = (event) => {
    event.preventDefault();
    dispatch(hideSignin());
  };

  const handleShowSignup = (event) => {
    event.preventDefault();
    dispatch(hideSignin());
    dispatch(showSignup());
  };

  return (
    <div className="modal modal--close">
      <div className="modal__content">
        <FaTimes
          className="modal__close"
          onClick={(event) => handleHideSignin(event)}
        />
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            type="email"
            placeholder="Adresse mail"
            onChange={handleChangeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChangeField}
            value={password}
          />
          {
            error === 'password not valid'
              ? <p className="error">Votre mot de passe n'est pas le bon</p>
              : ''
          }
          <a
            href="#"
            onClick={(event) => handleShowSignup(event)}
            className="signin__a"
          >
            Pas de compte ? Inscris-toi !
          </a>
          <button
            type="submit"
            className="signin__button"
          >
            Valider
          </button>
          {
            error === 'user does not exist in DB'
              ? <h3 className="error">Aucun compte trouvé</h3>
              : ''
          }
        </form>
      </div>
    </div>
  );
};

export default Signin;
