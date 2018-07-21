/**
 * Sets the search radius.
 *
 * @param {Number} searchRadius
 * @returns {Object}
 */
export const setSearchRadius = (searchRadius) => {
  return {
    type: 'UPDATE_SEARCH_RADIUS',
    searchRadius,
  };
};
