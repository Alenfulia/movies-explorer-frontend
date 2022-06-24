import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <>
    <SearchForm />
    <MoviesCardList />
    <button className='movie__btn-more'>Ещё</button>
    </>
  )
}

export default Movies;
