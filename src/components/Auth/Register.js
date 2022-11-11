import React from 'react';
import './auth.css'
import logo from '../../images/logo.svg'
import { Link, withRouter } from 'react-router-dom';
import { useFormWithValidation } from '../FormValidator';

function Register(props) {
    const { values, handleChange, isValid, resetForm, errors } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(values.username, values, values.email, values.password)
        resetForm()
    }
    return(
        <div className='auth'>
            <Link to='/'><img className="auth__logo" src={logo} alt="логотип"/></Link>
            <h1 className='auth__title'>Добро пожаловать!</h1>
            <form className='auth__form' onSubmit={handleSubmit}>
                <fieldset className='auth__fieldset'>
                    <label className='auth__input-name' htmlFor='name-input'>Имя</label>
                    <input
                        className='auth__input auth__input_type_name'
                        type='text'
                        value={values.username}
                        defaultValue=''
                        onChange={handleChange}
                        pattern="[a-zA-Zа-яА-Я-_\s]+"
                        name='username'
                        id='name-input'
                        required
                    />
                    {errors.username && <span className='auth__input-error-field'>{errors.username}</span>}
                    <label className='auth__input-name' htmlFor='email-input'>E-mail</label>
                    <input
                        className='auth__input auth__input_type_email'
                        type='email'
                        name='email'
                        id='email-input'
                        onChange={handleChange}
                        value={values.email}
                        defaultValue=''
                        required
                    />
                    {errors.email && <span className='auth__input-error-field'>{errors.email}</span>}
                    <label className='auth__input-name' htmlFor='password-input'>Пароль</label>
                    <input
                        className='auth__input auth__input_type_password'
                        type='password'
                        name='password'
                        id='password-input'
                        onChange={handleChange}
                        value={values.password}
                        defaultValue=''
                        required
                    />
                    {errors.password && <span className='auth__input-error-field'>{errors.password}</span>}
                </fieldset>
                <button className='auth__button' type='submit' disabled={!isValid}>Зарегистрироваться</button>
                <p className='auth__login'>Уже зарегистрированы? <Link className="auth__link" to="/signin">Войти</Link></p>
            </form>
        </div>
    )
}

export default withRouter(Register);