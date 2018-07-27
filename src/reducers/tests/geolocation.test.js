import geolocation from '../geolocation';

describe('geolocation reducer', () => {
  const initialState = {
    lat: null,
    lng: null,
  };

  it('returns the initial state', () => {
    expect(geolocation(undefined, {})).toEqual(initialState);
  });

  it('handles UPDATE_LOCATION', () => {
    const action = {
      type: 'UPDATE_LOCATION',
      coords: {
        latitude: 1.23,
        longitude: 4.56,
      },
    };

    const result = geolocation(initialState, action);
    expect(result).toEqual({
      lat: 1.23,
      lng: 4.56,
    });
  });
});
