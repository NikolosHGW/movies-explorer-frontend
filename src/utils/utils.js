export const options = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const urlBeatFilmMovies = 'https://api.nomoreparties.co/beatfilm-movies';

export function findMovies(textSearch, moviesArray) {
  return moviesArray.filter(item => {
    if (item.nameRU && item.nameEN) {
      return item.nameRU.toLowerCase().includes(textSearch) || item.nameEN.toLowerCase().includes(textSearch);
    }
    return false;
  });
}
