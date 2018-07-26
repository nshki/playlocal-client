import { updateCurrentLocation } from '../geolocation';

describe('updateCurrentLocation', () => {
  it('creates the expected action', () => {
    const coords = { hello: 'world' };
    const expectedAction = {
      type: 'UPDATE_LOCATION',
      coords,
    };

    const results = updateCurrentLocation(coords);
    expect(results).toEqual(expectedAction);
  });
});
