import { combineReducers } from 'redux';
import currentUser from './currentUser';
import geolocation from './geolocation';
import overlays from './overlays';

const getReducers = () => {
  return combineReducers({
    currentUser,
    geolocation,
    overlays,
  });
};

export default getReducers;
