import './error.css'

function Error() {
    return (
        <div className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__message'>Страница не найдена</p>
            <a className='error__link' href='#'>Назад</a>
        </div>
    )
}

export default Error;