import {
  getAvatarForCurrentUser,
  getAvatarForSignalUser,
} from '../users';

describe('getAvatarForCurrentUser', () => {
  it('returns the correct string in object', () => {
    const user = {
      avatarPlatform: 'correct',
      correctImageUrl: 'yay',
      incorrectImageUrl: 'nay',
    };

    const result = getAvatarForCurrentUser(user);
    expect(result).toEqual('yay');
  });

  it('returns an empty string if platform does not exist', () => {
    const result = getAvatarForCurrentUser({});
    expect(result).toEqual('');
  });
});

describe('getAvatarForSignalUser', () => {
  it('returns the correct string in object', () => {
    const user = {
      avatarPlatform: 'correct',
      identities: [
        {
          provider: 'correct',
          imageUrl: 'yay',
        },
        {
          provider: 'incorrect',
          imageUrl: 'nay',
        }
      ],
    };

    const result = getAvatarForSignalUser(user);
    expect(result).toEqual('yay');
  });

  it('returns an empty string if platform does not exist', () => {
    const result = getAvatarForSignalUser({});
    expect(result).toEqual('');
  });
});
