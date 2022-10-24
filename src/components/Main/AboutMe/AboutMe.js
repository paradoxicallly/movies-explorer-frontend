import './about-me.css'
import myPhoto from '../../../images/avatar.png'
import Portfolio from './Portfolio/Portfolio';

function AboutMe() {
    return (
        <div className='about-me' id='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__container'>
                <div className='about-me__description'>
                    <h3 className='about-me__name'>Кира</h3>
                    <p className='about-me__work'>Фронтенд-разработчик, 33 года</p>
                    <p className='about-me__text'>Родилась в городе Пятигорске, закончила факультет социальной психологии МГППУ. 
                    Работаю в сфере hr, недавно стала обучаться разработке.</p>
                    <a className='about-me__link' href='https://github.com/paradoxicallly' target='blank'>Github</a>
                </div>
                <img className='about-me__photo' src={myPhoto} alt='фотография' />
            </div>
            <Portfolio />
        </div>
    )
}

export default AboutMe;