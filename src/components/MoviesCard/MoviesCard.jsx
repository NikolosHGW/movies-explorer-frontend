import './MoviesCard.css';
import cardImg from '../../images/card.png';

export default function MoviesCard() {
  return (
    <article className='movies-card'>
      <a
        className='movies-card__link'
        href='https://www.youtube.com/watch?v=UXcqcdYABFw'
        target='_blank'
        rel="noreferrer"
      >
      </a>
      <div className='movies-card__container'>
        <div className='movies-card__info'>
          <h2 className='movies-card__heading'>33 слова о дизайне</h2>
          <span className='movies-card__duration'>1ч 47м</span>
        </div>
        <button className='movies-card__like-button' type="button" aria-label="like"></button>
      </div>
      <img className='movies-card__img' src={cardImg} alt='Картинка фильма' />
    </article>
  );
}
