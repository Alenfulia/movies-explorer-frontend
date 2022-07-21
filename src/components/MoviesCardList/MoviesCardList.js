import React, { useCallback, useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';


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
  const [addCards, setAddCards] = useState(7);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [hiddenButton, setHiddenButton] = useState(false);

  const getCards = (windowSize) => {
    if (windowSize > 480) {
      return { first: 7, extra: 7 };
    }
    return { first: 5, extra: 1 };
  };

  const renderAddCards = useCallback(() => {
    const count = Math.min(movies.length, currentCards + addCards);
    const moreCards = movies.slice(currentCards, count);
    setMoviesToShow([...moviesToShow, ...moreCards]);
    setCurrentCards(count);
  }, [currentCards, addCards, movies, moviesToShow]);

  const resize = useCallback(() => {
    const windowSize = window.innerWidth;
    setAddCards(getCards(windowSize));
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [resize]);

  useEffect(() => {
    const windowSize = window.innerWidth;
    setAddCards(getCards(windowSize).extra);
    const count = Math.min(movies.length, getCards(windowSize).first);
    setMoviesToShow(movies.slice(0, count));
    setCurrentCards(count);
  }, [movies]);

  useEffect(() => {
    if ((currentCards > movies.length) || (currentCards === movies.length)) {
      setHiddenButton(true);
    }
  }, [currentCards]);

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
            hiddenButton && 'movies-list__btn-more_hidden'
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


    // return (
    //   <section className='movies-list'>
    //     <ul className='movies-list__list'>
    //       {location.pathname === '/movies' && movies.length ? (
    //         moviesToShow.map((movie) =>
    //           <MoviesCard
    //             key={movie.id}
    //             movie={movie}
    //             onLike={onLike}
    //             onDislike={onDislike}
    //             savedMovies={savedMovies}
    //           />
    //         )
    //       ) : (
    //         <p className={`'movies-list__no-res'${searchKeyword &&
    //           location.pathname === '/movies' &&
    //           'movies-list__no-res_active'}`}
    //           >По вашему запросу ничего не найдено
    //         </p>
    //       )
    //       }
    //       {location.pathname === '/saved-movies' && movies.length ? (
    //         moviesToShow.map((movie) =>
    //           <MoviesCard
    //             key={movie._id}
    //             movie={movie}
    //             onLike={onLike}
    //             onDislike={onDislike}
    //             savedMovies={savedMovies}
    //           />
    //         )
    //       ) : (
    //         <p className={`'movies-list__no-res'${noResults &&
    //           location.pathname === '/saved-movies' &&
    //           ' movies-list__no-res_active'}`}
    //           >По вашему
    //         </p>
    //       )}
    //     </ul>
    //     {location.pathname === '/movies' && (
    //       <button
    //         className={`movies-list__btn-more ${
    //           hiddenButton && 'movies-list__btn-more_hidden'
    //         }`}
    //         type={'button'}
    //         onClick={renderMovies}
    //         >Ещё
    //       </button>
    //     )}
    //   </section>
    // )
  }

export default MoviesCardList;
