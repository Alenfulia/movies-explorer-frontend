import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenuBurger.css';
import accountImg from '../../images/navigation-login-avatar.svg';

const NavigationMenuBurger = ({ open, close }) => {
  return (
    <div className={`${open && 'navigation-burger__overlay'}`} onClick={close}>
      <div className={`navigation-burger ${open && 'navigation-burger__open'}`}>
        <nav>
        <button className='navigation-burger__close' type='button' onClick={close} />
          <ul className='navigation-burger__menu'>
            <li className='navigation-burger__element'>
              <Link to='/' className='navigation-burger__link'>Главная</Link>
            </li>
            <li className='navigation-burger__element'>
              <Link to='/movies' className='navigation-burger__link'>Фильмы</Link>
            </li>
            <li className='navigation-burger__element'>
              <Link to='/saved-movies' className='navigation-burger__link'>Сохранённые фильмы</Link>
            </li>
            <li className='navigation-burger__element-account'>
              <Link to='/profile' className='navigation-burger__link' >Аккаунт</Link>
              <button className='navigation-burger__img-button'>
              <img className='navigation-burger__img' src={accountImg} alt='Иконка аккаунта' />
            </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  );
}

export default NavigationMenuBurger;
