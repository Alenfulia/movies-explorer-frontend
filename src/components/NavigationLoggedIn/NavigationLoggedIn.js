import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationLoggedIn.css';
import accountImg from '../../images/navigation-login-avatar.svg';

const NavigationLoggedIn = () => {
  return (
    <nav>
      <ul className='navigation-log__menu'>
        <li className='navigation-log__menu-link'>
        <Link to="/movies" className='navigation-log__link-films'>Фильмы</Link>
        </li>
        <li className='navigation-log__menu-link'>
        <Link to="/saved-movies" className='navigation-log__link-save-films'>Сохранённые фильмы</Link>
        </li>
        <li className='navigation-log__menu-link'>
        <Link to="/profile" className='navigation-log__link-account'>Аккаунт</Link>
          <button className='navigation-log__img-button'>
            <img className='navigation-log__img' src={accountImg} alt='Иконка аккаунта' />
          </button>
        </li>

      </ul>
    </nav>
  )
}

export default NavigationLoggedIn;
