import { removeFromStorage } from '../helpers/localStorage';

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

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_APP_DATA':
      if (!action.data.currentUser) return state;

      const {
        username,
        avatarPlatform,
        identities,
        playSignal,
      } = action.data.currentUser;
      const twitterIdentity = identities.find(i => i.provider === 'twitter');
      const discordIdentity = identities.find(i => i.provider === 'discord');

      return {
        username,
        avatarPlatform,
        twitterUsername: twitterIdentity ? twitterIdentity.username : null,
        twitterImageUrl: twitterIdentity ? twitterIdentity.imageUrl : null,
        discordUsername: discordIdentity ? discordIdentity.username : null,
        discordImageUrl: discordIdentity ? discordIdentity.imageUrl : null,
        signalPublished: playSignal.published,
        signalEndTime: playSignal.endTime,
        signalLat: playSignal.lat,
        signalLng: playSignal.lng,
        signalMessage: playSignal.message,
      };
    case 'UPDATE_CURRENT_USER_SIGNAL':
      const { published, message, endTime, lat, lng } = action;
      return {
        ...state,
        signalPublished: published,
        signalMessage: message,
        signalEndTime: endTime,
        signalLat: lat,
        signalLng: lng,
      };
    case 'UPDATE_CURRENT_USER':
      return {
        ...state,
        username: action.username,
        avatarPlatform: action.avatarPlatform,
      };
    case 'CLEAR_CURRENT_USER':
      removeFromStorage('token');
      return initialState;
    default:
      return state;
  }
}
