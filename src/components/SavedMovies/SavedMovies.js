import React from 'react';
import './savedMovies.css'
import MoviesCardList from '../SharedComponents/MoviesCardList/MoviesCardList';
import SearchForm from '../SharedComponents/SearchForm/SearchForm';
import { getSavedMovies } from '../../utils/mainApi';
import { handleFilterMovies } from '../../utils/moviesFilter';

function SavedMovies() {
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [filteredMovies, setFilteredMovies] = React.useState([]);

    const handleSearchMovie = (name, shortMovie) => {
        const movies = handleFilterMovies(name, shortMovie, savedMovies)
        if (name.length || shortMovie) { 
          setFilteredMovies(movies) 
        } else { 
          setFilteredMovies(savedMovies)
        }
    }

    const handleGetMovies = () => {
        getSavedMovies()
        .then(res => {
          setSavedMovies(res.data)
          setFilteredMovies(res.data)
        })
        .catch((err) => {
          console.log(err);
      });
    }

    const updateMoviesArray = (movieId) => {
      const arrayWithoutDeletedMovie = filteredMovies.filter(({_id}) => _id !== movieId)
      console.log(arrayWithoutDeletedMovie)
      setFilteredMovies(arrayWithoutDeletedMovie)
    }

    React.useEffect(() => {
        handleGetMovies()
    }, [])
    return (
        <div className='movies'>
            <div className='movies__search-box'>
                <SearchForm onSubmit={handleSearchMovie} />
            </div>
            <MoviesCardList moviesList={filteredMovies} savedMovies={true} movieUpdate={updateMoviesArray} />
        </div>
    )
}

export default SavedMovies;