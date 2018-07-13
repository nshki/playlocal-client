/**
 * Store the user's current location.
 *
 * @param {Object} { latitude: Float, longitude: Float }
 * @returns {Object}
 */
export const updateCurrentLocation = ({ latitude, longitude }) => {
  return {
    type: 'UPDATE_LOCATION',
    latitude,
    longitude,
  };
};
