const initialState = {
  latitude: null,
  longitude: null,
};

export default function geolocation(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return {
        latitude: action.latitude,
        longitude: action.longitude,
      };
    default:
      return state;
  }
}
