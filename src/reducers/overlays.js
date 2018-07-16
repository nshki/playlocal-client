const initialState = {
  showSignInOverlay: false,
  showMenuOverlay: false,
};

export default function overlays(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SIGN_IN_OVERLAY':
      return { ...state, showSignInOverlay: action.visible };
    case 'TOGGLE_MENU_OVERLAY':
      return { ...state, showMenuOverlay: action.visible };
    default:
      return state;
  }
}
