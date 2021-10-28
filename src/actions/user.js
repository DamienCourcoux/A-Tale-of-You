export const CHANGE_FIELD = 'CHANGE_FIELD';
export const HANDLE_LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';

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
