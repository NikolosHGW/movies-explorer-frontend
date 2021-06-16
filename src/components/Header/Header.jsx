import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

export default function Header({ isLogged = true }) {
  return (
    <header className='header'>
      <Logo />
      {isLogged ? (<Navigation />) : (
        <nav className='header__nav'>
          <ul className='header__ul'>
            <li className='header__line-logout'>
              <Link
                className='header__register-link'
                to='/signup'
              >
                Регистрация
              </Link>
            </li>
            <li className='header__line-logout'>
              <Link
                className='header__login-link'
                to='/signin'
              >
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {isLogged && <button
        className='header__menu-button'
        type='button'
        aria-label='menu'
      ></button>}
    </header>
  );
}
