import {
  showSignInOverlay,
  showMenuOverlay,
  showCopyModalOverlay,
  showErrorModalOverlay,
} from '../overlays';

describe('showSignInOverlay', () => {
  it('creates the expected action', () => {
    const visible = true;
    const expectedAction = {
      type: 'TOGGLE_SIGN_IN_OVERLAY',
      visible,
    };

    const result = showSignInOverlay(visible);
    expect(result).toEqual(expectedAction);
  });
});

describe('showMenuOverlay', () => {
  it('creates the expected action', () => {
    const visible = true;
    const expectedAction = {
      type: 'TOGGLE_MENU_OVERLAY',
      visible,
    };

    const result = showMenuOverlay(visible);
    expect(result).toEqual(expectedAction);
  });
});

describe('showCopyModalOverlay', () => {
  it('creates the expected action', () => {
    const visible = true;
    const text = 'text';
    const expectedAction = {
      type: 'TOGGLE_COPY_MODAL_OVERLAY',
      visible,
      text,
    };

    const result = showCopyModalOverlay(visible, text);
    expect(result).toEqual(expectedAction);
  });
});

describe('showErrorModalOverlay', () => {
  it('creates the expected action', () => {
    const visible = true;
    const text = 'text';
    const expectedAction = {
      type: 'TOGGLE_ERROR_MODAL_OVERLAY',
      visible,
      text,
    };

    const result = showErrorModalOverlay(visible, text);
    expect(result).toEqual(expectedAction);
  });
});
