import './movies-card.css'
import {movieCard} from '../../../utils/constants.js'

function MoviesCard() {
    return (
        <li className='movies-card'>
            <div className='movies-card__container'>
                <div className='movies-card__info'>
                    <h2 className='movies-card__title'>{movieCard.name}</h2>
                    <p className='movies-card__duration'>{movieCard.duration}</p>
                </div>
                <button className='movies-card__save-button' type='button' />
            </div>
            <img className='movies-card__image' src={movieCard.poster} alt='постер' />
        </li>
    )
}

export default MoviesCard;