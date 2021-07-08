import categories from '../data'

const INITIAL_STATE = {
  selectedCategory: {},
  selectedMovie: {},
  categories,
}

function movieReducer(state= INITIAL_STATE, action) {
  if (action.type === 'SELECTED_MOVIE') {
    return {
      ...state,
      selectedCategory: action.category,
      selectedMovie: action.movie,
    };
  }
  return state;
}

export default movieReducer;
