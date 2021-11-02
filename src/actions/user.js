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
