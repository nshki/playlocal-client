import { getAvatarForSignalUser } from '../helpers/users';
import { distanceBetween } from '../helpers/signals';

const initialState = [];

export default function signals(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_APP_DATA':
      const { geolocation, username } = action;

      if (!action.data.activeSignals || !geolocation) {
        return state;
      }

      // Calculate distance from each signal.
      let sortedSignals = action.data.activeSignals.map((signal) => {
        return { ...signal, distance: distanceBetween(signal, geolocation) };
      });

      // Sort signals by distance.
      sortedSignals.sort((a, b) => {
        return a.distance - b.distance;
      });

      // Filter out distances that don't fit within a max search radius and is
      // not the user's own signal.
      sortedSignals = sortedSignals.filter((signal) => {
        return signal.distance <= 50 && signal.user.username !== username;
      });

      return sortedSignals.map((signal) => {
        const { identities } = signal.user;
        const twitterIdentity = identities.find(i => i.provider === 'twitter');
        const discordIdentity = identities.find(i => i.provider === 'discord');

        return {
          distance: signal.distance, // This is calculated above
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
