import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './navigation.css'
import account from '../../../images/account.svg'

function Navigation() {
    const [active, setActive] = useState('header__nav-menu')

    const navToggle = () => {
        active === 'header__nav-menu' ? setActive('header__nav-menu header__nav-menu-active') : setActive('header__nav-menu')
    }

    return(
        <div className='navigation'>
            {window.location.pathname === "/" && (
                <nav className='header__links'>
                    <Link className="header__link" to="/signup">Регистрация</Link>
                    <Link className="header__link" to="/signup">
                      <button className='header__button' type='button'>Войти</button>
                    </Link>
                </nav>
            )}

            {(window.location.pathname === "/movies" || 
            window.location.pathname === "/saved-movies" ||
            window.location.pathname === "/profile" ) && (
                <div className='header__movies-navigation'>
                    <nav className={active}>
                        <ul className='header__movies-links'>
                            <li><Link className="header__movies-link header__movies-link_hidden" to="/">Главная</Link></li>
                            <li><Link className="header__movies-link" to="/movies">Фильмы</Link></li>
                            <li><Link className="header__movies-link" to="/saved-movies">Сохраненные фильмы</Link></li>
                            <li><Link className="header__profile-link" to="/profile">Аккаунт <img className='header__profile-icon' src={account} alt='иконка профиля'/></Link></li>
                        </ul>
                        <button onClick={navToggle} className='header__button-close' type='button' />
                    </nav>
                    <div className='header__nav-menu-close'>
                        <button onClick={navToggle} className='header__button-menu' />
                    </div>
                </div>
            )}
        </div>
    )
}

export default withRouter(Navigation);