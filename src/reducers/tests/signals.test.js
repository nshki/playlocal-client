import signals from '../signals';

describe('signals reducer', () => {
  const initialState = [];

  it('returns the initial state', () => {
    expect(signals(undefined, {})).toEqual(initialState);
  });

  it('handles UPDATE_APP_DATA without signals', () => {
    const action = {
      type: 'UPDATE_APP_DATA',
      geolocation: {},
      username: 'name',
      data: {},
    };

    const result = signals(initialState, action);
    expect(result).toEqual(initialState);
  });

  it('handles UPDATE_APP_DATA without geolocation', () => {
    const action = {
      type: 'UPDATE_APP_DATA',
      username: 'name',
      data: {
        activeSignals: [],
      },
    };

    const result = signals(initialState, action);
    expect(result).toEqual(initialState);
  });

  it('handles UPDATE_APP_DATA', () => {
    const action = {
      type: 'UPDATE_APP_DATA',
      username: 'name',
      geolocation: {
        lat: 39.1953411,
        lng: -76.7166447,
      },
      data: {
        activeSignals: [
          {
            lat: 39.1953411,
            lng: -76.7166447,
            endTime: 'my time',
            message: 'my message',
            user: {
              username: 'name',
              avatarPlatform: 'twitter',
              identities: [
                {
                  provider: 'twitter',
                  username: 'my twitter',
                  imageUrl: 'my twitter image',
                }
              ],
            },
          },
          {
            lat: 39.2818951,
            lng: -76.5312477,
            endTime: 'far time',
            message: 'far message',
            user: {
              username: 'far',
              avatarPlatform: 'discord',
              identities: [
                {
                  provider: 'discord',
                  username: 'far discord',
                  imageUrl: 'far discord image',
                }
              ],
            },
          },
          {
            lat: 39.1898444,
            lng: -76.764796,
            endTime: 'close time',
            message: 'close message',
            user: {
              username: 'close',
              avatarPlatform: 'discord',
              identities: [
                {
                  provider: 'twitter',
                  username: 'close twitter',
                  imageUrl: 'close twitter image',
                },
                {
                  provider: 'discord',
                  username: 'close discord',
                  imageUrl: 'close discord image',
                }
              ],
            },
          },
          {
            lat: 39.5164961,
            lng: -76.2359197,
            endTime: 'too far time',
            message: 'too far message',
            user: {
              username: 'too far',
              avatarPlatform: 'twitter',
              identities: [
                {
                  provider: 'twitter',
                  username: 'too far twitter',
                  imageUrl: 'too far twitter image',
                }
              ],
            },
          },
        ],
      },
    };

    const result = signals(initialState, action);
    expect(result).toEqual([
      {
        distance: 2.6,
        endTime: 'close time',
        lat: 39.1898444,
        lng: -76.764796,
        message: 'close message',
        username: 'close',
        imageUrl: 'close discord image',
        twitterUsername: 'close twitter',
        discordUsername: 'close discord',
      },
      {
        distance: 11.6,
        endTime: 'far time',
        lat: 39.2818951,
        lng: -76.5312477,
        message: 'far message',
        username: 'far',
        imageUrl: 'far discord image',
        twitterUsername: null,
        discordUsername: 'far discord',
      },
    ]);
  });
});
