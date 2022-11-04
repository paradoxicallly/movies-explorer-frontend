import './profile.css'
import { Link, withRouter } from 'react-router-dom';

function Profile() {
    return(
        <div className='profile'>
            <h1 className='profile__title'>Привет, Андрей!</h1>
            <form className='profile__form'>
                <fieldset className='profile__fieldset'>
                    <div className='profile__field'>
                        <label className='profile__input-name' htmlFor='name-input'>Имя</label>
                        <input
                            className='profile__input profile__input_type_name'
                            type='text'
                            name='profile-name'
                            id='name-input'
                            required
                        />
                    </div>
                    <div className='profile__field'>
                        <label className='profile__input-name' htmlFor='email-input'>E-mail</label>
                        <input
                            className='profile__input profile__input_type_email'
                            type='email'
                            name='profile-email'
                            id='email-input'
                            required
                        />
                    </div>
                </fieldset>
                <div className='profile__links'>
                    <Link className='profile__link profile__link_edit' to='#'>Редактировать</Link>
                    <Link className='profile__link profile__link_exit' to='#'>Выйти из аккаунта</Link>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Profile);