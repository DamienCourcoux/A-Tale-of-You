import axios from 'axios';
import {
  HANDLE_SIGNIN,
  saveUser,
  HANDLE_SIGNUP,
  showPasswordWrong,
  SUBMIT_EDIT_FORM,
  createSubmitEditSuccessAction,
  DELETE_PROFIL,
  createDeleteProfilSuccessAction,
  handleError,
  hideSignin,
  hideSignup,
} from 'src/actions/user';

// const urlServer = 'http://localhost:3000';
const urlServer = 'http://3.80.80.108:3000';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_SIGNIN: {
      const { user: { email, password } } = store.getState();

      const signin = async () => {
        try {
          const response = await axios.post(`${urlServer}/signin`, {
            email,
            password,
          });
          localStorage.setItem('isLogged', response.data.isLogged);
          localStorage.setItem('userPseudo', response.data.pseudo);
          localStorage.setItem('userToken', response.data.token);
          localStorage.setItem('userMail', response.data.email);
          localStorage.setItem('userAvatar', response.data.avatar);
          const actionSaveUser = saveUser(response.data);
          store.dispatch(actionSaveUser);
          store.dispatch(hideSignin());
        }
        catch (error) {
          const actionError = handleError(error.response.data.erreur);
          store.dispatch(actionError);
        }
      };

      signin();
      break;
    }
    case HANDLE_SIGNUP: {
      const {
        user: {
          pseudo,
          email,
          password,
          passwordConfirm,
        },
      } = store.getState();

      const signup = async () => {
        try {
          const response = await axios.post(`${urlServer}/signup`, {
            pseudo,
            email,
            password,
            passwordConfirm,
          });
          localStorage.setItem('isLogged', response.data.isLogged);
          localStorage.setItem('userPseudo', response.data.pseudo);
          localStorage.setItem('userToken', response.data.token);
          localStorage.setItem('userMail', response.data.email);
          localStorage.setItem('userAvatar', response.data.avatar);
          const actionSaveUser = saveUser(response.data);
          store.dispatch(actionSaveUser);
          store.dispatch(hideSignup());
        }
        catch (error) {
          const actionError = handleError(error.response.data.erreur);
          store.dispatch(actionError);
        }
      };

      if (password !== passwordConfirm) {
        const actionShowPasswordWrong = showPasswordWrong();
        store.dispatch(actionShowPasswordWrong);
      }
      else {
        signup();
      }
      break;
    }

    case SUBMIT_EDIT_FORM: {
      const state = store.getState();

      const config = {
        method: 'patch',
        url: 'http://3.80.80.108:3000/profile',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.userToken}`,
        },
        data: {
          pseudo: state.user.pseudo,
          email: state.user.email,
          password: state.user.password,
        },
      };
      axios(config)
        .then((response) => {
          store.dispatch(createSubmitEditSuccessAction(response.data.pseudo, response.data.email));
          localStorage.removeItem('userPseudo');
          localStorage.removeItem('userMail');
          localStorage.setItem('userPseudo', response.data.pseudo);
          localStorage.setItem('userMail', response.data.email);
        })
        .catch((error) => {
          const actionError = handleError(error.response.data.erreur);
          store.dispatch(actionError);
        });
      break;
    }

    case DELETE_PROFIL: {
      const state = store.getState();

      const config = {
        method: 'delete',
        url: 'http://3.80.80.108:3000/profile',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.userToken}`,
        },
        data: {
        },
      };

      axios(config)
        .then(() => {
          store.dispatch(createDeleteProfilSuccessAction());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    default:
      next(action);
  }
};

export default user;
