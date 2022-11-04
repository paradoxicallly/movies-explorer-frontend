import { Link } from 'react-router-dom';
import './error.css'

function Error() {
    return (
        <div className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__message'>Страница не найдена</p>
            <Link className='error__link' to="/">Назад</Link>
        </div>
    )
}

export default Error;