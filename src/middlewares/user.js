import axios from 'axios';
import { HANDLE_SIGNIN, saveUser, HANDLE_SIGNUP, showPasswordWrong } from 'src/actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_SIGNIN: {
      const { user: { email, password } } = store.getState();

      const signin = async () => {
        try {
          const response = await axios.post('http://localhost:3000/signin', {
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
          console.log('signup request');
          // const response = await axios.post('http://localhost:3000/signup', {
          //   pseudo,
          //   email,
          //   password,
          // });
          // const actionSaveUser = saveUser(response.data);
          // store.dispatch(actionSaveUser);
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
      } else {
        signup();
      }
      break;
    }
    default:
      next(action);
  }
};

export default user;
