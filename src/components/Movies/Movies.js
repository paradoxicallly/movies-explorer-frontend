import './movies.css'
import MoviesCardList from '../SharedComponents/MoviesCardList/MoviesCardList';
import SearchForm from '../SharedComponents/SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { useState } from 'react';

function Movies() {
    const [downloadIsClicked, setDownloadIsClicked] = useState(false)

    const downloadAction = () => {
        setDownloadIsClicked(true)
    }
    
    return (
        <div className='movies'>
            <section className='movies__search-box'>
                <SearchForm />
            </section>
            <MoviesCardList />
            <section className='movies__search-button-container'>
               {downloadIsClicked
                ? <Preloader />
                : <button onClick={downloadAction} className='movies__search-button' type='button'>Еще</button>
               }
            </section>
        </div>
    )
}

export default Movies;