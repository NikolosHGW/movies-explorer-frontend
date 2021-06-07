import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <Link className='header__logo-link' to='/'>
        <img src={logo} alt='Логотип' />
      </Link>
      <Navigation isLogged={false} />
    </header>
  );
}
