import { combineReducers } from 'redux';
import geolocation from './geolocation';

const getReducers = () => {
  return combineReducers({
    geolocation,
  });
};

export default getReducers;
