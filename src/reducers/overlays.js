const initialState = {
  showSignInOverlay: false,
  showMenuOverlay: false,
  showCopyModalOverlay: false,
  copyModalText: '',
  showErrorModalOverlay: false,
  errorModalText: '',
};

export default function overlays(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SIGN_IN_OVERLAY':
      return { ...state, showSignInOverlay: action.visible };
    case 'TOGGLE_MENU_OVERLAY':
      return { ...state, showMenuOverlay: action.visible };
    case 'TOGGLE_COPY_MODAL_OVERLAY':
      return {
        ...state,
        showCopyModalOverlay: action.visible,
        copyModalText: action.text || state.copyModalText,
      };
    case 'TOGGLE_ERROR_MODAL_OVERLAY':
      return {
        ...state,
        showErrorModalOverlay: action.visible,
        errorModalText: action.text || state.errorModalText,
      };
    default:
      return state;
  }
}
