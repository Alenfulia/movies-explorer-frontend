import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavigationLoggedIn from '../NavigationLoggedIn/NavigationLoggedIn';


import './Header.css';


const Header = ({ loggedIn }) => {

const className = `header ${!loggedIn ? 'header-promo' : 'header-login'}`

  return (
    <header className={className}>
      <Logo />
      {!loggedIn ? (
          <Navigation />
      ) : (
          <NavigationLoggedIn  />
      )}
    </header>
  )
}

export default Header;
