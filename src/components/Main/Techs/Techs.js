import './techs.css'

function Techs() {
    return (
        <section className='techs__section' id='tech'>
            <div className='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <h3 className='techs__subtitle'>7 технологий</h3>
            <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__container'>
                <li className='techs__list'>
                    <div className='techs__list-item'>
                        <p className='techs__list-name'>HTML</p>
                    </div>
                </li>
                <li className='techs__list'>
                    <div className='techs__list-item'>
                        <p className='techs__list-name'>CSS</p>
                    </div>
                </li>
                <li className='techs__list'>
                    <div className='techs__list-item'>
                        <p className='techs__list-name'>JS</p>
                    </div>
                </li>
                <li className='techs__list'>
                    <div className='techs__list-item'>
                        <p className='techs__list-name'>React</p>
                    </div>
                </li>
                <li className='techs__list'>
                    <div className='techs__list-item'>
                        <p className='techs__list-name'>Git</p>
                    </div>
                </li>
                <li className='techs__list'>
                    <div className='techs__list-item'>
                        <p className='techs__list-name'>Express.js</p>
                    </div>
                </li>
                <li className='techs__list'>
                    <div className='techs__list-item'>
                        <p className='techs__list-name'>mongoDB</p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    )
}

export default Techs;