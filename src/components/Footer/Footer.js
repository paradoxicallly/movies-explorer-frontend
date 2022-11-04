import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__container'>
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                <div className='footer__links'>
                    <a className="footer__link" href="https://practicum.yandex.ru/" target="blank">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/paradoxicallly" target="blank">Github</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;