/**
 * Returns the correct object for a user's avatar.
 *
 * @param {User} user
 * @returns {String}
 */
export const getAvatarForUser = (user) => {
  if (!user.avatarPlatform) return '';
  return user[`${user.avatarPlatform}ImageUrl`];
};
