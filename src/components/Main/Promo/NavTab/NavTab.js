import './navtab.css'
import { HashLink as Link } from 'react-router-hash-link';

function NavTab() {
    return (
        <div className="navtab">
            <ul className='navtab__links'>
                <li><Link className="navtab__link" to="/#about" smooth>О проекте</Link></li>
                <li><Link className="navtab__link" to="/#tech" smooth>Технологии</Link></li>
                <li><Link className="navtab__link" to="/#about-me" smooth>Студент</Link></li>
            </ul>
        </div>
    )
}

export default NavTab;