import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavigationLoggedIn from '../NavigationLoggedIn/NavigationLoggedIn';

import './Header.css';

const Header = ({loggedIn}) => {

  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '/saved-movies' ||
  location.pathname === '/movies' || location.pathname === '/profile') {
    return (
      <header className={`header ${(!loggedIn)? 'header-promo': ''}`}>
        <Logo />
        <Navigation />
      </header>
    )
  } else if (location.pathname === '/' || location.pathname === '/saved-movies' ||
    location.pathname === '/movies' || location.pathname === '/profile') {
      return (
        <header className={`header ${(loggedIn)? 'header-login': ''}`}>
          <Logo />
          <NavigationLoggedIn />
        </header>
      )
  } else if (location.pathname === '/signup' || location.pathname === '/signin') {
    return (
      <header className='header header-auth'>
        <Logo />
      </header>
    )
  }
  return null
}

export default Header;
