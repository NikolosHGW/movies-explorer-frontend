import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

export default function MoviesCardList({ movies, chunkMovies, buttonSelector, addMoreMovies }) {
  const cards = React.useMemo(() => chunkMovies.map(movie => (
    <MoviesCard
      buttonSelector={buttonSelector}
      key={movie.id}
      nameRU={movie.nameRU}
      cardImg={movie.image.url}
      trailerLink={movie.trailerLink}
      duration={movie.duration}
    />
  )), [chunkMovies, buttonSelector]);

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
