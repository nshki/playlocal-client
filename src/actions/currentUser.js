/**
 * Removes current user's information.
 *
 * @returns {Object}
 */
export const clearCurrentUser = () => {
  return {
    type: 'CLEAR_CURRENT_USER',
  };
};

/**
 * Updates current user's signal.
 *
 * @returns {Object}
 */
export const updateSignal = (message, endTime, lat, lng) => {
  return {
    type: 'UPDATE_CURRENT_USER_SIGNAL',
    message,
    endTime,
    lat,
    lng,
  };
};
