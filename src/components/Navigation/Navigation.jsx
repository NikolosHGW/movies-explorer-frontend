import './Navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='navigation'>
      <ul className='navigation__ul'>
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
