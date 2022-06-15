import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavigationLoggedIn from '../NavigationLoggedIn/NavigationLoggedIn';

import './Header.css';

const Header = ({ loggedIn }) => {

  return (
    //  !loggedIn ? (
    //    <header className='header header-promo'>
    //      <Logo />
    //      <Navigation />
    //      </header>
    //  ) : (
      <header className='header header-login'>
        <Logo />
        <NavigationLoggedIn />
      </header>
    )
  //)
}

export default Header;
