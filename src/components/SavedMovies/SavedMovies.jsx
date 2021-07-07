import './SavedMovies.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import { getFilteredMovies } from '../../utils/utils';

export default function SavedMovies({ savedMovies, handleSetInfoTool, removeMovie }) {
  const [cachedMovies, setCachedMovies] = React.useState([]);

  const handleSearch = React.useCallback((textSearch, movies, isShort) => {
    setCachedMovies(getFilteredMovies(textSearch, movies, isShort));
  }, [setCachedMovies]);

  const searchLogic = React.useCallback((value, checked) => {
    if (value) {
      handleSearch(value, savedMovies, checked);
    }
  }, [handleSearch, savedMovies]);

  const handleChangeLike = React.useCallback((_buttonSelector, objMovie) => {
    removeMovie(objMovie)
  }, [removeMovie]);

  const cards = React.useMemo(() => cachedMovies.map(movie => (
    <MoviesCard
      buttonSelector='movies-card__dislike-button'
      key={movie.movieId}
      nameRU={movie.nameRU}
      cardImg={movie.image}
      trailerLink={movie.trailerLink}
      duration={movie.duration}
      objMovie={movie}
      handleChangeLike={handleChangeLike}
    />
  )), [cachedMovies, handleChangeLike]);

  React.useEffect(() => {
    setCachedMovies(savedMovies);
  }, [savedMovies]);

  return (
    <div className='saved-movies'>
      <Header />
      <Content>
        <SearchForm
          searchLogic={searchLogic}
          handleSearch={handleSearch}
          handleSetInfoTool={handleSetInfoTool}
          moviesArrayForFilter={savedMovies}
        />
        {cachedMovies.length > 0 &&
          <MoviesCardList
            movies={cachedMovies}
            cards={cards}
          />
        }
        {cachedMovies.length === 0 &&
          <p className='content__not-found'>Ничего не найдено</p>
        }
      </Content>
      <Footer />
    </div>
  );
}
