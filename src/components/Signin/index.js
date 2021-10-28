import { useSelector, useDispatch } from 'react-redux';
import { changeField, handleLogin } from 'src/actions/user';
import { FaTimes } from 'react-icons/fa';

import './styles.scss';

import Field from './Field';

const Signin = () => {
  const dispatch = useDispatch();

  const { email, password, signinIsOpen } = useSelector(state => ({
    email: state.user.email,
    password: state.user.password,
    signinIsOpen: state.user.signinIsOpen,
  }))

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(handleLogin());
  };

  const handleChangeField = (value, name) => {
    dispatch(changeField(value, name));
  }

  return (
    <div className="signin">
      <div className="signin__content">
        <FaTimes
          className="signin__close"
          onClick={() => console.log('test')}
        />
        <div className="signin__h1">Se connecter</div>
        <form className="signin__form" onSubmit={handleSubmit}>
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
          <a
            href="#"
            onClick={(event) => event.preventDefault()}
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
      </div>
    </div>
  );
}

export default Signin;
