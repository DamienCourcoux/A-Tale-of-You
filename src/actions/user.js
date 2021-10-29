export const CHANGE_FIELD = 'CHANGE_FIELD';
export const HANDLE_LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const SHOW_SIGNIN = 'SHOW_SIGNIN';
export const HIDE_SIGNIN = 'HIDE_SIGNIN';

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const handleLogin = () => ({
  type: HANDLE_LOGIN,
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
