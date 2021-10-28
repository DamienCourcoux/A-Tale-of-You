import { useSelector, useDispatch } from 'react-redux';
import { changeField } from 'src/actions';

import './styles.scss';

import Field from './Field';

const Signin = () => {
  const dispatch = useDispatch();

  const { email, password, isLogged } = useSelector(state => ({
    email: state.email,
    password: state.password,
    isLogged: state.isLogged,
  }))
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // handleLogin();
    console.log('handleSubmit');
  };

  const handleChangeField = (value, name) => {
    dispatch(changeField(value, name));
  }

  return (
    <div className="Signin">
      {isLogged && (null)}
      {!isLogged && (

        <form className="Signin__form" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
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
          <button
            type="submit"
            className="Signin__button"
          >
            OK
          </button>
        </form>
      )}
    </div>
  );
}

export default Signin;
