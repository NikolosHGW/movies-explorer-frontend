import './Movies.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import React from 'react';
import MoviesApi from '../../utils/MoviesApi';
import { addChunkMovies, getFilteredMovies, splitMovies } from '../../utils/utils';

export default function Movies() {
  const [movies, setMovies] = React.useState([]);
  const [chunkMovies, setChunkMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchMovies = React.useCallback((textSearch) => {
    setIsLoading(true);
    MoviesApi()
      .then(movies => {
        localStorage.setItem('movies', JSON.stringify(movies));
        setMovies(getFilteredMovies(textSearch, movies));
        setIsLoading(false);
      })
      .catch(res => {
        console.log(res);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = React.useCallback((textSearch, movies) => {
    setMovies(getFilteredMovies(textSearch, movies));
  }, []);

  const changeChunkMovies = React.useCallback(() => {
    splitMovies(setChunkMovies, movies);
  }, [movies]);

  const addMoreMovies = React.useCallback(() => {
    addChunkMovies(setChunkMovies, movies, chunkMovies);
  }, [movies, chunkMovies]);

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
      window.addEventListener('resize', changeChunkMovies);
    }
  });

  return (
    <div className='movies'>
      <Header />
      <Content>
        <SearchForm
          fetchMovies={fetchMovies}
          handleSearch={handleSearch}
        />
        {movies.length > 0 &&
          <MoviesCardList
            movies={movies}
            chunkMovies={chunkMovies}
            buttonSelector='movies-card__like-button'
            addMoreMovies={addMoreMovies}
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
