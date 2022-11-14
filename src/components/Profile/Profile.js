import React from 'react';
import './profile.css'
import { withRouter } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import {  useFormWithValidation } from '../FormValidator';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const { values, handleChange, isValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(values.username, values.email)
    }

    function handleLogOut(e) {
        e.preventDefault();
        props.onLogOut()
    }

    React.useEffect(() => {
        values.username = currentUser.name
        values.email = currentUser.email
    }, [currentUser])

    return(
        <div className='profile'>
            <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
            {/* <section className='profile__alert'>{{}}</section> */}
            <form className='profile__form' onSubmit={handleSubmit}>
                <fieldset className='profile__fieldset'>
                    <div className='profile__field'>
                        <label className='profile__input-name' htmlFor='name-input'>Имя</label>
                        <input
                            className='profile__input profile__input_type_name'
                            type='text'
                            name='username'
                            value={values.username}
                            onChange={handleChange}
                            defaultValue={currentUser.name}
                            id='name-input'
                            required
                        />
                    </div>
                    <div className='profile__field'>
                        <label className='profile__input-name' htmlFor='email-input'>E-mail</label>
                        <input
                            className='profile__input profile__input_type_email'
                            type='email'
                            value={values.email}
                            defaultValue={currentUser.email}
                            onChange={handleChange}
                            name='email'
                            id='email-input'
                            required
                        />
                    </div>
                </fieldset>
                <div className='profile__buttons'>
                    <button className='profile__button profile__button_edit' type='submit' disabled={!isValid || (values.email === currentUser.email && values.username === currentUser.name)}>Редактировать</button>
                    <button className='profile__button profile__button_exit' onClick={handleLogOut}>Выйти из аккаунта</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Profile);