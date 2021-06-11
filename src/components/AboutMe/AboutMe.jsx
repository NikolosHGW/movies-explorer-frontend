import './AboutMe.css'
import avatar from '../../images/ava.jpg';

export default function AboutMe() {
  return (
    <section id='about-me' className='about-me'>
      <h2 className='about-me__heading'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__container-info'>
          <p className='about-me__name'>Никита</p>
          <p className='about-me__job'>Фронтенд-разработчик, 26 лет</p>
          <p className='about-me__about'>
            Здесь будет текст обо мне Здесь будет текст обо мне Здесь будет текст обо мне Здесь будет текст обо мне
            Здесь будет текст обо мне Здесь будет текст обо мне Здесь будет текст обо мне Здесь будет текст обо мне
            Здесь будет текст обо мне Здесь будет текст обо мне Здесь будет текст обо мне Здесь будет текст обо мне
          </p>
          <ul className='about-me__social'>
            <li className='about-me__social-line'>
              <a className='about-me__social-link' href='https://www.facebook.com/' target='_blank'>Facebook</a>
            </li>
            <li className='about-me__social-line'>
              <a className='about-me__social-link' href='https://github.com/NikolosHGW' target='_blank'>Github</a>
            </li>
          </ul>
        </div>
        <img className='about-me__container-avatar' src={avatar} alt='Аватарка студента' />
      </div>
    </section>
  );
}
