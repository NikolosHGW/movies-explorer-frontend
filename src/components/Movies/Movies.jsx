import './Movies.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';

export default function Movies() {
  const cards = React.useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], []);

  return (
    <div className='movies'>
      <Header />
      <Content>
        <SearchForm />
        <MoviesCardList
          cards={cards}
          buttonSelector='movies-card__like-button'
        />
      </Content>
      <Footer />
    </div>
  );
}
