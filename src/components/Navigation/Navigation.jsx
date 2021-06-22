import './Navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation({ isVisible }) {
  return (
    <nav className={`navigation${isVisible ? ' navigation_visible' : ''}`}>
      <ul className='navigation__ul'>
        {isVisible &&
        <li className='navigation__line navigation__line_response'>
          <NavLink
            className='navigation__link'
            activeClassName="navigation__link_active"
            exact to='/'
          >
            Главная
          </NavLink>
        </li>
        }
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
    </nav>
  );
}
