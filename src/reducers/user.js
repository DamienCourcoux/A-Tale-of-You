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
  CLOSE_EDIT_PROFIL,
  EDIT_PROFIL,
  SUBMIT_EDIT_SUCCESS,
  VISIBILITY_PASSWORD,
  SURE_TO_DELETE_PROFIL,
  DELETE_PROFIL_SUCCESS,
  NO_DELETE_PROFIL,
  STAY_LOGGED,
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
  isVisiblePassword: false,
  userPseudo: '',
  userMail: '',
  userId: null,
  userAvatar: '',
  userToken: null,
  sureToDeleteIsOpen: false,
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
        userToken: action.payload.token,
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
      localStorage.clear();
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

    case CLOSE_EDIT_PROFIL:
      return {
        ...state,
        isEdit: false,
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
        pseudo: '',
        email: '',
        password: '',
        passwordConfirm: '',
        passwordWrong: '',
        userPseudo: action.pseudo,
        userMail: action.email,
      };

    case VISIBILITY_PASSWORD:
      return {
        ...state,
        isVisiblePassword: !state.isVisiblePassword,
      };

    case SURE_TO_DELETE_PROFIL:
      return {
        ...state,
        sureToDeleteIsOpen: true,
      };

    case DELETE_PROFIL_SUCCESS:
      // ici on vient réinitialiser notre state
      // en partant des valeurs du state initial
      localStorage.clear();
      return {
        ...initialState,
      };

    case NO_DELETE_PROFIL:
      return {
        ...state,
        sureToDeleteIsOpen: false,
        menuDropdownIsOpen: false,
      };

    case STAY_LOGGED:
      return {
        ...state,
        isLogged: localStorage.getItem('isLogged'),
        userPseudo: localStorage.getItem('userPseudo'),
        userToken: localStorage.getItem('userToken'),
        userMail: localStorage.getItem('userMail'),
        userAvatar: localStorage.getItem('userAvatar'),
      };
    default:
      return state;
  }
};

export default reducer;
