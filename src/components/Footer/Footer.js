import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className='footer__copyright'>&copy; 2022</p>
        <ul className='footer__links'>
          <li className='footer__link-item'>
            <a className='footer__link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
          </li>
          <li className='footer__link-item'>
            <a className='footer__link' href='https://github.com/Alenfulia'>Github</a>
          </li>
          <li className='footer__link-item'>
            <a className='footer__link' href='https://facebook.com'>Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer;
