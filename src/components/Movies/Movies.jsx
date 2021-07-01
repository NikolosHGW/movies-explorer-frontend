import './Movies.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import MoviesApi from '../../utils/MoviesApi';
import { addChunkMovies, getFilteredMovies, getMap, splitMovies } from '../../utils/utils';
import { errorMessage500 } from '../../utils/constants';

export default function Movies({ handleSetInfoTool, saveMovie, removeMovie, savedMovies }) {
  const [movies, setMovies] = React.useState([]);
  const [chunkMovies, setChunkMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchMovies = React.useCallback((textSearch, isShort) => {
    setIsLoading(true);
    MoviesApi()
      .then(movies => {
        localStorage.setItem('movies', JSON.stringify(movies));
        setMovies(getFilteredMovies(textSearch, movies, isShort));
        setIsLoading(false);
      })
      .catch(_res => {
        handleSetInfoTool(false, errorMessage500);
        setIsLoading(false);
      });
  }, [handleSetInfoTool]);

  const handleSearch = React.useCallback((textSearch, movies, isShort) => {
    setMovies(getFilteredMovies(textSearch, movies, isShort));
  }, []);

  const changeChunkMovies = React.useCallback(() => {
    splitMovies(setChunkMovies, movies);
  }, [movies]);

  const addMoreMovies = React.useCallback(() => {
    addChunkMovies(setChunkMovies, movies, chunkMovies);
  }, [movies, chunkMovies]);

  const searchLogic = React.useCallback((value, checked) => {
    if (!localStorage.getItem('movies') && value) {
      fetchMovies(value, checked);
    } else if (value) {
      handleSearch(value, JSON.parse(localStorage.getItem('movies')), checked);
    }
  }, [fetchMovies, handleSearch]);

  const handleChangeLike = React.useCallback((buttonSelector, objMovie) => {
    if (buttonSelector === 'movies-card__like-button movies-card__like-button_active') {
      removeMovie(getMap(savedMovies).get(objMovie.id));
    }
    if (buttonSelector === 'movies-card__like-button') {
      saveMovie(objMovie);
    }
  }, [saveMovie, removeMovie, savedMovies]);

  const cards = React.useMemo(() => {
    const moviesMap = getMap(savedMovies);
    return chunkMovies.map(movie => (
      <MoviesCard
        buttonSelector={moviesMap.get(movie.id)?.movieId === movie.id ? 'movies-card__like-button movies-card__like-button_active' : 'movies-card__like-button'}
        key={movie.id}
        nameRU={movie.nameRU}
        cardImg={movie.image.url}
        trailerLink={movie.trailerLink}
        duration={movie.duration}
        objMovie={movie}
        handleChangeLike={handleChangeLike}
      />
    ));
  }, [chunkMovies, handleChangeLike, savedMovies]);

  React.useEffect(() => {
    if (localStorage.getItem('movies')) {
      setMovies(JSON.parse(localStorage.getItem('movies')));
    }
  }, []);

  React.useEffect(() => {
    changeChunkMovies();
  }, [changeChunkMovies]);

  React.useEffect(() => {
    window.addEventListener('resize', changeChunkMovies);

    return () => {
      window.removeEventListener('resize', changeChunkMovies);
    }
  });

  return (
    <div className='movies'>
      <Header />
      <Content>
        <SearchForm
          searchLogic={searchLogic}
          handleSearch={handleSearch}
          handleSetInfoTool={handleSetInfoTool}
          moviesArrayForFilter={JSON.parse(localStorage.getItem('movies'))}
        />
        {movies.length > 0 &&
          <MoviesCardList
            movies={movies}
            addMoreMovies={addMoreMovies}
            cards={cards}
          />
        }
        {JSON.parse(localStorage.getItem('movies')) &&
          movies.length === 0 &&
          <p className='content__not-found'>Ничего не найдено</p>
        }
        {isLoading &&
          <div className='content__preloader'>
            <Preloader />
          </div>
        }
      </Content>
      <Footer />
    </div>
  );
}
