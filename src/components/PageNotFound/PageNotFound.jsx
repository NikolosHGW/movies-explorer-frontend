import './PageNotFound.css';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className='page-not-found'>
      <span className='page-not-found__error'>404</span>
      <p className='page-not-found__text'>Страница не найдена</p>
      <Link className='page-not-found__link' to='/'>Назад</Link>
    </div>
  );
}
