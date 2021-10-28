import { createStore, applyMiddleware, compose } from 'redux';
import user from 'src/middlewares/user';
import game from 'src/middlewares/game';

import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(user, game),
);

const store = createStore(reducer, enhancers);

export default store;
