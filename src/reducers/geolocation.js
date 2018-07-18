const initialState = {
  lat: null,
  lng: null,
};

export default function geolocation(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      if (action.coords === null) return state;
      return {
        lat: action.coords.latitude,
        lng: action.coords.longitude,
      };
    default:
      return state;
  }
}
