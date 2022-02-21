import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import worksReducer from './my-work/works';

const reducers = combineReducers({
  worksReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;