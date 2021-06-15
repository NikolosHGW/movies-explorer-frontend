import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className='header'>
      <Logo />
      <Navigation isLogged={true} />
    </header>
  );
}
