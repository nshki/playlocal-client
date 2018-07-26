import { setSearchRadius } from '../preferences';

describe('setSearchRadius', () => {
  it('creates the expected action', () => {
    const searchRadius = 10;
    const expectedAction = {
      type: 'UPDATE_SEARCH_RADIUS',
      searchRadius,
    };

    const result = setSearchRadius(searchRadius);
    expect(result).toEqual(expectedAction);
  });
});
