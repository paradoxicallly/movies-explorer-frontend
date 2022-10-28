import './auth.css'
import logo from '../../images/logo.svg'
import { Link, withRouter } from 'react-router-dom';

function Register() {
    return(
        <div className='auth'>
            <Link to='/'><img className="auth__logo" src={logo} alt="логотип"/></Link>
            <h1 className='auth__title'>Добро пожаловать!</h1>
            <form className='auth__form'>
                <fieldset className='auth__fieldset'>
                    <label className='auth__input-name' htmlFor='name-input'>Имя</label>
                    <input
                        className='auth__input auth__input_type_name'
                        type='text'
                        name='auth-name'
                        id='name-input'
                        required
                    />
                    <label className='auth__input-name' htmlFor='email-input'>E-mail</label>
                    <input
                        className='auth__input auth__input_type_email'
                        type='email'
                        name='auth-email'
                        id='email-input'
                        required
                    />
                    <label className='auth__input-name' htmlFor='password-input'>Пароль</label>
                    <input
                        className='auth__input auth__input_type_password'
                        type='password'
                        name='auth-password'
                        id='password-input'
                        required
                    />
                </fieldset>
                <button className='auth__button' type='submit'>Зарегистрироваться</button>
                <p className='auth__login'>Уже зарегистрированы? <Link className="auth__link" to="/signin">Войти</Link></p>
            </form>
        </div>
    )
}

export default withRouter(Register);