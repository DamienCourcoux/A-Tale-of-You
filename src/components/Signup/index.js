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
  } = useSelector((state) => ({
    pseudo: state.user.pseudo,
    email: state.user.email,
    password: state.user.password,
    passwordConfirm: state.user.passwordConfirm,
    passwordWrong: state.user.passwordWrong,
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

  return (
    <div className="signup">
      <div className="signup__content">
        <FaTimes
          className="signup__close"
          onClick={(event) => handleHideSignup(event)}
        />
        <div className="signup__h1">S'inscrire</div>
        <form className="signin__form" onSubmit={handleSubmit}>
          <Field
            name="pseudo"
            placeholder="Pseudonyme"
            onChange={handleChangeField}
            value={pseudo}
          />
          <Field
            name="email"
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
            <div className="signup__password_wrong">
              Les mots de passe ne correspondent pas
            </div>
          )}
          <button
            type="submit"
            className="signup__button"
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
