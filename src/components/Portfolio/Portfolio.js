import React from 'react';
import './Portfolio.css';
import portfolioLink from '../../images/portfolio-link.svg';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a className='portfolio__item-link' href='https://github.com/Alenfulia/how-to-learn'>
            Статичный сайт
            <img className='portfolio__link-img' src={portfolioLink} alt='Ссылка' />
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__item-link' href='https://github.com/Alenfulia/russian-travel'>
          Адаптивный сайт
          <img className='portfolio__link-img' src={portfolioLink} alt='Ссылка' />
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__item-link' href='https://github.com/Alenfulia/react-mesto-auth'>
          Одностраничное приложение
          <img className='portfolio__link-img' src={portfolioLink} alt='Ссылка' />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
