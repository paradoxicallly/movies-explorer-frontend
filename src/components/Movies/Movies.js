import './movies.css'
import MoviesCardList from '../SharedComponents/MoviesCardList/MoviesCardList';
import SearchForm from '../SharedComponents/SearchForm/SearchForm';

function Movies() {
    return (
        <div className='movies'>
            <div className='movies__search-box'>
                <SearchForm />
            </div>
            <MoviesCardList />
        </div>
    )
}

export default Movies;