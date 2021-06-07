import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation({ isLogged }) {
  return (
    <nav>
      {isLogged ? (
        <ul className='navigation'>
          <li className='navigation__line'>
            <NavLink
              className='navigation__link'
              activeClassName="navigation__link_active"
              to='/movies'
            >
              Фильмы
            </NavLink>
          </li>
          <li className='navigation__line'>
            <NavLink
              className='navigation__link'
              activeClassName="navigation__link_active"
              to='/saved-movies'
            >
              Сохраненные фильмы
            </NavLink>
          </li>
          <li className='navigation__line'>
            <NavLink
              className='navigation__link'
              activeClassName="navigation__link_active"
              to='/profile'
            >
              Аккаунт
              <div className="navigation__icon"/>
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className='navigation'>
          <li className='navigation__line-logout'>
            <Link
              className='navigation__register-link'
              to='/signup'
            >
              Регистрация
            </Link>
          </li>
          <li className='navigation__line-logout'>
            <Link
              className='navigation__login-link'
              to='/signup'
            >
              Войти
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
