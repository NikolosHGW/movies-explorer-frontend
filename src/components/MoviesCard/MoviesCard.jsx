import { getTimeFromMins } from '../../utils/utils';
import './MoviesCard.css';

export default function MoviesCard(props) {
  const { buttonSelector, nameRU, cardImg, trailerLink, duration, objMovie, handleChangeLike } = props;

  function onClickCardLike() {
    handleChangeLike(buttonSelector, objMovie)
  }

  return (
    <article className='movies-card'>
      <a
        className='movies-card__link'
        href={trailerLink}
        target='_blank'
        rel="noreferrer"
      >
      </a>
      <div className='movies-card__container'>
        <div className='movies-card__info'>
          <h2 className='movies-card__heading'>{nameRU}</h2>
          <span className='movies-card__duration'>{getTimeFromMins(duration)}</span>
        </div>
        <button className={buttonSelector} type="button" aria-label="like" onClick={onClickCardLike}></button>
      </div>
      <img
        className='movies-card__img'
        src={cardImg.includes('http') ? cardImg : `https://api.nomoreparties.co${cardImg}`}
        alt={`Картинка фильма ${nameRU}`}
      />
    </article>
  );
}
