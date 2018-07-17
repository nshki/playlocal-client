import { combineReducers } from 'redux';
import currentUser from './currentUser';
import geolocation from './geolocation';
import overlays from './overlays';
import signals from './signals';

const getReducers = () => {
  return combineReducers({
    currentUser,
    geolocation,
    overlays,
    signals,
  });
};

export default getReducers;
