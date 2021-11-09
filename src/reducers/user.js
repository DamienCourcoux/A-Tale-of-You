import {
  CHANGE_FIELD,
  SHOW_SIGNIN,
  HIDE_SIGNIN,
  SAVE_USER,
  SHOW_SIGNUP,
  HIDE_SIGNUP,
  SHOW_PASSWORD_WRONG,
  LOGOUT,
  SHOW_SELECT_CHARACTER,
  HIDE_SELECT_CHARACTER,
  MENU_DROPDOWN_IS_OPEN,
  EDIT_PROFIL,
  SUBMIT_EDIT_SUCCESS,
  VISIBILITY_PASSWORD,
  DELETE_PROFIL_SUCCESS,
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
  selectCharacterIsOpen: false,
  menuDropdownIsOpen: false,
  isEdit: false,
  isVisibilyPassword: false,
  userPseudo: '',
  userMail: '',
  userId: null,
  userAvatar: '',
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
      return {
        ...state,
        isLogged: action.payload.isLogged,
        userPseudo: action.payload.pseudo,
        userMail: action.payload.email,
        userId: action.payload.id,
        userAvatar: action.payload.avatar,
        signinIsOpen: false,
        signupIsOpen: false,
      };
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

    case LOGOUT:
      // ici on vient réinitialiser notre state
      // en partant des valeurs du state initial
      return {
        ...initialState,
      };

    case SHOW_SELECT_CHARACTER: {
      return {
        ...state,
        selectCharacterIsOpen: true,
      };
    }

    case HIDE_SELECT_CHARACTER: {
      return {
        ...state,
        selectCharacterIsOpen: false,
      };
    }

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

    case DELETE_PROFIL_SUCCESS:
      return {
        ...state,
        isLogged: false,
        menuDropdownIsOpen: false,
      };

    default:
      return state;
  }
};

export default reducer;
