import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-header.svg';

const Logo = ({className}) => {
  return (
    <Link to={'/'} className={className}>
      <img src={logo} alt = 'Логотип'/>
    </Link>
  )
};

export default Logo;
