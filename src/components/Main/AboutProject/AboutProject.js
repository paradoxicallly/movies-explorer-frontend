import './aboutproject.css'

function AboutProject() {
    return (
        <section className="about" id="about">
            <h2 className="about__title">О проекте</h2>
            <div className='about__container'>
                <div className="about__container-info">
                    <h3 className="about__description">Дипломный проект включал 5 этапов</h3>
                    <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__container-info">
                    <h3 className="about__description">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__scale">
                <div className="about__scale-display about__scale-display_backend">
                    <p className='about__scale-title about__scale-title_backend'>1 неделя</p>
                </div>
                <div className="about__scale-display about__scale-display_frontend">
                    <p className='about__scale-title about__scale-title_frontend'>4 недели</p>
                </div>
            </div>
            <div className="about__scale-container">
                <div className="about__scale-description about__scale-description_backend">
                    <p className='about__scale-text'>Back-end</p>
                </div>
                <div className="about__scale-description about__scale-description_frontend">
                    <p className='about__scale-text'>Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;