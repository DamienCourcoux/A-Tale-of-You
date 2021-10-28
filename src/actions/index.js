export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const login = () => ({
  type: LOGIN,
});
