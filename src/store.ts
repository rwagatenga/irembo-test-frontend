/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './store/reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
