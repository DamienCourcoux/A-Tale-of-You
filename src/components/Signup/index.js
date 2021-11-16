import { useSelector, useDispatch } from 'react-redux';
import {
  hideSignup,
  handleSignup,
  changeField,
  createVisibilityPasswordAction,
} from 'src/actions/user';

import {
  FaTimes,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';

import './style.scss';

import Field from './Field';

const Signup = () => {
  const dispatch = useDispatch();

  const {
    pseudo,
    email,
    password,
    passwordConfirm,
    passwordWrong,
    error,
    isVisiblePassword,
  } = useSelector((state) => ({
    pseudo: state.user.pseudo,
    email: state.user.email,
    password: state.user.password,
    passwordConfirm: state.user.passwordConfirm,
    passwordWrong: state.user.passwordWrong,
    error: state.user.error,
    isVisiblePassword: state.user.isVisiblePassword,
  }));

  const handleHideSignup = (event) => {
    event.preventDefault();
    dispatch(hideSignup());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(handleSignup());
  };

  const handleChangeField = (value, name) => {
    dispatch(changeField(value, name));
  };

  const handleVisibilityPassword = () => {
    dispatch(createVisibilityPasswordAction());
  };

  return (
    <div className="modal modal--close">
      <div className="modal__content">
        <FaTimes
          className="modal__close"
          onClick={(event) => handleHideSignup(event)}
        />
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <Field
            value={pseudo}
            onChange={handleChangeField}
            type="text"
            className="field-input"
            placeholder="Pseudonyme"
            name="pseudo"
            title="Doit contenir un magnifique pseudo"
          />
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
          <div className="password">
            <Field
              value={passwordConfirm}
              onChange={handleChangeField}
              type={isVisiblePassword ? 'text' : 'password'}
              className="field-input"
              placeholder="Confirmer le mot de passe"
              name="passwordConfirm"
              title="Doit contenir le même magnifique mot de passe"
            />
            <span id="visibilityPassword" onClick={handleVisibilityPassword}>
              {
                isVisiblePassword
                  ? <FaEyeSlash />
                  : <FaEye />
              }
            </span>
          </div>
          {passwordWrong && (
            <p className="error">
              Les mots de passe ne correspondent pas
            </p>
          )}
          <div className="step" />
          <button
            type="submit"
            className="signup__button"
          >
            Valider
          </button>
        </form>
        <h3 className="error">{error}</h3>
      </div>
    </div>
  );
};

export default Signup;
