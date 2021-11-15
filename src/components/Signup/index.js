import { useSelector, useDispatch } from 'react-redux';
import { hideSignup, handleSignup, changeField } from 'src/actions/user';

import { FaTimes } from 'react-icons/fa';

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
  } = useSelector((state) => ({
    pseudo: state.user.pseudo,
    email: state.user.email,
    password: state.user.password,
    passwordConfirm: state.user.passwordConfirm,
    passwordWrong: state.user.passwordWrong,
    error: state.user.error,
  }));

  console.log(error);

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
            name="pseudo"
            placeholder="Pseudonyme"
            onChange={handleChangeField}
            value={pseudo}
          />
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
          <Field
            name="passwordConfirm"
            type="password"
            placeholder="Confirmer le mot de passe"
            onChange={handleChangeField}
            value={passwordConfirm}
          />
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
          {/* {
            error === 'un des champs est vide'
              ? <p className="error">Un des champs est vide</p>
              : ''
          } */}
        </form>
        <h3 className="error">{error}</h3>
      </div>
    </div>
  );
};

export default Signup;
