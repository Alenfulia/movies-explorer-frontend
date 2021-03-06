import React from 'react';
import {useLocation} from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({ movie }) => {

  const { title, imgMovie, duration, isLiked } = movie;
  const durationTime =`${Math.floor(duration / 60)}ч ${duration % 60}м`;
  // Переменная для класса кнопки лайка
  const cardLikeButtonClassName = `movie-card__like-btn ${isLiked && 'movie-card__like-btn__active' }`
  const location = useLocation();

  return (
    <section className='movie-card'>
      <div className='movie-card__container'>
        <img className='movie-card__img' src = {imgMovie} alt={title} />
        <div className='movie-card__info'>
          <h3 className='movie-card__title'>{title}</h3>
          {location.pathname === '/saved-movies' ?
            <button className='movie-card__delete'></button>:
            <button className={cardLikeButtonClassName}></button>
          }
          <p className='movie-card__length'>{durationTime}</p>
        </div>
      </div>
    </section>
  )
}

export default MoviesCard;
