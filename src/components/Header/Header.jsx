import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Header({ isLogged = true }) {
  const [isVisible, setIsVisible] = React.useState(false);

  function changeVisible() {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  }

  return (
    <header className='header'>
      <Logo />
      {isLogged ? (<Navigation isVisible={isVisible} />) : (
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
        className={`header__menu-button${isVisible ? ' header__menu-button_close' : ''}`}
        type='button'
        aria-label={`${isVisible ? 'close menu' : 'open menu'}`}
        onClick={changeVisible}
      ></button>}
    </header>
  );
}
