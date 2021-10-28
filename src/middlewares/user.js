import { HANDLE_LOGIN } from 'src/actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN: {
      const { user: {email, password} } = store.getState();

      console.log(email, password);
      
      break;
    }
    default:
      next(action);
  }
};

export default user;
