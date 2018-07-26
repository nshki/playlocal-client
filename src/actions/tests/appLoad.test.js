import { updateAppData } from '../appLoad';

describe('updateAppData', () => {
  it('should create the expected action', () => {
    const data = { hello: 'world' };
    const geolocation = { hello: 'world' };
    const preferences = { hello: 'world' };
    const username = { hello: 'world' };
    const expectedAction = {
      type: 'UPDATE_APP_DATA',
      data,
      geolocation,
      preferences,
      username,
    };

    const result = updateAppData(data, geolocation, preferences, username);
    expect(result).toEqual(expectedAction);
  });
});
