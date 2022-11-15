import './search-form.css'
import { useRef, useEffect } from 'react'

function SearchForm(props) {
    const nameRef = useRef()
    const checkboxRef = useRef()

    function handleSearch(e) {
        e.preventDefault();
        if (props.saveLocal) {
            localStorage.setItem('searchOptions', JSON.stringify({nameRef: nameRef.current.value, checkboxRef: checkboxRef.current.checked}))
        }
        props.onSubmit(nameRef.current.value, checkboxRef.current.checked)
    }

    useEffect(() => {
        const searchOptions = JSON.parse(localStorage.getItem('searchOptions'))
        if(searchOptions && props.saveLocal) {
            nameRef.current.value = searchOptions.nameRef;
            checkboxRef.current.checked = searchOptions.checkboxRef;
        }
    })

    return (
        <form className='movies__search' required onSubmit={handleSearch}>
            <div className='movies__search-form'>
                <input 
                  className='movies__input' 
                  type='text' 
                  placeholder='Фильм'
                  ref={nameRef}
                  />
                <button className='movies__button' type='submit' />
            </div>
            <div className='movies__checkbox'>
                <label className='movies__search-checkbox'>
                    <input 
                      className='movies__checkbox-field' 
                      type='checkbox'
                      ref={checkboxRef}
                      />
                    <span className='movies__checkbox-switch' />
                </label>
                <p className='movies__checkbox-name'>Короткометражки</p>
            </div>
        </form>
    )
}

export default SearchForm;