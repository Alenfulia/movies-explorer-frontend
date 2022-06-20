import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
  return (
    <nav>
      <ul className='navigation__menu'>
        <li className='navigation__menu-link'>
          <Link to="/signup" className='navigation__link'>Регистрация</Link>
        </li>
        <li className='navigation__menu-link'>
          <button className='navigation__button'>
          <Link to="/signin" className='navigation__link-button'>Войти</Link>
          </button>
        </li>
      </ul>
    </nav>
  )
};

export default Navigation;
