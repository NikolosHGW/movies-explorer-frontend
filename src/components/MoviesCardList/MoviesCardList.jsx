import './MoviesCardList.css';
import React from 'react';

export default function MoviesCardList({ movies, cards, addMoreMovies }) {
  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        {cards}
      </div>
      {cards.length !== movies.length && (
        <button
          className='movies-card-list__more-button'
          type='button'
          onClick={addMoreMovies}
        >Ещё</button>
      )}
    </section>
  );
}
