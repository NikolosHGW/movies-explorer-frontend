import './AboutMe.css'
import avatar from '../../images/ava.jpg';

export default function AboutMe() {
  return (
    <section id='about-me' className='about-me'>
      <h2 className='about-me__heading'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__container-info'>
          <div className='about-me__text'>
            <p className='about-me__name'>Никита</p>
            <p className='about-me__job'>Фронтенд-разработчик, 26 лет</p>
            <p className='about-me__about'>
              Родом из Сибири из города Кемерово, там закончил политех и переехал в Санкт-Петербург.
              Ходим с женой в спортивный клуб, посещаем достопримечательности Северной столицы (и ее области), любим ездить в Ростов и загорать там на южном солнце.
              Люблю писать JavaScript-код, раньше любил писать C#-код, значит дальше будет TypeScript.
            </p>
          </div>
          <ul className='about-me__social'>
            <li className='about-me__social-line'>
              <a className='about-me__social-link' href='https://www.facebook.com/' target='_blank' rel="noreferrer">Facebook</a>
            </li>
            <li className='about-me__social-line'>
              <a className='about-me__social-link' href='https://github.com/NikolosHGW' target='_blank' rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img className='about-me__container-avatar' src={avatar} alt='Аватарка студента' />
      </div>
    </section>
  );
}
