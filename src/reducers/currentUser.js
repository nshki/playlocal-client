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

      const { currentUser } = action.data;
      const { identities, playSignal } = currentUser;
      const twitterIdentity = identities.find(i => i.provider === 'twitter');
      const discordIdentity = identities.find(i => i.provider === 'discord');
      let twitterUsername = twitterIdentity ? twitterIdentity.username : null;
      let twitterImageUrl = twitterIdentity ? twitterIdentity.imageUrl : null;
      let discordUsername = discordIdentity ? discordIdentity.username : null;
      let discordImageUrl = discordIdentity ? discordIdentity.imageUrl : null;

      // Grab what's already in state, otherwise load.
      const username = state.username || currentUser.username;
      const avatarPlatform = state.avatarPlatform || currentUser.avatarPlatform;
      twitterUsername = state.twitterUsername || twitterUsername;
      twitterImageUrl = state.twitterImageUrl || twitterImageUrl;
      discordUsername = state.discordUsername || discordUsername;
      discordImageUrl = state.discordImageUrl || discordImageUrl;
      const signalPublished = state.signalPublished || playSignal.published;
      const signalEndTime = state.signalEndTime || playSignal.endTime;
      const signalLat = state.signalLat || playSignal.lat;
      const signalLng = state.signalLng || playSignal.lng;
      const signalMessage = state.signalMessage || playSignal.message;

      return {
        username,
        avatarPlatform,
        twitterUsername,
        twitterImageUrl,
        discordUsername,
        discordImageUrl,
        signalPublished,
        signalEndTime,
        signalLat,
        signalLng,
        signalMessage,
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
    case 'UPDATE_CURRENT_USER_IDENTITIES':
      return {
        ...state,
        avatarPlatform: action.avatarPlatform,
        twitterUsername: action.twitterUsername,
        twitterImageUrl: action.twitterImageUrl,
        discordUsername: action.discordUsername,
        discordImageUrl: action.discordImageUrl,
      };
    case 'CLEAR_CURRENT_USER':
      removeFromStorage('token');
      return initialState;
    default:
      return state;
  }
}
