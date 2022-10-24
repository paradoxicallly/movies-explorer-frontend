import './auth.css'

function Login() {
    return(
        <div className='auth'>
            <form className='auth__form'>
                <fieldset className='auth__fieldset'>
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
                <button className='auth__button auth__button_login' type='submit'>Войти</button>
                <p className='auth__login'>Ешё не зарегистрированы? <a className='auth__link' href='#'>Регистрация</a> </p>
            </form>
        </div>
    )
}

export default Login;