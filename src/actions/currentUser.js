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
