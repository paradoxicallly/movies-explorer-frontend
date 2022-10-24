import './navtab.css'

function NavTab() {
    return (
        <div className="navtab">
            <ul className='navtab__links'>
                <li><a className="navtab__link" href="about-project">О проекте</a></li>
                <li><a className="navtab__link" href="#">Технологии</a></li>
                <li><a className="navtab__link" href="about-me">Студент</a></li>
            </ul>
        </div>
    )
}

export default NavTab;