import {
  updateProfile,
  clearCurrentUser,
  updateSignal,
  updateIdentities,
} from '../currentUser';

describe('updateProfile', () => {
  it('creates the expected action', () => {
    const username = 'hello';
    const avatarPlatform = 'platform';
    const expectedAction = {
      type: 'UPDATE_CURRENT_USER',
      username,
      avatarPlatform,
    };

    expect(updateProfile(username, avatarPlatform)).toEqual(expectedAction);
  });
});

describe('clearCurrentUser', () => {
  it('creates the expected action', () => {
    const expectedAction = { type: 'CLEAR_CURRENT_USER' };
    expect(clearCurrentUser()).toEqual(expectedAction);
  });
});

describe('updateSignal', () => {
  it('creates the expected action', () => {
    const published = true;
    const message = 'hello';
    const endTime = 'Tuesday';
    const lat = 37.46353;
    const lng = 54.24753;
    const expectedAction = {
      type: 'UPDATE_CURRENT_USER_SIGNAL',
      published,
      message,
      endTime,
      lat,
      lng,
    };

    const result = updateSignal(published, message, endTime, lat, lng);
    expect(result).toEqual(expectedAction);
  });
});

describe('updateIdentities', () => {
  it('creates the expected action', () => {
    const avatarPlatform = 'platform';
    const twitterUsername = 'twitter';
    const twitterImageUrl = 'twitter';
    const discordUsername = 'discord';
    const discordImageUrl = 'discord';
    const expectedAction = {
      type: 'UPDATE_CURRENT_USER_IDENTITIES',
      avatarPlatform,
      twitterUsername,
      twitterImageUrl,
      discordUsername,
      discordImageUrl,
    };
  });
});
