import currentUser from '../currentUser';

describe('currentUser reducer', () => {
  const initialState = {
    username: null,
    avatarPlatform: null,
    twitterUsername: null,
    twitterImageUrl: null,
    discordUsername: null,
    discordImageUrl: null,
    signalPublished: null,
    signalEndTime: null,
    signalLat: null,
    signalLng: null,
    signalMessage: null,
  };

  const action = {
    type: 'UPDATE_APP_DATA',
    data: {
      currentUser: {
        username: 'name',
        avatarPlatform: 'platform',
        identities: [
          {
            provider: 'twitter',
            username: 'twitter user',
            imageUrl: 'twitter image',
          },
          {
            provider: 'discord',
            username: 'discord user',
            imageUrl: 'discord image',
          }
        ],
        playSignal: {
          published: true,
          endTime: 'time',
          lat: 1.23,
          lng: 4.56,
          message: 'yay',
        },
      },
    },
  };

  it('returns the initial state', () => {
    const result = currentUser(undefined, {});
    expect(result).toEqual(initialState);
  });

  it('handles UPDATE_APP_DATA with blank state', () => {
    const result = currentUser(initialState, action);
    expect(result).toEqual({
      username: 'name',
      avatarPlatform: 'platform',
      twitterUsername: 'twitter user',
      twitterImageUrl: 'twitter image',
      discordUsername: 'discord user',
      discordImageUrl: 'discord image',
      signalPublished: true,
      signalEndTime: 'time',
      signalLat: 1.23,
      signalLng: 4.56,
      signalMessage: 'yay',
    });
  });

  it('handles UPDATE_APP_DATA with existing state', () => {
    const state = {
      username: 'unmoved',
      avatarPlatform: 'unmoved platform',
      twitterUsername: 'unmoved twitter user',
      twitterImageUrl: 'unmoved twitter image',
      discordUsername: 'unmoved discord user',
      discordImageUrl: 'unmoved discord image',
      signalPublished: false,
      signalEndTime: 'unmoved time',
      signalLat: 1.234,
      signalLng: 4.567,
      signalMessage: 'nay',
    };

    const result = currentUser(state, action);
    expect(result).toEqual(state);
  });
});
