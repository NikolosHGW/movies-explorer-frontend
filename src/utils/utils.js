export function getFilteredMovies(textSearch, moviesArray, isShort = false) {
  return moviesArray.filter(item => {
    if (item.nameRU && item.nameEN && !isShort) {
      return item.nameRU.toLowerCase().includes(textSearch) || item.nameEN.toLowerCase().includes(textSearch);
    }
    if (item.nameRU && item.nameEN && isShort) {
      return item.duration < 41 && (item.nameRU.toLowerCase().includes(textSearch) || item.nameEN.toLowerCase().includes(textSearch));
    }
    return false;
  });
}

function sliceMoviesWithSize(setChunkMovies, movies, endSlice) {
  const { desktop, tablet, mobile } = endSlice;
  if (document.documentElement.clientWidth > 1087) {
    setChunkMovies(movies.slice(0, desktop));
  }
  if (document.documentElement.clientWidth > 689 && document.documentElement.clientWidth < 1088) {
    setChunkMovies(movies.slice(0, tablet));
  }
  if (document.documentElement.clientWidth < 670) {
    setChunkMovies(movies.slice(0, mobile));
  }
}

export function splitMovies(setChunkMovies, movies) {
  const endSlice = {
    desktop: 12,
    tablet: 8,
    mobile: 5,
  };
  sliceMoviesWithSize(setChunkMovies, movies, endSlice);
}

export function addChunkMovies(setChunkMovies, movies, chunkMovies) {
  const endSlice = {
    desktop: chunkMovies.length + 3,
    tablet: chunkMovies.length + 2,
    mobile: chunkMovies.length + 2,
  };
  sliceMoviesWithSize(setChunkMovies, movies, endSlice);
}

export function getTimeFromMins(mins) {
  let hours = Math.trunc(mins/60);
  let minutes = mins % 60;
  return `${hours}ч ${minutes}м`;
};

export function getMap(moviesArray) {
  const map = new Map();
  moviesArray.forEach(movie => {
    map.set(movie.movieId, movie);
  });
  return map;
}
