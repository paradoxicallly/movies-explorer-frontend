import './movies-cardlist.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

    return (
        <ul className='movies-cardlist'>
            {props.moviesList.length &&  props.moviesList.map(movie => (
                <MoviesCard 
                  movie={movie}
                  key={movie.id || movie._id}
                  savedMovies={props.savedMovies}
                  movieUpdate={props.movieUpdate}
                />
            ))}
        </ul>
    )
}

export default MoviesCardList;