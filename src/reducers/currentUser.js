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
    case 'UPDATE_CURRENT_USER':
      const {
        username,
        avatarPlatform,
        identities,
        playSignal,
      } = action.graphqlResult.currentUser;
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
    default:
      return state;
  }
}
