// import { CHANGE_FIELD, SAVE_USER, LOGOUT } from 'src/actions/user';
import {
  CHANGE_FIELD,
  SHOW_SIGNIN,
  HIDE_SIGNIN,
  SAVE_USER,
  SHOW_SIGNUP,
  HIDE_SIGNUP,
  SHOW_PASSWORD_WRONG,
  MENU_DROPDOWN_IS_OPEN,
  EDIT_PROFIL,
  SUBMIT_EDIT_SUCCESS,
  VISIBILITY_PASSWORD,
} from 'src/actions/user';

export const initialState = {
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
  passwordWrong: false,
  isLogged: false,
  signinIsOpen: false,
  signupIsOpen: false,
  menuDropdownIsOpen: false,
  isEdit: false,
  isVisibilyPassword: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SHOW_SIGNIN:
      return {
        ...state,
        signinIsOpen: true,
      };
    case HIDE_SIGNIN:
      return {
        ...state,
        email: '',
        password: '',
        signinIsOpen: false,
      };
    case SAVE_USER: {
      console.log('SAVE_USER');
      console.log(action.payload);
      return state;
      // return {
      //   ...state,
      //   // pseudo: action.payload.pseudo,
      //   // logged: action.payload.logged,
      //   // token: action.payload.token,
      //   ...action.payload,
      // };
    }
    case SHOW_SIGNUP:
      return {
        ...state,
        signupIsOpen: true,
      };
    case HIDE_SIGNUP:
      return {
        ...state,
        pseudo: '',
        email: '',
        password: '',
        passwordConfirm: '',
        passwordWrong: '',
        signupIsOpen: false,
      };
    case SHOW_PASSWORD_WRONG:
      return {
        ...state,
        passwordWrong: true,
      };

    case MENU_DROPDOWN_IS_OPEN:
      return {
        ...state,
        menuDropdownIsOpen: !state.menuDropdownIsOpen,
      };

    case EDIT_PROFIL:
      return {
        ...state,
        menuDropdownIsOpen: false,
        isEdit: true,
      };

    case SUBMIT_EDIT_SUCCESS:
      return {
        ...state,
        isEdit: false,
      };

    case VISIBILITY_PASSWORD:
      return {
        ...state,
        isVisibilyPassword: !state.isVisibilyPassword,
      };

    //   case LOGOUT:
    //     // ici on vient réinitialiser notre state
    //     // en partant des valeurs du state initial
    //     return {
    //       ...initialState,
    //     };
    default:
      return state;
  }
};

export default reducer;
