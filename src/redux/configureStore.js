import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import logic from './logic';

const reducer = combineReducers({
  logic,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
