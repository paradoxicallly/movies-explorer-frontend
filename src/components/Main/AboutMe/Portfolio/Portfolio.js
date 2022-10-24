import './portfolio.css'
import portfolioLink from '../../../../images/portfolio-link.svg'

function Portfolio() {
    return (
        <div className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <div className='portfolio__link-container'>
                <a className='portfolio__link' href='#'>Статичный сайт</a>
                <a className='portfolio__link-image' href='#'>
                    <img className='portfolio__image' src={portfolioLink} alt='ссылка' />
                </a>
            </div>
        </div>
    )
}

export default Portfolio;