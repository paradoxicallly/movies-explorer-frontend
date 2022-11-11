import './header.css';
import logo from '../../images/logo.svg';
import { withRouter, Link } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

function Header(props) {
    const HeaderComponent = () => {
        return (
            <header className='header'>
                <Link to='/'><img className="header__logo" src={logo} alt="логотип"/></Link>
                <Navigation loggedIn={props.loggedIn} />
            </header>
        )
    }

    return (
        props.location.pathname !== '/signup' && props.location.pathname !== '/signin' ? <HeaderComponent /> : null
    )
    
}

export default withRouter(Header);
