import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm';

import './SavedMovies.css';

const SavedMovies = () => {
  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList />
    </section>
  )
}

export default SavedMovies;
