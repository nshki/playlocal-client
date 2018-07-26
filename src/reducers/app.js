const initialState = {
  loaded: false,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_APP_DATA':
      return { loaded: true };
    default:
      return state;
  }
}
