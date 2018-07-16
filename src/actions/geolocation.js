/**
 * Store the user's current location.
 *
 * @param {Object} coords { latitude: Float, longitude: Float }
 * @returns {Object}
 */
export const updateCurrentLocation = (coords) => {
  return {
    type: 'UPDATE_LOCATION',
    coords,
  };
};
