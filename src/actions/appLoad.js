/**
 * Utilize GraphQL response on app load.
 *
 * @param {Object} - data
 * @returns {Object}
 */
export const updateAppData = (data) => {
  return {
    type: 'UPDATE_APP_DATA',
    data,
  };
};
