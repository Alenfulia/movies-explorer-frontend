import React from 'react';
import avatar from '../../images/about-me-avatar.jpg';
import './AboutMe.css';



const AboutMe = () => {
  return (
   <section className='about-me'>
     <h2 className='about-me__title'>Студент</h2>
     <div className='about-me__content'>
       <h3 className='about-me__subtitle'>Алёна</h3>
       <h4 className='about-me__text-subtitle'>Фронтенд-разработчик, 25 лет</h4>
       <p className='about-me__text'>
         Я родилась и живу в Туле, закончила факультет прикладной математики и компьютерных наук ТулГУ.
         Я люблю слушать музыку, а еще увлекаюсь бегом. Недавно начала кодить. С 2018 года работаю в Сбере.
         Хочу, после того, как закончу курсы по веб-разработке, сменить место работы и посвятить себя программированию.
       </p>
       <ul className='about-me__social-links'>
         <li className='about-me__social-item'>
           <a className='about-me__social-link' href='https://facebook.com/Alenfulia'>Facebook</a>
          </li>
         <li className='about-me__social-item'>
           <a className='about-me__social-link' href='https://github.com/Alenfulia'>Github</a>
         </li>
       </ul>
     </div>
     <div className='about-me__avatar'>
       <img className='about-me__img' src={avatar} alt='Фото разработчика' />
     </div>
   </section>
  )
}

export default AboutMe;
