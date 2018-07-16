import { combineReducers } from 'redux';
import currentUser from './currentUser';
import geolocation from './geolocation';

const getReducers = () => {
  return combineReducers({
    currentUser,
    geolocation,
  });
};

export default getReducers;
