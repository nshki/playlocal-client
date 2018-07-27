import overlays from '../overlays';

describe('overlays reducer', () => {
  const initialState = {
    showSignInOverlay: false,
    showMenuOverlay: false,
    showCopyModalOverlay: false,
    copyModalText: '',
    showErrorModalOverlay: false,
    errorModalText: '',
  };

  it('returns the initial state', () => {
    expect(overlays(undefined, {})).toEqual(initialState);
  });

  it('handles TOGGLE_SIGN_IN_OVERLAY', () => {
    const action = {
      type: 'TOGGLE_SIGN_IN_OVERLAY',
      visible: false,
    };

    const result = overlays(initialState, action);
    expect(result).toEqual({
      showSignInOverlay: false,
      showMenuOverlay: initialState.showMenuOverlay,
      showCopyModalOverlay: initialState.showCopyModalOverlay,
      copyModalText: initialState.copyModalText,
      showErrorModalOverlay: initialState.showErrorModalOverlay,
      errorModalText: initialState.errorModalText,
    });
  });

  it('handles TOGGLE_MENU_OVERLAY', () => {
    const action = {
      type: 'TOGGLE_MENU_OVERLAY',
      visible: false,
    };

    const result = overlays(initialState, action);
    expect(result).toEqual({
      showSignInOverlay: initialState.showSignInOverlay,
      showMenuOverlay: false,
      showCopyModalOverlay: initialState.showCopyModalOverlay,
      copyModalText: initialState.copyModalText,
      showErrorModalOverlay: initialState.showErrorModalOverlay,
      errorModalText: initialState.errorModalText,
    });
  });

  it('handles TOGGLE_COPY_MODAL_OVERLAY with text', () => {
    const action = {
      type: 'TOGGLE_COPY_MODAL_OVERLAY',
      visible: false,
      text: 'text',
    };

    const result = overlays(initialState, action);
    expect(result).toEqual({
      showSignInOverlay: initialState.showSignInOverlay,
      showMenuOverlay: initialState.showMenuOverlay,
      showCopyModalOverlay: false,
      copyModalText: 'text',
      showErrorModalOverlay: initialState.showErrorModalOverlay,
      errorModalText: initialState.errorModalText,
    });
  });

  it('handles TOGGLE_COPY_MODAL_OVERLAY without text', () => {
    const action = {
      type: 'TOGGLE_COPY_MODAL_OVERLAY',
      visible: false,
    };

    const result = overlays(initialState, action);
    expect(result).toEqual({
      showSignInOverlay: initialState.showSignInOverlay,
      showMenuOverlay: initialState.showMenuOverlay,
      showCopyModalOverlay: false,
      copyModalText: initialState.copyModalText,
      showErrorModalOverlay: initialState.showErrorModalOverlay,
      errorModalText: initialState.errorModalText,
    });
  });

  it('handles TOGGLE_ERROR_MODAL_OVERLAY with text', () => {
    const action = {
      type: 'TOGGLE_ERROR_MODAL_OVERLAY',
      visible: false,
      text: 'text',
    };

    const result = overlays(initialState, action);
    expect(result).toEqual({
      showSignInOverlay: initialState.showSignInOverlay,
      showMenuOverlay: initialState.showMenuOverlay,
      showCopyModalOverlay: initialState.showCopyModalOverlay,
      copyModalText: initialState.copyModalText,
      showErrorModalOverlay: false,
      errorModalText: 'text',
    });
  });

  it('handles TOGGLE_ERROR_MODAL_OVERLAY without text', () => {
    const action = {
      type: 'TOGGLE_ERROR_MODAL_OVERLAY',
      visible: false,
    };

    const result = overlays(initialState, action);
    expect(result).toEqual({
      showSignInOverlay: initialState.showSignInOverlay,
      showMenuOverlay: initialState.showMenuOverlay,
      showCopyModalOverlay: initialState.showCopyModalOverlay,
      copyModalText: initialState.copyModalText,
      showErrorModalOverlay: false,
      errorModalText: initialState.errorModalText,
    });
  });
});
