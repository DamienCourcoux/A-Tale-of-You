import axios from 'axios';
import {
  HANDLE_SIGNIN,
  saveUser,
  HANDLE_SIGNUP,
  showPasswordWrong,
  SUBMIT_EDIT_FORM,
  createSubmitEditSuccessAction,
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
          const actionSaveUser = saveUser(response.data);
          store.dispatch(actionSaveUser);
        }
        catch (error) {
          // créer une fonction pour indiquer l'utilisateur n'existe pas dans la BDD
          console.log(error);
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
          const actionSaveUser = saveUser(response.data);
          store.dispatch(actionSaveUser);
        }
        catch (error) {
          // créer une fonction pour indiquer à l'utilisateur
          // que le pseudo et ou le mail existe déjà dans la BDD
          console.log(error);
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
        url: 'http://3.80.80.108:3000/profil',
        headers: {
          'Content-Type': 'application/json',
        },
        // TODO Une fois récupperer les vrai données, ne pas oublier de les changé
        data: {
          id: 1,
          pseudo: state.user.pseudo,
          email: state.user.email,
          password: state.user.password,
        },
      };

      axios(config)
        .then((response) => {
          store.dispatch(createSubmitEditSuccessAction(response.data.pseudo, response.data.email));
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
