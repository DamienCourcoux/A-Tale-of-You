import PropTypes from 'prop-types';

import Field from './Field';

import './style.scss';

const Signin = () => {
  <div>Signin</div>
  // const email = 'toto'
  // const {
  //   email,
  //   password,
  //   logged,
  //   pseudo,
  // } = useSelector((state) => ({
  //   email: state.user.email,
  //   password: state.user.password,
  //   logged: state.user.logged,
  //   pseudo: state.user.pseudo,
  // }));

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   handleLogin();
  // };

  // return (
  //   <div className="login-form">
  //     {isLogged && (
  //       <div className="login-form-logged">
  //         <p className="login-form-message">
  //           {loggedMessage}
  //         </p>
  //         <button
  //           type="button"
  //           className="login-form-button"
  //           onClick={handleLogout}
  //         >
  //           Déconnexion
  //         </button>
  //       </div>
  //     )}
  //     {!isLogged && (

  //       <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
  //         <Field
  //           name="email"
  //           placeholder="Adresse Email"
  //           onChange={changeField}
  //           value={email}
  //         />
  //         <Field
  //           name="password"
  //           type="password"
  //           placeholder="Mot de passe"
  //           onChange={changeField}
  //           value={password}
  //         />
  //         <button
  //           type="submit"
  //           className="login-form-button"
  //         >
  //           OK
  //         </button>
  //       </form>
  //     )}
  //   </div>
  // );
};

// LoginForm.propTypes = {
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   changeField: PropTypes.func.isRequired,
//   handleLogin: PropTypes.func.isRequired,
//   handleLogout: PropTypes.func.isRequired,
//   isLogged: PropTypes.bool,
//   loggedMessage: PropTypes.string,
// };

// LoginForm.defaultProps = {
//   isLogged: false,
//   loggedMessage: 'Connecté',
// };

export default Signin;
