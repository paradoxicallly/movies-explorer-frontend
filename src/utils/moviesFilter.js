export const handleFilterMovies = (name, shortMovie, moviesList) => {
    const filteredMovies = moviesList.filter(({nameRU, nameEN}) => {
        return (nameRU.toUpperCase().includes(name.toUpperCase())  
        || nameEN.toUpperCase().includes(name.toUpperCase()))
    })
    return shortMovie ? filteredMovies.filter(({duration}) => duration <= 40) : filteredMovies
}
