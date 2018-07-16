/**
 * Store the current user's information.
 *
 * @param {Object} - graphqlResult
 * @returns {Object}
 */
export const updateCurrentUser = (graphqlResult) => {
  return {
    type: 'UPDATE_CURRENT_USER',
    graphqlResult,
  };
};

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
