import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({
  movie,
  onLike,
  userId,
  savedMovies,
  onDislike
}) => {


  const location = useLocation();

  const durationTime =`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`;

  const imageCover = location.pathname === '/saved-movies' ? movie.image : `https://api.nomoreparties.co${movie.image.url}`;
  const thumbnail = location.pathname === '/saved-movies' ? movie.thumbnail : `$https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;

  const isLiked = savedMovies.some((i) => i.movieId === movie.id);

  function handleLike () {
    if (isLiked) {
      onDislike(savedMovies.filter((i) =>
        i.movieId === movie.id)[0]);
    } else {
      onLike(movie);
    }
  }

  function handleDislike() {
    onDislike(movie)
  }

  return (
    <section className='movie-card'>
      <div className='movie-card__container'>
      {location.pathname === '/movies' && (
        <a
          className='movie-card__trailer-link'
          target={'_blank'}
          rel='noreferrer'
          href={movie.trailerLink}>
        <img
          className='movie-card__img'
          src={`${imageCover}`}
          alt={`Обложка фильма: ${thumbnail}`}
        />
        </a>
      )}
      {location.pathname === '/saved-movies' && (
        <a
          className='movie-card__trailer-link'
          target={'_blank'}
          rel='noreferrer'
          href={movie.trailerLink}>
        <img
          className='movie-card__img'
          src={`${movie.image}`}
          alt={`Обложка фильма: ${movie.nameRU}`}
        />
        </a>
      )}
      <div className='movie-card__info'>
        <h3 className='movie-card__title'>{movie.nameRU}</h3>
        {location.pathname === '/movies' && (
          <button
            className={`movie-card__like-btn ${isLiked && 'movie-card__like-btn__active' }`}
            type={'button'}
            onClick={handleLike}
            >{}
          </button>
        )}
        {location.pathname === '/saved-movies' && (
          <button
            className='movie-card__delete'
            type={'button'}
            onClick={handleDislike}
            >{}
          </button>
         )}
          <p className='movie-card__length'>{durationTime}</p>
        </div>
      </div>
    </section>
  )
}

export default MoviesCard;
