/**
 * Open/close sign in overlay.
 *
 * @param {Boolean} visible
 * @returns {Object}
 */
export const showSignInOverlay = (visible) => {
  return {
    type: 'TOGGLE_SIGN_IN_OVERLAY',
    visible,
  };
};

/**
 * Open/close menu overlay.
 *
 * @param {Boolean} visible
 * @returns {Object}
 */
export const showMenuOverlay = (visible) => {
  return {
    type: 'TOGGLE_MENU_OVERLAY',
    visible,
  };
};
