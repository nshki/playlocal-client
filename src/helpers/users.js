/**
 * Returns the correct object for current user's avatar.
 *
 * @param {Object} user
 * @returns {String}
 */
export const getAvatarForCurrentUser = (user) => {
  if (!user.avatarPlatform) return '';
  return user[`${user.avatarPlatform}ImageUrl`];
};

/**
 * Returns the correct string for given signal user's avatar.
 *
 * @param {Object} user
 * @returns {String}
 */
export const getAvatarForSignalUser = (user) => {
  if (!user.avatarPlatform) return '';
  const identity = user.identities.find(i => i.provider === user.avatarPlatform);
  return identity.imageUrl;
};
