import './NavTab.css';

export default function NavTab() {
  return (
    <nav className='navtab'>
      <ul className='navtab__ul'>
        <li className='navtab__li'>
          <a className='navtab__a' href='#'>О проекте</a>
        </li>
        <li className='navtab__li'>
          <a className='navtab__a' href='#'>Технологии</a>
        </li>
        <li className='navtab__li'>
          <a className='navtab__a' href='#'>Студент</a>
        </li>
      </ul>
    </nav>
  );
}
