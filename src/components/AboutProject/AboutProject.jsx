import './AboutProject.css';

export default function AboutProject() {
  return (
    <section id='about-project' className='about-project'>
      <h2 className='about-project__heading'>О проекте</h2>
      <div className='about-project__container'>
        <div className='about-project__container-part'>
          <p className='about-project__container-heading'>
            Дипломный проект включал 5 этапов
          </p>
          <p className='about-project__container-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__container-part'>
          <p className='about-project__container-heading'>
            На выполнение диплома ушло 5 недель
          </p>
          <p className='about-project__container-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__timing'>
        <p className='about-project__timing-left'>1 неделя</p>
        <p className='about-project__timing-right'>4 недели</p>
      </div>
      <div className='about-project__side'>
        <p className='about-project__back'>Back-end</p>
        <p className='about-project__front'>Front-end</p>
      </div>
    </section>
  );
}
