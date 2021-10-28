// import { CHANGE_FIELD, SAVE_USER, LOGOUT } from 'src/actions/user';

export const initialState = {
  pseudo: '',
  email: '',
  password: '',
  logged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case CHANGE_FIELD:
    //   return {
    //     ...state,
    //     [action.name]: action.value,
    //   };
    // case SAVE_USER:
    //   return {
    //     ...state,
    //     // pseudo: action.payload.pseudo,
    //     // logged: action.payload.logged,
    //     // token: action.payload.token,
    //     ...action.payload,
    //   };
    //   case LOGOUT:
    //     // ici on vient réinitialiser notre state
    //     // en partant des valeurs du state initial
    //     return {
    //       ...initialState,
    //     };
    case 'TOTO':
      return state;
    default:
      return state;
  }
};

export default reducer;
