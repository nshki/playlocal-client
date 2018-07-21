const initialState = {
  searchRadius: 10,
};

export default function preferences(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SEARCH_RADIUS':
      return { ...state, searchRadius: action.searchRadius };
    default:
      return state;
  }
}
