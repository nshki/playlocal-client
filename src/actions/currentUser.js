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
