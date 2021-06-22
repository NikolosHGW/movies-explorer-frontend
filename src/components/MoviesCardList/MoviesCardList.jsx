import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ cards, buttonSelector }) {
  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        {cards.map((card) => (
          <MoviesCard
            buttonSelector={buttonSelector}
            key={card}
          />
        ))}
      </div>
      {cards.length > 11 && (
        <button className='movies-card-list__more-button' type='button'>Ещё</button>
      )}
    </section>
  );
}
