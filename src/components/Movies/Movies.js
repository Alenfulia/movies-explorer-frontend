import React, { useEffect, useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { moviesApi } from '../../utils/MoviesApi';

import './Movies.css';

const Movies = ({
  isLoading,
  movies,
  savedMovies,
  onSubmit,
  onLike,
  onDislike,
  searchKeyword,
  setAllMovies
}) => {

  const [checkBoxActive, setCheckBoxActive] = useState(false);
  const [isShort, setIsShort] = useState(false);

  const checkBoxClick = () => {
    setCheckBoxActive(!checkBoxActive)
    localStorage.setItem('checkBox', !checkBoxActive)
  }

  useEffect(() => {
    const checkBoxLocal = localStorage.getItem('checkBox')
    if (checkBoxLocal === 'true') {
      setIsShort(isShort)
      setCheckBoxActive(true)
    }
  }, [])

  useEffect (() => {
    if (!localStorage.loadedMovies) {
      moviesApi
          .getMoviesAll()
          .then((data) => {
            setAllMovies(data);
            localStorage.setItem('loadedMovies', JSON.stringify(data));
          })
          .catch((err) => console.log(err));
    }
  }, [])

  const filterShortMovies = (filterMovies) =>
    filterMovies.filter((m) => m.duration < 40)

  return (
    <>
      <SearchForm
        onSubmit={onSubmit}
        checkBoxClick={checkBoxClick}
        searchKeyword={searchKeyword}
        isShort={checkBoxActive}
      />
      {isLoading && <Preloader />}
      {!isLoading && (
      <MoviesCardList
        movies={checkBoxActive ? filterShortMovies(movies) : movies}
        onLike={onLike}
        onDislike={onDislike}
        savedMovies={savedMovies}
        checkBox={checkBoxClick}
        searchKeyword={searchKeyword}
      />
      )}
    </>
  )
}

export default Movies;
