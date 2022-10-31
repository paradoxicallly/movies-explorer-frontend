import './search-form.css'

function SearchForm() {
    return (
        <form className='movies__search' required>
            <div className='movies__search-form'>
                <input className='movies__input' type='text' placeholder='Фильм' />
                <button className='movies__button' type='submit' />
            </div>
            <div className='movies__checkbox'>
                <label className='movies__search-checkbox'>
                    <input className='movies__checkbox-field' type='checkbox' />
                    <span className='movies__checkbox-switch' />
                </label>
                <p className='movies__checkbox-name'>Короткометражки</p>
            </div>
        </form>
    )
}

export default SearchForm;