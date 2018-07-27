import app from '../app';

describe('app reducer', () => {
  it('returns the initial state', () => {
    expect(app(undefined, {})).toEqual({ loaded: false });
  });

  it('handles UPDATE_APP_DATA', () => {
    const state = { loaded: false };
    const action = { type: 'UPDATE_APP_DATA' };
    const result = app(state, action);
    expect(result).toEqual({ loaded: true });
  });
});
