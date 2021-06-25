import './Movies.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import React from 'react';
import MoviesApi from '../../utils/MoviesApi';
import { findMovies } from '../../utils/utils';

export default function Movies() {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('movies')) {
      setMovies(JSON.parse(localStorage.getItem('movies')));
    }
  }, []);

  const fetchMovies = React.useCallback((textSearch) => {
    setIsLoading(true);
    MoviesApi()
      .then(movies => {
        localStorage.setItem('movies', JSON.stringify(movies));
        setMovies(findMovies(textSearch, movies));
        setIsLoading(false);
      })
      .catch(res => {
        console.log(res);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = React.useCallback((textSearch, movies) => {
    setMovies(findMovies(textSearch, movies));
  }, []);

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
            buttonSelector='movies-card__like-button'
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
