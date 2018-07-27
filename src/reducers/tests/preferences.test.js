import preferences from '../preferences';

describe('preferences reducer', () => {
  const initialState = { searchRadius: 10 };

  it('returns the initial state', () => {
    expect(preferences(undefined, {})).toEqual(initialState);
  });

  it('handles UPDATE_SEARCH_RADIUS', () => {
    const action = {
      type: 'UPDATE_SEARCH_RADIUS',
      searchRadius: 5,
    };

    const result = preferences(initialState, action);
    expect(result).toEqual({ searchRadius: 5 });
  });
});
