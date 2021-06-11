import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__about'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <span className='footer__copyright'>&copy; 2021</span>
        <ul className='footer__list'>
          <li className='footer__line'>
            <a
              className='footer__link'
              href='https://praktikum.yandex.ru'
              target='_blank'
            >Яндекс.Практикум</a>
          </li>
          <li className='footer__line'>
            <a
              className='footer__link'
              href='https://github.com/yandex-praktikum'
              target='_blank'
            >Github</a>
          </li>
          <li className='footer__line'>
            <a
              className='footer__link'
              href='https://www.facebook.com/yandex.praktikum/'
              target='_blank'
            >Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
