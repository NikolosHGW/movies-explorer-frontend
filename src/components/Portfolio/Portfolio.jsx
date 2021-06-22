import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__heading'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__line'>
          <a
            className='portfolio__link'
            href='https://nikoloshgw.github.io/how-to-learn/index.html'
            target='_blank' rel="noreferrer"
          >Статичный сайт</a>
        </li>
        <li className='portfolio__line'>
          <a
            className='portfolio__link'
            href='https://nikoloshgw.github.io/russian-travel/'
            target='_blank' rel="noreferrer"
          >Адаптивный сайт</a>
        </li>
        <li className='portfolio__line'>
          <a
            className='portfolio__link'
            href='https://nikoloshgw.github.io/react-mesto-auth/#/'
            target='_blank' rel="noreferrer"
          >Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
}
