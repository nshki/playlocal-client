import moment from 'moment';
import haversine from 'haversine';

/**
 * Given a time string, outputs a string describing how far away that is from
 * now.
 *
 * @param {String} timeStr
 * @returns {String}
 */
export const timeFromNow = (timeStr) => {
  const format = 'YYYY-MM-DD HH:mm:ss';
  return moment(timeStr, format).fromNow().replace('in', '').trim();
};

/**
 * Given two sets of coordinates, outputs a string describing how far away they
 * are from each other.
 *
 * @param {Object} start { lat: Float, lng: Float }
 * @param {Object} end { lat: Float, lng: Float }
 * @returns {String}
 */
export const distanceBetween = (start, end) => {
  const p1 = { latitude: start.lat, longitude: start.lng };
  const p2 = { latitude: end.lat, longitude: end.lng };
  const distance = haversine(p1, p2, { unit: 'mile' });
  return `${Math.round(distance * 10) / 10} mi`;
};
