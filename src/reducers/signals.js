import { getAvatarForSignalUser } from '../helpers/users';

const initialState = [];

export default function signals(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_APP_DATA':
      if (!action.data.activeSignals) return state;

      return action.data.activeSignals.map((signal) => {
        const { identities } = signal.user;
        const twitterIdentity = identities.find(i => i.provider === 'twitter');
        const discordIdentity = identities.find(i => i.provider === 'discord');

        return {
          endTime: signal.endTime,
          lat: signal.lat,
          lng: signal.lng,
          message: signal.message,
          username: signal.user.username,
          imageUrl: getAvatarForSignalUser(signal.user),
          twitterUsername: twitterIdentity ? twitterIdentity.username : null,
          discordUsername: discordIdentity ? discordIdentity.username : null,
        };
      });
    default:
      return state;
  }
}
