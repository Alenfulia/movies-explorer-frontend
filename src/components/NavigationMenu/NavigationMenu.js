import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenuIcon from '../../images/header-burger.svg';
import './NavigationMenu.css';

const NavigationMenu = () => {
  return (
    <nav className='navigation-burger'>
      <img className='navigation-burger__icon' src={BurgerMenuIcon} alt='Меню' />
        <ul className='navigation-burger__menu'>
          <li className='navigation-burger__element'>
            <Link to="/movies" className='navigation-burger__link-films'>Фильмы</Link>
          </li>
          <li className='navigation-burger__element'>
            <Link to="/saved-movies" className='navigation-burger__link-films'>Сохранённые фильмы</Link>
          </li>
          <li className='navigation-burger__element'>
            <Link to="/profile" className='navigation-burger__link-films'>Аккаунт</Link>
          </li>
        </ul>
    </nav>
  );
}

export default NavigationMenu;
