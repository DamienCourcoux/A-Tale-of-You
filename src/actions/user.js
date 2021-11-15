export const CHANGE_FIELD = 'CHANGE_FIELD';
export const HANDLE_SIGNIN = 'HANDLE_SIGNIN';
export const SAVE_USER = 'SAVE_USER';
export const SHOW_SIGNIN = 'SHOW_SIGNIN';
export const HIDE_SIGNIN = 'HIDE_SIGNIN';
export const SHOW_SIGNUP = 'SHOW_SIGNUP';
export const HIDE_SIGNUP = 'HIDE_SIGNUP';
export const HANDLE_SIGNUP = 'HANDLE_SIGNUP';
export const SHOW_PASSWORD_WRONG = 'SHOW_PASSWORD_WRONG';
export const LOGOUT = 'LOGOUT';
export const SHOW_SELECT_CHARACTER = 'SHOW_SELECT_CHARACTER';
export const HIDE_SELECT_CHARACTER = 'HIDE_SELECT_CHARACTER';
export const MENU_DROPDOWN_IS_OPEN = 'MENU_DROPDOWN_IS_OPEN';
export const CLOSE_EDIT_PROFIL = 'CLOSE_EDIT_PROFIL';
export const EDIT_PROFIL = 'EDIT_PROFIL';
export const SUBMIT_EDIT_FORM = 'SUBMIT_EDIT_FORM';
export const SUBMIT_EDIT_SUCCESS = 'SUBMIT_EDIT_SUCCESS';
export const VISIBILITY_PASSWORD = 'VISIBILITY_PASSWORD';
export const SURE_TO_DELETE_PROFIL = 'SURE_TO_DELETE_PROFIL';
export const DELETE_PROFIL = 'DELETE_PROFIL';
export const DELETE_PROFIL_SUCCESS = 'DELETE_PROFIL_SUCCESS';
export const NO_DELETE_PROFIL = 'NO_DELETE_PROFIL';
export const STAY_LOGGED = 'STAY_LOGGED';

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const handleSignin = () => ({
  type: HANDLE_SIGNIN,
});

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const showSignin = () => ({
  type: SHOW_SIGNIN,
});

export const hideSignin = () => ({
  type: HIDE_SIGNIN,
});

export const showSignup = () => ({
  type: SHOW_SIGNUP,
});

export const hideSignup = () => ({
  type: HIDE_SIGNUP,
});

export const handleSignup = () => ({
  type: HANDLE_SIGNUP,
});

export const showPasswordWrong = () => ({
  type: SHOW_PASSWORD_WRONG,
});

export const logout = () => ({
  type: LOGOUT,
});

export const showSelectCharacter = () => ({
  type: SHOW_SELECT_CHARACTER,
});

export const hideSelectCharacter = () => ({
  type: HIDE_SELECT_CHARACTER,
});

export const createMenuDropdownIsOpenAction = () => ({
  type: MENU_DROPDOWN_IS_OPEN,
});

export const createCloseEditProfilAction = () => ({
  type: CLOSE_EDIT_PROFIL,
});

export const createEditProfilAction = () => ({
  type: EDIT_PROFIL,
});

export const createSubmitEditFormAction = () => ({
  type: SUBMIT_EDIT_FORM,
});

export const createSubmitEditSuccessAction = (pseudo, email) => ({
  type: SUBMIT_EDIT_SUCCESS,
  pseudo,
  email,
});

export const createVisibilityPasswordAction = () => ({
  type: VISIBILITY_PASSWORD,
});

export const createSureToDeleteProfilAction = () => ({
  type: SURE_TO_DELETE_PROFIL,
});

export const createDeleteProfilAction = () => ({
  type: DELETE_PROFIL,
});

export const createDeleteProfilSuccessAction = () => ({
  type: DELETE_PROFIL_SUCCESS,
});

export const createNoDeleteProfilAction = () => ({
  type: NO_DELETE_PROFIL,
});

export const stayLogged = () => ({
  type: STAY_LOGGED,
});
