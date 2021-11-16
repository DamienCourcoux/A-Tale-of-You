import { useSelector, useDispatch } from 'react-redux';
import {
  changeField,
  handleSignin,
  hideSignin,
  showSignup,
  createVisibilityPasswordAction,
} from 'src/actions/user';

import {
  FaTimes,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';

import './style.scss';

import Field from './Field';

const Signin = () => {
  const dispatch = useDispatch();

  const {
    email,
    password,
    error,
    isVisiblePassword,
  } = useSelector((state) => ({
    email: state.user.email,
    password: state.user.password,
    signinIsOpen: state.user.signinIsOpen,
    error: state.user.error,
    isVisiblePassword: state.user.isVisiblePassword,
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

  const handleVisibilityPassword = () => {
    dispatch(createVisibilityPasswordAction());
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
            value={email}
            onChange={handleChangeField}
            type="email"
            className="field-input"
            placeholder="Email"
            name="email"
            title="Doit contenir une adresse email valide"
          />
          <div className="password">
            <Field
              value={password}
              onChange={handleChangeField}
              type={isVisiblePassword ? 'text' : 'password'}
              className="field-input"
              placeholder="Mot de passe"
              name="password"
              title="Doit contenir un magnifique mot de passe"
            />
            <span id="visibilityPassword" onClick={handleVisibilityPassword}>
              {
                isVisiblePassword
                  ? <FaEyeSlash />
                  : <FaEye />
              }
            </span>
          </div>
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
        </form>
        <h3 className="error">{error}</h3>
      </div>
    </div>
  );
};

export default Signin;
