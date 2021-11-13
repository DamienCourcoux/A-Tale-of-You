import { combineReducers } from 'redux';

import game from './game';
import user from './user';
import menu from './menu';

const rootReducer = combineReducers({
  game,
  user,
  menu,
});

export default rootReducer;
