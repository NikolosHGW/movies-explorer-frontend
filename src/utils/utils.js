export function getFilteredMovies(textSearch, moviesArray) {
  return moviesArray.filter(item => {
    if (item.nameRU && item.nameEN) {
      return item.nameRU.toLowerCase().includes(textSearch) || item.nameEN.toLowerCase().includes(textSearch);
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
