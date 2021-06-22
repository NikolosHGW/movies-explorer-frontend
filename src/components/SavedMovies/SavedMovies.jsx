import './SavedMovies.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';

export default function SavedMovies() {
  const cards = React.useMemo(() => [1, 2, 3], []);

  return (
    <div className='saved-movies'>
      <Header />
      <Content>
        <SearchForm />
        <MoviesCardList
          cards={cards}
          buttonSelector='movies-card__dislike-button'
        />
      </Content>
      <Footer />
    </div>
  );
}
