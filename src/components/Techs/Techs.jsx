import './Techs.css';

export default function Techs() {
  return (
    <section id='techs' className='techs'>
      <h2 className='techs__heading'>Технологии</h2>
      <p className='techs__title'>7 технологий</p>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className='techs__list'>
        <li className='techs__line'>HTML</li>
        <li className='techs__line'>CSS</li>
        <li className='techs__line'>JS</li>
        <li className='techs__line'>React</li>
        <li className='techs__line'>Git</li>
        <li className='techs__line'>Express.js</li>
        <li className='techs__line'>mongoDB</li>
      </ul>
    </section>
  );
}
