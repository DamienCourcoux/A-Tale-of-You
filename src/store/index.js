import { createStore, applyMiddleware, compose } from 'redux';
// import authMiddleware from 'src/middlewares/recipes';

import reducer from 'src/reducer';

// If we have more than 1 reducer
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = composeEnhancers(
//   applyMiddleware(authMiddleware),
// );

// const store = createStore(reducer, enhancers);

// If we have only 1 reducer
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
