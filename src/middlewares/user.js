import axios from 'axios';
import { HANDLE_LOGIN, saveUser } from 'src/actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN: {
      const { user: { email, password } } = store.getState();

      const login = async () => {
        try {
          const response = await axios.post('http://34.224.61.45:3000/signin', {
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

      login();
      break;
    }
    default:
      next(action);
  }
};

export default user;
