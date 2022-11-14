import React from 'react';
import './movies-card.css'
import { addSavedMovie, removeSavedMovies } from '../../../utils/mainApi';
import { SavedMoviesContext } from '../../../context/SavedMoviesContext';

function MoviesCard(props) {
    const [saved, setSaved] = React.useState(false);
    const [innerId, setInnerId] = React.useState('')
    const savedMoviesList = React.useContext(SavedMoviesContext)
    const movieImgUrl = props.savedMovies ? props.movie.image : `https://api.nomoreparties.co/${props.movie.image.url}`;
    const saveButtonStyle =  saved ? 'movies-card__save-button movies-card__save-button-active' :'movies-card__save-button'

    function handleSaveMovie() {
        const movieObj = {
            country: props.movie.country,
            director: props.movie.director,
            duration: props.movie.duration,
            year: props.movie.year,
            description: props.movie.description,
            trailerLink: props.movie.trailerLink,
            nameRU: props.movie.nameRU,
            nameEN: props.movie.nameEN,
            image: movieImgUrl, 
            movieId: props.movie.id, 
            thumbnail: movieImgUrl
        }
        addSavedMovie(movieObj)
        .then((resp) => setInnerId(resp.data._id))
        setSaved(true)
    }

    async function handleDeleteMovie() {
       await removeSavedMovies(props.savedMovies ? props.movie._id : innerId)
       if (props.savedMovies) {
        props.movieUpdate(props.movie._id)
       }
       setSaved(false)
       setInnerId('')
    }

    function handleToggleSave() {
        saved ? handleDeleteMovie() : handleSaveMovie();
    }

    function toHoursAndMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}ч ${minutes}м`;
    }

    function handleTrailerRedirect () {
        window.location = props.movie.trailerLink
    }

    React.useEffect(()=> {
        if(savedMoviesList) {
          const isMovieSaved = savedMoviesList.find(({nameRU})=> nameRU === props.movie.nameRU)
          setInnerId(isMovieSaved?._id || '')
          setSaved(!!isMovieSaved)
        }
    }, [savedMoviesList, props.movie.nameRU])

    return (
        <li className='movies-card'>
            <div className='movies-card__container'>
                <div className='movies-card__info'>
                    <h2 className='movies-card__title'>{props.movie.nameRU}</h2>
                    <p className='movies-card__duration'>{toHoursAndMinutes(props.movie.duration)}</p>
                </div>
                { props.savedMovies ? 
                <button type='button' className='movies-card__delete-button' onClick={handleDeleteMovie} /> :
                <button type='button' className={saveButtonStyle} onClick={handleToggleSave} />
                }
            </div>
            <img className='movies-card__image' 
              src={movieImgUrl}
              onClick={handleTrailerRedirect}
              alt='постер' 
            />
        </li>
    )
}

export default MoviesCard;