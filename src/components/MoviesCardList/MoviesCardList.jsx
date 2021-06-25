import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

export default function MoviesCardList({ movies, buttonSelector }) {
  const cards = React.useMemo(() => movies.map(movie => (
    <MoviesCard
      buttonSelector={buttonSelector}
      key={movie.id}
      nameRU={movie.nameRU}
      cardImg={movie.image.url}
      trailerLink={movie.trailerLink}
      duration={movie.duration}
    />
  )), [movies, buttonSelector]);

  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        {cards}
      </div>
      {cards.length > 11 && (
        <button className='movies-card-list__more-button' type='button'>Ещё</button>
      )}
    </section>
  );
}
