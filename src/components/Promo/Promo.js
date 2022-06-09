import React from 'react';
import './Promo.css';
import promoBanner from '../../images/about-promo.jpg';

const Promo = () => {
  return (
    <section className='promo'>
      <div className='promo__banner'>
        <div className='promo__info'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__about'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className='promo__img' src={promoBanner}  alt='Баннер'/>
      </div>
      <button className='promo__button'>
        <a className='promo__link' href='#about-project'>Узнать больше</a>
      </button>
    </section>
  )
}
export default Promo;
