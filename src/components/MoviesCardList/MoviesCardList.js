import React, { useCallback, useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';


const MoviesCardList = ({
  movies,
  onLike,
  onDislike,
  savedMovies,
  searchKeyword,
  noResults
}) => {

  const location = useLocation();
  const [currentCards, setCurrentCards] = useState(0);
  const [addCards, setAddCards] = useState(12);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [hiddenButton, setHiddenButton] = useState(false);


  const getCards = (windowSize) => {
    if (windowSize > 1200) {
      return { first: 12, extra: 3 };
    }
    else if (windowSize > 785) {
      return { first: 12, extra: 2 };
    }
    return { first: 12, extra: 1 };
  };

  const renderAddCards = useCallback(() => {
    const count = Math.min(movies.length, currentCards + addCards);
    const moreCards = movies.slice(currentCards, count);
    setMoviesToShow([...moviesToShow, ...moreCards]);
    setCurrentCards(count);
  }, [currentCards, addCards, movies, moviesToShow]);

  useEffect(() => {
    let windowSize = window.innerWidth;
    setAddCards(getCards(windowSize).extra);
    const count = Math.min(movies.length, getCards(windowSize).first);
    setMoviesToShow(movies.slice(0, count));
    setCurrentCards(count);
  }, [movies]);

  useEffect(() => {
    if ((currentCards > movies.length) || (currentCards === movies.length)) {
      setHiddenButton(true);
    }
  }, [currentCards, movies.length]);

  useEffect(() => {
    function handleResize() {
      setAddCards(getCards(window.innerWidth).extra);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderMovies = useCallback(() => {
    renderAddCards();
  }, [renderAddCards]);

    if(location.pathname === '/movies') {
      return (
        <section className='movies-list'>
        <ul className='movies-list__list'>
          {movies.length ? (
            moviesToShow.map((movie) =>
              <MoviesCard
                key={movie.id}
                movie={movie}
                onLike={onLike}
                onDislike={onDislike}
                savedMovies={savedMovies}
              />
            )
          ) : (
            <p className={`'movies-list__no-res'${searchKeyword &&
              'movies-list__no-res_active'}`}
              >По вашему запросу ничего не найдено
            </p>
          )
          }
        </ul>
        <button
          className={`movies-list__btn-more ${
            ((currentCards > movies.length) || (currentCards === movies.length)) &&
            'movies-list__btn-more_hidden'
          }`}
          type={'button'}
          onClick={renderMovies}
          >Ещё
        </button>
      </section>
      )
    } else if (location.pathname === '/saved-movies') {
      return (
        <section className='movies-list'>
          <ul className='movies-list__list'>
            {movies.length ? (
              moviesToShow.map((movie) =>
                <MoviesCard
                  key={movie._id}
                  movie={movie}
                  onLike={onLike}
                  onDislike={onDislike}
                  savedMovies={savedMovies}
                />
              )
            ) : (
              <p className={`'movies-list__no-res'${noResults &&
                'movies-list__no-res_active'}`}
                >По вашему запросу ничего не найдено
              </p>
            )}
          </ul>
        </section>
      )
    }
  }

export default MoviesCardList;
