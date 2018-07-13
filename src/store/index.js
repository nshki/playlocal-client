import { createStore } from 'redux';
import getReducers from '../reducers';

const store = createStore(
  getReducers(),
  {}
);

export default store;
