import React from 'react';
import logo from '../../images/logo-header.svg';

const Logo = () => {
  return (
    <a className='logo__link' href='https://yandex.ru/'>
      <img src={logo} alt = 'Логотип'/>
    </a>
  )
};

export default Logo;
