import './movies.css'
import MoviesCardList from '../SharedComponents/MoviesCardList/MoviesCardList';
import SearchForm from '../SharedComponents/SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { useState, useEffect } from 'react';
import { getAllMovies } from '../../utils/moviesApi';
import { getSavedMovies } from '../../utils/mainApi';
import { handleFilterMovies } from '../../utils/moviesFilter';
import { findMovieError, findMovieNoResult } from '../../utils/constants';
import { SavedMoviesContext } from "../../context/SavedMoviesContext";
import { useCurrentWidth } from '../../utils/windowResize';

function Movies() {
    const width = useCurrentWidth()
    const [isLoading, setIsLoading] = useState(false);
    const [moviesListCounter, setMoviesListCounter] = useState(12); // сколько будет показываться в самом начале
    const [moviesCounterStep, setMoviesCounterStep] = useState(3); // сколько будет добавляться по клику
    const [filteredMovieList, setFilteredMoviesList] = useState([]);
    const [countedMovieList, setCountedMovieList] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [notificationText, setNotificationText] = useState('')

    const handleSearchMovie = (name, shortMovie) => {
      setIsLoading(true)  
      getAllMovies()
      .then(res => {
        const movies = handleFilterMovies(name, shortMovie, res)
        localStorage.setItem('storageMovies', JSON.stringify(movies))
        if(!name.length || !movies.length) {
          setNotificationText(findMovieNoResult)
        }
        setFilteredMoviesList(movies)
      })
      .catch((err) => {
        setNotificationText(findMovieError)
        console.log(err);
      })
      .finally(() => setIsLoading(false))
    }

    const handleGetMovies = () => {
      getSavedMovies()
      .then(res => {
        setSavedMovies(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    }

    const handleShowMoreMovies = () => {
      setMoviesListCounter(moviesListCounter + moviesCounterStep)
    }

    useEffect(() => {
      const storageMovies = JSON.parse(localStorage.getItem('storageMovies'))
      if (storageMovies) {
        setFilteredMoviesList(storageMovies)
      }
    }, [])


    useEffect(() => {
      handleGetMovies()
      setMoviesListCounter(12)
    }, [])

    useEffect(() => {
      setCountedMovieList(filteredMovieList.slice(0, moviesListCounter))
    }, [filteredMovieList, moviesListCounter])

    useEffect(() => {
      if (width >= 1280) {
        setMoviesListCounter(12)
        setMoviesCounterStep(3)
      } else if (width < 1280 && width >= 768) {
        setMoviesListCounter(8)
        setMoviesCounterStep(2)
      } else if (width < 480 && width > 480) {
        setMoviesListCounter(5)
        setMoviesCounterStep(2)
      }
    }, [width])
    
    return (
        <div className='movies'>
          <SavedMoviesContext.Provider value={savedMovies}>
            <section className='movies__search-box'>
                <SearchForm onSubmit={handleSearchMovie} saveLocal/>
            </section>
            { isLoading ? 
              <section className='movies__search-button-container'> <Preloader/> </section> : 
              <MoviesCardList moviesList={countedMovieList} movieUpdate={handleGetMovies} savedMoviesList={savedMovies} savedMovies={false} /> 
            }
            { (filteredMovieList.length > 3 && filteredMovieList.length !== countedMovieList.length && !isLoading) && <section className='movies__search-button-container'>
              <button className='movies__search-button' type='button' onClick={handleShowMoreMovies}>Еще</button>
            </section> }
            {(!filteredMovieList.length && !isLoading) && <section className='movies_search-results'>{ notificationText }</section>}
          </SavedMoviesContext.Provider>
        </div>
    )
}

export default Movies;