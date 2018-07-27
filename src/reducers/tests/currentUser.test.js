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

  it('handles UPDATE_CURRENT_USER_SIGNAL', () => {
    const action = {
      type: 'UPDATE_CURRENT_USER_SIGNAL',
      published: false,
      message: 'new message',
      endTime: 'new time',
      lat: 9.87,
      lng: 6.54,
    };

    const result = currentUser(initialState, action);
    expect(result).toEqual({
      username: initialState.username,
      avatarPlatform: initialState.avatarPlatform,
      twitterUsername: initialState.twitterUsername,
      twitterImageUrl: initialState.twitterImageUrl,
      discordUsername: initialState.discordUsername,
      discordImageUrl: initialState.discordImageUrl,
      signalPublished: false,
      signalMessage: 'new message',
      signalEndTime: 'new time',
      signalLat: 9.87,
      signalLng: 6.54,
    });
  });

  it('handles UPDATE_CURRENT_USER', () => {
    const action = {
      type: 'UPDATE_CURRENT_USER',
      username: 'new user',
      avatarPlatform: 'new platform',
    };

    const result = currentUser(initialState, action);
    expect(result).toEqual({
      username: 'new user',
      avatarPlatform: 'new platform',
      twitterUsername: initialState.twitterUsername,
      twitterImageUrl: initialState.twitterImageUrl,
      discordUsername: initialState.discordUsername,
      discordImageUrl: initialState.discordImageUrl,
      signalPublished: initialState.signalPublished,
      signalMessage: initialState.signalMessage,
      signalEndTime: initialState.signalEndTime,
      signalLat: initialState.signalLat,
      signalLng: initialState.signalLng,
    });
  });

  it('handles UPDATE_CURRENT_USER_IDENTITIES', () => {
    const action = {
      type: 'UPDATE_CURRENT_USER_IDENTITIES',
      avatarPlatform: 'new platform',
      twitterUsername: 'new twitter user',
      twitterImageUrl: 'new twitter image',
      discordUsername: 'new discord user',
      discordImageUrl: 'new discord image',
    };

    const result = currentUser(initialState, action);
    expect(result).toEqual({
      username: initialState.username,
      avatarPlatform: 'new platform',
      twitterUsername: 'new twitter user',
      twitterImageUrl: 'new twitter image',
      discordUsername: 'new discord user',
      discordImageUrl: 'new discord image',
      signalPublished: initialState.signalPublished,
      signalEndTime: initialState.signalEndTime,
      signalLat: initialState.signalLat,
      signalLng: initialState.signalLng,
      signalMessage: initialState.signalMessage,
    });
  });

  it('handles CLEAR_CURRENT_USER', () => {
    const action = { type: 'CLEAR_CURRENT_USER' };
    const result = currentUser(initialState, action);
    expect(result).toEqual(initialState);
  });
});
