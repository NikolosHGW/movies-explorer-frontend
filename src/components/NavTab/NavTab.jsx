import './NavTab.css';

export default function NavTab() {
  return (
    <nav className='navtab'>
      <ul className='navtab__ul'>
        <li className='navtab__li'>
          <a className='navtab__a' href='#about-project'>О проекте</a>
        </li>
        <li className='navtab__li'>
          <a className='navtab__a' href='#techs'>Технологии</a>
        </li>
        <li className='navtab__li'>
          <a className='navtab__a' href='#about-me'>Студент</a>
        </li>
      </ul>
    </nav>
  );
}
