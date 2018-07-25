/**
 * Updates current user's information.
 *
 * @param {String} username
 * @param {String} avatarPlatform
 * @returns {Object}
 */
export const updateProfile = (username, avatarPlatform) => {
  return {
    type: 'UPDATE_CURRENT_USER',
    username,
    avatarPlatform,
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

/**
 * Updates current user's signal.
 *
 * @param {Boolean} published
 * @param {String} message
 * @param {String} endTime
 * @param {Number} lat
 * @param {Number} lng
 * @returns {Object}
 */
export const updateSignal = (published, message, endTime, lat, lng) => {
  return {
    type: 'UPDATE_CURRENT_USER_SIGNAL',
    published,
    message,
    endTime,
    lat,
    lng,
  };
};

/**
 * Updates current user's identities.
 *
 * @param {String} avatarPlatform
 * @param {String} twitterUsername
 * @param {String} twitterImageUrl
 * @param {String} discordUsername
 * @param {String} discordImageUrl
 * @returns {Object}
 */
export const updateIdentities = (avatarPlatform, twitterUsername, twitterImageUrl, discordUsername, discordImageUrl) => {
  return {
    type: 'UPDATE_CURRENT_USER_IDENTITIES',
    avatarPlatform,
    twitterUsername,
    twitterImageUrl,
    discordUsername,
    discordImageUrl,
  };
};
