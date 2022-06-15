import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-header.svg';

const Logo = () => {
  return (
    <Link to={'/'} className='logo__link'>
      <img src={logo} alt = 'Логотип'/>
    </Link>
  )
};

export default Logo;
