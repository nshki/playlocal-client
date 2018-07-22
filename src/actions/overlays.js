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

/**
 * Open/close copy modal overlay.
 *
 * @param {Boolean} visible
 * @param {String} text
 * @returns {Object}
 */
export const showCopyModalOverlay = (visible, text) => {
  return {
    type: 'TOGGLE_COPY_MODAL_OVERLAY',
    visible,
    text,
  };
};

/**
 * Open/close error modal overlay.
 *
 * @param {Boolean} visible
 * @param {String} text
 * @returns {Object}
 */
export const showErrorModalOverlay = (visible, text) => {
  return {
    type: 'TOGGLE_ERROR_MODAL_OVERLAY',
    visible,
    text,
  };
};
