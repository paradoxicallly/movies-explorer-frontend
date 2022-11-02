import './portfolio.css'
import portfolioLink from '../../../../images/portfolio-link.svg'

function Portfolio() {
    return (
        <div className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__container'>
                <li className='portfolio__link-container'>
                    <a className='portfolio__link' href='https://github.com/paradoxicallly/how-to-learn' target="blank">Статичный сайт</a>
                    <a className='portfolio__link-image' href='https://github.com/paradoxicallly/how-to-learn' target="blank">
                        <img className='portfolio__image' src={portfolioLink} alt='ссылка' />
                    </a>
                </li>
                <li className='portfolio__link-container'>
                    <a className='portfolio__link' href='https://github.com/paradoxicallly/russian-travel' target="blank">Адаптивный сайт</a>
                    <a className='portfolio__link-image' href='https://github.com/paradoxicallly/russian-travel' target="blank">
                        <img className='portfolio__image' src={portfolioLink} alt='ссылка' />
                    </a>
                </li>
                <li className='portfolio__link-container'>
                    <a className='portfolio__link' href='https://github.com/paradoxicallly/react-mesto-api-full' target="blank">Одностраничное приложение</a>
                    <a className='portfolio__link-image' href='https://github.com/paradoxicallly/react-mesto-api-full' target="blank">
                        <img className='portfolio__image' src={portfolioLink} alt='ссылка' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Portfolio;