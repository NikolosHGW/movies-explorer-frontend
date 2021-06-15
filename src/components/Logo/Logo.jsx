import './Logo.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Link className='logo' to='/'>
      <img src={logo} alt='Логотип' />
    </Link>
  );
}
