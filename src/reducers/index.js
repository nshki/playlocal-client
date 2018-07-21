import { combineReducers } from 'redux';
import currentUser from './currentUser';
import geolocation from './geolocation';
import overlays from './overlays';
import signals from './signals';
import preferences from './preferences';

const getReducers = () => {
  return combineReducers({
    currentUser,
    geolocation,
    overlays,
    signals,
    preferences,
  });
};

export default getReducers;
