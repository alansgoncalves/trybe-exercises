export function selectMovie(category, movie) {
  return {
    type: 'SELECTED_MOVIE',
    category,
    movie,
  }
}
