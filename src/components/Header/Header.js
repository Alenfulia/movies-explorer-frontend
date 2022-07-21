import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavigationLoggedIn from '../NavigationLoggedIn/NavigationLoggedIn';


import './Header.css';


const Header = ({ loggedIn }) => {

  return (
    <header className='header'>
      <Logo />
      {!loggedIn ? (
        <div className='header-promo'>
          <Navigation />
        </div>
      ) : (
        <div className='header-login'>
          <NavigationLoggedIn  />
        </div>
      )}
    </header>
  )
}

export default Header;
