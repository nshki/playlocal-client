/**
 * Utilize GraphQL response on app load.
 *
 * @param {Object} data - Raw GraphQL return value
 * @param {Object} geolocation - From geolocation reducer
 * @param {Object} preferences - From preferences reducer
 * @returns {Object}
 */
export const updateAppData = (data, geolocation, preferences) => {
  return {
    type: 'UPDATE_APP_DATA',
    data,
    geolocation,
    preferences,
  };
};
