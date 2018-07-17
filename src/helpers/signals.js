import moment from 'moment';

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
